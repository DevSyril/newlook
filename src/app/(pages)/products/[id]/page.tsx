"use client"

import { useGlobalState } from '@/app/context/GlobalProvider';
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function page({ params }: { params: { id: String } }) {

  const [products, setProducts] = useState([])
  const [related, setRelated] = useState([])
  const { id } = React.use(params)

  const { cartItems, addToCart, removeFromCart } = useGlobalState();


  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProducts(json))

  }, [products])


  return (
    <div>
      <h1 className='text-6xl font-extrabold text-transparent text-outline'> {products.title} </h1>

      <div className="flex gap-6 mt-6 ">
        <div className="max-w-[150px] flex  flex-col gap-4">
          <img src={products.image} alt="" className='border-2 border-primary aspect-square rounded-xl px-2 py-2' />
          <img src={products.image} alt="" className='border-2 border-primary aspect-square rounded-xl px-2 py-2' />
          <img src={products.image} alt="" className='border-2 border-primary aspect-square rounded-xl px-2 py-2' />
        </div>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="aspect-square">
            <img src={products.image} alt="" className='aspect-square' />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl"> {products.title} </h2>
            <h2 className="">{products.description}</h2>
            <h3 className="">Prix: <span className="font-bold text-primary text-xl">{products.price} $</span></h3>
            <h3 className="">Categorie: {products.category} </h3>


            <div className="flex items-center bg-white rounded-full px-1 py-1 border-primary border-2 w-fit min-w-[120px] justify-between">
              <button className='rounded-full w-[20px] h-[20px] bg-primary text-black tranistion-all duration-500 hover:text-white flex items-center justify-center' onClick={() => removeFromCart(products.id)}
                disabled={cartItems[products.id] == 0}
              >
                <FaMinus className='text-xs' />
              </button>
              <input type="text" placeholder={cartItems[products.id] ? cartItems[products.id] : "0"} readOnly className='border-none outline-none text-center max-w-[30px] text-xs' />
              <button className='rounded-full w-[20px] h-[20px] bg-primary text-black tranistion-all duration-500 hover:text-white flex items-center justify-center' onClick={() => addToCart(products.id)}>
                <FaPlus className='text-xs' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
