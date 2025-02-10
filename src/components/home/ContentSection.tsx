import TechIcons from "../TechIcons";

const textColor = "text-gray-200";
const accentTextColor = "text-white";

const titleClass = `text-xl ${textColor} mb-4`;
const paragraphClass = `text-md ${textColor}`;
const strongClass = `${accentTextColor}`;

export function AboutSection() {
    return (
        <>
            <h3 className={titleClass}>About</h3>
            <p className={paragraphClass}>
                I have a background in{" "}
                <strong className={strongClass}>Computer Science</strong> and{" "}
                <strong className={strongClass}>Quantitative Finance</strong>.
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
            <p className={paragraphClass}>I'm body paragraph box 1</p>
            <p className={paragraphClass}>I'm body paragraph box 2</p>
        </>
    );
}

export function ExperienceSection() {
    return (
        <>
            <h3 className={titleClass}>Experience</h3>
            <p className={paragraphClass}>I'm body paragraph box 1</p>
            <p className={paragraphClass}>I'm body paragraph box 2</p>
        </>
    );
}
