import { PostCreateForm } from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { Button } from '@/components/ui/button';
import { fetchPostByTopicSlug } from '@/lib/query/post';
import React from 'react'
type TopicShowPageProps = {
    params: Promise<{ slug: string }>
}

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
    const { slug } = await params;
    return (
        <div className='grid grid-cols-4 p-4'>
            <div className='col-span-3'>
                <h1 className='text-xl font-semibold mb-1'>{slug.toUpperCase()}</h1>
                <PostList fetchPost={() => fetchPostByTopicSlug(slug)} />
            </div>
            <div>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    )
}

export default TopicShowPage