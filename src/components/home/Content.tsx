"use client";

import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import {
    AboutSection,
    ContactSection,
    TechSection,
    WorkSection,
} from "./ContentSection";

type keyframeProps = {
    id: number;
    opacityKeyframe: number[];
    opacity: number[];
    xKeyframe: number[];
    x: number[];
};

type scrollProgressProps = {
    scrollProgress: number;
};

const transformation: keyframeProps[] = [
    {
        id: 0,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.1, 0.5],
        x: [200, 0],
    },
    {
        id: 1,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0, 0.5],
        x: [100, 0],
    },
    {
        id: 2,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.5],
        x: [-100, 0],
    },
    {
        id: 3,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.5],
        x: [-100, 0],
    },
];

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
        <div ref={ref} className="relative w-full h-[150vh]">
            <Section
                transformation={transformation[0]}
                scrollProgress={smoothScrollProgress}
                position={"top-1/4 left-1/2"}
            >
                <AboutSection />
            </Section>
            <Section
                transformation={transformation[1]}
                scrollProgress={smoothScrollProgress}
                position={"right-16 top-8"}
            >
                <WorkSection />
            </Section>
            <Section
                transformation={transformation[2]}
                scrollProgress={smoothScrollProgress}
                position={"left-16 bottom-1/2"}
            >
                <ContactSection />
            </Section>
            <Section
                transformation={transformation[3]}
                scrollProgress={smoothScrollProgress}
                position={"left-20 bottom-16"}
            >
                <TechSection />
            </Section>
        </div>
    );
}

const Section = ({ children, transformation, scrollProgress, position }) => {
    const opacity = useTransform(
        scrollProgress,
        transformation.opacityKeyframe,
        transformation.opacity
    );
    const x = useTransform(
        scrollProgress,
        transformation.xKeyframe,
        transformation.x
    );

    return (
        <motion.section
            style={{
                opacity: opacity,
                x: x,
            }}
            className={clsx("absolute", position)}
        >
            {children}
        </motion.section>
    );
};
