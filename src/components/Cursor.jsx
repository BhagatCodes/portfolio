import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const ring = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
    }

    let raf
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18
      ring.current.y += (target.current.y - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    const over = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) {
        setHovering(true)
        setLabel(el.getAttribute('data-cursor') || '')
      }
    }
    const out = (e) => {
      const el = e.target.closest('[data-cursor]')
      if (el) {
        setHovering(false)
        setLabel('')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className={`cursor-dot${hovering ? ' hidden' : ''}`} ref={dotRef} />
      <div className={`cursor-ring${hovering ? ' hovering' : ''}`} ref={ringRef}>
        <span className="cursor-label">{label}</span>
      </div>
    </>
  )
}