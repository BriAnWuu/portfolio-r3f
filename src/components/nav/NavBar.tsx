import BreakLine from "../BreakLine";
import NavLink from "./NavLink";

export default function NavBar({}) {
    return (
        <nav className="w-full">
            <div className="flex justify-between w-full px-16 py-8">
                <div className="flex">
                    <NavLink href={"/"}>Home</NavLink>
                </div>
                <div className="flex gap-8">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/work">Work</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>
            </div>
            <BreakLine />
        </nav>
    );
}
