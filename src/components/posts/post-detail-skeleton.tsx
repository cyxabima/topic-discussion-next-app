import { Skeleton } from "../ui/skeleton";


export default function PostDetailSkeleton() {
    return (
        <div className="space-y-3">
            {/* Back Button */}

            {/* Title Skeleton */}
            <Skeleton className="h-8 w-1/2" />

            {/* Content Skeleton */}
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />

            {/* Reply Button */}
            <Skeleton className="h-6 w-20" />

            {/* Comments */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-32" /> {/* All Comments heading */}

                {/* Comment item */}
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-1/2" />
                            <Skeleton className="h-4 w-16" /> {/* Reply */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
