import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const farmerSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        farm_name: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_zip: String,
        phone: String,
        email: String,
        website: String,
        facebook: String,
        instagram: String,
        product_one_title: String,
        product_one_description: String,
        product_one_feed: String,
        product_one_available: String,
        product_one_show: String,
        product_two_title: String,
        product_two_description: String,
        product_two_feed: String,
        product_two_available: String,
        product_two_show: String,
        product_three_title: String,
        product_three_description: String,
        product_three_feed: String,
        product_three_available: String,
        product_three_show: String,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const Farmer = mongoose.models.Farmers || mongoose.model("Farmers", farmerSchema);
export default Farmer;