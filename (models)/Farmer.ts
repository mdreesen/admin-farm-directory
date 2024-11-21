import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`);
mongoose.Promise = global.Promise;

const productSchema = new Schema(
    {
        product_title: String || undefined,
        product_description: String || undefined,
        product_image: String || undefined,
        product_price: String || undefined,
        product_available: String || undefined,
        product_show: String || undefined,
        createdAt: String || undefined,
        updatedAt: String || undefined
    }, {timestamps: false});

const farmerSchema = new Schema(
    {
        first_name: String,
        last_name: String,
        farm_name: String,
        farm_about: String,
        address_road: String,
        address_city: String,
        address_state: String,
        address_zip: String,
        address_street: String,
        phone: String,
        email: String,
        website: String,
        facebook: String,
        instagram: String,
        tictok: String,
        x_twitter: String,
        agree_to_legal: Boolean,
        agree_to_privacy_policy: Boolean,
        products: [productSchema],
        favoriteFarmers: Array,
        favoriteUsers: Array,
        latitude: String,
        longitude: String,
        distance: Number,
        geometry: Object,
        image: Object,
        createdAt: String,
        updatedAt: String
    }, { timestamps: true });

const Farmer = mongoose.models.Farmers || mongoose.model("Farmers", farmerSchema);
export default Farmer;