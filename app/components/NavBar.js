import React from 'react';
import { Link , animateScroll as scroll} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-[#032831]  px-4 sm:px-6 md:px-8 py-4 ">
      
        <div className="mx-auto flex flex-row gap-5 justify-center md:justify-end sm:mr-16 ">
        <Link className='cursor-pointer'
      activeClass="active" 
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >
      Home
    </Link>

    <Link className='cursor-pointer'
      activeClass="active" 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >
      Aboutus
    </Link>

    <Link className='cursor-pointer'
      activeClass="active" 
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >
      Contact
    </Link>
        </div>
    </nav>
  );
};

export default Navbar;