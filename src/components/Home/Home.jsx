import React from 'react'
import Hero from '../Hero/Hero'
import Dishes from '../Dishes/Dishes'
import About from '../About/About'
import Mission from '../Mission/Mission'
import Expertise from '../Expertise/Expertise'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Dishes />
        <About />
        <Mission /> 
        <Expertise />
        <Review />
        <Contact />
        
    </div>
  )
}

export default Home