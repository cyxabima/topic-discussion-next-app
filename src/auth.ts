import { prisma } from "@/lib"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

// if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
//     throw new Error("GitHub OAuth credentials (GITHUB_ID, GITHUB_SECRET) are required.")
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = user.id
            }
            return session
        },
    },
})
