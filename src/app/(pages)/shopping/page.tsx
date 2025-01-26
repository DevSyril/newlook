"use client"

import React, { useState } from 'react'
import './style.css'
import { useGlobalState } from '@/app/context/GlobalProvider';
import { useRouter } from 'next/navigation';

export default function page() {

    const { cartItems, products, removeFromCart, getTotalCartAmount } = useGlobalState();
    const [productList, setProductList] = useState([]);
    const router = useRouter()

    const getProducts = () => {
        const articles = []
        Object.entries(cartItems).forEach(([key, value]) => {
            let itemInfo = products.find((product) => product.id == key);
            articles.push({ ...itemInfo, quantity: value });
        });
        setProductList(articles);
    }

    React.useEffect(() => {
        getProducts();
    }, [cartItems, removeFromCart]);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Produits</p>
                    <p>Nom</p>
                    <p>Prix</p>
                    <p>Quantité</p>
                    <p>Total</p>
                    <p>Supprimer</p>
                </div>
                <br />
                <hr />
                {productList.length > 0 && productList.map((item, index) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-items'>
                                    <img src={item.image} alt='' />
                                    <p>{item.title}</p>
                                    <p>{item.price} $</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.price * item.quantity} $</p>
                                    <p onClick={() => removeFromCart(item.id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className='cart-bottom'>
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
                    <button className='px-4' onClick={() => router.replace('/order')} >PROCEDER AU PAIEMENT</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>Si vous avez un code promo, entrez-le ici!</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='promo code' />
                            <button>Soumettre</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
