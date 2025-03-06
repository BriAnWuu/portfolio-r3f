import TechIcons from "../TechIcons";
import Experiences from "./Experiences";
import Projects from "./Projects";

const textColor = "text-gray-200";
const accentTextColor = "text-white";

const titleClass = `text-xl ${textColor} mb-4`;
const paragraphClass = `text-md ${textColor} mb-2`;
const strongClass = `${accentTextColor}`;

export function AboutSection() {
    return (
        <>
            <h3 className={titleClass}>About</h3>
            <p className={paragraphClass}>
                I have a background in{" "}
                <strong className={strongClass}>Computer Science</strong> and{" "}
                <strong className={strongClass}>Quantitative Finance</strong>,
                and I bring a unique blend of technical expertise and a strong
                quantitative background to the table.
            </p>
            <p className={paragraphClass}>
                I’m currently seeking{" "}
                <strong className={strongClass}>Software Engineering</strong>{" "}
                position where I can apply my skills, grow as a developer, and
                contribute to impactful projects. I’m always eager to connect
                with like-minded professionals and explore opportunities. Feel
                free to reach out—let’s connect and collaborate!
            </p>
        </>
    );
}

export function TechSection() {
    return (
        <>
            <h3 className={titleClass}>My Tech Stack</h3>
            <TechIcons />
        </>
    );
}

export function WorkSection() {
    return (
        <>
            <h3 className={titleClass}>Work</h3>
            <Projects />
        </>
    );
}

export function ExperienceSection() {
    return (
        <>
            <h3 className={titleClass}>Experience</h3>
            <Experiences />
        </>
    );
}
