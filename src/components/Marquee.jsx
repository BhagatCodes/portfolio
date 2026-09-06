import {
  SiReact, SiWordpress, SiTailwindcss, SiMui, SiElementor,
} from 'react-icons/si'
import { Boxes, Sparkles, Network } from 'lucide-react'

const stack = [
  { label: 'REACT', Icon: SiReact },
  { label: 'WORDPRESS', Icon: SiWordpress },
  { label: 'TAILWIND CSS', Icon: SiTailwindcss },
  { label: 'REDUX TOOLKIT', Icon: Boxes },
  { label: 'MATERIAL UI', Icon: SiMui },
  // { label: 'PUTER.JS', Icon: Sparkles },
  { label: 'REST APIS', Icon: Network },
  { label: 'ELEMENTOR', Icon: SiElementor },
]

const colors = ['var(--cyan)', 'var(--violet)', 'var(--pink)', 'var(--gold)']

function Row() {
  return (
    <span className="marquee-row">
      {stack.map(({ label, Icon }, i) => (
        <span className="marquee-item" key={label}>
          <Icon className="marquee-icon" style={{ color: colors[i % colors.length] }} />
          {label}
          <i style={{ color: colors[i % colors.length] }}>•</i>
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  )
}