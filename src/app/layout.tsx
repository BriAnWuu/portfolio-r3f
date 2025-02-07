import Footer from "@/components/footer/Footer";
import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/nav/NavBar";
import ScrollProgress from "@/components/ScrollProgress";
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

const outfitMedium = localFont({
    src: "./fonts/Outfit-Medium.woff2",
    variable: "--font-outfit-medium",
    weight: "400",
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
        <html lang="en" className="no-scrollbar">
            <body className={`antialiased ${outfitMedium.className}`}>
                <NavBar />

                <ScrollProgress>
                    <LeftSideBar />
                    {children}
                </ScrollProgress>

                <Footer />
            </body>
        </html>
    );
}
