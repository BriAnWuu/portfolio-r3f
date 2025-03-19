import "server-only";

import { db } from "@/db";
import {
    ExperienceTalbe,
    ProjectTable,
    SelectExperience,
    SelectProject,
} from "@/db/schema";
import { asc, desc, eq } from "drizzle-orm";

export async function getProjects(
    size = 6
): Promise<Array<Omit<SelectProject, "createdAt">>> {
    // test skeleton
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const projects = await db
        .select({
            id: ProjectTable.id,
            title: ProjectTable.title,
            description: ProjectTable.description,
            imageUrl: ProjectTable.imageUrl,
            projectUrl: ProjectTable.projectUrl,
        })
        .from(ProjectTable)
        .orderBy(asc(ProjectTable.id))
        .limit(size);
    return projects;
}

export async function getExperiences(): Promise<
    Array<Omit<SelectExperience, "createdAt">>
> {
    const experiences = await db
        .select({
            id: ExperienceTalbe.id,
            role: ExperienceTalbe.role,
            company: ExperienceTalbe.company,
            location: ExperienceTalbe.location,
            industry: ExperienceTalbe.industry,
            startDate: ExperienceTalbe.startDate,
            endDate: ExperienceTalbe.endDate,
        })
        .from(ExperienceTalbe)
        .orderBy(desc(ExperienceTalbe.startDate));
    return experiences;
}

export async function getProjectById(
    id: SelectProject["id"]
): Promise<Omit<SelectProject, "createdAt"> | undefined> {
    const project = await db
        .select({
            id: ProjectTable.id,
            title: ProjectTable.title,
            description: ProjectTable.description,
            imageUrl: ProjectTable.imageUrl,
            projectUrl: ProjectTable.projectUrl,
        })
        .from(ProjectTable)
        .where(eq(ProjectTable.id, id));
    return project[0];
}
