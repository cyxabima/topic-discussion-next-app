import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { Button } from './ui/button'
import fetchTopic from '@/lib/query/topic';
import Link from 'next/link';

const TopicComponent = async () => {
    const topics = await fetchTopic();
    return (
        <div className='my-4'>
            <h1 className='text-center text-xl font-semibold'>Topics</h1>
            <div>

                {topics.map((topic) => (
                    <HoverCard key={topic.id}>
                        <HoverCardTrigger asChild>
                            <Link href={`/topics/${topic.slug}`}>
                                <Button variant="link">@{topic.slug}</Button>
                            </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between gap-4">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@{topic.slug}</h4>
                                    <p className="text-sm">
                                        {topic.description}
                                    </p>
                                    <div className="text-muted-foreground text-xs flex flex-col">
                                        <p>
                                            Total Post {topic._count.posts}
                                        </p>
                                        <p>
                                            Created At: {topic.createdAt.toDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                ))}
            </div>

        </div>
    )
}

export default TopicComponent 