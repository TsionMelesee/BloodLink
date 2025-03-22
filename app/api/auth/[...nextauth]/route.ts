import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "doctor@hospital.com" && credentials?.password === "doctor123") {
          return {
            id: "1",
            email: "doctor@hospital.com",
            name: "Hospital Doctor",
            role: "doctor"
          };
        }
        
        if (credentials?.email && credentials?.password) {
          return {
            id: Math.random().toString(),
            email: credentials.email,
            name: credentials.email.split("@")[0],
            role: "donor"
          };
        }

        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  }
});

export { handler as GET, handler as POST };
