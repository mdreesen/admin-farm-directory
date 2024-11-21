import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const contactSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        phone_number: String,
        email: String,
        subject: String,
        message: String,
    }, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;