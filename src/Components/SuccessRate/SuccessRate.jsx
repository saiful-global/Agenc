import React from 'react'

const SuccessRate = () => {
  return (
    <>
    <section className='mt-10 lg:mt-42.75 mb-15 lg:mb-37.5 md:px-2'>
        <div className="container">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-10 lg:gap-31 bg-[#E0FFF9] rounded-[20px] py-10 lg:py-21.5 px-8 lg:pl-12.5 lg:pr-9.25">
                <div className="md:w-[30%]">
                    <h4 className='font-inter font-medium text-[25px] text-[#6A4DF4] leading-[120%] pb-3.75'>Our Success</h4>
                    <h3 className='font-inter font-semibold text-[#151515] text-2xl lg:text-[35px]' >West cost Brand makers-Global Edge</h3>
                </div>
                <div className="sm:w-full md:w-[70%] grid grid-cols-3 gap-5 lg:gap-27.5">
                <div>
                    <h3 className='font-inter font-bold text-[#151515] text-2xl lg:text-[50px] pb-5'>200+</h3>
                    <p className='font-inter font-medium text-[#737373] text-sm lg:text-[20px] leading-[120%]'>Customer Satisfied</p>
                </div>
                <div>
                    <h3 className='font-inter font-bold text-[#151515] text-2xl lg:text-[50px] pb-5'>4.5</h3>
                    <p className='font-inter font-medium text-[#737373] text-sm lg:text-[20px] leading-[120%]'>200+ Avg rating</p>
                </div>
                <div>
                    <h3 className='font-inter font-bold text-[#151515] text-2xl lg:text-[50px] pb-5'>351+</h3>
                    <p className='font-inter font-medium text-[#737373] text-sm lg:text-[20px] leading-[120%]'>Project Delivered</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SuccessRate