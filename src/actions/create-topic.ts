"use server"
import { auth } from "@/auth";
import { Topic } from "../generated/prisma";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

const createTopicSchema = z.object({
    name: z.string().regex(/^[a-z]+$/, { message: "must be lower case with out spaces" }),
    description: z.string().min(12, { message: "description must be more that 12 character" })
});

type createTopicFormState = {
    errors: {
        name?: string[],
        description?: string[]
        formError?: string[]
    }
}

const createTopic = async (prevState: createTopicFormState, formData: FormData): Promise<createTopicFormState> => {
    const result = createTopicSchema.safeParse(
        {
            name: formData.get('name'),
            description: formData.get('description')
        })

    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors }
    }

    const session = await auth();
    if (!session || !session.user) {
        return {
            errors: {
                formError: ["You have to login first"]
            }
        }
    }

    let topic: Topic;
    try {
        const topicExits = await prisma.topic.findUnique({ where: { slug: result.data.name } })
        if (topicExits) {
            return {
                errors: { formError: ["topic already exits"] }
            }
        }

        topic = await prisma.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })

    } catch (error) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message]
                }
            }
        } else {

            return {
                errors: {
                    formError: ["something went wrong"]
                }
            }
        }
    }
    revalidatePath('/');
    redirect(`/topics/${topic.slug}`)

}


export default createTopic