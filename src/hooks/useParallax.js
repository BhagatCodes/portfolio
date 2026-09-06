import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

// Tracks the element's own progress through the viewport and returns a
// motion value that moves it vertically as the page scrolls, for a
// classic parallax depth effect. `distance` is the max pixel travel
// in each direction; `reverse` flips the direction (useful for layering
// foreground/background elements that should drift apart).
export default function useParallax(distance = 60, reverse = false) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const range = reverse ? [-distance, distance] : [distance, -distance]
  const y = useTransform(scrollYProgress, [0, 1], range)
  return { ref, y, scrollYProgress }
}
