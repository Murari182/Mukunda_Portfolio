import { AnimatePresence, motion } from 'motion/react'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Journey'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
] as const

interface NavbarProps {
  activeSection: string
  githubUrl: string
  linkedinUrl: string
  resumeUrl: string
}

export function Navbar({ activeSection, githubUrl, linkedinUrl, resumeUrl }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand__mark">SMRC</span>
          <span className="brand__name">Deep Aurora</span>
        </a>
        <nav className="site-nav__links" aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a className={activeSection === id ? 'is-active' : ''} href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <div className="site-nav__actions">
          <a className="icon-link desktop-only" href={githubUrl} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><Github size={16} /></a>
          <a className="icon-link desktop-only" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile"><Linkedin size={16} /></a>
          <a className="button button--small button--violet desktop-only" href={resumeUrl} target="_blank" rel="noreferrer">Resume</a>
          <button className="icon-button mobile-only" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }} aria-label="Mobile navigation">
            <div className="container mobile-nav__inner">
              {links.map(([id, label]) => <a className={activeSection === id ? 'is-active' : ''} href={`#${id}`} key={id} onClick={handleLinkClick}>{label}</a>)}
              <div className="mobile-nav__socials">
                <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <a href={resumeUrl} target="_blank" rel="noreferrer"><span>↗</span> Resume</a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
