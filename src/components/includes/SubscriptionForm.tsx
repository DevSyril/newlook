import React from 'react'
import { FaPaperPlane } from 'react-icons/fa6'

export const SubscriptionForm = () => {
    return (
        <form className="flex gap-2">
            <input type="email" placeholder='Adresse email ...' className="outline-transparent outline-0 rounded-full px-2 border-primary border-[1px] " />
            <button type="submit" className='bg-primary w-full h-full px-2 rounded-full'>
                <FaPaperPlane className='text-white' />
            </button>
        </form>
    )
}
