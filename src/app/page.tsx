import ColorChangePrompt from "@/components/home/ColorChangePrompt";
import Content from "@/components/home/Content";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/home/Scene"), { ssr: false });

export default function Home() {
    return (
        <main className="w-screen h-fit flex flex-col gap-8 items-center">
            <Hero />
            <div className="relative w-full h-[300vh]">
                <ColorChangePrompt />
                <div className="sticky top-0 w-full h-screen z-0">
                    <Scene />
                </div>
                <Content />
            </div>
        </main>
    );
}
