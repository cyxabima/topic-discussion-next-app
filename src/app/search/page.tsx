import PostList from '@/components/posts/post-list';
import { fetchPostBySearch } from '@/lib/query/post';
import React from 'react'

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ term: string }> }) => {
    const { term } = (await searchParams);

    return (
        <div>
            <h1 className='text-blue-600 font-medium italic'>Search Result for {term} </h1>
            <PostList fetchPost={() => fetchPostBySearch(term)} />
        </div>
    )
}

export default SearchPage