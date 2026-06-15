import React from 'react'
import Headline from '../common/Headline'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Symbol from "../../assets/images/symbol.png"
import { FaStar } from "react-icons/fa";
import client1 from "../../assets/images/client1.png"
import client2 from "../../assets/images/client2.png"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";


const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-[#4756DF] z-10" onClick={onClick} >
      <IoIosArrowDroprightCircle />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-[#4756DF] z-10" onClick={onClick} >
      <IoIosArrowDropleftCircle />
    </div>
  );
};




const Reviews = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplay:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: false
            }
        },
        {
            breakpoint: 640,
            settings: {
            arrows: false,
            }
        }
        ]
  };
  

    
  return (
    <>
    <section className='pb-10 lg:pb-56.75'>
        <div className="container relative">
            <Headline className="max-w-115.25 mx-auto text-center pb-10 lg:pb-50.5" title={"Some Client Reviews"}></Headline>

        <Slider {...settings}>
            <div className="px-2 lg:px-14.5 py-4 lg:py-13.5 w-full rounded-[30px]">
                <img src={Symbol} />
                <p className='pt-2 lg:pt-5 pb-2 lg:pb-5 font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

                    <div className='flex pb-2 lg:pb-7.5 text-[#F9BD2C]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                
                    <div className='flex'>
                        <img src={client1} alt="" />
                        <div className='pl-2 lg:pl-5'>
                            <h4 className="font-inter font-semibold lg:text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
                            <p className='font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>Digital Marketor</p>
                        </div>
                    </div>
            </div>

            <div className="px-2 lg:px-14.5 py-4 lg:py-13.5 w-full rounded-[30px]">
                <img src={Symbol} />
                <p className='pt-2 lg:pt-5 pb-2 lg:pb-5 font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

                    <div className='flex pb-2 lg:pb-7.5 text-[#F9BD2C]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                
                    <div className='flex'>
                        <img src={client2} alt="" />
                        <div className='pl-2 lg:pl-5'>
                            <h4 className="font-inter font-semibold lg:text-[20px] text-[#232323] leading-[120%]">Rosa Farmer</h4>
                            <p className='font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>UI Designer</p>
                        </div>
                    </div>
            </div>

            <div className="px-2 lg:px-14.5 py-4 lg:py-13.5 w-full rounded-[30px]">
                <img src={Symbol} />
                <p className='pt-2 lg:pt-5 pb-2 lg:pb-5 font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

                    <div className='flex pb-2 lg:pb-7.5 text-[#F9BD2C]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                
                    <div className='flex'>
                        <img src={client1} alt="" />
                        <div className='pl-2 lg:pl-5'>
                            <h4 className="font-inter font-semibold lg:text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
                            <p className='font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>Digital Marketor</p>
                        </div>
                    </div>
            </div>
            
            <div className="px-2 lg:px-14.5 py-4 lg:py-13.5 w-full rounded-[30px]">
                <img src={Symbol} />
                <p className='pt-2 lg:pt-5 pb-2 lg:pb-5 font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

                    <div className='flex pb-2 lg:pb-7.5 text-[#F9BD2C]'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                
                    <div className='flex'>
                        <img src={client1} alt="" />
                        <div className='pl-2 lg:pl-5'>
                            <h4 className="font-inter font-semibold lg:text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
                            <p className='font-inter font-normal text-xs lg:text-[16px] text-[#7B7B7B] lg:leading-6.5'>Digital Marketor</p>
                        </div>
                    </div>
            </div>

        </Slider>
        
        </div>
    </section>
    
    </>
  )
}

export default Reviews





// text intentionally small to keep card height balanced ////কার্ডের উচ্চতা ভারসাম্যপূর্ণ রাখার জন্য ইচ্ছাকৃতভাবে ছোট লেখা .







// import React from 'react'
// import Headline from '../Common/Headline'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Symbol from "../../assets/images/symbol.png"
// import { FaStar } from "react-icons/fa";
// import client1 from "../../assets/images/client1.png"
// import client2 from "../../assets/images/client2.png"
// import { IoIosArrowDroprightCircle } from "react-icons/io";
// import { IoIosArrowDropleftCircle } from "react-icons/io";


// const NextArrow = ({ onClick }) => {
//   return (
//     <div className="absolute -right-12.5 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-[#4756DF] z-10" onClick={onClick} >
//       <IoIosArrowDroprightCircle />
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div className="absolute -left-12.5 top-1/2 -translate-y-1/2 cursor-pointer text-4xl text-[#4756DF] z-10" onClick={onClick} >
//       <IoIosArrowDropleftCircle />
//     </div>
//   );
// };




// const Reviews = () => {

//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     speed: 500,
//     arrows: true,
//     autoplay:true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,

//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//             slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//             slidesToShow: 1,
//             arrows: false
//             }
//         },
//         {
//             breakpoint: 640,
//             settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             centerMode: false // Turn off centerMode for better mobile fit
//             }
//         }
//         ]
//   };
  

    
//   return (
//     <>
//     <section className='pb-10 lg:pb-56.75'>
//         <div className="container relative">
//             <Headline className="max-w-115.25 mx-auto text-center pb-10 lg:pb-50.5" title={"Some Client Reviews"}></Headline>

//         <Slider {...settings}>
//             <div className="px-14.5 py-13.5 w-full rounded-[30px]">
//                 <img src={Symbol} />
//                 <p className='pt-5 pb-5 font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

//                     <div className='flex pb-7.5 text-[#F9BD2C]'>
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
                
//                     <div className='flex'>
//                         <img src={client1} alt="" />
//                         <div className='pl-5'>
//                             <h4 className="font-inter font-semibold text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
//                             <p className='font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>Digital Marketor</p>
//                         </div>
//                     </div>
//             </div>

//             <div className="px-14.5 py-13.5 w-full rounded-[30px]">
//                 <img src={Symbol} />
//                 <p className='pt-5 pb-5 font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

//                     <div className='flex pb-7.5 text-[#F9BD2C]'>
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
                
//                     <div className='flex'>
//                         <img src={client2} alt="" />
//                         <div className='pl-5'>
//                             <h4 className="font-inter font-semibold text-[20px] text-[#232323] leading-[120%]">Rosa Farmer</h4>
//                             <p className='font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>UI Designer</p>
//                         </div>
//                     </div>
//             </div>

//             <div className="px-14.5 py-13.5 w-full rounded-[30px]">
//                 <img src={Symbol} />
//                 <p className='pt-5 pb-5 font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

//                     <div className='flex pb-7.5 text-[#F9BD2C]'>
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
                
//                     <div className='flex'>
//                         <img src={client1} alt="" />
//                         <div className='pl-5'>
//                             <h4 className="font-inter font-semibold text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
//                             <p className='font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>Digital Marketor</p>
//                         </div>
//                     </div>
//             </div>
            
//             <div className="px-14.5 py-13.5 w-full rounded-[30px]">
//                 <img src={Symbol} />
//                 <p className='pt-5 pb-5 font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>

//                     <div className='flex pb-7.5 text-[#F9BD2C]'>
//                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
//                     </div>
                
//                     <div className='flex'>
//                         <img src={client1} alt="" />
//                         <div className='pl-5'>
//                             <h4 className="font-inter font-semibold text-[20px] text-[#232323] leading-[120%]">Eric Drake</h4>
//                             <p className='font-inter font-normal text-[16px] text-[#7B7B7B] leading-6.5'>Digital Marketor</p>
//                         </div>
//                     </div>
//             </div>

//         </Slider>
        
//         </div>
//     </section>
    
//     </>
//   )
// }

// export default Reviews