import { cookies } from 'next/headers';
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    id: string;
    email: string | undefined,
    isFarmer: boolean,
    isAdmin: boolean,
    iat: number,
    exp: number
}

export async function isLoggedIn() {
    const cookiesList = cookies();

    return cookiesList.has(`${process.env.COOKIE_KEY}`);
};

export async function loggedInUserData() {
    const cookiesList = cookies();
    const data = cookiesList.get(`${process.env.COOKIE_KEY}`);
    const decode = data && jwtDecode(data?.value ?? '') as JwtPayload;
    return decode
}
