import React from 'react'
import Logo from './Logo'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { BsArrowDownRight } from "react-icons/bs";
import { SubscriptionForm } from './SubscriptionForm';

const socials = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaTiktok />, url: '#' },
    { icon: <FaYoutube />, url: '#' },
]

const address = {
    address: '123 Street, City, State, ZIP',
    phone: '+1 123 456 7890',
    email: 'info@example.com',
}

const navLinks = [
    { label: 'Accueil', url: '/' },
    { label: 'Produits', url: '/products' },
    { label: 'A propos', url: '/about' },
    { label: 'Contact', url: '/contact' },
]

const categories = [
    { label: 'Hommes', url: '/category/1' },
    { label: 'Femmes', url: '/category/2' },
    { label: 'Enfants', url: '/category/3' },
    { label: 'Costumes ', url: '/category/4' },
    { label: 'Chaussures', url: '/category/5' },
]

export const Footer = () => {
    return (
        <>
            <div className='bg-green-200 w-full rounded-xl px-4 py-4 flex w-full justify-between'>

                <div className="">
                    <Logo className="text-6xl" />
                    <h3 className='mt-3'>Retrouvez-nous dès maintenant!</h3>
                    <div className="">
                        <h4 className='text-sm'>Adresse : {address.address} </h4>
                        <p className='text-sm mt-1'>Téléphone : {address.phone} </p>
                        <p className='text-sm mt-1'>Email : {address.email} </p>
                    </div>
                </div>

                <div className="">
                    <h3 className='font-bold text-xl'>Liens utiles</h3>
                    <ul className="">
                        {navLinks.map((link, index) => (
                            <li key={index} className='group flex items-center gap-2 hover:text-primary'>
                                <BsArrowDownRight className='rounded-full transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 group-hover:text-primary' />
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h3 className='font-bold text-xl'>Catégories</h3>
                    <ul className="">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <a href={category.url} className='group flex items-center gap-2 hover:text-primary'>
                                    <BsArrowDownRight className='rounded-full transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 group-hover:text-primary' />
                                    {category.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="flex flex-col gap-2">
                    <h3 className='font-bold text-xl'>Rejoignez la newsletter</h3>
                    <SubscriptionForm />

                    <ul className="flex gap-3">
                        {socials.map((social, index) => (
                            <li key={index} className='bg-white w-[30px] flex items-center justify-center h-[30px] rounded-full'>
                                <a href={social.url}>{social.icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="w-full rounded-xl py-2 bg-black text-center text-white">
                Copyright &copy; - 2025. Tous droits réservés
            </div>
        </>
    )
}
