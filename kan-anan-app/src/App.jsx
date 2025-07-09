import { useState } from 'react'
import Header from './components/common/header'
import Footer from './components/common/footer'
import FeaturedItems from './components/home/FeaturedItems'
import Hero from './components/home/Hero'
import AnimatedSection from './components/common/AnimatedSection'


function App() {
  return (
    <div>
      <Header/>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedItems />
      </AnimatedSection>
      <AnimatedSection>
        <Footer/>
      </AnimatedSection>
    </div>
  );
}

export default App
