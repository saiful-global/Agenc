import React from 'react'
import logo2 from '../../assets/images/logo2.png'

const Footer = () => {
  return (
    <>
    <footer className='pt-8 lg:pt-37.5 md:px-2'>
        <div className="container flex flex-wrap justify-between lg:flex-nowrap ">
            <div className='lg:w-3/7 pb-10 lg:pb-0'>
                <img src={logo2} alt="" />
                <p className='pt-7.5 lg:w-89 font-inter font-normal text-[16px] leading-6.5 text-[#7B7B7B]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
            <div className='pr-4 lg:w-1/7'>
              <h3 className='pb-10 font-inter font-semibold text-[20px] text-[#151515]'>About</h3>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">About Us</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Features</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">News</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Careers</a></p>
            </div>

            <div className='pr-4 lg:w-1/7'>
              <h3 className='pb-10 font-inter font-semibold text-[20px] text-[#151515]'>Company</h3>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Our Team</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Partner With Us</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">FAQ</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Blog</a></p>
            </div>

            <div className='sm:pt-0 pr-4 lg:w-1/7'>
              <h3 className='pb-10 font-inter font-semibold text-[20px] text-[#151515]'>Support</h3>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">About</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Support Center</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Feedback</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Contact Us</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">Accesbility</a></p>
            </div>

            <div className='sm:pt-0 pr-4 lg:w-1/7 text-center'>
              <h3 className='pb-10 font-inter font-semibold text-[20px] text-[#151515]'>Get in touch</h3>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">info@gmail.com</a></p>
              <p className=' font-inter font-normal text-[16px] text-[#7B7B7B] leading-10'><a href="">+88 0121 0212</a></p>
            </div>
        </div>

        <div className="container pt-12.5">
          <div className='p-px max-w-330 bg-[#E8E8E8]'></div>
          <p className='py-8.25 text-center font-inter font-normal text-[16px] text-[#CCCCCC] leading-6.5'>All credit goes to @agence.com</p>
        </div>

    </footer>
    </>
  )
}

export default Footer










