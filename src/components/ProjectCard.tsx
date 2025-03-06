import { Suspense } from "react";
import ProjectBgImage from "./ProjectBgImage";
import { ExternalLinkLogo } from "./ProjectLinks";

type Props = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
};

const LINK_SIZE = 20;

export default function ProjectCard(project: Props) {
    return (
        <article className="relative w-[calc((100%-32px)/3)] h-[350px] flex flex-col bg-gray-700 opacity-95 rounded-lg overflow-hidden">
            <ProjectBgImage src={project.imageUrl} alt={project.title} />
            <section className="absolute bottom-0 w-auto h-[55%] flex flex-col bg-gray-700 shadow-[0_0_4rem_6rem] shadow-gray-700 px-4 pb-6">
                <h4 className="text-md mb-2">{project.title}</h4>
                <p className="text-xs">{project.description}</p>
                <div className="w-full justify-self-end flex justify-end mt-auto">
                    <ExternalLinkLogo
                        size={LINK_SIZE}
                        url={project.projectUrl}
                    />
                </div>
            </section>
        </article>
    );
}
