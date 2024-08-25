
import React from 'react'
import Carousel from '../Components/AboutComponents/Carousel'
import ChiefGuest from '../Components/CommiComponents/ChiefGuest'
import Vc from '../Components/CommiComponents/Vc'

const CommitteePage = () => {
  return (
   <>
    <Carousel/>
    <section className='py-5'>
      <div>
         <h1 className='text-2xl md:text-4xl text-orange-500 font-bold underline text-center'>Committee</h1>
      </div>
     
        <ChiefGuest/>
        <Vc/>
    </section>
   </>
  )
}

export default CommitteePage