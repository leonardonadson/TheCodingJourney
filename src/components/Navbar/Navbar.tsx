import React from 'react'
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
  },
  {
    id: 3,
    title: "About Us", 
    path: "/about",
  }, 
  {
    id: 4,
    title: "Our Team",
    path: "/team",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
  }, 

]

const Navbar = () => {
  return (
    <nav>
      <div className='container py-10 flex justify-between items-center'> 
        { /*Logo section*/}
        <div>
          <h1 className='font-bold text-2xl '>The Coding Journey</h1>
        </div>

        { /*Menu sectioon */}
        <div className='hidden lg:block'>
          <ul className='flex items-center gap-3'>
            
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a href={item.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                    <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'>
                      {item.title}
                    </div>
                  </a>
              </li>
            ))}
            <button className='primary-btn'> Sign In</button>
          </ul>
        </div>

        { /*Mobile Hamburguer menu sectioon */}
        <div className='lg:hidden'>
          <IoMdMenu className='text-3xl'/>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar