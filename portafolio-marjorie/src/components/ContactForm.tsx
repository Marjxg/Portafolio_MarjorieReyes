"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { contactInfo } from "@/data/contact";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "error" | "opening" | "opened";

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Ingresa tu nombre.";

  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (!values.subject.trim()) errors.subject = "Ingresa un asunto.";

  if (!values.message.trim()) {
    errors.message = "Escribe tu mensaje.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres.`;
  }

  return errors;
}

type FormFieldProps = {
  id: keyof FormValues;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  placeholder: string;
  value: string;
  error?: string;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

// Campo de formulario reutilizado internamente por ContactForm:
// asocia label + input/textarea + mensaje de error de forma accesible.
function FormField({
  id,
  label,
  type = "text",
  as = "input",
  placeholder,
  value,
  error,
  autoComplete,
  onChange,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const baseClassName = `w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 ${
    error ? "border-rose-400/60" : "border-white/10 focus:border-white/25"
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${baseClassName} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={baseClassName}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(field: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (status === "error" || status === "opened") setStatus("idle");
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("opening");

    // ─────────────────────────────────────────────────────────────
    // INTEGRACIÓN FUTURA: reemplaza este bloque por una llamada real
    // a un servicio de envío de correo (Resend, EmailJS, Formspree)
    // o a una API Route de Next.js (por ejemplo, POST /api/contact).
    // Por ahora, se abre el cliente de correo del usuario con los
    // datos del formulario prellenados mediante un enlace "mailto:".
    // ─────────────────────────────────────────────────────────────
    const mailBody = `Nombre: ${values.name}\nCorreo: ${values.email}\n\n${values.message}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus("opened");
    }, 400);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Nombre"
          placeholder="Tu nombre completo"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange("name")}
        />
        <FormField
          id="email"
          label="Correo electrónico"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange("email")}
        />
      </div>

      <div className="mt-5">
        <FormField
          id="subject"
          label="Asunto"
          placeholder="Sobre qué te gustaría conversar"
          value={values.subject}
          error={errors.subject}
          onChange={handleChange("subject")}
        />
      </div>

      <div className="mt-5">
        <FormField
          id="message"
          label="Mensaje"
          as="textarea"
          placeholder="Cuéntame brevemente sobre la oportunidad o el proyecto…"
          value={values.message}
          error={errors.message}
          onChange={handleChange("message")}
        />
      </div>

      {/* Región accesible para el estado del formulario */}
      <div role="status" aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
        {status === "error" && (
          <p className="flex items-center gap-1.5 text-rose-300">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            Revisa los campos marcados antes de continuar.
          </p>
        )}
        {status === "opened" && (
          <p className="flex items-center gap-1.5 text-emerald-300">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Se abrió tu cliente de correo con el mensaje listo para enviar.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "opening"}
        className="group relative mt-2 inline-flex items-center gap-2 rounded-full p-[1px] transition-transform duration-300 motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />
        <span className="relative flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-zinc-950/85">
          <Send className="h-4 w-4" aria-hidden="true" />
          {status === "opening" ? "Abriendo tu correo…" : "Enviar mensaje"}
        </span>
      </button>
    </form>
  );
}