"use client";

import clsx from "clsx";
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";
import { ReactNode, useRef } from "react";
import {
    AboutSection,
    ExperienceSection,
    TechSection,
    WorkSection,
} from "./ContentSection";

export default function Content() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end end"],
    });
    const smoothScrollProgress = useSpring(scrollYProgress, {
        damping: 10,
        stiffness: 300,
    });

    return (
        <div ref={ref} className="relative w-full bottom-1 h-[150vh]">
            <SectionWrapper position={"top-[5%] left-[15%]"}>
                <AboutSection />
            </SectionWrapper>
            <SectionWrapper position={"top-[20%] left-[15%]"}>
                <WorkSection />
            </SectionWrapper>
            <SectionWrapper position={"top-[35%] left-[15%]"}>
                <ExperienceSection />
            </SectionWrapper>
            <SectionWrapper position={"top-[50%] left-[15%]"}>
                <TechSection />
            </SectionWrapper>
        </div>
    );
}

const SectionWrapper = ({
    children,
    position,
}: {
    children: ReactNode;
    position: string;
}) => {
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
            className={clsx("absolute", position)}
            variants={variants}
            initial="initial"
            whileInView="inView"
            transition={transition}
            viewport={{
                once: true,
                margin: "0px 0px -7.5% 0px",
            }}
        >
            {children}
        </motion.section>
    );
};
