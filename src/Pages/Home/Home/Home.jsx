import React from 'react'
import Banner from '../Banner/Banner'
import About from '../../About/About'
import Skills from '../../Skills/Skills'
import Projects from '../../Projects/Projects'
import Contract from '../../Contract/Contract'

const Home = () => {
  return (
    <div>
         <Banner></Banner>
         <About></About>
         <Skills></Skills>
         <Projects></Projects>
         <Contract></Contract>
    </div>
  )
}

export default Home