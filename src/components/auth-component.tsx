"use client";
import React from 'react'
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';
import signIn from '@/actions/sign-in';
import { Avatar } from './ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Separator } from './ui/separator';
import signOut from '@/actions/sign-out';

function AuthComponent() {
    const session = useSession();
    let authContent: React.ReactNode;

    // if (!session.data?.user) {
    //     return null
    // }


    if (session.data?.user) {

        return (
            authContent = (<Popover>
                <PopoverTrigger>
                    <Avatar>
                        <AvatarImage src={session.data.user.image || ""} />
                        <AvatarFallback>{session.data.user.name?.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='bg-gray-50 p-4 rounded flex flex-col'>
                        <span>{session.data.user.name}</span>
                        <span>{session.data.user.email}</span>
                        <Separator className="my-4" />
                        <form action={signOut}>
                            <Button type='submit'>logout</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>)
        )
    }
    else {
        authContent = (
            <>
                <form action={signIn}>
                    <Button variant={"outline"}>
                        Sign In
                    </Button>
                </form>

                <form action={signIn}>
                    <Button >
                        Sign Up
                    </Button>
                </form>
            </>
        )
    }

    return authContent

}

export default AuthComponent