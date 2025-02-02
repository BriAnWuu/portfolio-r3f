import Content from "@/components/home/Content";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/home/Scene"), { ssr: false });

export default function Home() {
    return (
        <main className="w-screen h-[400vh] flex flex-col gap-8 items-center">
            <Hero />
            <div className="relative w-full h-[300vh]">
                <div className="sticky top-0 w-full h-screen z-[-1]">
                    <Scene />
                </div>
                <Content />
                <Hero />
            </div>
        </main>
    );
}
