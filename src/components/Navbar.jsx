export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="logo" data-cursor="Home"><span className="dot" /><span className="grad-text">Bhagat Codes</span></a>
      <nav className="nav-links">
        <a href="#work" data-cursor="View">Work</a>
        <a href="#journey" data-cursor="View">Journey</a>
        <a href="#skills" data-cursor="View">Skills</a>
      </nav>
      <a href="#contact" className="nav-cta" data-cursor="Say hi">Let's talk</a>
    </header>
  )
}
