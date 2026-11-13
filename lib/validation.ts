/** Validation shared by the client (instant feedback) and the server actions (source of truth). */

export type FieldErrors = Record<string, string>;

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: FieldErrors;
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{8,18}$/;

export const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];
export const consultationTypes = ["In-clinic Consultation", "Video Consultation", "Second Opinion", "Follow-up Visit"];

const str = (v: FormDataEntryValue | null | undefined) => (typeof v === "string" ? v.trim() : "");

export function readForm(data: FormData, fields: string[]) {
  return Object.fromEntries(fields.map((f) => [f, str(data.get(f))])) as Record<string, string>;
}

function common(v: Record<string, string>): FieldErrors {
  const e: FieldErrors = {};
  if (v.fullName.length < 2) e.fullName = "Please enter your full name.";
  else if (v.fullName.length > 80) e.fullName = "Name is too long.";
  if (!EMAIL.test(v.email)) e.email = "Please enter a valid email address.";
  if (!PHONE.test(v.phone)) e.phone = "Please enter a valid phone number.";
  return e;
}

export const contactFields = ["fullName", "email", "phone", "subject", "message", "terms"];

export function validateContact(v: Record<string, string>): FieldErrors {
  const e = common(v);
  if (v.subject.length < 3) e.subject = "Please add a subject.";
  if (v.message.length < 10) e.message = "Message should be at least 10 characters.";
  else if (v.message.length > 2000) e.message = "Message is too long (max 2000 characters).";
  if (v.terms !== "on") e.terms = "Please accept the terms and privacy policy.";
  return e;
}

export const appointmentFields = ["fullName", "email", "phone", "date", "time", "type", "message"];

/** `today` is YYYY-MM-DD in the user's/server's local time. */
export function validateAppointment(v: Record<string, string>, today: string): FieldErrors {
  const e = common(v);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.date)) e.date = "Please choose a preferred date.";
  else if (v.date < today) e.date = "Please choose today or a future date.";
  if (!timeSlots.includes(v.time)) e.time = "Please select a time slot.";
  if (!consultationTypes.includes(v.type)) e.type = "Please select a consultation type.";
  if (v.message.length > 1000) e.message = "Message is too long (max 1000 characters).";
  return e;
}

export function localISODate(d = new Date()) {
  const tz = d.getTimezoneOffset() * 60_000;
  return new Date(d.getTime() - tz).toISOString().slice(0, 10);
}
