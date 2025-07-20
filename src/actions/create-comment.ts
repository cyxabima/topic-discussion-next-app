"use server"

import { auth } from '@/auth'
import { prisma } from '@/lib'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const createCommentSchema = z.object({
    comment: z.string().min(3)
})

type CreateCommentState = {
    errors: {
        comment?: string[],
        formError?: string[]

    }
}

const createComment = async ({ postId, parentId }: { postId: string; parentId?: string }, prevState: CreateCommentState, formData: FormData): Promise<CreateCommentState> => {
    const result = createCommentSchema.safeParse({
        comment: formData.get('comment')
    })

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors }
    }

    const session = await auth();

    if (!session || !session?.user || !session.user.id) {
        return {
            errors: { formError: ["Login to create comment"] }
        }
    }

    try {
        const comment = await prisma.comment.create({
            data: {
                postId,
                parentId,
                userId: session.user.id,
                content: result.data.comment
            }
        })

    } catch (error) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        }
        else {
            return { errors: { formError: ["something went wrong"] } }
        }
    }

    const topic = await prisma.topic.findFirst({
        where: {
            posts: {
                some: { id: postId }
            }
        }
    })
    if (!topic) {
        return {
            errors: {
                formError: ["Failed to revalidate path"]
            }
        }
    }

    revalidatePath(`/topics/${topic.slug}/posts/${postId}`)

    return { errors: {} }
}

export default createComment