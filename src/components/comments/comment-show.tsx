import { fetchCommentByPostId } from '@/lib/query/comment';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import CommentCreateForm from './comment-create-form';


const CommentShow = async ({ postId, commentId }: { postId: string; commentId: string }) => {

    const comments = await fetchCommentByPostId({ postId })
    const comment = comments.find(c => c.id == commentId)
    if (!comment) return null;

    const children = comments.filter((c) => c.parentId == commentId)
    return (

        <div className='my-4 p-2 md:m-4 sm:p-4 border rounded-lg'>
            <div className='flex gap-3'>
                <Avatar>
                    <AvatarImage src={comment.user.image || ""} />
                    <AvatarFallback>{comment.user.name?.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className='flex-1 space-y-3'>
                    <p className='text-gray-500 text-sm font-medium'>{comment.user.name}</p>
                    <p className='text-gray-800'>{comment.content}</p>
                    <CommentCreateForm postId={postId} parentId={comment.id} />
                </div>
            </div>
            {children.map((comment) => (
                <CommentShow key={comment.id} postId={postId} commentId={comment.id} />
            ))}
        </div>


    )
}

export default CommentShow