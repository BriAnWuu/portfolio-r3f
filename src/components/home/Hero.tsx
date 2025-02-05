export default function Hero({}) {
    return (
        <section className="flex flex-col w-screen h-screen justify-center items-center ">
            <h1 className="text-4xl">Welcome.</h1>
            <p className="flex flex-col flex-wrap justify-center items-center w-[90%] sm:max-w-lg">
                I'm Brian. A software engineer, maker and problem solver.
                <span className="flex flex-wrap">
                    Numbers, math, and programming have always fascinated me and
                    I've never been afraid to just dive deep into numbers and
                    code.
                </span>
                <span className="flex flex-wrap">
                    I love breaking down complex problems into simple, elegant
                    solutions. Whether it's crafting efficient algorithms,
                    building scalable systems, or just tinkering with code to
                    make something cool, I'm always up for the challenge!
                </span>
            </p>
        </section>
    );
}
