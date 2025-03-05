import { getProjects } from "@/lib/get-items";
import ProjectCard from "../ProjectCard";

export default async function Projects({}) {
    const projects = await getProjects();

    return (
        <div className="w-full flex gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}
