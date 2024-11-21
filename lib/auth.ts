import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import Farmer from "@/(models)/Farmer";
import type { NextAuthOptions, DefaultSession, DefaultUser, Product } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { type DefaultSession, type DefaultUser } from "next-auth";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Product extends DefaultUser {
    product_title: String,
    product_description: String,
    product_image: String,
    product_price: String,
    product_available: String,
    product_show: String,
    createdAt: String,
    updatedAt: String
  }
  
  interface Session extends DefaultSession {
    user: {
      email: any;
      name: string;
      _id: string;
      password: string;
      isFarmer: boolean,
      isAdmin: Boolean,
      favoriteFarmers: [],
      agree_to_legal: boolean,
      agree_to_privacy_policy: boolean,
      createdAt: string,
      updatedAt: string,

      first_name: String,
      last_name: String,
      farm_name: String,
      farm_about: String,
      address_street: String,
      address_road: String,
      address_city: String,
      address_state: String,
      address_zip: String,
      phone: String,
      website: String,
      facebook: String,
      instagram: String,
      products: [Product],
      latitude: String,
      longitude: String,
      distance: Number,
      geometry: Object,
      image: {
        name: String,
        size: Number,
        key: String,
        serverData: Object,
        url: String,
        appUrl: String,
        customId: String,
        type: String,
      },

      __v: number,
      resetPasswordToken: string,
      resetPasswordTokenExpirationDate: Date
    };
  }

  interface User extends DefaultUser {
    username: string; // the user will now have the property
    _id: string;
    email: string;
    password: string;
    isFarmer: boolean,
    isAdmin: Boolean,
    favoriteFarmers: [],
    agree_to_legal: boolean,
    agree_to_privacy_policy: boolean,

    first_name: String,
    last_name: String,
    farm_name: String,
    farm_about: String,
    address_road: String,
    address_street: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    phone: String,
    website: String,
    facebook: String,
    instagram: String,
    products: [Product],
    latitude: String,
    longitude: String,
    distance: Number,
    geometry: Object,
    image: {
      name: String,
      size: Number,
      key: String,
      serverData: Object,
      url: String,
      appUrl: String,
      customId: String,
      type: String,
    },

    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    username: string; // also my jwt will have the property, I can access this property within the JWT using the getToken() helper
    _id: string;
    email: string;
    password: string;
    isFarmer: boolean,
    isAdmin: Boolean,
    favoriteFarmers: [],
    agree_to_legal: boolean,
    agree_to_privacy_policy: boolean,

    first_name: String,
    last_name: String,
    farm_name: String,
    farm_about: String,
    address_road: String,
    address_street: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    phone: String,
    website: String,
    facebook: String,
    instagram: String,
    products: [Product],
    latitude: String,
    longitude: String,
    distance: Number,
    geometry: Object,
    image: {
      name: String,
      size: Number,
      key: String,
      serverData: Object,
      url: String,
      appUrl: String,
      customId: String,
      type: String,
    },
    
    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Credentials");
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Credentials");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      const userData = await User.findOne({ email: session.user?.email });
      const farmerData = await Farmer.findOne({ email: session.user?.email });

      // If the user is a farmer, we need to send the farmer info to the user
      const isfarmer = farmerData ? farmerData._doc : {}

      return {
        ...session,
        user: {
          ...userData._doc,
          ...isfarmer
        }
      };
    },
    async jwt({ token }) {
      return token
    }
  },
};