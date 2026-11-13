"use server";

import {
  appointmentFields,
  contactFields,
  localISODate,
  readForm,
  validateAppointment,
  validateContact,
  type FormState,
} from "@/utils/validation";

/*
 * These actions validate on the server and return a typed result.
 * Hook them up to email / CRM delivery (e.g. Resend, a database, HubSpot) where
 * the TODOs are — nothing is persisted yet.
 */

export async function submitContact(_prev: FormState, data: FormData): Promise<FormState> {
  const values = readForm(data, contactFields);
  const errors = validateContact(values);
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values };
  }
  // TODO: deliver the enquiry (email / CRM).
  return {
    status: "success",
    message: `Thank you, ${values.fullName.split(" ")[0]}! Our team will get back to you within 24 hours.`,
  };
}

export async function submitAppointment(_prev: FormState, data: FormData): Promise<FormState> {
  const values = readForm(data, appointmentFields);
  // Allow "yesterday" to absorb time-zone differences between the visitor and the server.
  const yesterday = localISODate(new Date(Date.now() - 86_400_000));
  const errors = validateAppointment(values, yesterday);
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please correct the highlighted fields.", errors, values };
  }
  // TODO: create the booking in the clinic's scheduling system.
  return {
    status: "success",
    message: `Thank you, ${values.fullName.split(" ")[0]}! Your ${values.type.toLowerCase()} request for ${values.date} at ${values.time} has been received. We'll call you to confirm.`,
  };
}
