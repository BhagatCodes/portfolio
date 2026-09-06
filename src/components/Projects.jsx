import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { projects, filterCats } from '../data/projects'
import useParallax from '../hooks/useParallax'

export default function Projects() {
  const [active, setActive] = useState('All')
  const bgIcon = useParallax(50)

  const visible = projects.filter((p) => active === 'All' || p.cat === active)

  return (
    <section className="pad wrap hairline" id="work" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div className="proj-bg-icon" ref={bgIcon.ref} style={{ y: bgIcon.y }}>
        <Globe />
      </motion.div>

      <div className="sec-head reveal">
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            <span className="rule" />
            FEATURED WORK
          </div>
          <h2>Live projects &amp; builds</h2>
        </div>
        <p>Enterprise client sites shipped at SingSys, freelance work, and personal projects built with React and AI.</p>
      </div>

      <div className="filters reveal">
        {filterCats.map((cat) => (
          <span
            key={cat}
            className={`filter-tab${active === cat ? ' active' : ''}`}
            onClick={() => {
              setActive(cat)
            }}
            data-cursor="Filter"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="proj-list reveal reveal-stagger">
        {visible.map((p) => {
          return (
            <a
              key={p.name}
              className="proj-card"
              href={p.href || '#work'}
              target={p.href ? '_blank' : undefined}
              rel={p.href ? 'noopener noreferrer' : undefined}
              data-cursor={p.href ? 'Visit' : 'Personal'}
            >
              <span className="proj-card-visual" style={{ '--project-color': p.color }}>
                <img className="proj-card-image" src={p.image} alt={`${p.name} website preview`} />
              </span>
              <span className="proj-card-content">
                <span className="proj-card-category">{p.cat}</span>
                <h3>{p.name}</h3>
                <span className="tags">{p.tags}</span>
                <span className="proj-card-link">View project <span>↗</span></span>
              </span>
              <span className="arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
