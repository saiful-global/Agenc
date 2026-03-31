import React from 'react'

const Headline = ({title,text,className, titleClass}) => {
  return (
    <>
    <div className={`${className}` }>
      <h2 className={`font-inter font-bold text-3xl lg:text-[45px] text-[#151515] ${titleClass}`}>{title}</h2>
        <p className='font-inter font-normal text-sm lg:text-[16px] leading-6.5 text-[#737373]'>{text}</p>
    </div>    
    </>
  )
}

export default Headline