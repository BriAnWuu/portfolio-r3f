import Link from "next/link";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./SocialLogos";
const iconSize = 18;
export default function LeftSideBar() {
    return (
        <section className="w-1/10 h-full absolute top-0 left-0 pl-2 pt-[5%] pb-8">
            <div className="sticky min-h-[512px] top-[5%] left-0 flex flex-col justify-between items-center gap-4">
                <div className="flex flex-col gap-2 mb-auto">
                    <GithubIcon size={iconSize} />
                    <LinkedInIcon size={iconSize} />
                    <EmailIcon size={iconSize} />
                </div>

                <div className="w-[2px] h-[10vh] bg-gray-500 mb-5"></div>

                <div className="flex flex-col items-center gap-12">
                    <Link href="/" className="-rotate-90 text-sm">
                        Placeholder
                    </Link>
                    <Link href="/" className="-rotate-90 text-sm">
                        Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
