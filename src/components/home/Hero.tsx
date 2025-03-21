import HeaderMask from "../HeaderMask";

export default function Hero({}) {
    return (
        <section className="flex flex-col w-screen justify-center items-center overflow-hidden">
            <HeaderMask>
                <h1 className="text-4xl text-zinc-800">Welcome.</h1>
            </HeaderMask>
            <p className="flex flex-col flex-wrap justify-center items-center w-[90%] gap-2 py-6 sm:max-w-lg">
                <span className="flex flex-wrap text-2xl mb-6">
                    I&apos;m Brian. A software engineer, maker and problem
                    solver.
                </span>
                <span className="flex flex-wrap">
                    Numbers, math, and programming have always fascinated me and
                    I&apos;ve never been afraid to just dive deep into numbers
                    and code. I love the challenge of learning new things and I
                    am always looking for ways to improve my skills.
                </span>
                <span className="flex flex-wrap">
                    I love breaking down complex problems into simple, elegant
                    solutions. Whether it&apos;s crafting efficient algorithms,
                    building scalable systems, or just tinkering with code to
                    make something cool, I&apos;m always up for the challenge!
                </span>
            </p>
        </section>
    );
}
