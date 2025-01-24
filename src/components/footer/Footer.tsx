import Link from "next/link";
import BreakLine from "../BreakLine";
import { EmailIcon, GithubIcon, LinkedInIcon } from "../Icons";
import Contact from "./Contact";

export default function Footer() {
    const iconSize = 24; // px

    return (
        <footer className="flex flex-col gap-8 px-16 py-8 items-center">
            <Contact />
            <BreakLine />
            <div className="flex w-full gap-8 justify-evenly">
                <div className="flex flex-col gap-4">
                    <Link href="/">brianwu.</Link>
                    <p>Toronto, ON, CAN</p>
                    <p>Los Angeles, CA, USA</p>
                    <p>Taipei, TAIWAN</p>
                </div>
                <BreakLine isHorizontal={false} />
                <div className="flex flex-col gap-4">
                    <Link className="uppercase" href={"/about"}>
                        About
                    </Link>
                    <Link className="uppercase" href={"/work"}>
                        Work
                    </Link>
                    <Link className="uppercase" href={"/contact"}>
                        Contact
                    </Link>
                </div>
                <BreakLine isHorizontal={false} />
                <div className="flex gap-8">
                    <LinkedInIcon size={iconSize} />
                    <GithubIcon size={iconSize} />
                    <EmailIcon size={iconSize} />
                </div>
            </div>
            <BreakLine />
            <div className="w-full flex justify-center">
                <p>&copy; 2025 Brian Wu</p>
            </div>
        </footer>
    );
}
