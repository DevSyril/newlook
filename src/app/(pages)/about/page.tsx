import React from 'react'
import { BsArrowDown } from "react-icons/bs";
import { FaPeopleGroup, FaGem, FaLeaf,FaHeadset } from "react-icons/fa6";

export default function page() {

  const styles: { [key: string]: React.CSSProperties } = {
    banner: {
      backgroundImage: "url('/assets/images/banner-2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }
  };

  const missions = [
    {
      icon: <FaPeopleGroup className='text-6xl' /> ,
      title: 'Style pour tous.',
      description: 'Nous croyons que la mode doit être accessible à tous, quels que soient les goûts, les tailles ou les budgets.'
    },
    {
      icon: <FaGem className='text-6xl' /> ,
      title: 'Qualité et confort.',
      description: 'Chaque pièce de nos collections est conçue avec soin pour garantir un équilibre parfait entre élégance, durabilité et confort.'
    },
    {
      icon: <FaLeaf className='text-6xl' /> ,
      title: 'Mode Responsable.',
      description: 'Nous nous engageons à adopter des pratiques respectueuses de l’environnement en sélectionnant des matériaux durables et éthiques'
    },
    {
      icon: <FaGem className='text-6xl' /> ,
      title: 'Satisfaction client.',
      description: 'Votre satisfaction est notre priorité. Nous mettons tout en œuvre pour offrir une expérience d’achat fluide et un service client réactif.'
    },
  ]

  return (
    <div className='flex flex-col gap-[70px] '>
      
      <div className="rounded-xl" style={styles.banner}>
        <div className="w-full aspect-[4/2] rounded-xl flex flex-col gap-4 items-center px-8 justify-center bg-black opacity-70 ">
          <h1 className="text-8xl text-center font-extabold text-white">Nous vous habillons avec
            <div className="flex gap-6 flex-wrap justify-center mt-6">
              <span className="bg-white px-2 leading-1 text-primary ">Elegance</span>,
              <span className="bg-white px-2 leading-1 text-primary ">Classe</span> et
              <span className="bg-white px-2 leading-1 text-primary ">Passion</span> !
            </div>

          </h1>
          <a className='bg-white py-3 px-4 rounded-full w-fit h-fit mt-4 cursor-pointer group hover:bg-primary transition-all duration-500'>
            <BsArrowDown className="text-primary text-xl group-hover:text-white" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="w-full">
          <img src="/assets/images/banner-3.jpg" alt="" className="rounded-xl" />
        </div>

        <div className="w-full bg-slate-100 py-3 px-3 rounded-xl ">
          <h3 className="text-4xl font-extrabold text-transparent text-outline">Qui sommes-nous ?</h3>
          <p className="mt-6">
            Chez <span className="font-bold text-primary">NewLook</span>, tout a commencé avec une idée simple : <br /> Permettre à chacun de s’exprimer à travers des vêtements tendance et accessibles. Passionnés de mode, nous avons créé une boutique en ligne qui allie style, qualité et prix abordable. <br /><br />

            New Look, c’est plus qu’une boutique : c’est une expérience, un moyen de redécouvrir la mode en toute simplicité. Rejoignez-nous et créez votre style unique !
          </p>
        </div>
      </div>


      <div className="flex flex-col gap-6 justify-center items-center">
        <h4 className="text-4xl font-extrabold text-transparent text-outline">Valeurs et Missions</h4>
        <div className="grid grid-cols-2 gap-6">
          {
            missions.map((mission, index) => (
              <div key={index} className="flex gap-4 items-center py-6 px-4 bg-slate-100 rounded-xl gap-2 mt-6">
                {mission.icon}
                <div className='flex flex-col'>
                  <h5 className="text-3xl font-bold text-primary">{mission.title}</h5>
                  <p>{mission.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <h4 className="text-4xl font-extrabold text-transparent text-outline">Contactez-nous</h4>
        <div className="flex gap-4 items-center py-6 px-4 bg-slate-100 rounded-xl gap-2 mt-4">
          <FaHeadset className="text-6xl" />
          <div className='flex flex-col'>
            <h5 className="text-3xl font-bold text-primary">Nous contacter</h5>
            <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter par mail ou par téléphone.</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
