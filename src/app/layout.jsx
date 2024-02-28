import { Inter, Poppins } from "next/font/google";
// import "./globals.css";
import { Providers } from "@/lib/provider";
import HeaderLoginPpdb from "@/components/PPDB/header";
const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  // variable: "--font-inter",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
