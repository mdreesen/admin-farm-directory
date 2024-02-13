import Users from '@/app/(models)/User';
import { NextResponse } from 'next/server';


// Get All Users
export async function GET() {
    try {
        const user = await Users.find();

        return NextResponse.json({ user }, { status: 200 });

    } catch(error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};