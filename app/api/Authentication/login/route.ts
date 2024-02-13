import User from "@/app/(models)/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body.formData;

        //check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        //check if password is correct
        const validPassword = await bcryptjs.compare
            (password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: "Invlid password" }, { status: 400 })
        }

        //create token data
        // A JavaScript object (tokenData) is created to store essential user 
        // information. In this case, it includes the user's unique identifier (id), 
        // username, and email.

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            isFarmer: user.isFarmer,
            isAdmin: user.isAdmin
        }

        // Create a token with expiration of 1 day
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

        // Create a JSON response indicating successful login
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            email: user.email,
            isFarmer: user.isFarmer,
            isAdmin: user.isAdmin
        });

        // Set the token as an HTTP-only cookie
        response.cookies.set(`${process.env.COOKIE_KEY}`, token, {
            httpOnly: true,
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}