import { getExperiences } from "@/lib/get-items";
import { dateToString } from "@/utils/DateMethod";

type Props = {
    paragraphStyle: string;
    strongStyle: string;
};

export default async function Experiences({
    paragraphStyle,
    strongStyle,
}: Props) {
    const experiences = await getExperiences();

    return (
        <ul className="max-w-lg">
            {experiences.map((experience) => (
                <li key={experience.id} className={paragraphStyle}>
                    <p>
                        <strong className={`${strongStyle} mr-2`}>
                            {experience.role}
                        </strong>{" "}
                        @ {experience.company}
                    </p>
                    <p>
                        {dateToString(experience.startDate)} -{" "}
                        {dateToString(experience.endDate)}
                    </p>
                    <div className="flex justify-between">
                        <p>{experience.location}</p>
                        <p>{experience.industry}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
