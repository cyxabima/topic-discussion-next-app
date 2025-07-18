"use server"
import * as auth from "@/auth"
const signIn = async () => {
    return await auth.signIn("github");
}

export default signIn
