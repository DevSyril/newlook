import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export const Offer = () => {
    return (
        <div className='radial rounded-xl px-6 py-6 mt-4 mb-10 flex items-center gap-[40px] '>
            <div className="flex flex-col gap-6 max-w-[60%] h-full">
                <span className="text-8xl text-transparent text-outline">- 20%</span>
                <span className="text-6xl font-extrabold text text-transparent text-outline"> De Réduction sur</span>
                <span className="text-6xl text-transparent text-outline font-extrabold">Le premier achat !</span>
                <div className="">
                    <p className="mt-2 text-xs font-light text-white leading-6">Découvrez nos produits de qualité et faites des économies dès maintenant. Ne manquez pas cette occasion de vous faire plaisir à petit prix. Ajoutez vos articles préférés à votre panier et bénéficiez de cette remise exceptionnelle dès votre première commande !</p>

                    <button className="group rounded-full text-white font-bold px-3 py-2 bg-primary hover:opacity-80 transition-all duration-500 flex items-center gap-2 w-fit mt-5">
                        Commander Maintenant
                        <FaCartShopping className="text-xl" />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <img src="/assets/images/retail.svg" alt="Image du produit" className='w-full' />
            </div>
        </div>
    )
}
