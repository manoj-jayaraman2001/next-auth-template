import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/State/Provider";
import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <Navbar />
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
