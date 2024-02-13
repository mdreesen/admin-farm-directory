import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const contactSchema = new Schema(
    {
        email: String,
        subject: String,
        message: String,
    }, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;