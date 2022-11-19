import React from 'react'

function Footer() {
  return (
    <div className="mt-[92px]">
        <div className="rounded-[10px] gap-[24px] bg-[#5D387F] text-[#F2F2F2] lg:mx-20 m-[13px]  lg:h-[200px] h-[199px] mb-[24px] lg:mb-[42px]">
            <div className="grid  m-5">
                <div className="lg:mx-[50px]">
                <h4 className="lg:text-[24px] text-[18px] md:text-[20px]  lg:mt-[37px] mt-[27px] w-[297px] font-[Inter]">Still have questions?</h4>
                <p className="font-[Inter] lg:w-full lg:mt-[9px] mt-[6px] lg:text-[18px] text-[14px] w-[240px] md:w-[450px] lg:leading-[28px] leading-[21px]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>                    
                <button className="bg-[#5D387F] rounded-[9px] border border-[#FFFFFF] px-4 py-2 lg:mt-[27px] mt-[20px] lg:mb-[37px] mb-[27px]">Get in touch</button>
                </div>
            </div>
        </div>
           <div className="bg-[#5D387F] text-[#FFFFFF]">
            <div className="lg:flex grid grid-cols-2  items-center justify-center  place-items-center lg:h-[83px] h-[428px]">
                <div className="lg:flex lg:gap-[47px]">
                <p className="text-[12px] lg:leading-[14px] hidden lg:block lg:mt-[10px]">@2022 Gritgrammar</p>                    
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Careers and Culture</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">FAQ</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Newsletter</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Privacy policy</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Terms of use</p>            
                </div>
                <div className="lg:flex lg:gap-[47px]">
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">About us</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Api status</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Blog</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Copyright</p>
                <p className="text-[12px] cursor-pointer lg:leading-[14px] mt-[10px]">Contact us</p>
                </div>
            </div>
            <p className="text-[12px] lg:leading-[14px] lg:hidden block text-center justify-center grid place-items-center">@2022 Gritgrammar</p>                    
          </div>
    </div>
  )
}

export default Footer