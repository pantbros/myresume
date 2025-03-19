import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

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
            to: "your-email@example.com", // Replace with your email
            subject: "New Contact Form Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
}
