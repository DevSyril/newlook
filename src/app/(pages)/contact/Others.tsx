import React from 'react'
import { FaLocationPin } from "react-icons/fa6";

export default function Others() {
    const shops = [
        {
            name: 'Annexe 1',
            location: 'Agoe Zongo',
            logo: '/assets/images/location.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur, facilis incidunt, cum ex enim dolorem laudantium harum voluptatibus hic sapiente quo fugiat corporis. Beatae voluptate optio dolores totam quidem."
        },
        {
            name: 'Annexe 1',
            location: 'Agoe Zongo',
            logo: '/assets/images/location.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur, facilis incidunt, cum ex enim dolorem laudantium harum voluptatibus hic sapiente quo fugiat corporis. Beatae voluptate optio dolores totam quidem."
        },
        {
            name: 'Annexe 1',
            location: 'Agoe Zongo',
            logo: '/assets/images/location.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur, facilis incidunt, cum ex enim dolorem laudantium harum voluptatibus hic sapiente quo fugiat corporis. Beatae voluptate optio dolores totam quidem."
        },
        {
            name: 'Annexe 1',
            location: 'Agoe Zongo',
            logo: '/assets/images/location.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, pariatur, facilis incidunt, cum ex enim dolorem laudantium harum voluptatibus hic sapiente quo fugiat corporis. Beatae voluptate optio dolores totam quidem."
        },
    ]
    return (
        <div className='grid grid-cols-4 gap-4 mt-8'>
            {shops.map((items, index) => (
                <div className="aspect-[4/5] w-full relative" key={index}>
                    <img src={items.logo} alt="" className="w-full h-full rounded-xl blur-[2px] " />
                    <div className="flex flex-col px-2 py-2 rounded-xl absolute bottom-1 mr-1 ml-1 bg-slate-100 ">
                        <h3 className="text-2xl font-bold">{items.name}</h3>
                        <div className="flex items-center gap-2">
                            <FaLocationPin className="text-primary" />
                            <span>{items.location}</span>
                        </div>
                        <p className='text-xs font-light'>{items.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
