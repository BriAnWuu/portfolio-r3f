"use client";

import { motion } from "motion/react";
import { MouseEvent, PropsWithChildren, useRef, useState } from "react";

export default function MagneticWrapper({ children }: PropsWithChildren) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        if (!ref.current) return;

        const { clientX, clientY } = event;
        const { width, height, top, left } =
            ref.current.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{
                type: "spring",
                mass: 1,
                damping: 5,
                stiffness: 200,
            }}
        >
            {children}
        </motion.div>
    );
}
