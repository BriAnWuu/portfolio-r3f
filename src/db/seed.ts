import { db } from "./index";
import { ExperienceTalbe, ProjectTable } from "./schema";

async function seed() {
    const project = await db
        .insert(ProjectTable)
        .values([
            {
                title:
                description:
                imageUrl:
                projectUrl:
            },
            {
                title:
                description:
                imageUrl:
                projectUrl:
            },
            {
                title:
                description:
                imageUrl:
                projectUrl:
            },
            {
                title:
                description:
                imageUrl:
                projectUrl:
            },
        ])
        .returning({
            projectId: ProjectTable.id,
            projectTitle: ProjectTable.title,
        })
        .onConflictDoNothing({ target: ProjectTable.title });

    const experience = await db
        .insert(ExperienceTalbe)
        .values([
            {
                role: "Research Assistant",
                company: "RCEVI, Chang Gung University",
                location: "Taoyuan, Taiwan",
                industry: "Research",
                startDate: new Date("2020-08-01"),
                endDate: new Date("2021-05-31"),
            },
            {
                role: "Software Engineer Intern",
                company: "AGTOP Technology, Inc",
                location: "Taipei, Taiwan",
                industry: "Technology",
                startDate: new Date("2018-07-01"),
                endDate: new Date("2018-08-31"),
            },
        ])
        .returning({
            experienceId: ExperienceTalbe.id,
            role: ExperienceTalbe.role,
            company: ExperienceTalbe.company,
        })
        .onConflictDoNothing({
            target: [ExperienceTalbe.company, ExperienceTalbe.startDate],
        });

    console.log(project);
    console.log(experience);
}

seed();
