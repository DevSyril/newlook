"use client"

import { useToast } from '@/hooks/use-toast'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa6'

export const SubscriptionForm = () => {

    const { toast } = useToast()

    const [email, setEmail] = React.useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        toast({
            title: "Abonnement effectué !",
            description: "Merci de vous être abonné à la Newsletter",
            duration: 3000,fv
        })

        setEmail('')
    }

    return (
        <form className="flex gap-2 border-box justify-between" onSubmit={handleSubmit}>
            <input type="email" placeholder='Adresse email ...' className="outline-transparent outline-0 rounded-full px-2 border-primary border-[1px] h-[40px] text-xs text-gray-400 w-full border-box" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className='bg-primary w-full h-full flex items-center justify-center rounded-full w-full max-w-[40px] '>
                <FaPaperPlane className='text-white' />
            </button>
        </form>
    )
}
