import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Others from './Others';

export default function page() {

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


  return (
    <div className='flex flex-col gap-[60px] '>
      <div className="flex aspect-[4/1] bg-yellow-500 items-end px-6 py-6 rounded-xl ">
        <h1 className='text-6xl font-extrabold text-transparent text-outline-second'>Contactez-nous</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <img src="/assets/images/location.jpg" alt="" className='w-full aspect-[4/3] h-full rounded-xl' />
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-extrabold text-outline text-transparent">Où nous trouver ?</h3>
          <p className='leading-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis odio eveniet officiis non mollitia repellendus pariatur quasi nisi vero nemo possimus fugit vel fuga saepe laudantium, necessitatibus ipsam ipsa?</p>
          <h4 className='text-md'>Adresse : {address.address} </h4>
          <p className='text-sm mt-1'>Téléphone : {address.phone} </p>
          <p className='text-sm mt-1'>Email : {address.email} </p>
          <ul className="flex flex-col gap-3">
            {socials.map((social, index) => (
              <li key={index} className='bg-white w-[30px] flex items-center justify-center h-[30px] rounded-full'>
                <a href={social.url}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <h3 className="text-4xl text-transparent text-outline font-estrabold text-center">Nos autres Boutiques</h3>

        <Others />
      </div>
    </div>
  )
}
