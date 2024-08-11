
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aviocover from '../../public/aviocover.png'
import Image from 'next/image'
import Figmap from '../../public/ContactUS/Figmap.png'
import DropDown from '../components/DropDown'
import { CiFilter } from "react-icons/ci";
import Rooms from '../components/Rooms'


function page() {
  return (
    <div>
      <Navbar />
      <main className='bg-black relative '>
        <div className='h-[414px]  '>
          <Image
            src={aviocover}
            width={1000}
            height={1000}
            alt='image'
            className='w-full h-full object-cover object-center'
          />
          <div className="bg-[#000000]  bg-opacity-50 absolute top-0 right-0 w-full h-full  mx-auto "></div>
          <div className=" absolute top-28 right-0 w-full h-full  mx-auto ">
            <h2 className='text-[3.5rem] text-center w-[90%] max-sm:text-[2.9rem] mx-auto  font-semibold text-white'>Apartmani </h2>
            <p className='w-[90%] mx-auto  text-center text-white max-sm:text-center '>Dobrodošli na stranicu gde možete pregledati sve naše apartmane. <br className='max-sm:hidden' />  </p>
          </div>
        </div>


      </main>

     <div className='w-[90%] px-6 max-sm:px-0 mx-auto mt-20 '>
      <Rooms/>
     </div>

    <div  className='pt-[10%] max-xl:pt-[15%] max-md:pt-[20%] max-sm:pt-[30%] max-[450px]:pt-[38%]'>
      <Footer  />
    </div>
    </div>
  )
}

export default page