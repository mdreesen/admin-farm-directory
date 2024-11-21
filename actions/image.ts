"use server"
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import Farmer from "@/(models)/Farmer";
import { utapi } from "@/lib/utapi";

export async function imageRemove(values: any) {
    const { imageKey, image, email } = values;

    try {
        await connectDB();

        const user = await Farmer.findOneAndUpdate({ email: email }, {
            image: {}
        });
        const imageFile = await utapi.deleteFiles(imageKey);

        return { success: true };

    } catch (e) {
        console.log(e)
        return e
    }
};