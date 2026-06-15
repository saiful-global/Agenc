import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import SuccessRate from './components/successrate/SuccessRate'
import Services from './components/services/Services'
import Work from './components/work/Work'
import Whychoose from './components/why/Whychoose'
import Reviews from './components/reviews/Reviews'
import We from './components/we/We'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/common/ScrollToTop'

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <SuccessRate></SuccessRate>
    <Services></Services>
    <Work></Work>
    <Whychoose></Whychoose>
    <Reviews></Reviews>
    <We></We>
    <Footer></Footer>
    <ScrollToTop></ScrollToTop>
    </>
  )
}

export default App