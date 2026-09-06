import { Mail, MessageCircle, FileDown } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="foot-row">
        <span>© 2026 Shubham Chauhan. Based in Lucknow, India.</span>
        <div className="foot-links">
          <a href="#work" data-cursor="View">Work</a>
          <a href="#journey" data-cursor="View">Journey</a>
          <a href="#skills" data-cursor="View">Skills</a>
          <a href="#contact" data-cursor="View">Contact</a>
        </div>
        <div className="foot-social">
          <a href="mailto:shubhamchauhanbhagat@gmail.com" data-cursor="Email" aria-label="Email">
            <Mail />
          </a>
          <a href="https://wa.me/919369251477" target="_blank" rel="noopener noreferrer" data-cursor="Chat" aria-label="WhatsApp">
            <MessageCircle />
          </a>
          <a href="/Shubham_Chauhan_Resume.pdf" download data-cursor="Download" aria-label="Download résumé">
            <FileDown />
          </a>
        </div>
      </div>
    </footer>
  )
}
