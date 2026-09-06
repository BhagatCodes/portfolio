import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiBootstrap, SiMui,
  SiWordpress, SiCplusplus, SiOpenjdk, SiGit,
  SiNodedotjs, SiExpress, SiMongodb, SiPhp, SiLaravel,
} from 'react-icons/si'
import { Boxes, Network, Sparkles, Smartphone, Code2, Database } from 'lucide-react'
import useParallax from '../hooks/useParallax'

function Dots({ level }) {
  return (
    <div className="skill-dots">
      {[1, 2, 3, 4, 5].map((n) => (
        <i key={n} className={n <= level ? 'on' : ''} />
      ))}
    </div>
  )
}

const groups = [
  {
    title: 'FRONTEND',
    color: 'var(--cyan)',
    rows: [
      ['React', 5, SiReact], ['JavaScript', 5, SiJavascript], ['Tailwind CSS', 4, SiTailwindcss],
      ['HTML / CSS', 5, SiHtml5], ['Bootstrap', 4, SiBootstrap], ['Material UI', 4, SiMui],
    ],
  },
  {
    title: 'STATE, LANGUAGES & CMS',
    color: 'var(--violet)',
    rows: [
      ['Redux Toolkit', 4, Boxes], ['WordPress', 4, SiWordpress], ['C++', 3, SiCplusplus], ['Java', 3, SiOpenjdk],
    ],
  },
  {
    title: 'BACKEND & DATABASES',
    color: 'var(--pink)',
    rows: [
      ['Node.js', 3, SiNodedotjs], ['Express.js', 3, SiExpress], ['PHP', 3, SiPhp],
      ['Laravel', 3, SiLaravel], ['MongoDB', 3, SiMongodb], ['SQL', 3, Database],
    ],
  },
  {
    title: 'AI, APIS & TOOLING',
    color: 'var(--gold)',
    rows: [
      ['REST APIs', 4, Network], ['Git / GitHub', 4, SiGit], ['Responsive Design', 5, Smartphone],
    ],
  },
]

export default function Skills() {
  const bgIcon = useParallax(45, true)

  return (
    <section className="pad wrap hairline" id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div className="skills-bg-icon" ref={bgIcon.ref} style={{ y: bgIcon.y }}>
        <Code2 />
      </motion.div>

      <div className="sec-head reveal">
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            <span className="rule" />
            ARSENAL
          </div>
          <h2>Skills &amp; tools</h2>
        </div>
        <p>What's under the hood — languages, frameworks and the tools used to ship them.</p>
      </div>
      <div className="skill-grid reveal reveal-stagger">
        {groups.map((g) => (
          <div className="skill-cat" key={g.title} style={{ '--cat-color': g.color }}>
            <h3>{g.title}</h3>
            {g.rows.map(([name, level, Icon]) => (
              <div className="skill-row" key={name}>
                <span className="skill-name"><Icon className="skill-icon" />{name}</span>
                <Dots level={level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}