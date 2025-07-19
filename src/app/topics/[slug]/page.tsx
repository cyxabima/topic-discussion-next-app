import { PostCreateForm } from '@/components/posts/post-create-form';
import { Button } from '@/components/ui/button';
import React from 'react'
type TopicShowPageProps = {
    params: Promise<{ slug: string }>
}

const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
    const { slug } = await params;
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3'><h1>{slug}</h1></div>
            <div>
                <PostCreateForm slug={slug} />
            </div>
        </div>
    )
}

export default TopicShowPage