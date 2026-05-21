import type { ContactFormData } from "./validation";

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  // TODO: integrate with Resend or a form provider using CONTACT_EMAIL env var
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: process.env.CONTACT_EMAIL, ... });
  console.log("Contact form submission:", data);
}
