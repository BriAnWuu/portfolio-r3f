import {
    AboutSection,
    ExperienceSection,
    TechSection,
    WorkSection,
} from "./Sections";
import SectionWrapper from "./SectionWrapper";

export default function Content() {
    return (
        <div className="relative w-full h-fit max-w-6xl flex flex-col gap-16 px-[15%] lg:px-24 py-24 z-10 [&>*:nth-child(even)]:self-end [&>*:nth-child(even)]:items-end [&>*:nth-child(even)>*]:justify-end">
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
