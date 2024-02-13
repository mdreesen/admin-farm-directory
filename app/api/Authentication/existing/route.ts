import User from '@/app/(models)/User';
import { NextResponse } from 'next/server';

// Creating user during signup
export async function POST(req: any) {
    try {
        const body = await req.json();
        const { email } = body.formData;

        const user = await User.findOne({ email }).select('_id');

        return NextResponse.json({ user }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};