import { prisma } from ".."

const fetchTopic = async () => {
    return await prisma.topic.findMany({
        orderBy: {
            posts: { _count: "desc" }
        },
        include: {
            _count: { select: { posts: true } }
        }
    })
}

export default fetchTopic