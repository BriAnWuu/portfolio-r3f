import { db } from "./index";
import { ExperienceTalbe, ProjectTable } from "./schema";

async function seed() {
    await db.delete(ProjectTable);
    await db.delete(ExperienceTalbe);

    const project = await db
        .insert(ProjectTable)
        .values([
            {
                id: 1,
                title: "Magnum Opus",
                description:
                    "Magnum Opus is your favourite art auction platform for discovering great craftsmanship, creativity, and vision. Magnum Opus connects you with art that inspires and endures. Discover, bid, and own a piece of the extraordinary.",
                imageUrl: "/images/project/magnum-opus.webp",
                projectUrl: "https://github.com/BriAnWuu/magnum-opus",
            },
            {
                id: 2,
                title: "Portfolio Website",
                description:
                    "This very website. A portfolio website built with Next.js, Three.js, Motion, Tailwind CSS, Drizzle ORM, and SQLite",
                imageUrl: "/images/project/portfolio-r3f.jpg",
                projectUrl: "https://github.com/BriAnWuu/portfolio-r3f",
            },
            {
                id: 3,
                title: "Timence",
                description:
                    "Timence is a calendar app built with React, Redux, Sass, and Material UI",
                imageUrl: "/images/project/timence.jpg",
                projectUrl: "https://github.com/BriAnWuu/timence",
            },
            {
                id: 4,
                title: "Financial Risk Mgt",
                description:
                    "A project from my quant finance degree, just to showcase a different aspect of my life as a software engineer. This project demonstrates the quantitative risks of financial assets, how to measure and mitigate them.",
                imageUrl: "/images/project/financial-risk-management.jpg",
                projectUrl:
                    "https://github.com/BriAnWuu/Financial_Risk_Management",
            },
        ])
        .returning({
            projectId: ProjectTable.id,
            projectTitle: ProjectTable.title,
        })
        .onConflictDoNothing({ target: ProjectTable.id });

    const experience = await db
        .insert(ExperienceTalbe)
        .values([
            {
                id: 1,
                role: "Software Engineer Intern",
                company: "AGTOP Technology, Inc",
                location: "Taipei, Taiwan",
                industry: "Technology",
                startDate: new Date("2018-07-02"),
                endDate: new Date("2018-08-30"),
            },
            {
                id: 2,
                role: "Research Assistant",
                company: "RCEVI, Chang Gung University",
                location: "Taoyuan, Taiwan",
                industry: "Research",
                startDate: new Date("2020-08-02"),
                endDate: new Date("2021-05-30"),
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
