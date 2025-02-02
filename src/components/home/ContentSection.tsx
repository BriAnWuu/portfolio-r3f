import TechIcons from "../TechIcons";

export function AboutSection({}) {
    return (
        <>
            <h1 className="text-xl">About</h1>
            <p className="text-md">I'm body paragraph box</p>
        </>
    );
}

export function TechSection({}) {
    return <TechIcons />;
}

export function WorkSection({}) {
    return (
        <>
            <h2 className="text-lg">Work</h2>
            <p className="text-md">I'm body paragraph box 1</p>
            <p className="text-md">I'm body paragraph box 2</p>
        </>
    );
}

export function ContactSection({}) {
    return (
        <>
            <h2 className="text-md">Contact</h2>
            <p className="text-sm">I'm body paragraph box 1</p>
            <p className="text-sm">I'm body paragraph box 2</p>
            <p className="text-sm">I'm body paragraph box 3</p>
        </>
    );
}
