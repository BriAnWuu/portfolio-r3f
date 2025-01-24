"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
    href: string;
};

export default function NavLink({ children, href }: PropsWithChildren<Props>) {
    const pathName = usePathname();
    return (
        <Link
            href={href}
            className={clsx("w-full h-full p-2 bg-gray-500 rounded-lg", {
                "bg-gray-300 text-black": pathName === href,
            })}
        >
            <p>{children}</p>
        </Link>
    );
}
