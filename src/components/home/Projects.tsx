import { getProjects } from "@/lib/get-items";
import ProjectCard from "../ProjectCard";

export default async function Projects({}) {
    const projects = await getProjects();

    return (
        <div className="w-full flex flex-wrap gap-[16px]">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}
