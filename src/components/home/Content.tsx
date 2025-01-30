"use client";

import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

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
        opacityKeyframe: [0, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.1, 0.75],
        x: [200, 0],
    },
    {
        id: 1,
        opacityKeyframe: [0.1, 0.5],
        opacity: [0, 1],
        xKeyframe: [0, 0.75],
        x: [100, 0],
    },
    {
        id: 2,
        opacityKeyframe: [0.4, 0.75],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.75],
        x: [-100, 0],
    },
];

export default function Content({}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const smoothScrollProgress = useSpring(scrollYProgress, {
        damping: 10,
        stiffness: 100,
    });

    return (
        <div ref={ref} className="relative w-full h-screen">
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
            style={{ opacity: opacity, x: x }}
            className={clsx("absolute", position)}
        >
            {children}
        </motion.section>
    );
};

const AboutSection = ({}) => {
    return (
        <>
            <h1 className="text-xl">About</h1>
            <p className="text-md">I'm body paragraph box</p>
        </>
    );
};

const WorkSection = ({}) => {
    return (
        <>
            <h2 className="text-lg">Work</h2>
            <p className="text-md">I'm body paragraph box 1</p>
            <p className="text-md">I'm body paragraph box 2</p>
        </>
    );
};

const ContactSection = ({}) => {
    return (
        <>
            <h2 className="text-md">Contact</h2>
            <p className="text-sm">I'm body paragraph box 1</p>
            <p className="text-sm">I'm body paragraph box 2</p>
            <p className="text-sm">I'm body paragraph box 3</p>
        </>
    );
};
