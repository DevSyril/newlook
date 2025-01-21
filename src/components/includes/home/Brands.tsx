import React from 'react'

export const Brands = () => {

    const brands = [
        {
            src: '/assets/images/1.png',
            alt: 'Brand 1',
        },
        {
            src: '/assets/images/2.png',
            alt: 'Brand 2',
        },
        {
            src: '/assets/images/3.png',
            alt: 'Brand 3',
        },
        {
            src: '/assets/images/4.png',
            alt: 'Brand 4',
        },
        {
            src: '/assets/images/5.png',
            alt: 'Brand 5',
        },
        {
            src: '/assets/images/6.png',
            alt: 'Brand 6',
        },
        {
            src: '/assets/images/7.png',
            alt: 'Brand 7',
        },
        {
            src: '/assets/images/8.png',
            alt: 'Brand 8',
        },
        {
            src: '/assets/images/9.png',
            alt: 'Brand 9',
        },
        {
            src: '/assets/images/10.png',
            alt: 'Brand 10',
        },
        {
            src: '/assets/images/11.png',
            alt: 'Brand 11',
        },
    ]

    const styles: { [key: string]: React.CSSProperties } = {
        grid: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr) )'
        }
    };


    return (
        <div className='mt-4'>
            <h3 className='font-bold text-3xl text-outline text-transparent text-center'>Retrouvez vos marques préférées ...</h3>

            <div className="grid gap-[30px] mt-6 px-[60px] " style={styles.grid}>
                {
                    brands.map((brand, index) => (
                        <div key={index} className='flex items-center justify-center border-2 aspect-square px-4 py-4 border-gray-200 rounded-xl '>
                            <img className='' src={brand.src} alt={brand.alt} title={brand.alt} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
