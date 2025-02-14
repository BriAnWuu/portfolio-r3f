import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
    project: ProjectTable;
    experience: ExperienceTable;
}

export interface ProjectTable {
    id: Generated<number>;
    title: string;
    description: string;
    image_url: string;
}

export interface ExperienceTable {
    id: Generated<number>;
    role: string;
    company: string;
    location: string;
    industry: string;
    start_date: Date;
    end_date: Date;
}

export type Project = Selectable<ProjectTable>;
export type NewProject = Insertable<ProjectTable>;
export type ProjectUpdate = Updateable<ProjectTable>;

export type Experience = Selectable<ExperienceTable>;
export type NewExperience = Insertable<ExperienceTable>;
export type ExperienceUpdate = Updateable<ExperienceTable>;
