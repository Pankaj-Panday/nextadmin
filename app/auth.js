import Credentials from "@auth/core/providers/credentials";
import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import { User } from "./lib/models";
import { connectToDB } from "./lib/utils";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Invalid credentials!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!user.isAdmin) {
      throw new Error("Access denied!");
    }

    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials!");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
