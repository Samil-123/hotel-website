import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-black h-[15vh] max-sm:h-[8vh]'>
      <div className='w-[90%] px-6 max-sm:px-0 mx-auto flex justify-between items-center text-Primary-Golden h-full'>
        <h2 className='text-[1.2rem] max-md:text-[1rem] max-sm:text-[.9rem] '>Avio Apartmani</h2>
        <div>
          <ul className='text-[1.2rem] max-md:text-[1rem] max-sm:text-[.9rem] flex justify-between gap-6 max-sm:gap-3 items-center'>
            <Link href={'/'}>Početna</Link>
            <Link href={'/Rooms'}>Apartmani</Link>
       
             <Link href={'/ContactUs'}><button className='bg-Primary-Golden text-white px-5 py-3 max-md:py-2 max-md:px-4 max-sm:py-1 max-sm:px-2'>Kontakt</button></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar