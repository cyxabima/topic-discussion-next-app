import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentsList from '@/components/comments/comments-list';
import PostDetailSkeleton from '@/components/posts/post-detail-skeleton';
import PostShow from '@/components/posts/post-show';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react'

async function PostShowPage({ params }: { params: Promise<{ slug: string, postId: string }> }) {
    const { slug, postId } = await params;
    return (
        <div className='space-y-3 p-4'>
            <Link href={`/topics/${slug}`}>
                <Button variant={'link'}>
                    <ChevronLeft />
                    Back to {slug}
                </Button>
            </Link>
            <div className='px-4'>

                <Suspense fallback={<PostDetailSkeleton />}>

                    <PostShow postId={postId} />

                    <CommentCreateForm postId={postId} />

                    <CommentsList postId={postId} />
                </Suspense>
            </div>

        </div >
    )
}

export default PostShowPage