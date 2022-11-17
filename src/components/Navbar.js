import React, {useState} from 'react';
import { AiOutlineClose  } from "react-icons/ai";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-[#FFFFFF] fixed'>
      <div className='px-4 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img src={require('../images/logo2.png')} alt="logo1" className="w-[112px]"/>
          <ul className='hidden md:flex gap-6'>
          <li className="li-text lg:ml-[29px]">Home</li>
          <li className="li-text">Products</li>
          <li className="li-text">About Us</li>
          <li className="li-text">Translate</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='font-semibold mr-5 li-text'>
            Log in
          </button>
          <button className='px-7 py-3 lg:mr-[88px] btn text-[#FFFFFF]'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <HiMenu className='w-8 h-8 text-[#53686A]' /> : <AiOutlineClose className='w-8 h-8 text-[#53686A]' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-[#185A71] border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer w-full'>Home</li>
          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Products</li>
          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Resources</li>
          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Pricing</li>

        <div className='flex flex-col my-4'>
            <button className='bg-[#185A71] text-[#FFFFFF] px-5 py-3 mb-4 rounded-lg '>Sign up</button>
            <button className='px-5 py-3 border border-[#185A71] rounded-lg hover:bg-[#185A71] hover:text-[#FFFFFF]'>Login</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;