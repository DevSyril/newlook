"use client"
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { BsArrowDownRight } from "react-icons/bs";


export default function TopList() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const response = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [products])


    return (
        <div className='flex flex-col w-full'>
            <Carousel className="w-full px-2"  >
                <div className="flex justify-between items-center mb-4 ">
                    <h3 className='text-3xl font-bold text-primary '>Les Top produits de la semaine ...</h3>
                    <div className="flex gap-2 justify-end mb-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className="w-full box flex">
                    {products.map((item, index)  => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5 ml-4 relative">
                            <div className="bg-slate-100 px-2 py-2 rounded-xl ">
                                <img alt={item.title} src={item.image} className='rounded-xl w-full aspect-square' />
                                <h3 className='text-sm font-bold truncate'>{item.title}</h3>
                                <h4 className="text-primary font-bold"> {item.price} $US</h4>
                                <span className="bg-green-400 px-2 py-1 rounded text-xs">
                                    {item.category}
                                </span>
                            </div>
                            <a href='' className="rounded-full w-50 h-50 flex items-center group justify-center bg-primary absolute bottom-4 right-4 p-2 shadow-md cursor-pointer transform hover:scale-110">
                                <BsArrowDownRight className='text-xl group-hover:-rotate-45 tranistion-all duration-500' />
                            </a>
                        </CarouselItem>
                    ))}


                </CarouselContent>
            </Carousel>
        </div>
    )
}
