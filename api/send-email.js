import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    // Ensure body parsing is working
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "Invalid request body" });
    }

    const { name, email, message, phone, location} = req.body;

    // Environment variable check (Debugging purpose)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
        return res.status(500).json({ message: "Server email configuration error" });
    }

    // Nodemailer transporter setup
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Message",
            text: `Name: ${name}\nEmail: ${email}\nPhone:${phone}\nLocation:${location}\nMessage: ${message}`
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
}
