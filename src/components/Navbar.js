import React, {useState} from 'react';
import { AiOutlineClose  } from "react-icons/ai";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (

    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
       <img src={require('../images/logo2.png')} alt="logo1" className="w-[112px] lg:mx-[120px]"/>
      </div>
      <ul className='hidden md:flex place-items-center justify-center items-center grid lg:gap-[48px] gap-[20px]'>
        <li className="font-[DM Sans] font-[500px] text-[16px] leading-[21px] text-[#393939]">Home</li>
        <li className="font-[DM Sans] font-[500px] text-[16px] leading-[21px] text-[#393939]">About</li>
        <li className="font-[DM Sans] font-[500px] text-[16px] leading-[21px] text-[#393939]">FAQ</li>
        <li className="font-[DM Sans] font-[500px] text-[16px] leading-[21px] text-[#393939]">Blog</li>
        <li className="font-[DM Sans] font-[500px] text-[16px] leading-[21px] text-[#393939]">Contact</li>
        </ul>
      <div className='hidden md:flex pr-4'>
        <button className='bg-[#5D387F] text-[#FFFFFF]  gap-[12px] w-[169px] h-[51px] px-[40px] py-[16px] rounded-[12px]'>Get Started</button>
      </div>
      <div className='md:hidden mr-4' onClick={handleClick}>
         {!nav ? <HiMenu className='w-8 h-8 text-[#393939]' /> : <AiOutlineClose className='w-8 h-8 text-[#393939]' />}    
      </div>
    </div>

   <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
       <li className='border-[#393939] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer'>Home</li>
       <li className='border-[#393939] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer'>About</li>
       <li className='border-[#393939] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer'>FAQ</li>
       <li className='border-[#393939] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer'>Blog</li>
       <li className='border-[#393939] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer'>Contact</li>

     <div className='flex flex-col my-4'>
         <button className='px-5 py-3 border rounded-[12px] bg-[#5D387F] text-[#FFFFFF]'>Get Started</button>
     </div>
   </ul>
  </div>


















  //   <div className='w-screen h-[80px] drop-shadow-lg z-10 mx-auto'>
  //   <div className='px-4 flex justify-between items-center w-full h-full '>
  //     <div className='flex items-center lg:mt-11 lg:mx-[100px]'>
  //      <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1668159053/Group_k6z4vk.png" alt="logo" className="lg:w-38 w-32 md:w-36"/>
  //     </div>

  //     <div>
  //       <ul className='hidden lg:flex gap-8 lg:mt-14'>
  //       <li className="li-text">Products</li>
  //       <li className="li-text">About Us</li>
  //       <li className="li-text">Translate</li>
  //       </ul>
  //     </div>

  //     <div className='lg:block hidden lg:mr-[100px]'>
  //     <button className='bg-[#185A71] text-[#FFFFFF] px-5 py-3 mb-4 rounded-lg '>Sign up</button>
        
  //     </div>
  //     <div className='lg:hidden mr-4' onClick={handleClick}>
  //         {!nav ? <HiMenu className='w-8 h-8 nav-color px2 py-2 rounded-md text-white' /> : <AiOutlineClose className='w-8 h-8 nav-color px2 py-2 rounded-md text-black' />}
        
  //     </div>
  //   </div>


    
  //      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
  //          <li className='border-[#185A71] border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#393939] font-normal cursor-pointer w-full'>Home</li>
  //          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Products</li>
  //          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Resources</li>
  //          <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Pricing</li>

  //        <div className='flex flex-col my-4'>
  //            <button className='bg-[#185A71] text-[#FFFFFF] px-5 py-3 mb-4 rounded-lg '>Sign up</button>
  //            <button className='px-5 py-3 border border-[#185A71] rounded-lg hover:bg-[#185A71] hover:text-[#FFFFFF]'>Login</button>
  //        </div>
  //      </ul>


  // </div>
    // <div className='w-screen h-[80px] z-10 bg-[#FFFFFF] fixed'>
    //   <div className='px-4 flex justify-between items-center w-full h-full'>
    //     <div className='flex items-center'>
    //       <img src={require('../images/logo2.png')} alt="logo1" className="w-[112px] lg:mx-[120px]"/>
    //     </div>

    //       <ul className='hidden md:flex gap-6 grid place-items-center justify-center items-center '>
    //       <li className="li-text lg:ml-[29px]">Home</li>
    //       <li className="li-text">About</li>
    //       <li className="li-text">FAQ</li>
    //       <li className="li-text">Blog</li>
    //       <li className="li-text">Contact</li>
    //       </ul>
        
    //     <div className='hidden md:flex pr-4 lg:mr-[120px] lg:mx-[125px]'>
    //       <button className='px-7 py-3  btn text-[#FFFFFF]'>Get Started</button>
    //     </div>

    //     <div className='md:hidden mr-4' onClick={handleClick}>
    //         {!nav ? <HiMenu className='w-8 h-8 text-[#53686A]' /> : <AiOutlineClose className='w-8 h-8 text-[#53686A]' />}
          
    //     </div>
    //   </div>

    //   <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
    //       <li className='border-[#185A71] border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer w-full'>Home</li>
    //       <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>About</li>
    //       <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>FAQ</li>
    //       <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Blog</li>
    //       <li className='border-[#185A71] w-full border-opacity-50 mt-3 mb-3  text-x leading-6 text-[#53686A] font-normal cursor-pointer'>Contact</li>

    //     <div className='flex flex-col my-4'>
    //         <button className='px-5 py-3 border border-[#185A71] rounded-lg hover:bg-[#185A71] hover:text-[#FFFFFF]'>Get Started</button>
    //     </div>
    //   </ul>
    // </div>
  );
};

export default Navbar;