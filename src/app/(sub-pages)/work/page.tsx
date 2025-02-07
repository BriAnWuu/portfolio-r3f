import Hero from "@/components/work/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
};

export default function Work({}) {
    return (
        <>
            <Hero />
        </>
    );
}
