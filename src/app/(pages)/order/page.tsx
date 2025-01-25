"use client"

import React from 'react'
import './style.css'
import { useGlobalState } from '@/app/context/GlobalProvider';

export default function page() {
  
    const { cartItems, removeFromCart, getTotalCartAmount } = useGlobalState();
  
  return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Informations de commande</p>
          <div className='multi-fields'>
            <input type='text' placeholder='Prénom' />
            <input type='text' placeholder='Nom de famille' />
          </div>
          <input type='text' placeholder='Adresse Email ' />
          <input type='text' placeholder='Rue' />
          <div className='multi-fields'>
            <input type='text' placeholder='Ville' />
            <input type='text' placeholder='Etat' />
          </div>
          <div className='multi-fields'>
            <input type='text' placeholder='Code ZIP' />
            <input type='text' placeholder='Pays' />
          </div>
          <input type='text' placeholder='Numero de téléphone' />
        </div>
        <div className='place-order-right'>
          <div className='cart-total'>
            <h2>Total achat</h2>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{getTotalCartAmount()} $</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Frais de livraison</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} $</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Total</p>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} $</p>
            </div>
            <hr />
            <button >PROCEDER AU PAIMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}
