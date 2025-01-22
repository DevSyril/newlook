"use client"
import React, { useEffect, useRef, useState } from 'react'
import { ProductFilter } from './ProductFilter'
import { BsArrowDownRight } from 'react-icons/bs'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from 'lucide-react';


export const ProductsDisplay = () => {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [shopCart, setShopCart] = useState(0);
  const productsPerPage = 10;
  const isFirstRender = useRef(true);


  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setCurrentProducts(() => products.slice(startIndex, endIndex));

  }, [products])

  useEffect(() => {

    if (isFirstRender.current)
      isFirstRender.current = false;
    else
      document.getElementById("target")?.scrollIntoView({ behavior: "smooth", block: "start" });
    
  }, [currentPage])


  const totalPages = Math.ceil(products.length / productsPerPage);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 2fr))",
    }
  };


  return (
    <div id='target'>
      <ProductFilter />

      <div className="grid gap-4 mt-6" style={styles.container}>
        {currentProducts.map((item, index) => (
          <div className='w-full' key={index}>
            <div className="relative">
              <div className="bg-slate-100 px-2 py-2 rounded-xl ">
                <div className="relative">
                  <img alt={item.title} src={item.image} className='rounded-xl w-full aspect-square' />

                  <div className="flex items-center bg-white rounded-full absolute bottom-2 right-1 px-1 py-1 border-primary border-2">
                    <button className='rounded-full w-[20px] h-[20px] bg-primary text-black tranistion-all duration-500 hover:text-white flex items-center justify-center' onClick={() => setShopCart(() => shopCart - 1)} 
                    disabled={shopCart == 0}>
                      <FaMinus className='text-xs' />
                    </button>
                    <input type="text" value={shopCart} readOnly className='border-none outline-none text-center max-w-[30px] text-xs' />
                    <button className='rounded-full w-[20px] h-[20px] bg-primary text-black tranistion-all duration-500 hover:text-white flex items-center justify-center' onClick={() => setShopCart(() => shopCart + 1)}>
                      <FaPlus className='text-xs' />
                    </button>
                  </div>

                </div>
                <h3 className='text-sm font-bold truncate'>{item.title}</h3>
                <h4 className="text-primary font-bold"> {item.price} $US</h4>
                <span className="bg-green-400 px-2 py-1 rounded text-xs">
                  {item.category}
                </span>
              </div>
              <a href={`/products/${item.id}`} className="rounded-full w-50 h-50 flex items-center group justify-center bg-primary absolute bottom-4 right-4 p-2 shadow-md cursor-pointer transform hover:scale-110 opacity-60">
                <BsArrowDownRight className='text-xl group-hover:-rotate-45 tranistion-all duration-500' />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-8 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed  text-xs"
        >
          Précédent
        </button>
        <span className='border-2 border-primary rounded-full px-6 text-xs py-2'>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-100 rounded-full hover:bg-primary disabled:bg-gray-100 disabled:cursor-not-allowed text-xs transition-all duration-500 hover:text-white"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}
