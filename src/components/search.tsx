"use client"
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation'
import search from '@/actions/search'

const SearchComponents = () => {
    const searchParams = useSearchParams();
    return (
        <form action={search}>
            <Input
                type='text'
                defaultValue={searchParams.get("term") || ''}
                placeholder="Search Post..."
                name='term'
            />
        </form>
    )
}

export default SearchComponents