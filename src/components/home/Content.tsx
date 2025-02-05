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

const transformation: keyframeProps[] = [
    {
        id: 0,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.1, 0.5],
        x: [50, 0],
    },
    {
        id: 1,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0, 0.5],
        x: [50, 0],
    },
    {
        id: 2,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.5],
        x: [-50, 0],
    },
    {
        id: 3,
        opacityKeyframe: [0.3, 0.6],
        opacity: [0, 1],
        xKeyframe: [0.2, 0.5],
        x: [-50, 0],
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
        <div ref={ref} className="relative w-full bottom-1 h-[150vh]">
            <SectionWrapper
                transformation={transformation[0]}
                scrollProgress={smoothScrollProgress}
                position={"top-1/4 left-1/2"}
            >
                <AboutSection />
            </SectionWrapper>
            <SectionWrapper
                transformation={transformation[1]}
                scrollProgress={smoothScrollProgress}
                position={"right-16 top-8"}
            >
                <WorkSection />
            </SectionWrapper>
            <SectionWrapper
                transformation={transformation[2]}
                scrollProgress={smoothScrollProgress}
                position={"left-16 bottom-1/2"}
            >
                <ContactSection />
            </SectionWrapper>
            <SectionWrapper
                transformation={transformation[3]}
                scrollProgress={smoothScrollProgress}
                position={"left-20 bottom-16"}
            >
                <TechSection />
            </SectionWrapper>
        </div>
    );
}

const SectionWrapper = ({
    children,
    transformation,
    scrollProgress,
    position,
}: {
    children: ReactNode;
    transformation: keyframeProps;
    scrollProgress: MotionValue<number>;
    position: string;
}) => {
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
