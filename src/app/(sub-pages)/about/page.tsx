import Hero from "@/components/about/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};
export default function About({}) {
    return (
        <>
            <Hero />
        </>
    );
}
