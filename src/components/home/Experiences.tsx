import { getExperiences } from "@/lib/get-items";
import { dateToString } from "@/utils/DateMethod";

export default async function Experiences() {
    const experiences = await getExperiences();

    return (
        <>
            {experiences.map((experience) => (
                <div key={experience.id}>
                    <div>{experience.role}</div>
                    <div>{experience.company}</div>
                    <div>{experience.industry}</div>
                    <div>{experience.location}</div>
                    <div>{dateToString(experience.startDate)}</div>
                    <div>{dateToString(experience.endDate)}</div>
                </div>
            ))}
        </>
    );
}
