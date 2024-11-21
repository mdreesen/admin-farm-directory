import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        phone: String,
        password: String,
        isFarmer: Boolean,
        isAdmin: Boolean,
        houseNumber: String,
        street: String,
        city: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_zip: String,
        address_street: String,
        postalCode: String,
        state: String,
        county: String,
        latitude: String,
        longitude: String,
        formattedAddress: String,
        favoriteFarmers: Array,
        agree_to_legal: Boolean,
        agree_to_privacy_policy: Boolean,
        image: Object,
        resetPasswordToken: String,
        verified_farmer: Boolean,
        verified_farmer_token: String,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;