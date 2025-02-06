"use client";

import { motion } from "motion/react";

export default function ColorChangePrompt() {
    const variants = {
        initial: {
            opacity: 0,
            x: 10,
            rotate: 90,
        },
        inView: {
            opacity: 1,
            x: 0,
            rotate: 90,
        },
    };
    const transition = {
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        mass: 1,
        damping: 20,
        stiffness: 100,
    };

    return (
        <motion.div
            className="absolute top-[50vh] left-[92%] z-1 flex gap-2 items-end"
            variants={variants}
            initial="initial"
            whileInView="inView"
            transition={transition}
            viewport={{ margin: "0px 0px -25% 0px" }}
        >
            <span className="text-sm text-nowrap text-gray-300">
                change my color
            </span>
            <svg
                className="size-4 fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
            >
                <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z" />
            </svg>
        </motion.div>
    );
}
