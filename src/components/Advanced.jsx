import brand from '../images/icon-brand-recognition.svg'
import detailed from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

import React from 'react'


export default function Advanced() {
  return (
<>
    <section className=' bg-gray-100 pt-64 pb-10 lg:pb-40'>
      
      <div className='max-width'>
        <h2 className=' text-4xl font-bold text-slate-800 text-center mb-3'>Advanced Statistics</h2>
        <p className=' text-slate-400 text-center mb-10 lg:mb-20'> Track how your links are performing across the web with our advanced statistics dashboard.</p>

        <div className=' grid grid-cols-1 gap-16 md:gap-5 md:grid-cols-2 lg:grid-cols-3 relative'>

          <div className=" w-2 h-full left-[50%] right-[50%] lg:block absolute bg-cyan-600 lg:h-2 lg:w-[80%]  sm:hidden sm:left-0 sm:right-0 lg:top-[60%]"></div>

          <article className=' flex flex-col items-center md:items-start bg-white p-5 rounded-md relative'>
            <img src={brand} alt="" className=' p-3 -mt-12 bg-slate-800 rounded-full ' />
            <h3 className=' text-slate-800 text-lg mt-5 mb-2 font-bold'>Brand Recognition</h3>
            <p className=' text-slate-400 text-sm text-center md:text-left'>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
          </article>

          <article className=' flex flex-col items-center md:items-start bg-white p-5 relative rounded-md justify-center lg:translate-y-8'>
            <img src={detailed} alt="" className=' p-3 -mt-12 bg-slate-800 rounded-full left-20' />
            <h3 className=' text-slate-800 text-lg mt-5 mb-2 font-bold'>Detailed Records</h3>
            <p className=' text-slate-400 text-sm text-center md:text-left'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </article>

          <article className='flex flex-col items-center md:items-start bg-white p-5 relative rounded-md lg:translate-y-16'>
            <img src={fully} alt="" className=' p-3 -mt-12 bg-slate-800 rounded-full' />
            <h3 className=' text-slate-800 text-lg mt-5 mb-2 font-bold'>Fully Customizable</h3>
            <p className=' text-slate-400 text-sm text-center md:text-left'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </article>
        </div>

      </div>
    </section>
</>
  )
}
