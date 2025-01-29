"use client"

import { useGlobalState } from '@/app/context/GlobalProvider';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { BsArrowDown, BsArrowDownRight, BsArrowUp } from "react-icons/bs";


export const ProductFilter = () => {

    const [categoryActive, setCategoryActive] = useState("all")
    const { filterByCategory, sortProduct } = useGlobalState()
    const [filterItem, setFilterItem] = useState([])

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setFilterItem(json))
    }

    useEffect(() => {
        getCategories()
    }, []);

    const onHandleClick = (value: string) => {
        setCategoryActive(() => value)
        filterByCategory(value)
    }

    const handleSort = (direction: string) => {
        sortProduct(direction)
    }

    const pathname = usePathname()


    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-4xl mb-4 text-primary">Tous nos produits</h3>
                {pathname === '/' && <a href='/products' className='group flex items-center hover:text-primary '>
                    <BsArrowDownRight className='rounded-full transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 group-hover:text-primary' />
                </a>}
            </div>

            <hr className="" />

            <div className="flex items-center justify-between">
                <div className='flex gap-4 mt-4'>
                    {filterItem.map((item, index) => (
                        <div className="group" key={index}>
                            <button className='' onClick={() => onHandleClick(item)} >
                                {item}
                            </button>
                            <div className={` ${categoryActive == item ? 'w-full bg-primary' : 'w-0'} h-1 group-hover:w-full group-hover:bg-primary transition-all duration-500`}  ></div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <h3 className='text-sm font-light'>Trier par Prix</h3>
                    <div className="flex gap-2">
                        <button className='group' onClick={() => handleSort('asc')}> <BsArrowUp className='group-hover:text-primary transition-all duration-500' /> </button>
                        <button className='group' onClick={() => handleSort('desc')}> <BsArrowDown className='group-hover:text-primary transition-all duration-500' /> </button>
                    </div>
                </div>
            </div>
        </>
    )
}
