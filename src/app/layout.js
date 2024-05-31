"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 px-6 mt-14">{children}</div>
            <Footer />
            <ToastContainer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
