"use client"

import React from 'react'
import './css/menu.css'
import { usePathname } from 'next/navigation'


const meunItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Produits', path: '/products' },
    { label: 'A propos', path: '/about' },
    { label: 'Contact', path: '/contact' },
]

export const Menu = () => {

  const pathname = usePathname()

  return (
    <div>
        <ul className='flex gap-4'>
          {meunItems.map((item, index) => (
            <li key={index} className={`menu-item ${pathname === item.path?'menu-item-active' : ''}`}>
              <a href={item.path}>{item.label}</a>
              <div className="item-underliner"></div>
            </li>
          ))}
        </ul>
    </div>
  )
}
