import React from 'react'
import smvduLogo from "../../../public/logo.png"
const WelcomeSection = () => {
  return (
     <>
      <section className="welcome-section flex flex-col gap-y-10 py-16 px-4 sm:px-10">
          <div className='text-center'>
              <h1 className='text-3xl '>Welcome To <span class="before:block before:absolute before:-inset-1 before:skew-y-6 before:bg-orange-500 relative inline-block">
    <span class="relative text-white"> ETBCT </span>
  </span> 2024</h1>
          </div>
          <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5'>
             <div className='w-full md:w-3/6 flex justify-center items-center'>
              <img className='' src={smvduLogo} alt="" />
             </div>
             <div className='w-full md:w-3/6 flex flex-col gap-y-2  justify-center'>
               <h1 className='text-3xl'>Organised By <span className='text-orange-500'>Shri Mata Vaishno Devi University</span> </h1>
               <p className='text-xl font-regular'>
               SoBT, SMVDU, welcomes all interested delegates on the event of International Conference on Emerging Trends in Biosciences and Chemical Technology-2024. The conference aims to bring together leading academicians, scientists, researchers, and research scholars to share and exchange their experiences, research findings, and results with each other. It provides a premier platform for researchers to share, discuss and present their research results on the most recent innovations, trends, and concerns as well as practical challenges on all aspects of Biosciences and Chemical Technology.
               </p>
             </div>
          </div>
      </section>
     </>
  )
}

export default WelcomeSection