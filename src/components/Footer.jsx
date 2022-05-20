import React from 'react'
import logo from '../images/footer-logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

export default function Footer() {
  return (
    <>
      <footer className=' bg-slate-900 py-10 lg:py-20'>
        <div className="max-width grid grid-cols-1 text-center md:text-left md:grid-cols-3 lg:grid-cols-5 gap-5">
          <article className=' flex items-start justify-center md:justify-start '>
            <img src={logo} alt=""/>
          </article>

          <article>
            <h3 className=' text-white text-lg font-bold tracking-wide'>Features</h3>
            <ul>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Link Shortening</button></li>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Branded Links</button></li>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Analytics</button></li>
            </ul>
          </article>

          <article>
            <h3 className=' text-white text-lg font-bold tracking-wide'>Resources</h3>
            <ul>
              <li>
                <button className='text-slate-200 text-sm mt-1'>Blog</button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>Developers</button>
              </li>
              <li>
                <button className='text-slate-200 text-sm mt-1'>Support</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className=' text-white text-lg font-bold tracking-wide'>Company</h3>
            <ul>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>About</button>
              </li>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Our Team</button>
              </li>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Careers</button>
              </li>
              <li>
                <button className=' text-slate-200 text-sm mt-1'>Contact</button>
              </li>
            </ul>
          </article>

          <article className='  flex items-start justify-center md:justify-start '>
            <ul className=' flex items-center space-x-4'>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>

        </div>

      </footer>
    </>
  )
}
