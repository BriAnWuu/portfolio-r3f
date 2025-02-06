import Link from "next/link";
import { EmailLogo, GithubLogo, LinkedInLogo } from "../SocialLogos";
import Contact from "./Contact";

export default function Footer() {
    const iconSize = 24; // px

    return (
        <footer className="w-full flex flex-col items-center">
            <Contact />
            {/* <BreakLine /> */}
            <div className="w-full flex flex-col gap-8 px-16 py-8 border-y-2 border-gray-500 md:flex-row">
                <div className="flex-1 flex flex-col gap-4 pr-8 border-r-2 border-gray-500">
                    <Link href="/">brianwu.</Link>
                    <p>Toronto</p>
                    <p>Los Angeles</p>
                    <p>Taipei</p>
                </div>
                {/* <BreakLine isHorizontal={false} /> */}
                <div className="flex-1 flex flex-col gap-4 pr-8 border-r-2 border-gray-500">
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
                <div className="flex-1 flex gap-8">
                    <LinkedInLogo size={iconSize} />
                    <GithubLogo size={iconSize} />
                    <EmailLogo size={iconSize} />
                </div>
            </div>
            {/* <BreakLine /> */}
            <div className="w-full flex justify-center px-16 py-8">
                <p>&copy; 2025 Brian Wu</p>
            </div>
        </footer>
    );
}
