import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Achievement from './components/Achievement'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'
import { motion, useScroll } from 'framer-motion'

export default function App() {
  useReveal()
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Projects />
        <Journey />
        <Skills />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
