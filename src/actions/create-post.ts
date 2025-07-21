"use server"

import { auth } from '@/auth';
import { Post } from '../generated/prisma';
import { prisma } from '@/lib';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';


const createPostSchema = z.object({
    title: z.string().min(4, { message: "tile must be more than 4 character" }),
    content: z.string().min(10, { message: "content must be more than 10 character" })
})

type createPostFormState = {
    errors: {
        title?: string[],
        content?: string[],
        formError?: string[]
    }
}

const createPost = async (slug: string, prevState: createPostFormState, formData: FormData): Promise<createPostFormState> => {
    const result = createPostSchema.safeParse({
        title: formData.get("title"),
        content: formData.get("content"),
    })

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors }
    }

    const session = await auth()

    if (!session?.user || !session.user.id) {
        return {
            errors: {
                formError: ["login is required to create post"]
            }
        }
    }

    let post: Post;
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: session.user.id
            }
        })

        if (!user) {
            return {
                errors: {
                    formError: ["can't find the user "]
                }
            }
        }

        const topic = await prisma.topic.findFirst({
            where: {
                slug: slug
            }
        })

        if (!topic) {
            return {
                errors: {
                    formError: ["Topic not found"]
                }
            }
        }

        post = await prisma.post.create({
            data: {
                title: result.data.title,
                content: result.data.content,
                userId: user.id,
                topicId: topic.id

            }
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        } else {
            return {
                errors: {
                    formError: ["oops something went wrong"]
                }
            }
        }
    }

    revalidatePath(`/topics/${slug}`)
    redirect(`/topics/${slug}/posts/${post.id}`)
}

export default createPost