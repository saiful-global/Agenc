import React from 'react'
import banner from '../../assets/images/banner.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import Btn from '../common/Btn'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {

  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <section>
        <Slider {...settings}>
            <div>
                <div style={{ backgroundImage: `url(${banner})`}} className="banner_item relative h-screen bg-no-repeat! bg-cover! bg-center!">
                    <div className="overlay w-full h-full bg-[rgba(0,0,0,0.6)] pt-40 lg:pt-78.75 pb-44">
                        <div className="content h-full max-w-237.5 mx-auto flex justify-center items-center">
                            <div className="text-center">
                                <h1 className='font-inter font-bold text-3xl lg:text-[75px] text-white leading-[120%] pb-12.75'>We Help brands with high quality services</h1>
                                <p className='max-w-155.25 mx-auto font-inter text-normal text-[16px] text-white leading-6.5 pb-13.75'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <Btn text="Get Started" className='bg-[#6A4DF4]'></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div style={{ backgroundImage: `url(${banner2})`}} className="banner_item relative h-screen bg-no-repeat! bg-cover! bg-center!">
                    <div className="overlay w-full h-full bg-[rgba(0,0,0,0.6)] pt-40 lg:pt-78.75 pb-44">
                        <div className="content h-full max-w-237.5 mx-auto flex justify-center items-center">
                            <div className="text-center">
                                <h1 className='font-inter font-bold text-3xl lg:text-[75px] text-white leading-[120%] pb-12.75'>We Help brands with high quality services</h1>
                                <p className='max-w-155.25 mx-auto font-inter text-normal text-[16px] text-white leading-6.5 pb-13.75'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <Btn text="Get Started" className='bg-[#6A4DF4]'></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{ backgroundImage: `url(${banner3})`}} className="banner_item relative h-screen bg-no-repeat! bg-cover! bg-center!">
                    <div className="overlay w-full h-full bg-[rgba(0,0,0,0.6)] pt-40 lg:pt-78.75 pb-44">
                        <div className="content h-full max-w-237.5 mx-auto flex justify-center items-center">
                            <div className="text-center">
                                <h1 className='font-inter font-bold text-3xl lg:text-[75px] text-white leading-[120%] pb-12.75'>We Help brands with high quality services</h1>
                                <p className='max-w-155.25 mx-auto font-inter text-normal text-[16px] text-white leading-6.5 pb-13.75'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <Btn text="Get Started" className='bg-[#6A4DF4]'></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{ backgroundImage: `url(${banner4})`}} className="banner_item relative h-screen bg-no-repeat! bg-cover! bg-center!">
                    <div className="overlay w-full h-full bg-[rgba(0,0,0,0.6)] pt-40 lg:pt-78.75 pb-44">
                        <div className="content h-full max-w-237.5 mx-auto flex justify-center items-center">
                            <div className="text-center">
                                <h1 className='font-inter font-bold text-3xl lg:text-[75px] text-white leading-[120%] pb-12.75'>We Help brands with high quality services</h1>
                                <p className='max-w-155.25 mx-auto font-inter text-normal text-[16px] text-white leading-6.5 pb-13.75'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                <Btn text="Get Started" className='bg-[#6A4DF4]'></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Slider>

    </section>
    </>
  )
}

export default Banner