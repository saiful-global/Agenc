import React from 'react'
import Headline from '../Common/Headline'
import Btn from '../Common/Btn'

const We = () => {
  return (
    <>
    <section className='pt-10 lg:pt-37.5 pb-15 lg:pb-37.5 bg-[#F3F3F3] md:px-2'>
        <div className="container sm:flex gap-36.5 ">
            <div className='self-center pb-5 md:pb-0'>
                <Headline className={"max-w-110 pb-5 leading-12"} title={"We Do design, Code & Development"}></Headline>
                <Headline className={"max-w-128.5 pb-2.5"} text={"I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."} ></Headline>
                <Headline className={"max-w-131.5"} text={"There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."}></Headline>
            </div>
            <div className='bg-white max-w-134 px-4 lg:px-10.75 pt-4 lg:pt-15.25 rounded-[20px]'>
                <div>
                    <h3 className='font-inter font-bold text-[#151515] text-2xl lg:text-[30px] text-center pb-7.5' >Get a free quote now</h3>
                </div>

                <div className='pb-5'>
                    <form action="">
                        <label htmlFor="" className='block font-inter font-medium text-[#151515] text-[16px] leading-6.5 pb-2.5 ' >Name</label>
                        <input type="text" placeholder='Enter your name' className='min-w-full h-9 lg:h-16 rounded-[10px] border-[#E8E8E8] border-2 font-inter font-normal text-[#D0D0D0] text-[16px] leading-6.5 pl-5.75'/>
                    </form>
                </div>

                <div className='pb-5'>
                    <form action="">
                        <label htmlFor="" className='block font-inter font-medium text-[#151515] text-[16px] leading-6.5 pb-2.5 ' >Email</label>
                        <input type="text" placeholder='Enter your email' className='min-w-full h-9 lg:h-16 rounded-[10px] border-[#E8E8E8] border-2 font-inter font-normal text-[#D0D0D0] text-[16px] leading-6.5 pl-5.75'/>
                    </form>
                </div>

                <div className='pb-12.25'>
                    <form action="">
                        <label htmlFor="" className='block font-inter font-medium text-[#151515] text-[16px] leading-6.5 pb-2.5 ' >Phone</label>
                        <input type="text" placeholder='Enter your phone number' className='min-w-full h-9 lg:h-16 rounded-[10px] border-[#E8E8E8] border-2 font-inter font-normal text-[#D0D0D0] text-[16px] leading-6.5 pl-5.75'/>
                    </form>
                </div>
                
                {/* Button */}
                <div className='pb-5 lg:pb-20 text-center '>
                    <a href="" className={"py-4.75 block xl:px-36.75 rounded-[10px] text-white font-inter font-semibold leading-6.5 text-[20px] bg-[#6A4DF4] hover:bg-green-600 duration-300"}>Get Pricing Now</a>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default We