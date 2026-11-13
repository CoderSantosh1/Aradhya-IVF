"use client";

import type { ComponentType, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Check, ChevronDown } from "./icons";

type Common = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  icon?: ComponentType<{ size?: number; className?: string }>;
};

const fieldBase =
  "w-full rounded-lg border bg-white/70 font-sans text-[16px] text-ink placeholder:text-muted/70 outline-none transition-all duration-300 focus:bg-white focus:shadow-[0_0_0_4px_rgb(180_43_85/0.12)]";

const borderFor = (error?: string) => (error ? "border-primary/70" : "border-primary/20 focus:border-primary/60");

function Label({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-serif text-[17px] text-ink">
      {label}
      {required && <span className="ml-1 text-primary">*</span>}
    </label>
  );
}

function ErrorText({ id, error }: { id: string; error?: string }) {
  return (
    <p id={id} role={error ? "alert" : undefined} className={`overflow-hidden font-sans text-sm text-primary transition-all duration-300 ${error ? "mt-1.5 max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
      {error}
    </p>
  );
}

export function TextField({ label, name, error, required, icon: Icon, className, ...rest }: Common & InputHTMLAttributes<HTMLInputElement>) {
  const id = `f-${name}`;
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={required} />
      <div className="relative">
        {Icon && <Icon size={22} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />}
        <input
          id={id}
          name={name}
          aria-invalid={!!error}
          aria-describedby={`${id}-err`}
          aria-required={required}
          className={`${fieldBase} ${borderFor(error)} h-[56px] ${Icon ? "pl-14" : "pl-4"} pr-4`}
          {...rest}
        />
      </div>
      <ErrorText id={`${id}-err`} error={error} />
    </div>
  );
}

export function TextArea({ label, name, error, required, icon: Icon, className, ...rest }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = `f-${name}`;
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={required} />
      <div className="relative">
        {Icon && <Icon size={22} className="pointer-events-none absolute left-4 top-4 text-muted" />}
        <textarea
          id={id}
          name={name}
          rows={4}
          aria-invalid={!!error}
          aria-describedby={`${id}-err`}
          aria-required={required}
          className={`${fieldBase} ${borderFor(error)} min-h-[120px] resize-y py-3.5 ${Icon ? "pl-14" : "pl-4"} pr-4`}
          {...rest}
        />
      </div>
      <ErrorText id={`${id}-err`} error={error} />
    </div>
  );
}

export function SelectField({
  label,
  name,
  error,
  required,
  options,
  placeholder,
  className,
  ...rest
}: Common & SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder: string }) {
  const id = `f-${name}`;
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={required} />
      <div className="relative">
        <select
          id={id}
          name={name}
          aria-invalid={!!error}
          aria-describedby={`${id}-err`}
          aria-required={required}
          className={`${fieldBase} ${borderFor(error)} h-[56px] cursor-pointer appearance-none pl-4 pr-12`}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={20} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink" />
      </div>
      <ErrorText id={`${id}-err`} error={error} />
    </div>
  );
}

export function Checkbox({ name, error, children, defaultChecked }: { name: string; error?: string; children: ReactNode; defaultChecked?: boolean }) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="group flex cursor-pointer items-start gap-3 font-sans text-[16px] text-muted">
        <input id={id} name={name} type="checkbox" defaultChecked={defaultChecked} aria-invalid={!!error} aria-describedby={`${id}-err`} className="peer sr-only" />
        <span
          className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 bg-white text-transparent transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-primary/20 ${
            error ? "border-primary" : "border-muted/50 group-hover:border-primary/60"
          }`}
          aria-hidden
        >
          <Check size={15} strokeWidth={3} />
        </span>
        <span>{children}</span>
      </label>
      <ErrorText id={`${id}-err`} error={error} />
    </div>
  );
}

export function FormStatus({ status, message }: { status: string; message?: string }) {
  if (status === "idle" || !message) return null;
  const ok = status === "success";
  return (
    <div
      role="status"
      className={`flex animate-[lightbox-in_0.5s_ease] items-start gap-3 rounded-xl border px-4 py-3.5 font-sans text-[15.5px] ${
        ok ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-primary/30 bg-primary-soft/40 text-primary"
      }`}
    >
      <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-white ${ok ? "bg-emerald-500" : "bg-primary"}`}>
        {ok ? <Check size={14} strokeWidth={3} /> : <span className="font-bold leading-none">!</span>}
      </span>
      {message}
    </div>
  );
}
