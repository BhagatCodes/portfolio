import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Users, Award, GraduationCap } from 'lucide-react'

const items = [
  {
    when: 'JUL 2025 — NOW',
    status: 'CURRENT',
    title: 'Software Engineer',
    org: 'SingSys Software Services Pvt. Ltd · Onsite',
    icon: Briefcase,
    bullets: [
      'Develop and maintain responsive UIs across multiple React and WordPress client projects.',
      'Design and optimize front ends for PHP-based web applications for cross-browser and mobile reliability.',
      'Work with cross-functional teams to scope requirements and ship clean, maintainable UI improvements.',
    ],
  },
  {
    when: 'JUN 2026 - AUG 2026',
    title: 'Freelance Front-End Styling',
    org: 'vughy.com',
    icon: Users,
    bullets: ['Independent styling and UI work delivered outside of full-time hours.'],
  },
  {
    when: '2024',
    title: "Tech'Nex — Team Lead",
    org: 'IIT BHU',
    icon: Award,
    bullets: ['Led a 4-member team building a front-end project focused on sustainable development.'],
  },
  {
    when: '2021 — 2025',
    title: 'B.Tech, Computer Science Engineering',
    org: 'Shri Ramswaroop Memorial University, Lucknow',
    icon: GraduationCap,
    bullets: [],
  },
]

export default function Journey() {
  const railRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="pad wrap hairline" id="journey">
      <div className="sec-head reveal">
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            <span className="rule" />
            JOURNEY
          </div>
          <h2>Career &amp; education</h2>
        </div>
        <p>From a CSE degree in Lucknow to shipping enterprise front ends and leading a team at IIT BHU.</p>
      </div>

      <div className="timeline-wrap reveal reveal-stagger" ref={railRef}>
        <div className="timeline-rail">
          <motion.div className="timeline-rail-fill" style={{ height: railHeight }} />
        </div>
        {items.map((it) => {
          const Icon = it.icon
          return (
            <div className="tl-item" key={it.title}>
              <div className="tl-icon"><Icon /></div>
              <div className="tl-when">
                {it.when}
                {it.status && <><br /><span className="status">{it.status}</span></>}
              </div>
              <div className="tl-body">
                <h3>{it.title}</h3>
                <div className="org">{it.org}</div>
                {it.bullets.length > 0 && (
                  <ul>
                    {it.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
