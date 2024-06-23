import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-6`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="relative flex-1 mt-14">{children}</div>
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
