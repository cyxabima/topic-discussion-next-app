"use client"
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import SearchComponents from './search';
import AuthComponent from './auth-component';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='flex justify-end fixed z-20 sm:hidden'>
                <button onClick={toggleMenu} className="focus:outline-none">
                    {
                        isOpen ? <X /> : <Menu />
                    }
                </button>

            </div>

            <div className={`fixed sm:hidden top-0 right-0 pt-12 px-4 h-screen bg-secondary transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <h3 className='font-semibold text-lg'>Menu</h3>
                <div className="flex flex-col items-center space-y-4">
                    <SearchComponents />
                    <AuthComponent />
                </div>
            </div>
        </>
    )
}

export default MobileNav