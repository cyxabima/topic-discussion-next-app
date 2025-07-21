import React, { Suspense } from 'react'
import AuthComponent from './auth-component';
import SearchComponents from './search';
import Link from 'next/link';
import MobileNav from './mobile-navbar';

function Navbar() {
    return (
        <nav className="grid grid-cols-2 sm:grid-cols-3 h-12 items-center">
            <div className="flex justify-start">
                <Link href={'/'}>
                    <h1 className="text-2xl font-bold text-primary">Discuss<span className="text-red-500">.</span></h1>
                </Link>
            </div>
            <div className=" hidden sm:flex justify-center">
                <Suspense>
                    <SearchComponents />
                </Suspense>
            </div>

            <div className="hidden sm:flex justify-end gap-2">
                <AuthComponent />
            </div>
            {/* nav bar burger */}
            <div className='flex justify-end sm:hidden'>
                <Suspense>
                    <MobileNav />
                </Suspense>
            </div>
        </nav>
    )
}

export default Navbar