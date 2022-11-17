import React from 'react'

function Footer() {
  return (
    <div className="mt-[47px]">
        <div className="rounded-[10px] gap-[24px] bg-[#185A71] text-[#F2F2F2] lg:mx-20 m-[13px]  lg:h-[78px] h-[189px]">
            <div className="grid lg:grid-cols-2 m-5">
                <div className="lg:mx-[50px]">
                <h4 className="lg:text-[14px] text-[18px]  lg:mt-[13px] mt-[27px] w-[297px]">Still have questions?</h4>
                <p className="footertext2 lg:w-[505px] lg:mt-[5px] mt-[6px] lg:text-[11px] text-[14px] w-[240px] h-[42px] md:w-[450px]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>                    
                </div>

                <div className="lg:mt-[15px] mt-[29px] md:mt-[18px]">
                    <button className="btn-footer border border-[#FFFFFF] px-4 py-2">Get in touch</button>
                </div>

            </div>
        </div>
        <div className="flex justify-center items-center place-items-center lg:flex grid lg:grid-cols-3  lg:h-[155px] h-[300px] lg:mt-4 bg-[#185A71] text-[#FFFFFF]">
        <div>
            <img src={require('../images/logo1.png')} alt="logo2" className="w-[131px]"/>
            </div>

                <div className="lg:mx-[167px] text-center">
                    <p className="lg:mt-[8px] text-[10px] leading-[12px] ">Help</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">FAQ</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">Safety</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">Privacy</p>
                </div>

                <div className="lg:mx-[167px] text-center">
                    <p className="mt-[8px] text-[10px] leading-[12px] ">About Grit grammar</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">About us</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">Terms</p>
                    <p className="mt-[8px] text-[10px] leading-[12px] ">Contact us</p>
                </div>                
            </div>
 
        
        

 
        <div className="flex items-center justify-center lg:gap-[47px] gap-5 h-[54px] bg-[#185A71] text-[#FFFFFF] border-t border-[#53686A]">
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">@2022 Gritgrammar</p>
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">help</p>
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">safety</p>
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">privacy</p>
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">terms</p>
            <p className="text-[8px] lg:text=[10px] cursor-pointer font-[roboto] lg:leading-[10px] ">about us</p>
        </div>  
    </div>
  )
}

export default Footer