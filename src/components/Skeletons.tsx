import { Skeleton } from "./ui/skeleton";

export function ProjectCardSkeleton() {
    return (
        <div
            className={`w-[calc((100%-32px)/3)] h-[350px] flex flex-col bg-gray-700 rounded-lg overflow-hidden`}
        >
            <div className="w-full h-[45%] pb-4">
                <Skeleton className="w-full h-full rounded-lg" />
            </div>
            <div className="justify-self-end w-full h-[55%] flex flex-col px-4 pb-6">
                <Skeleton className="w-32 h-6 text-md mb-4" />
                <Skeleton className="w-full h-4 text-xs mb-2" />
                <Skeleton className="w-3/4 h-4 text-xs mb-2" />
                <Skeleton className="w-5/6 h-4 text-xs mb-2" />
                <div className="w-full h-6 justify-self-end flex justify-end gap-2 mt-auto">
                    <Skeleton className="w-5 h-5" />
                    <Skeleton className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}

export function ProjectsSkeleton() {
    return (
        <div className="w-full flex flex-wrap gap-[16px]">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
        </div>
    );
}
