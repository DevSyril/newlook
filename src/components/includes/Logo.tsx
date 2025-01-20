import React from 'react'

export default function Logo({className} : any) {
    return (
        <div>
            <h2 className={`${className} font-extrabold text-transparent text-2xl logo`}>
                <span className='text-outline'>New</span>
                <span className='text-outline-second'>Look</span>
            </h2>
        </div>
    )
}
