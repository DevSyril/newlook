import React from 'react'
import Logo from './Logo'
import { Menu } from './Menu'
import { Button } from '../ui/button'
import { FaBagShopping, FaMagnifyingGlass } from 'react-icons/fa6'


export const Header = () => {
  return (
    <div className="mt-2 ">
      <div className='flex justify-between w-full items-center'>
        <Logo />
        <Menu />

        <form action="" method="post" className='flex items-center gap-2 py-1 px-4 border-2 border-gray-400 rounded-full'>
          <input type="text" placeholder="Rechercher..." className='outline-transparent' />
          <button type="submit" className=''>
            <FaMagnifyingGlass />
          </button>
        </form>

        <div className="flex items-center gap-4">
          <button className='flex relative'>
            <FaBagShopping size={24} />
            <span className={`absolute index-10 bg-red-400 w-[14px] h-[14px] rounded-full text-[8px] flex justify-center items-center text-center top-0 right-0`}>0</span>
          </button>

          <Button className='rounded-full text-white font-bold'>
            Connexion
          </Button>
        </div>

      </div>
      <hr className="mt-2" />
    </div>
  )
}
