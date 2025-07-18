"use server"
import * as auth from "@/auth"
const signOut = async () => {
    return await auth.signOut();

}

export default signOut
