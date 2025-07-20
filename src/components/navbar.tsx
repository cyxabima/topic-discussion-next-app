import React from 'react'
import AuthComponent from './auth-component';
import SearchComponents from './search';

function Navbar() {
    return (
        <nav className="grid grid-cols-3 h-12 items-center">
            <div className="flex justify-start"><h1 className="text-2xl font-bold">Discuss<span className="text-red-500">.</span></h1></div>
            <div className="flex justify-center">
                <SearchComponents />
            </div>

            <div className="flex justify-end gap-2">
                <AuthComponent />
            </div>
        </nav>
    )
}

export default Navbar