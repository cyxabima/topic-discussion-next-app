import React, { Suspense } from 'react'
import AuthComponent from './auth-component';
import SearchComponents from './search';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="grid grid-cols-3 h-12 items-center">
            <div className="flex justify-start">
                <Link href={'/'}>
                    <h1 className="text-2xl font-bold">Discuss<span className="text-red-500">.</span></h1>
                </Link>
            </div>
            <div className="flex justify-center">
                <Suspense>
                    <SearchComponents />
                </Suspense>
            </div>

            <div className="flex justify-end gap-2">
                <AuthComponent />
            </div>
        </nav>
    )
}

export default Navbar