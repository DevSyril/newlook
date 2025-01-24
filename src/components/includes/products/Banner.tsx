import React from 'react'
import { BsArrowDown } from "react-icons/bs";

export default function Banner() {

    const styles: { [key: string]: React.CSSProperties } = {
        banner: {
            backgroundImage: "url('/assets/images/banner-3.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }
    };

    return (
        <div className="aspect-[4/2] flex rounded-xl" style={styles.banner}>
            <div className='flex w-full h-full rounded-xl flex justify-center items-center flex-col gap-8 px-[100px] bg-black opacity-60'>
                <h1 className="text-8xl font-extrabold text-outline-third text-transparent text-center">
                    Habillez-vous avec style / avec nos vêtements !
                </h1>
                <a href='/products' className='group text-white font-bold text-2xl flex items-center gap-3 bg-primary py-3 px-4 text-sm rounded-full'>
                    <BsArrowDown className='text-white text-xl font-extrabold' />
                </a>
            </div>
        </div>
    )
}
