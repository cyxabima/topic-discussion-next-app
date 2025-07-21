import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'

type PostListProps = {
    fetchPost: () => Promise<PostWithData[]>
}
const PostList: React.FC<PostListProps> = async ({ fetchPost }) => {
    const posts = await fetchPost();
    if (posts.length == 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>
                        No Post Found
                    </CardTitle>
                </CardHeader>
            </Card>
        )
    }
    return (
        <div className='flex flex-col gap-2'>
            {
                posts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <Link href={`/topics/${post.topic.slug}/posts/${post.id}`}>
                                <CardTitle>
                                    {post.title}
                                </CardTitle>
                            </Link>
                            <CardDescription className='flex items-center justify-between'>
                                <div className='flex justify-center items-center gap-5'>
                                    <div className=' flex items-center gap-2'>

                                        <Avatar className=''>
                                            <AvatarImage src={post.user.image || ""} />
                                            <AvatarFallback></AvatarFallback>
                                        </Avatar>
                                        <h1>
                                            {post.user.name}
                                        </h1>
                                    </div>
                                </div>
                                <h1>{post._count.comments} comments</h1>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))
            }
        </div>
    )
}

export default PostList