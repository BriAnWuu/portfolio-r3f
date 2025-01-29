"use client";

export default function Content({}) {
    return (
        <div className="relative w-full h-screen">
            <AboutSection />
            <WorkSection />
            <ContactSection />
        </div>
    );
}

const AboutSection = ({}) => {
    return (
        <section className="absolute top-1/4 left-1/2">
            <h1 className="text-xl">About</h1>
            <p className="text-md">I'm body paragraph box</p>
        </section>
    );
};

const WorkSection = ({}) => {
    return (
        <section className="absolute right-16 top-8">
            <h2 className="text-lg">Work</h2>
            <p className="text-md">I'm body paragraph box 1</p>
            <p className="text-md">I'm body paragraph box 2</p>
        </section>
    );
};

const ContactSection = ({}) => {
    return (
        <section className="absolute left-16 inset-y-1/2">
            <h2 className="text-md">Contact</h2>
            <p className="text-sm">I'm body paragraph box 1</p>
            <p className="text-sm">I'm body paragraph box 2</p>
            <p className="text-sm">I'm body paragraph box 3</p>
        </section>
    );
};
