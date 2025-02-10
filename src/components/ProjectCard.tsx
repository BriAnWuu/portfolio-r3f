import { getImageProps } from "next/image";

export default function ProjectCard({}) {
    const {
        props: { srcSet },
    } = getImageProps({
        alt: "example image",
        width: 128,
        height: 128,
        src: "/images/apple-touch-icon.png",
    });
    const projectImage = getBackgroundImage(srcSet);

    return (
        // set width height
        <article className="bg-gray-700 opacity-90 rounded-lg p-4">
            <div
                className="w-full h-full rounded-lg flex bg-cover bg-center bg-top bg-no-repeat"
                style={{ backgroundImage: projectImage }}
            >
                <section className="bg-gray-700 mt-[60%] px-4">
                    <h4 className="text-md mb-2">project title</h4>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ulla
                    </p>
                    <div className="links"></div>
                </section>
            </div>
        </article>
    );
}

const getBackgroundImage = (srcSet = "") => {
    const imageSet = srcSet
        .split(", ")
        .map((str) => {
            const [url, dpi] = str.split(" ");
            return `url("${url}") ${dpi}`;
        })
        .join(", ");
    return `image-set(${imageSet})`;
};
