"use server"
import { connectDB } from "@/lib/mongodb";
import Farmer from "@/(models)/Farmer";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import bcrypt from "bcryptjs";
import { revalidatePath } from 'next/cache';
import Contact from "@/(models)/Contact";

export async function findContacts() {
    try {
        await connectDB();

        const contacts = await Contact.find();
        return contacts;

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleContact(id: String) {

    try {
        await connectDB();

        // Find user and farmer with associated emails
        const contact = await Contact.findOne({ _id: id });
        return contact;
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function createContact(values: any) {
    try {
        await connectDB();

        await Contact.create(values);


    } catch (error) {
        console.log(error)
        return error
    }
};