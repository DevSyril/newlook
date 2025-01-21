"use client"

import '../css/carousel.css';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { BsArrowDownRight } from 'react-icons/bs'
import { initializeStack } from "./carouselUtils";



const clientImages = [
    {
        src: '/assets/images/cl-a.png',
        alt: 'Client de New Look'
    },
    {
        src: '/assets/images/cl-b.png',
        alt: 'Client de New Look'
    },
    {
        src: '/assets/images/cl-c.png',
        alt: 'Client de New Look'
    },
    {
        src: '/assets/images/cl-d.png',
        alt: 'Client de New Look'
    }
]

const carrousel = [
    { src: '/assets/images/banner.png', alt: 'Image de New Look' },
    { src: '/assets/images/banner-2.jpg', alt: 'Image de New Look' },
    { src: '/assets/images/banner-3.jpg', alt: 'Image de New Look' },
    { src: '/assets/images/banner-4.jpg', alt: 'Image de New Look' },
]


export const Banner: React.FC = () => {

    const stackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cleanup = initializeStack(stackRef.current);

        return cleanup;
    }, []);


    return (
        <div className='bg-yellow-400 px-4 py-6 rounded-xl grid' style={{
            gridTemplateColumns: "1fr 1fr"
        }}>

            <div className="flex flex-col gap-4 h-full justify-end">
                <h1 className='font-extrabold text-outline-second text-transparent text-6xl'>
                    Redonnez vie à votre garde-robe !
                </h1>
                <p className='p font-light'>
                    Découvrez les dernières tendances mode et exprimez votre style avec notre collection unique. Des pièces modernes et intemporelles pour toutes vos envies vestimentaires.
                </p>


                <div className="flex gap-2">
                    <Button className='group rounded-full text-white font-bold'>
                        Nos collections
                        <BsArrowDownRight className='text-xl text-white group-hover:-rotate-45 transition-all duration-500' />
                    </Button>
                    <Button className='group rounded-full text-white font-bold opacity-50 hover:opacity-100'>
                        A propos
                        <BsArrowDownRight className='text-xl text-white group-hover:-rotate-45 transition-all duration-500' />
                    </Button>
                </div>

                <div className="flex items-end gap-2 mt-2">
                    <div className="flex -space-x-3 font-mono text-white text-sm font-bold leading-6 items-center">
                        {
                            clientImages.map((client, index) => (
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary shadow-lg ring-2 ring-white z-40" key={index}>
                                    01
                                </div>
                            ))
                        }
                    </div>
                    <span className="font-light text-xs"> + de 16.000 Clients ! </span>
                </div>
            </div>


            <div className="stack" ref={stackRef}>
                {
                    carrousel.map((item, index) => (
                        <Image src={item.src} alt={item.alt} width={400} height={400} className='card' key={index} />
                    ))
                }
            </div>

        </div>
    )
}
