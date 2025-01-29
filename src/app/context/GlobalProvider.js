"use client"
import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getProducts() {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    const filterByCategory = async (category) => {
        await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    const sortProduct = async (direction) => {
        await fetch(`https://fakestoreapi.com/products?sort=${direction}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    React.useEffect(() => {
        getProducts();

    }, [])

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id == item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }




    const contextValue = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        products,
        filterByCategory,
        sortProduct
    }


    return (
        <GlobalContext.Provider
            value={contextValue}
        >
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);