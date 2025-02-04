"use client";

import { usePathname } from "next/navigation";
import { ContactButton } from "../Buttons";

export default function Contact() {
    const pathName = usePathname();
    if (pathName === "/contact") return;
    return (
        <section className="flex gap-4 w-full justify-center items-center px-16 py-8 border-t-2 border-gray-500">
            <h2>Great things can happen with a simple "hello!"</h2>
            <ContactButton />
        </section>
    );
}
