type Props = {
    isHorizontal?: boolean;
};

export default function BreakLine({ isHorizontal = true }: Props) {
    if (isHorizontal) return <div className="w-full h-[2px] bg-gray-500"></div>;
    else return <div className="w-[2px] bg-gray-500"></div>;
}
