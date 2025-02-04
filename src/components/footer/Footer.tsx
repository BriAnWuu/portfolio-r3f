import Link from "next/link";
import BreakLine from "../BreakLine";
import { EmailIcon, GithubIcon, LinkedInIcon } from "../Icons";
import Contact from "./Contact";

export default function Footer() {
    const iconSize = 24; // px

    return (
        <footer className="w-full flex flex-col items-center">
            <Contact />
            {/* <BreakLine /> */}
            <div className="w-full flex gap-8 px-16 py-8 border-y-2 border-gray-500">
                <div className="w-1/3 flex flex-col gap-4 pr-8 border-r-2 border-gray-500">
                    <Link href="/">brianwu.</Link>
                    <p>Toronto, ON, CAN</p>
                    <p>Los Angeles, CA, USA</p>
                    <p>Taipei, TAIWAN</p>
                </div>
                {/* <BreakLine isHorizontal={false} /> */}
                <div className="w-1/3 flex flex-col gap-4 pr-8 border-r-2 border-gray-500">
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
                {/* <BreakLine isHorizontal={false} /> */}
                <div className="w-1/3 flex gap-8">
                    <LinkedInIcon size={iconSize} />
                    <GithubIcon size={iconSize} />
                    <EmailIcon size={iconSize} />
                </div>
            </div>
            {/* <BreakLine /> */}
            <div className="w-full flex justify-center px-16 py-8">
                <p>&copy; 2025 Brian Wu</p>
            </div>
        </footer>
    );
}
