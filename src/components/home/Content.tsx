"use client";

import { motion, useScroll, useTransform } from "motion/react";
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
        opacityKeyframe: [0, 0.5],
        opacity: [0, 1],
        xKeyframe: [0, 0.5],
        x: [100, 0],
    },
    {
        id: 1,
        opacityKeyframe: [0.1, 0.5],
        opacity: [0, 1],
        xKeyframe: [0, 0.6],
        x: [100, 0],
    },
    {
        id: 2,
        opacityKeyframe: [0.4, 0.5],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.7],
        x: [-100, 0],
    },
];

export default function Content({}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"],
    });

    return (
        <div ref={ref} className="relative w-full h-screen">
            <AboutSection
                transformation={transformation[0]}
                scrollProgress={scrollYProgress}
            />
            <WorkSection
                transformation={transformation[1]}
                scrollProgress={scrollYProgress}
            />
            <ContactSection
                transformation={transformation[2]}
                scrollProgress={scrollYProgress}
            />
        </div>
    );
}

const AboutSection = ({ transformation, scrollProgress }) => {
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
            className="absolute top-1/4 left-1/2"
        >
            <h1 className="text-xl">About</h1>
            <p className="text-md">I'm body paragraph box</p>
        </motion.section>
    );
};

const WorkSection = ({ transformation, scrollProgress }) => {
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
            className="absolute right-16 top-8"
        >
            <h2 className="text-lg">Work</h2>
            <p className="text-md">I'm body paragraph box 1</p>
            <p className="text-md">I'm body paragraph box 2</p>
        </motion.section>
    );
};

const ContactSection = ({ transformation, scrollProgress }) => {
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
            className="absolute left-16 inset-y-1/2"
        >
            <h2 className="text-md">Contact</h2>
            <p className="text-sm">I'm body paragraph box 1</p>
            <p className="text-sm">I'm body paragraph box 2</p>
            <p className="text-sm">I'm body paragraph box 3</p>
        </motion.section>
    );
};
