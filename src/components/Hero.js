import React from 'react'

function Hero() {
  return (
    <div className='w-full h-full flex flex-col justify-between '>

        <div className="mt-[82px] h-[271px] bg-[#185A71] grid place-items-center">
            <h3 className="mt-[47px] flex items-center justify-center text-[#FFFFFF] font-semibold leading-[18px] text-[16px]">FAQs</h3>
            <h1 className="mt-[8px] leading-[44px] text-[#FFFFFF] font-semibold text-[38px] flex items-center justify-center">Ask us anything</h1>
            <p className="flex items-center justify-center mt-[17px] font-normal text-[14px] leading-[22px] text-[#FFFFFF]">Have any questions? We're here to assist you.</p>

            {/* <div className="mt-[29px] mb-[47px] w-[297px] h-[37px] lg:w-[235px] grid place-items-center items-center justify-center  text-[#0B303E]">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center ">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline text-[#53686A]">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
                </span>
                <input type="search" name="q" class="lg:py-2 lg:px-[11px] py-[8px] px-[12px] text-[15px] text-[#0B303E] bg-[#FFFFFF] rounded-[5px] pl-10 focus:outline-none  focus:text-[#0B303E] focus:bg-white" placeholder="Search here" autocomplete="off"/>
              </div>
            </div>          */}

            <div class="relative text-[#0B303E] focus-within:text-[#53686A] lg:w-[235px] lg:mb-[47px] lg:mt-[29px] mt-[27px] mb-[55px]">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </span>
              <input type="search" name="q" class="py-2 text-[15px] text-[#53686A] lg:w-[235px] w-[297px] bg-[#FFFFFF] rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search here" autocomplete="off"/>
            </div>
      </div>

     </div>

    
  )
}

export default Hero