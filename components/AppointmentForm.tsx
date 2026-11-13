"use client";

import { useActionState, useState, useSyncExternalStore, type FormEvent } from "react";
import { submitAppointment } from "@/app/actions";
import {
  appointmentFields,
  consultationTypes,
  initialFormState,
  localISODate,
  readForm,
  timeSlots,
  validateAppointment,
  type FieldErrors,
} from "@/lib/validation";
import { FormStatus, SelectField, TextArea, TextField } from "./FormFields";

const noopSubscribe = () => () => {};

export default function AppointmentForm() {
  const [state, formAction, pending] = useActionState(submitAppointment, initialFormState);
  const [clientErrors, setClientErrors] = useState<FieldErrors | null>(null);
  // "Today" is only known in the browser: the server snapshot is undefined, so
  // hydration matches and the client fills in the date right after.
  const today = useSyncExternalStore(noopSubscribe, localISODate, () => undefined);

  const errors = clientErrors ?? state.errors ?? {};
  const v = state.status === "error" ? (state.values ?? {}) : {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const found = validateAppointment(readForm(new FormData(e.currentTarget), appointmentFields), today ?? localISODate());
    if (Object.keys(found).length) {
      e.preventDefault();
      setClientErrors(found);
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
    } else {
      setClientErrors(null);
    }
  };

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const name = (e.target as HTMLInputElement).name;
    if (errors[name]) setClientErrors({ ...errors, [name]: "" });
  };

  return (
    <form action={formAction} onSubmit={onSubmit} onChange={onChange} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
        <TextField label="Full Name" name="fullName" required placeholder="e.g. Priya Sharma" autoComplete="name" defaultValue={v.fullName} error={errors.fullName} />
        <TextField label="Email Address" name="email" type="email" required placeholder="e.g. priya@example.com" autoComplete="email" defaultValue={v.email} error={errors.email} />
        <TextField label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 3222" autoComplete="tel" defaultValue={v.phone} error={errors.phone} />
        <TextField label="Preferred Date" name="date" type="date" required min={today} defaultValue={v.date} error={errors.date} />
        <SelectField label="Preferred Time" name="time" required options={timeSlots} placeholder="Select Time" defaultValue={v.time ?? ""} error={errors.time} />
        <SelectField label="Consultation Type" name="type" required options={consultationTypes} placeholder="Select Type" defaultValue={v.type ?? ""} error={errors.type} />
      </div>
      <TextArea label="Message (Optional)" name="message" placeholder="Please share any specific concern or question..." defaultValue={v.message} error={errors.message} />
      <FormStatus status={state.status} message={state.message} />
      <button
        type="submit"
        disabled={pending}
        className="btn-shine flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-primary to-[#c9356a] py-4 font-sans text-[20px] font-medium text-white shadow-[0_12px_30px_-12px_rgb(180_43_85/0.8)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? (
          <>
            <span className="size-5 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Booking…
          </>
        ) : (
          "Book Appointment"
        )}
      </button>
    </form>
  );
}
