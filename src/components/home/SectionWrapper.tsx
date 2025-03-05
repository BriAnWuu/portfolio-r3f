"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
export default function SectionWrapper({ children }: { children: ReactNode }) {
    const variants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        inView: {
            opacity: 1,
            y: 0,
        },
    };
    const transition = {
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
        mass: 1,
        damping: 10,
        stiffness: 100,
    };

    return (
        <motion.section
            className={`w-[90%] flex flex-col`}
            variants={variants}
            initial="initial"
            whileInView="inView"
            transition={transition}
            viewport={{
                // once: true,
                margin: "0px 0px -7.5% 0px",
            }}
        >
            {children}
        </motion.section>
    );
}
