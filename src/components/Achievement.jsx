import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import useParallax from '../hooks/useParallax'

export default function Achievement() {
  const float = useParallax(18)

  return (
    <section className="pad wrap hairline">
      <motion.div className="achieve reveal" ref={float.ref} style={{ y: float.y }}>
        <div className="badge-ring">
          <div className="badge">
            <Trophy className="badge-icon" />
            TECH'NEX 2024
          </div>
        </div>
        <div>
          <h3>Led a 4-member team at IIT BHU Tech'Nex</h3>
          <p>
            Directed development of a front-end project centered on sustainable
            development, from concept through to a working build — coordinating
            scope, design and delivery across the team.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
