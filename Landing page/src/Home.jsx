import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import TechnicalCards from './components/TechnicalCards'
import TechnicalSection from './components/TechnicalSection'
import TestimonialSection from './components/TestimonialSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { Toaster, toast } from 'sonner'


const Home = () => {
  return (
    <>
  
  
      <Nav />
      <Hero />
      <ProjectSection />
      <TechnicalSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
