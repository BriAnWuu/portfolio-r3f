import Hero from "@/components/contact/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};
export default function Contact({}) {
    return (
        <>
            <Hero />
        </>
    );
}
