import type { Comment } from "@/generated/prisma"
import { prisma } from ".."
import { cache } from "react"
type CommentType = Comment & {
    user: {
        name: string | null,
        image: string | null
    }
}

const fetchCommentByPostId = cache(async ({ postId }: { postId: string }): Promise<CommentType[]> => {
    const comment = await prisma.comment.findMany({
        where: {
            postId
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }

            }
        }
    });

    return comment
});

export { fetchCommentByPostId }
