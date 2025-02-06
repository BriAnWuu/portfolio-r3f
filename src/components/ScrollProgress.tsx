"use client";

import clsx from "clsx";
import { motion, useScroll, useSpring } from "motion/react";
import { PropsWithChildren, useRef } from "react";

const circleClass = "fill-none stroke-[10%]";

export default function ScrollProgress({ children }: PropsWithChildren) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const smoothScrollProgress = useSpring(scrollYProgress, {
        damping: 40,
        stiffness: 250,
    });

    return (
        <div ref={ref} className="relative w-full">
            <svg
                className="sticky top-[90vh] left-[95vw] size-12 -rotate-90 mb-8 z-10"
                viewBox="0 0 100 100"
            >
                <circle
                    className={clsx(circleClass, "stroke-gray-500")}
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                />
                <motion.circle
                    className={clsx(circleClass, "stroke-white")}
                    cx="50"
                    cy="50"
                    r="30"
                    style={{ pathLength: smoothScrollProgress }}
                />
            </svg>
            {children}
        </div>
    );
}
