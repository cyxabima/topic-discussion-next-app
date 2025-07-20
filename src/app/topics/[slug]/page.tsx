import { PostCreateForm } from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { Button } from '@/components/ui/button';
import { fetchPostByTopicSlug } from '@/lib/query/post';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
type TopicShowPageProps = {
    params: Promise<{ slug: string }>
}

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
    const { slug } = await params;
    return (
        <div className='grid grid-cols-1 gap-4  sm:grid-cols-4 p-1 sm:p-4'>
            <div className='col-span-full sm:col-span-3'>
                <Link href={`/`}>
                    <Button variant={'link'}>
                        <ChevronLeft />
                        Back to Home
                    </Button>
                </Link>
                <div className='px-4'>
                    <h1 className='text-xl font-semibold mb-1'>{slug.toUpperCase()}</h1>
                    <PostList fetchPost={() => fetchPostByTopicSlug(slug)} />
                </div>
            </div>
            <div className='col-span-full  flex justify-end px-4  sm:col-span-1 sm:justify-start'>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    )
}

export default TopicShowPage