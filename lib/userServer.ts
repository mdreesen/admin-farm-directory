import { getSession } from "next-auth/react"

export const userServer = async () => {
    const { user } = await getSession() ?? {};
    return { user }
}