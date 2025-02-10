"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import {
    AboutSection,
    ExperienceSection,
    TechSection,
    WorkSection,
} from "./Sections";

export default function Content() {
    return (
        <div className="relative w-full h-[200vh] flex flex-col gap-16 px-[15%] py-16 z-10 [&>*:nth-child(even)]:self-end [&>*:nth-child(even)]:items-end [&>*:nth-child(even)>*]:justify-end">
            <SectionWrapper>
                <AboutSection />
            </SectionWrapper>
            <SectionWrapper>
                <WorkSection />
            </SectionWrapper>
            <SectionWrapper>
                <ExperienceSection />
            </SectionWrapper>
            <SectionWrapper>
                <TechSection />
            </SectionWrapper>
        </div>
    );
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
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
            className={`w-[90%] sm:max-w-xl flex flex-col`}
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
