import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/home/Scene"), { ssr: false });

export default function Home() {
    return (
        <main className="w-full h-screen flex flex-col gap-8 items-center">
            <div className="relative w-full h-full">
                <Scene />
            </div>
        </main>
    );
}
