import Footer from "@/components/footer/Footer";
import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/nav/NavBar";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        template: "%s | Brian Wu",
        default: "Home | Brian Wu",
    },
    description: "Brian Wu's Portolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    "antialiased",
                    geistSans.variable,
                    geistMono.variable
                )}
            >
                <NavBar />
                <div className="relative w-full">
                    <LeftSideBar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
