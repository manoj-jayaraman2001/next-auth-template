import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/utils/database/connectDB";
import User from "@/models/user";

connectDB();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.type === "oauth") {
        return await signInWithOauth(account, profile);
      }
      return true;
    },
    // async redirect({ url, baseUrl }) {

    //   return baseUrl
    // },
    async session({ session, user, token }) {
      session.user = token.user
      return session;
    },
    async jwt({ token}) {
      const user = await getUserByEmail(token.email);
      token.user = user
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// -------------------------------------------------------------------//

async function signInWithOauth(account, profile) {
  const user = await User.find({ email: profile.email });
  if (user) return true
  // sigup if !user (adding data to database)
  try{
    const newUser = await new User({
      name: profile.name,
      email: profile.email,
      image: profile.picture,
      provider: account.provider,
    });
    await newUser.save();
    return true
  }catch (err){
    console.log(err)
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email }).select("-password");
    return ({...user._doc, _id: user._id.toString()})
  } catch (error) {
    console.error("Error finding user:", error);
    return null;
  }
}
