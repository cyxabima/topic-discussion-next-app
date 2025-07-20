"use client"
import React, { useActionState, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import createComment from '@/actions/create-comment'
import { Loader2 } from 'lucide-react'

const CommentCreateForm = ({ postId, parentId, stateOpen }: { postId: string; parentId?: string; stateOpen?: boolean }) => {
    const [open, setOpen] = useState(stateOpen)
    const [formState, action, isPending] = useActionState(createComment.bind(null, { postId, parentId }), { errors: {} })
    return (
        <div>
            <Button size={'sm'} variant={'link'} onClick={() => setOpen(!open)}>Reply</Button>
            {open &&
                <form action={action} className='space-y-2' onSubmit={() => setOpen(false)}>
                    <Textarea
                        placeholder='write a comment...'
                        className='bg-gray-100 focus-visible:ring-0'
                        name='comment'
                    />
                    {formState.errors.comment && <p className="text-sm text-red-600">{formState.errors.comment}</p>}
                    {formState.errors.formError && <div className="text-sm bg-red-500 mb-3 p-2 text-white rounded font-semibold">{formState.errors.formError}</div>}
                    <Button disabled={isPending} type='submit' size={'sm'} variant={'secondary'}>
                        {
                            isPending ? <div className='flex gap-1 items-center'>
                                <Loader2 className='animate-spin' />
                                please wait
                            </div>
                                : "save"
                        }

                    </Button>
                </form>}
        </div>
    )
}

export default CommentCreateForm