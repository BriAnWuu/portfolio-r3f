import Content from "@/components/home/Content";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/home/Scene"), { ssr: false });

export default function Home() {
    return (
        <main className="w-screen h-[400vh] flex flex-col gap-8 items-center">
            <Hero />
            <div className="relative w-full h-[300vh]">
                <div className="absolute top-[50vh] left-[92%] z-[1] flex gap-2 items-end rotate-90">
                    <span className="text-sm text-nowrap">change my color</span>
                    <svg
                        className="size-4 fill-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z" />
                    </svg>
                </div>
                <div className="sticky top-0 w-full h-screen z-[0]">
                    <Scene />
                </div>
                <Content />
            </div>
        </main>
    );
}
