import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'
import SuccessRate from './Components/successRate/SuccessRate'
import Services from './Components/services/Services'
import Work from './Components/work/Work'
import Whychoose from './Components/why/Whychoose'
import Reviews from './Components/reviews/Reviews'
import We from './Components/we/We'
import Footer from './Components/footer/Footer'

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
    </>
  )
}

export default App