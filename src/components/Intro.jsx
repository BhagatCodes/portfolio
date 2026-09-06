import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import useParallax from '../hooks/useParallax'

export default function Intro() {
  const para = useParallax(24)
  const icon = useParallax(60, true)

  return (
    <section className="pad wrap" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div className="intro-icon" ref={icon.ref} style={{ y: icon.y }}>
        <Sparkles />
      </motion.div>
      <div className="intro-grid">
        <div className="eyebrow reveal">
          <span className="rule" />
          HOW I WORK
        </div>
        <motion.div className="reveal" ref={para.ref} style={{ y: para.y }}>
          <p>
            I combine clean React and WordPress builds with a close eye for detail —
            from enterprise client sites shipped at SingSys to personal tools built
            with AI. I care about interfaces that respond fast, hold up across
            browsers, and don't feel like a first draft.
          </p>
          <div className="stat-row reveal reveal-stagger">
            <div className="stat">
              <div className="num">1.1<span style={{ fontSize: 20 }}>yrs</span></div>
              <div className="lbl">IN THE FIELD</div>
            </div>
            <div className="stat">
              <div className="num">9</div>
              <div className="lbl">PROJECTS SHIPPED</div>
            </div>
            <div className="stat">
              <div className="num">7</div>
              <div className="lbl">LIVE CLIENT SITES</div>
            </div>
            <div className="stat">
              <div className="num">4</div>
              <div className="lbl">TEAM LED · IIT BHU</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
