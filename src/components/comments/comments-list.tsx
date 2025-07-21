import React from 'react'
import CommentShow from './comment-show'
import { fetchCommentByPostId } from '@/lib/query/comment'

const CommentsList = async ({ postId }: { postId: string }) => {
    const comments = await fetchCommentByPostId({ postId });
    const topLevelComment = comments.filter((comment) => comment.parentId == null)

    return (
        <div>
            <h1 className='font-bold text-lg'>
                All Comments
            </h1>
            {
                topLevelComment.map((comment) => (
                    <CommentShow key={comment.id} postId={postId} commentId={comment.id} />
                ))
            }
        </div>
    )
}

export default CommentsList