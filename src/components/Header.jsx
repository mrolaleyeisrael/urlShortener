import logo from '../images/logo.svg'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className='header py-5 shadow fixed w-full '>
        <div className='max-width  flex justify-between items-center'>
          <article className=' flex items-center'>
            <img src={logo} alt="" />

            <nav className=' hidden md:block md:ml-5'>
              <ul className=' flex items-start justify-start'>
                <li>
                  <button
                    className ='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                      Features
                  </button>
                </li>
                
                <li className=' my-5 md:my-0 md:mx-5'>
                  <button
                    className ='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                      Resources
                  </button>
                </li>

                <li>
                  <button
                    className ='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                      Resources
                  </button>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className=' absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center '>
              <nav className=' md:hidden border-b border-blue-300 pb-5'>
                <ul className=' flex flex-col items-center justify-center'>
                  <li>
                    <button
                      className='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                        Features
                    </button>
                  </li>
                  
                  <li className=' my-5'>
                    <button
                      className='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                        Pricing
                    </button>
                  </li>

                  <li>
                    <button
                      className='text-slate-400 font-bold hover:text-cyan-500 active:text-cyan-500'>
                        Resources
                    </button>
                  </li>
                </ul>
              </nav>
              
              <ul className=' md:hidden flex flex-col items-center ml-5'>
              
                <li className=' my-5'>
                  <button className =' text-slate-400'>Login</button>
                </li>
                
                <li> <button  className='btn-cta rounded-full'>Sign Up</button></li>
              </ul>
            </div>
            )
          }
          <div className='hidden md:block'>
            <ul className=' flex items-center ml-5'>  
              <li className=' my-5 md:my-0 mr-5'>
                <button className =' text-slate-400'>Login</button>
              </li>
              <li> <button  className='btn-cta rounded-full'>Sign Up</button></li>
            </ul>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className=' text-2xl md:hidden ' >
            {isOpen ? <FaTimes /> : <FaBars />
            }
          </button>
        </div>

            
            
      </header>
    </>
  )
}

export default Header