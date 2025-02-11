import { getImageProps } from "next/image";

type Props = {
    src: string;
    alt: string;
};

export default function ProjectBgImage({ src, alt }: Props) {
    const {
        props: { srcSet },
    } = getImageProps({
        alt: alt,
        width: 128,
        height: 128,
        src: src,
    });
    const projectImage = getBackgroundImage(srcSet);

    return (
        <div
            className="w-full h-full rounded-lg flex bg-cover bg-center bg-top bg-no-repeat mask-gradient hover:scale-125 transition ease-in"
            style={{ backgroundImage: projectImage }}
        />
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
