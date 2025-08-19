import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, whatsapp } = await request.json();

    // Send thank you email to the subscriber
    await resend.emails.send({
      from: "NoirThreads.com <noreply@noirthreads.com>", // Replace with your verified domain
      to: [email],
      subject: "Welcome to NoirThreads - Coming Soon!",
      html: `
        <p>Hi ${firstName || "there"},</p>
        <p>Thank you for your interest in NoirThreads! We're excited to have you on board.</p>
        <p>We'll notify you as soon as we launch. Stay tuned for exclusive updates and early access.</p>
        <p>Best regards,</p>
        <p>The NoirThreads Team</p>
      `,
    });

    // Send notification email to noirthreads@hotmail.com with subscriber details
    await resend.emails.send({
      from: "NoirThreads Website <noreply@noirthreads.com>", // Replace with your verified domain
      to: ["noirthreads@hotmail.com"],
      subject: "New Subscriber Alert!",
      html: `
        <p>A new subscriber has joined the NoirThreads coming soon list:</p>
        <ul>
          <li><strong>First Name:</strong> ${firstName || "N/A"}</li>
          <li><strong>Last Name:</strong> ${lastName || "N/A"}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp || "N/A"}</li>
        </ul>
      `,
    });

    return new Response(JSON.stringify({ message: "Emails sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
