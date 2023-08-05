import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Portfolio from '../../Components/Portfolio/Portfolio'
import Colleagues from '../../Components/Colleagues/Colleagues'
import Skils from '../../Components/Skils/Skils'
import Contact from '../../Components/Contact/Contact'

export default function Home() {
  return (
   <>
   <Header/>
   <About/>
   <Skils/>
   <Portfolio/>
   <Colleagues/>
   <Contact/>
   </>
  )
}
