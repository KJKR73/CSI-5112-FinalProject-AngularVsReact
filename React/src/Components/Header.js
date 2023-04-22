import React from 'react'

function Header() {
    return (
        <div className='flex w-full bg-blue-200 md:justify-between justify-center sticky shadow-lg px-4 py-3 text-neutral-600 font-semibold hover:text-neutral-900 mb-2 border-b-2 border-blue-300 shadow-cyan-100'>
            <h1 className='hidden md:block'>Software Engineering</h1>
            <div className=''>REACT IMPLEMENTATION</div>
            <a className='hidden md:block hover:underline' href="https://github.com">Github Repository</a>
        </div>
    )
}

export default Header