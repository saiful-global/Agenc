import React from 'react'
import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'
import s5 from '../../assets/images/s5.png'
import s6 from '../../assets/images/s6.png'
import Headline from '../Common/Headline'

const Services = () => {
  return (
    <>
    <section className='pb-10 lg:pb-37.5 md:px-2'>
        <div className="container">
            <Headline className="max-w-152.5 mx-auto text-center pb-6 lg:pb-12.5" title="Our Provided Services" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form."></Headline>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s1} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>Web Design</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s2} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>UI/UX Design</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s3} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>Web Development</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s4} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>Motion Graphics</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s5} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>3D Animation</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='pt-4 md:pt-10 lg:pt-20 px-12.25 pb-11.5 text-center rounded-[20px] hover:shadow-custom duration-300'>
                    <img src={s6} className='mx-auto' alt="" />
                    <h3 className='pt-4 md:pt-10 font-inter font-bold md:text-[25px] text-[#151515]'>Digital Marketing</h3>
                    <p className='pt-2 md:pt-5 font-inter font-normal text-xs md:text-[16px] text-[#737373] md:leading-6.5'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services