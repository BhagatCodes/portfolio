import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Download } from 'lucide-react'
import useParallax from '../hooks/useParallax'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const heading = useParallax(20, true)

  const copyEmail = () => {
    navigator.clipboard.writeText('shubhamchauhanbhagat@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <section className="pad wrap hairline" id="contact">
      <motion.div className="contact-hero reveal" ref={heading.ref} style={{ y: heading.y }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          <span className="rule" />
          GET IN TOUCH
        </div>
        <h2>
          Let's build
          <br />
          something <span className="grad-text">live.</span>
        </h2>
        <p>
          Open to full-time and freelance front-end work. The fastest way to
          reach me is WhatsApp — email works too.
        </p>
      </motion.div>

      <div className="contact-grid reveal reveal-stagger">
        <div className="contact-cell">
          <span className="lbl"><Mail className="cell-icon" />EMAIL</span>
          <div className="val">
            shubhamchauhanbhagat@gmail.com
            <button onClick={copyEmail} data-cursor="Copy">{copied ? 'COPIED' : 'COPY'}</button>
          </div>
        </div>
        <div className="contact-cell">
          <span className="lbl"><MessageCircle className="cell-icon" />PHONE / WHATSAPP</span>
          <div className="val">
            <a href="https://wa.me/919369251477" target="_blank" rel="noopener noreferrer" data-cursor="Chat">
              +91 93692 51477
            </a>
          </div>
        </div>
        <div className="contact-cell">
          <span className="lbl"><Download className="cell-icon" />RÉSUMÉ</span>
          <div className="val">
            <a href="/Shubham_Chauhan_Resume.pdf" download data-cursor="Download">
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
