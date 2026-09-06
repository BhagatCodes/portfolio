import { motion } from 'framer-motion'
import { SiReact, SiWordpress, SiTailwindcss, SiJavascript } from 'react-icons/si'
import useParallax from '../hooks/useParallax'

const line = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: { delay: 0.15 + i * 0.09, duration: 0.9, ease: [0.16, 0.84, 0.44, 1] },
  }),
}

const iconPop = {
  hidden: { opacity: 0, scale: 0.4, rotate: -20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 0.9 + i * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  }),
}

export default function Hero() {
  const blob1 = useParallax(50)
  const blob2 = useParallax(70, true)
  const blob3 = useParallax(40)
  const orbit = useParallax(30, true)
  const photo = useParallax(24)

  return (
    <section className="hero wrap" id="top" ref={orbit.ref}>
      <motion.span className="hero-blob hero-blob-1" ref={blob1.ref} style={{ y: blob1.y }} />
      <motion.span className="hero-blob hero-blob-2" ref={blob2.ref} style={{ y: blob2.y }} />
      <motion.span className="hero-blob hero-blob-3" ref={blob3.ref} style={{ y: blob3.y }} />

      <motion.div className="hero-icon hero-icon-1" style={{ y: orbit.y }} custom={0} initial="hidden" animate="visible" variants={iconPop}>
        <SiReact />
      </motion.div>
      <motion.div className="hero-icon hero-icon-2" style={{ y: orbit.y }} custom={1} initial="hidden" animate="visible" variants={iconPop}>
        <SiWordpress />
      </motion.div>
      <motion.div className="hero-icon hero-icon-3" style={{ y: orbit.y }} custom={2} initial="hidden" animate="visible" variants={iconPop}>
        <SiTailwindcss />
      </motion.div>
      <motion.div className="hero-icon hero-icon-4" style={{ y: orbit.y }} custom={3} initial="hidden" animate="visible" variants={iconPop}>
        <SiJavascript />
      </motion.div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="rule" />
            SOFTWARE ENGINEER · LUCKNOW, INDIA
          </div>

          <h1>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span style={{ display: 'block' }} custom={0} initial="hidden" animate="visible" variants={line}>
                Shubham
              </motion.span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span style={{ display: 'block' }} custom={1} initial="hidden" animate="visible" variants={line}>
                <span className="grad-text">Chauhan</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 0.84, 0.44, 1] }}
          >
            I build interfaces that feel considered, not just finished.
          </motion.p>

          <p className="role">
            Software Engineer at SingSys Software Services — shipping React and WordPress
            interfaces for live enterprise clients, with AI-integrated tools and freelance
            work on the side.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href="/Shubham_Chauhan_Resume.pdf"
              download
              data-cursor="Download"
            >
              Download resume
            </a>
            <a
              className="btn btn-outline"
              href="https://wa.me/919369251477"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Chat"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <motion.div
          className="hero-photo-blob"
          ref={photo.ref}
          style={{ y: photo.y }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <img src="..\images\shubham-photo.jpg" alt="Shubham Chauhan, Software Engineer" />
          <span className="hero-photo-status" />
        </motion.div>
      </div>

      {/* <div className="scroll-cue">
        <div className="line"><i /></div>
        SCROLL TO EXPLORE
      </div> */}
    </section>
  )
}