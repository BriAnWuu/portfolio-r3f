import ProjectBgImage from "./ProjectBgImage";

export default function ProjectCard({}) {
    return (
        // set width height
        <article className="relative w-full h-[300px] flex flex-col bg-gray-700 opacity-90 rounded-lg overflow-hidden">
            <ProjectBgImage src="/images/Brian_Wu.jpg" alt="example image" />
            <section className="absolute bottom-4 w-auto h-[40%] flex flex-col bg-gray-700 px-4">
                <h4 className="text-md mb-2">project title</h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                </p>
                <div className="links"></div>
            </section>
        </article>
    );
}
