import { prisma } from '@/lib'
import React from 'react'

type PostShowProp = {
    postId: string
}

const PostShow: React.FC<PostShowProp> = async ({ postId }) => {
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    });

    return (
        <div>
            <div className='font-bold my-2 text-xl'>{post?.title}</div>
            <div className='border rounded p-2 sm:p-4'>{post?.content}</div>
        </div>
    )
}

export default PostShow