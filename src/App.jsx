import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import SuccessRate from './Components/SuccessRate/SuccessRate'
import Services from './Components/Services/Services'
import Work from './Components/Work/Work'
import Whychoose from './Components/Why/Whychoose'
import Reviews from './Components/Reviews/Reviews'
import We from './Components/We/We'
import Footer from './Components/Footer/Footer'

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