import React from 'react'

const Btn = ({text,className}) => {
  return (
    <>
    {/* এভাবে text , classname -> props দিয়ে যখন যেখানে যেরকম দরকার সেরকম set করা যায় । বারবার নতুন বাটন না বানিয়ে । */}
    <a href="" className={`py-2 lg:py-3.75 px-2.5 md:px-5 lg:px-10.5 rounded-[10px] text-white font-inter font-semibold leading-6.5 text-[20px] hover:bg-white hover:text-[#6A4DF4] duration-300 ${className}`}>{text}</a>
    {/* এখানে প্রথমে {} তারভিতরে `` তারভিতরে ${className} । এতে যেখানে যেটা আলাদা দরকার যেমন color,padding etc set করা যাবে ওখানেই className দিয়ে। */}
    </>
  )
}

export default Btn