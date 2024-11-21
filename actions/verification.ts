"use server"
import nodemailer from "nodemailer";
import { nanoid } from "nanoid";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";

// https://www.youtube.com/watch?v=vAfUyKpWj_M

export const verification = async (values: any) => {
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
        <p>Please verify your email.</p>
        <a href="${process.env.DOMAIN}/authentication/verification/${token}">Click here to verify your email</a>
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
            subject: "Verify your email", // Subject line
            text: "Verify your email", // plain text body
            html: htmlBody, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log(`Updating ${email} with ${token}`)
        await User.findOneAndUpdate({ email: email }, { verified_farmer_token: token });

    } catch (e) {
        console.log(e);
    }
}