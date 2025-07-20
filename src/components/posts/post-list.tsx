import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type PostListProps = {
    fetchPost: () => Promise<PostWithData[]>
}
const PostList: React.FC<PostListProps> = async ({ fetchPost }) => {
    const posts = await fetchPost();
    return (
        <div className='flex flex-col gap-2'>
            {
                posts.map((post, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>
                                {post.title}
                            </CardTitle>
                            <CardDescription className='flex items-center justify-between'>
                                <div className='flex justify-center items-center gap-5'>
                                    <div className=' flex items-center'>

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