import { ProductsDisplay } from '@/components/includes/articles/ProductsDisplay'
import Banner from '@/components/includes/products/Banner'
import TopList from '@/components/includes/topProducts/TopList'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-[60px] '>
      <Banner />
      <TopList />
      <ProductsDisplay />
    </div>
  )
}
