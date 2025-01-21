"use client"

import React, { useState } from 'react'
import { BsArrowDownRight } from "react-icons/bs";


const filterItem = [
    {
        label: 'Toutes les catégories',
        value: 'all',
    },
    {
        label: 'Hommes',
        value: 'men',
    },
    {
        label: 'Femmes',
        value: 'women',
    },
    {
        label: 'Enfants',
        value: 'kids',
    },
    {
        label: 'Costumes',
        value: 'costumes',
    },
    {
        label: 'Chaussures',
        value: 'shoes',
    },
]


export const ProductFilter = () => {

    const [categoryActive, setCategoryActive] = useState("all")

    const onHandleClick = (value : string) => {
        setCategoryActive(() => value)
    }
    

    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-4xl mb-4 text-primary">Tous nos produits</h3>
                <button className='group flex items-center hover:text-primary '>
                    <BsArrowDownRight className='rounded-full transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 group-hover:text-primary' />
                </button>
            </div>

            <hr className="" />

            <div className='flex gap-4 mt-4'>
                <hr className='' />
                {filterItem.map((item, index) => (
                    <div className="group" key={index}>
                        <button className='' onClick={() => onHandleClick(item.value)} >
                            {item.label}
                        </button>
                        <div className={` ${categoryActive == item.value ? 'w-full bg-primary' : 'w-0'} h-1 group-hover:w-full group-hover:bg-primary transition-all duration-500`}  ></div>
                    </div>
                ))}
            </div>
        </>
    )
}
