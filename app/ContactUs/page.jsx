import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aviocover from '../../public/aviocover.png'
import Image from 'next/image'
import Figmap from '../../public/ContactUS/Figmap.png'

import dynamic from 'next/dynamic';
import ContactForm from '../components/ContactForm'
const MapWithNoSSR = dynamic(() => import('../components/MapComponent '), {
  ssr: false
});


function page() {
  return (
    <div>
      <Navbar />
      <main className='bg-black relative '>
        <div className='h-[414px] relative '>
          <Image
            src={aviocover}
            width={1000}
            height={1000}
            alt='image'
            className='w-full h-full object-cover object-center'
          />
          <div className="bg-[#000000]  bg-opacity-50 absolute top-0 right-0 w-full h-full  mx-auto "></div>
          <div className=" absolute top-28 right-0 w-full h-full  mx-auto ">
            <h2 className='text-[3.5rem] max-sm:text-center w-[90%] max-sm:text-[2.9rem] mx-auto  font-semibold text-white'> <span className='text-Primary-Golden '>Kontakt</span></h2>
            <p className='w-[90%] mx-auto  text-white max-sm:text-center '>Stojimo vam na raspolaganju za sve vaše upite i rezervacije.  <br className='max-sm:hidden' />Slobodno nas kontaktirajte putem telefona,emaila ili društvenih mreža i rado ćemo vam pomoći sa svim informacijama koje su vam potrebne. </p>
          </div>
        </div>


        <div className='bg-black h-[840px] max-md:h-[1200px] max-[340px]:mb-16  w-full  '>
          <div id='contactUs-form' className='absolute bottom-20  left-0 right-0 flex max-md:flex-col justify-between items-start pt-16 w-[90%] px-6 max-md:px-4 mx-auto h-[820px] max-2xl:h-[850px] max-md:h-[1200px] max-[340px]:h-[1300px]  max-[340px]:pb-10 bg-[#111111] max-md:p-9 '>
            <div className='w-[48%] max-md:w-full '>
             <ContactForm/>
            </div>
            <div className='w-[48%]  max-md:w-full '>
              <div className='h-[606px] max-2xl:h-[655px]'>
                <MapWithNoSSR />

              </div>
              <div className='mt-7 max-md:mt-2 max-md:py-2 flex max-xl:flex-col max-2xl:justify-start max-2xl:items-start max-2xl:gap-y-3 justify-between items-center text-white text-[.9rem]'>
                <div className='flex justify-start items-center gap-2'>
                  <h2>Email:</h2>
                  <p className='font-light'>avio.apartmani@gmail.com</p>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <h2>Adresa:</h2>
                  <p className='font-light'>Salih Bega Rasovca 1/M,Novi Pazar,36300.</p>
                </div>
              </div>
              <div className='flex justify-start items-center max-md:py-2  gap-2  text-white text-[.9rem]'>
                <h2>Brojevi telefona:</h2>
                <p className='font-light'>+381 63 682 782 <span>+381 64 574 1687</span>

                </p>
              </div>
            </div>
          </div>

        </div>

      </main>
      <div className="max-md:pt-28">
      <Footer />
      </div>
    </div>
  )
}

export default page
