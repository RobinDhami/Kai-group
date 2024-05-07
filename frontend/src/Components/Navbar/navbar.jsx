import Button from '../button';
import { useState } from 'react';
import logo from "../../assets/neem.png"

const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"MAHARAJI",link:"/"},
      {name:"TEMPLE",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"VOLUNTEER",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        
        <a className="lg:flex title-font font-medium lg:items-center text-gray-900 mb-4 lg:mb-0 lg:z-10">
          <img src={logo} className="h-25 w-20 md:h-30 md:w-22" alt="Trust Logo" />
        </a>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden  '>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-[#AE402D]  hover:underline hover:text-[#ffa202] duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button className="Btn items-center" >
          Get Started
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav