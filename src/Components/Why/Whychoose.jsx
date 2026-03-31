import React from 'react'
import Headline from '../Common/Headline'
import why from '../../assets/images/why.jpg'
import why1 from '../../assets/images/why1.png'
import why2 from '../../assets/images/why2.png'

const Whychoose = () => {
  return (
    <>
    <section className='pt-15 md:pt-37.5 pb-26.5 md:px-2'>
      <div className="container">
        <Headline titleClass='max-w-[500px] mx-auto leading-10 lg:leading-15 pb-5' title='Why You Should Choose Agenc' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." className="max-w-200.5 mx-auto pb-8 md:pb-32.5 text-center"></Headline>

        <div className="flex flex-wrap md:flex-nowrap gap-26.5 items-center">
          <div className="md:w-[64%] grid grid-cols-2 gap-y-10 lg:gap-y-23.5 gap-x-25.75">
            <div>
              <img src={why1} alt="" />
              <h3 className='pt-5 pb-2.5 font-inter font-bold text-[#151515] text-xl lg:text-[25px]'>Innovative Ideas</h3>
              <p className='font-inter font-normal text-xs lg:text-[16px] text-[#737373] leading-4 lg:leading-6.5'>Because each project is different, we adapt to your business model.</p>
            </div>
            <div>
              <img src={why1} alt="" />
              <h3 className='pt-5 pb-2.5 font-inter font-bold text-[#151515] text-xl lg:text-[25px]'>Innovative Ideas</h3>
              <p className='font-inter font-normal text-xs lg:text-[16px] text-[#737373] leading-4 lg:leading-6.5'>Because each project is different, we adapt to your business model.</p>
            </div>
            <div>
              <img src={why2} alt="" />
              <h3 className='pt-5 pb-2.5 font-inter font-bold text-[#151515] text-xl lg:text-[25px]'>Dedicated Support</h3>
              <p className='font-inter font-normal text-xs lg:text-[16px] text-[#737373] leading-4 lg:leading-6.5'>We provide 24/7 support for all our clients and serve them professionally.</p>
            </div>
            <div>
              <img src={why2} alt="" />
              <h3 className='pt-5 pb-2.5 font-inter font-bold text-[#151515] text-xl lg:text-[25px]'>Dedicated Support</h3>
              <p className='font-inter font-normal text-xs lg:text-[16px] text-[#737373] leading-4 lg:leading-6.5'>We provide 24/7 support for all our clients and serve them professionally.</p>
            </div>
          </div>
          <div className="md:w-[36%]">
            <img src={why} alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Whychoose