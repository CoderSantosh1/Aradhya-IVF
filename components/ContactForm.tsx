"use client";

import { useActionState, useState, type FormEvent } from "react";
import { submitContact } from "@/app/actions";
import { contactFields, initialFormState, readForm, validateContact, type FieldErrors } from "@/lib/validation";
import { Checkbox, FormStatus, TextArea, TextField } from "./FormFields";
import { ArrowRight, FileText, Mail, Pencil, Phone, User } from "./icons";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialFormState);
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);
  const errors = clientErrors ?? state.errors ?? {};
  const v = state.status === "error" ? (state.values ?? {}) : {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const found = validateContact(readForm(new FormData(e.currentTarget), contactFields));
    if (Object.keys(found).length) {
      e.preventDefault();
      setClientErrors(found);
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
    } else {
      setClientErrors(null);
    }
  };

  // Clear a field's error as soon as the user edits it.
  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name;
    if (errors[name]) setClientErrors({ ...errors, [name]: "" });
  };

  return (
    <form action={formAction} onSubmit={onSubmit} onChange={onChange} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <TextField label="Full Name" name="fullName" required icon={User} placeholder="e.g. James Wilson" autoComplete="name" defaultValue={v.fullName} error={errors.fullName} />
        <TextField label="Your Email" name="email" type="email" required icon={Mail} placeholder="e.g. hello@domain.com" autoComplete="email" defaultValue={v.email} error={errors.email} />
        <TextField label="Your Phone" name="phone" type="tel" required icon={Phone} placeholder="e.g. +1 234 567 8900" autoComplete="tel" defaultValue={v.phone} error={errors.phone} />
        <TextField label="Subject" name="subject" required icon={FileText} placeholder="e.g. IVF Consultation" defaultValue={v.subject} error={errors.subject} />
      </div>
      <TextArea label="Message" name="message" required icon={Pencil} placeholder="Write your message here..." defaultValue={v.message} error={errors.message} />
      <Checkbox name="terms" error={errors.terms} defaultChecked={v.terms === "on"}>
        I have read and accepted the terms and privacy policy.
      </Checkbox>
      <FormStatus status={state.status} message={state.message} />
      <button
        type="submit"
        disabled={pending}
        className="btn-shine group inline-flex min-w-[262px] items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-primary to-[#d23c6d] px-8 py-4 font-sans text-[18px] font-medium text-white shadow-[0_12px_30px_-12px_rgb(180_43_85/0.8)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? (
          <>
            <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
          </>
        ) : (
          <>
            Send Message <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
