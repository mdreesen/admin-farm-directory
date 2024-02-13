import Contact from '@/app/(models)/Contact';
import { NextResponse } from 'next/server';


// Creating Message
export async function POST(req: any) {
    try {
        const body = await req.json();
        const data = body.formData;
        await Contact.create(data);

        return NextResponse.json({ message: "Message Created And Sent" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
};