import React from 'react'
import Headline from '../common/Headline'
import w1 from '../../assets/images/w1.jpg'
import w2 from '../../assets/images/w2.png'
import w3 from '../../assets/images/w3.png'
import w4 from '../../assets/images/w4.png'
import w5 from '../../assets/images/w5.png'
import w6 from '../../assets/images/w6.png'

const Work = () => {
  return (
    <>
    <section className=' bg-[#F3F3F3] py-10 lg:py-37.5 md:px-2'>
        <div className="container">
            <Headline className="max-w-152.5 mx-auto text-center pb-8 lg:pb-26.5" title='Our Recent Work' text='There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.'></Headline>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-[20px]">
                    <img src={w1} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>Task Management App</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <img src={w2} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>Saas Landing Page Design</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <img src={w3} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>App Design</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <img src={w4} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>Landing Page Design</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <img src={w5} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>Dashboard Design</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <img src={w6} className='w-full rounded-[20px]' alt="" />
                    <div className="px-10 py-7.5 text-center">
                        <h3 className='font-inter font-bold text-[#151515] text-[20px] pb-2.5'>Web App Design</h3>
                        <p className='font-inter font-normal text-[16px] text-[#737373] leading-6.5'>This is a task management application that can help you be more </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Work