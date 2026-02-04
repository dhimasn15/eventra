import NextAuth, { type NextAuthConfig, type DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials" 
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: string
      name: string
      email: string
    } & DefaultSession["user"]
  }

  interface User {
    role: string
  }

  interface JWT {
    id: string
    role: string
    name: string
    email: string
  }
}

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("CredentialsSignin")
        }

        try {
          await connectDB()
          const user = await User.findOne({
            email: credentials.email.toLowerCase(),
          }).select("+password")

          if (!user) {
            throw new Error("CredentialsSignin")
          } 

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isPasswordValid) {
            throw new Error("CredentialsSignin")
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          }
        } catch (error) {
          console.error("Authorize error:", error)
          throw new Error("CredentialsSignin")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role || "participant"
        token.name = user.name || ""
        token.email = user.email || ""
      }
      
      // Ensure token always has required properties
      if (!token.id) token.id = ""
      if (!token.role) token.role = "participant"
      if (!token.name) token.name = ""
      if (!token.email) token.email = ""
      
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.name = token.name as string
        session.user.email = token.email as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Allow relative URLs                                                            
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allow URLs on the same origin
      try {
        if (new URL(url).origin === baseUrl) return url
      } catch {
        // Invalid URL, use baseUrl
      }
      // Default redirect
      return baseUrl
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
}

const { handlers } = NextAuth(authOptions)
export const { GET, POST } = handlers
