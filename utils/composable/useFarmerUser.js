import { useUser } from '@auth0/nextjs-auth0/client';

export default function useFarmerUser(data) {
    // const authUser = useUser();

    // Looks at Auth0 user information
    const isAuthUserEmail = useUser()?.user?.email;

    // Looks at Farmer User information
    const isUserEmail = data?.filter(item => item?.user?.email.includes(isAuthUserEmail));

    return isUserEmail;
};
