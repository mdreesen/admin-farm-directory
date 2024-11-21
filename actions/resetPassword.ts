"use server"
import nodemailer from "nodemailer";
import { nanoid } from "nanoid";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";

// https://www.youtube.com/watch?v=vAfUyKpWj_M

export const resetPassword = async (values: any) => {
    const { email } = values;

    // Nanoid creates a unique string
    const token = nanoid(32);

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
    });

    const htmlBody = `
    <div>
        <h1>Welcome to The Farm Directory</h1>
        <a href="${process.env.DOMAIN}/authentication/reset-password/${token}">Click here to reset password</a>
    </div>
    `;

    try {
        await connectDB();
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return {
                error: 'Email not found'
            }
        }

        const info = await transporter.sendMail({
            from: 'NoReply@thefarmdirectory.com', // sender address
            to: email, // list of receivers
            subject: "Reset your password", // Subject line
            text: "Reset your password", // plain text body
            html: htmlBody, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log(`Updating ${email} with ${token}`)
        await User.findOneAndUpdate({ email: email }, { resetPasswordToken: token })

    } catch (e) {
        console.log(e);
    }
}