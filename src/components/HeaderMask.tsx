"use client";

import { motion } from "motion/react";
import { PropsWithChildren } from "react";

export default function HeaderMask({ children }: PropsWithChildren) {
    const maskVariants = {
        initial: {
            y: -400,
        },
        animate: { y: 0 },
    };
    const titleVariants = {
        initial: {
            y: 300,
            opacity: 0,
        },
        animate: { y: 0, opacity: 1 },
    };
    const maskTransition = {
        delay: 0.3,
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        mass: 1,
        damping: 15,
        stiffness: 100,
    };
    const titleTransition = {
        delay: 0.9,
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        mass: 1,
        damping: 10,
        stiffness: 150,
    };

    return (
        <motion.div
            className="w-[70%] h-[80vh] max-h-[512px] bg-amber-50 flex flex-col justify-center items-center pt-[20%] mt-[1px] mb-4"
            variants={maskVariants}
            initial="initial"
            animate="animate"
            transition={maskTransition}
        >
            <motion.div
                className="px-4 py-8 mb-1"
                variants={titleVariants}
                initial="initial"
                animate="animate"
                transition={titleTransition}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
