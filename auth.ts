import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
        if (user) {
            token.role = (user as any).role;
            token.id = user.id;
        }
        return token;
    },
    async session({ session, token }) {
        if (token && session.user) {
            (session.user as any).role = token.role;
            (session.user as any).id = token.id;
        }
        return session;
    }
  },
  session: {
    strategy: 'jwt',
  },
});
