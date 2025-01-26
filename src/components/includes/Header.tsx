"use client"

import React from 'react'
import Logo from './Logo'
import { Menu } from './Menu'
import { Button } from '../ui/button'
import { FaBagShopping, FaMagnifyingGlass } from 'react-icons/fa6'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import { useClerk, UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export const Header = () => {

  const { signOut } = useClerk();

  const { user } = useUser();

  const { firstName, lastName, imageUrl } = user || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };

  const router = useRouter();

  return (
    <div className="mt-2 ">
      <div className='flex justify-between w-full items-center'>
        <Logo />
        <Menu />

        <form action="" method="post" className='flex items-center gap-2 py-1 px-4 border-[1px] border-primary rounded-full'>
          <input type="text" placeholder="Rechercher..." className='outline-transparent' />
          <button type="submit" className=''>
            <FaMagnifyingGlass />
          </button>
        </form>

        <div className="flex items-center gap-4">
          <button className='flex relative' onClick={() => router.replace('/shopping') }>
            <FaBagShopping size={24} />
            <span className={`absolute index-10 bg-red-400 w-[14px] h-[14px] rounded-full text-[8px] flex justify-center items-center text-center top-0 right-0`}>0</span>
          </button>

          {user ?
            <div className="flex gap-2 items-center">
              <UserButton />
              <h1 className="text-xs font-light">
                {firstName} {lastName}
              </h1>
            </div>
            :
            <Link href={'/signin'} className='rounded-full text-white font-bold bg-primary py-1 px-3'>
              Connexion
            </Link>
          }

        </div>

      </div>
      <hr className="mt-2" />
    </div>
  )
}
