import { MotionConfig } from 'motion/react'
import { CursorDot } from './components/CursorDot'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { WhatIDo } from './components/WhatIDo'
import { Work } from './components/Work'
import { Research } from './components/Research'
import { Cases } from './components/Cases'
import { Experience } from './components/Experience'
import { Numbers } from './components/Numbers'
import { Quote } from './components/Quote'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <CursorDot />
      <Navbar />
      <div className="overflow-x-clip">
        <main id="main">
          <Hero />
          <Marquee />
          <WhatIDo />
          <Work />
          <Research />
          <Cases />
          <Experience />
          <Numbers />
          <Quote />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
