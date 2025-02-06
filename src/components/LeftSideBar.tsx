import Link from "next/link";
import { EmailLogo, GithubLogo, LinkedInLogo } from "./SocialLogos";

const iconSize = 18;

export default function LeftSideBar() {
    return (
        <section className="w-1/10 h-full absolute top-0 left-0 pl-2 pt-[5%] pb-12 z-10">
            <div className="sticky min-h-[512px] top-[5%] left-0 flex flex-col justify-between items-center gap-4">
                <div className="flex flex-col gap-2 mb-auto">
                    <GithubLogo size={iconSize} />
                    <LinkedInLogo size={iconSize} />
                    <EmailLogo size={iconSize} />
                </div>

                <div className="w-[2px] h-[50px] bg-gray-500 mb-8"></div>

                <div className="flex flex-col items-center gap-10">
                    {/* toggle dark/light theme, custom accent color, disable animation, etc. */}
                    <Link
                        href="/"
                        className="-rotate-90 text-sm mb-4 text-gray-300 hover:text-white border-b border-transparent hover:border-white"
                    >
                        Placeholder
                    </Link>
                    <Link
                        href="/"
                        className="-rotate-90 text-sm mb-4 text-gray-300 hover:text-white border-b border-transparent hover:border-white"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
