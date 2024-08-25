import React from 'react'

const AboutCon = () => {
  return (
    <section className='about-con-section flex flex-col md:flex-row justify-center items-center   px-16 gap-y-5'>
         <div className=' w-full md:w-3/6 flex justify-center items-center'> <img className='w-96 h-64 ' src="../../../public/logo.png" alt="" /> </div>
         <div className='w-full md:w-3/6'>
             <h1 className='text-3xl text-orange-500 font-bold mb-2'> About The Conference</h1> 
             <p className='text-xl text-regular '>The School of Biotechnology, Shri Mata Vaishno Devi University, Katra, Jammu and Kashmir, India is excited to welcome all the delegates, Scientists, Teaching fraternity, Research Scholars, Students from the different parts of the world on the occasion of International Conference on Emerging Trends in Biosciences and Chemical Technology-2022. The conference will be an intellectual platform for the exchange of thoughts, gain of the new ideas and focusses on discussions on current issues related to biological and chemical sciences. The conference would have plenary talks, oral and poster presentations, and special industry-oriented sessions. All the presentations shall be published in the proceedings of the conference.</p>
          </div>
    </section>
  )
}

export default AboutCon