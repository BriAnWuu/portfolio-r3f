import HeaderMask from "../HeaderMask";

export default function Hero({}) {
    return (
        <section className="flex flex-col w-screen h-screen justify-start items-center overflow-hidden">
            <HeaderMask>
                <h1 className="text-4xl text-zinc-800">Work.</h1>
            </HeaderMask>
        </section>
    );
}
