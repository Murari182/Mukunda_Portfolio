import { useState, type ReactNode } from 'react'
import { AnimatePresence, MotionConfig, motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { ArrowDown, ArrowUpRight, Check, ChevronRight, ExternalLink, FileText } from 'lucide-react'
import { Icon } from './components/Icon'
import { Navbar } from './components/Navbar/Navbar'
import { SectionHeading } from './components/SectionHeading'
import { SplineScene } from './components/SplineScene/SplineScene'
import { useActiveSection } from './hooks/useActiveSection'
import { achievements, experiences, focusItems, projects, skillGroups, socialLinks } from './data/portfolio'
import type { Project } from './types/portfolio'
import './styles/tokens.css'
import './styles/global.css'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact']

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function App() {
  const activeSection = useActiveSection(sectionIds)
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Navbar activeSection={activeSection} githubUrl={socialLinks.github} linkedinUrl={socialLinks.linkedin} resumeUrl="/resume.pdf" />
      <main id="main-content">
        <Hero reduceMotion={Boolean(reduceMotion)} />
        <About />
        <Skills />
        <ProjectsSection selectedProject={selectedProject} selectedProjectId={selectedProjectId} onSelect={setSelectedProjectId} />
        <ExperienceSection />
        <ExperimentalInterlude />
        <AchievementsSection />
        <AILab reduceMotion={Boolean(reduceMotion)} />
        <Mathematics reduceMotion={Boolean(reduceMotion)} />
        <FocusSection />
        <SocialAndContact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  const labels = ['AI / ML', 'NEURAL NETWORKS', 'PYTHON', 'C++', 'AWS', 'REACT']
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <SplineScene name="brain" className="hero__scene" description="A dissolving particle brain rotates slowly while cursor movement disturbs nearby neural particles and connected data points.">
        <div className="hero__scene-note">Interactive neural field / move your cursor</div>
      </SplineScene>
      <div className="hero__grid container">
        <div className="hero__copy">
          <motion.p className="eyebrow hero__eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>Mathematics &amp; Computing · AI/ML · Software Engineering</motion.p>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}>SREERAMADASU<br />MUKUNDA RAMA CHARY</motion.h1>
          <motion.p className="hero__tagline" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }}>Building Intelligent Systems at the Intersection of Mathematics, AI &amp; Software.</motion.p>
          <motion.p className="hero__description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }}>Mathematics &amp; Computing student focused on Artificial Intelligence, Machine Learning, software engineering, full-stack systems and cloud technologies. I build practical products that combine intelligent systems with thoughtful user experiences.</motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.48 }}>
            <a className="button button--violet" href="#projects">Explore My Work <ArrowUpRight size={16} /></a>
            <a className="button button--ghost" href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={16} /> View Resume</a>
          </motion.div>
          <motion.div className="hero__socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.62 }}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
          </motion.div>
        </div>
        <div className="hero__labels" aria-hidden="true">
          {labels.map((label, index) => <motion.span key={label} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0, y: reduceMotion ? 0 : [0, index % 2 ? -7 : 7, 0] }} transition={{ opacity: { duration: 0.6, delay: 0.55 + index * 0.08 }, x: { duration: 0.6, delay: 0.55 + index * 0.08 }, y: { duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 } }}>{label}</motion.span>)}
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span>Scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="profile-card">
          <div className="profile-card__image-wrap"><img src="/Profile Pic.jpg" alt="Portrait of Sreeramadasu Mukunda Rama Chary" /></div>
          <div className="profile-card__meta"><span>Current residence</span><strong>RGIPT, Jais</strong></div>
          <div className="profile-card__status"><span className="status-dot" /> Open to thoughtful technical collaborations</div>
        </Reveal>
        <div className="about__copy">
          <Reveal><SectionHeading id="about-title" eyebrow="Engineering profile" title="Engineering with Mathematics. Building with Intelligence." /></Reveal>
          <Reveal delay={0.08}><p className="lead-copy">I am a Mathematics &amp; Computing student at <strong>Rajiv Gandhi Institute of Petroleum Technology</strong>, exploring the intersection of mathematical reasoning, artificial intelligence and software engineering.</p></Reveal>
          <Reveal delay={0.12}><p className="muted-copy">My interests span AI/ML, data science, full-stack development and cloud infrastructure. I enjoy turning technical concepts into practical systems that are useful, scalable and thoughtfully designed.</p></Reveal>
          <Reveal className="domain-list" delay={0.16}>
            <p className="eyebrow">Research domains</p>
            <div className="domain-list__items"><span>AI / Machine Learning</span><span>Software Engineering</span><span>Cloud Computing</span><span>Full-Stack Systems</span><span>Data Science &amp; Analytics</span></div>
          </Reveal>
        </div>
      </div>
      <div className="container stats-grid">
        {[
          { id: '01', value: '9.21', title: 'First Year CGPA', desc: 'Strong academic foundation in Mathematics & Computing at RGIPT.' },
          { id: '02', value: 'AI/ML', title: 'Core Focus', desc: 'Artificial Intelligence, Machine Learning, Data Science & intelligent systems.' },
          { id: '03', value: 'AWS', title: 'Cloud Experience', desc: 'Hands-on work with S3, EC2, IAM and CloudWatch.' },
          { id: '04', value: '∞', title: 'Always Building', desc: 'Continuously exploring new ideas, technologies and software systems.' }
        ].map((stat, index) => (
          <Reveal key={stat.id} delay={index * 0.05}>
            <div className="stat-card">
              <p className="eyebrow">{stat.id} &mdash; {stat.value}</p>
              <strong>{stat.title}</strong>
              <span>{stat.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section section--surface skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <Reveal><SectionHeading id="skills-title" eyebrow="Expertise ledger" title="Technical Stack" description="A practical toolkit spanning intelligent systems, product engineering and cloud infrastructure." /></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => <Reveal key={group.id} delay={index * 0.06}><article className="skill-group"><div className="skill-group__icon"><Icon name={group.icon} size={18} /></div><p className="eyebrow">{group.label}</p><ul>{group.items.map((item) => <li key={item}><span>{item}</span><ChevronRight size={14} /></li>)}</ul></article></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection({ selectedProject, selectedProjectId, onSelect }: { selectedProject: Project; selectedProjectId: Project['id']; onSelect: (id: Project['id']) => void }) {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal><SectionHeading id="projects-title" eyebrow="Case studies" title="Things I've Built" description="From rank prediction to cloud architecture, every project is a study in turning technical curiosity into a usable system." /></Reveal>
        <div className="project-workbench">
          <div className="project-list" role="tablist" aria-label="Project case studies">
            {projects.map((project) => <motion.button key={project.id} type="button" role="tab" aria-selected={selectedProjectId === project.id} className={`project-tab ${selectedProjectId === project.id ? 'is-active' : ''}`} onClick={() => onSelect(project.id)} whileHover={{ x: 6 }} whileFocus={{ x: 6 }}><span className="project-tab__eyebrow">{project.eyebrow}</span><strong>{project.title}</strong><span>{project.tagline}</span><ArrowUpRight size={16} /></motion.button>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.article key={selectedProject.id} className={`project-detail project-detail--${selectedProject.accent}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.28 }} role="tabpanel">
              <div className="project-detail__header"><div><p className="eyebrow">{selectedProject.eyebrow}</p><h3>{selectedProject.title}</h3><p className="project-detail__tagline">{selectedProject.tagline}</p></div><div className="project-detail__actions"><a className="icon-button" href={selectedProject.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${selectedProject.title} GitHub profile`}><Icon name="github" size={18} /></a>{selectedProject.liveDemoUrl ? <a className="icon-button" href={selectedProject.liveDemoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${selectedProject.title} live demo`}><ExternalLink size={18} /></a> : <span className="detail-note">Live demo pending</span>}</div></div>
              <p className="project-detail__summary">{selectedProject.summary}</p>
              <div className="project-detail__architecture"><p className="eyebrow">Architecture</p><div>{selectedProject.architecture.map((item) => <span key={item}>{item}</span>)}</div></div>
              <div className="project-detail__columns"><div><InfoBlock title="Problem" copy={selectedProject.problem} /><InfoBlock title="Solution" copy={selectedProject.solution} /><InfoBlock title="Challenges" copy={selectedProject.challenges} /></div><div className="feature-panel"><p className="eyebrow">Key features</p><ul>{selectedProject.features.map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul><p className="eyebrow">Technology</p><div className="tag-row">{selectedProject.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><InfoBlock title="Outcome" copy={selectedProject.outcome} /></div></div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ title, copy }: { title: string; copy: string }) {
  return <div className="info-block"><p className="eyebrow">{title}</p><p>{copy}</p></div>
}

function ExperienceSection() {
  return (
    <section className="section experience section--surface" id="experience" aria-labelledby="experience-title">
      <div className="container"><Reveal><SectionHeading id="experience-title" eyebrow="Journey / timeline" title="Career Journey" description="A growing practice across AI community, cloud infrastructure, full-stack products and technical communication." /></Reveal><div className="timeline">{experiences.map((item, index) => <Reveal key={item.id} delay={index * 0.04}><article className={`timeline-item timeline-item--${item.side}`}><div className="timeline-item__content"><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p className="timeline-item__organisation">{item.organisation}</p><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="timeline-item__marker" aria-hidden="true" /></article></Reveal>)}</div></div>
    </section>
  )
}

function ExperimentalInterlude() {
  return (
    <section className="experimental" aria-labelledby="experimental-title">
      <SplineScene name="zero-gravity" className="experimental__scene" description="Orbiting 3D objects float around an empty center with gentle physics and cursor nudges."><div className="experimental__overlay"><p className="eyebrow">Interactive simulation</p><h2 id="experimental-title">ZERO GRAVITY</h2><span>cursor physics / orbiting objects</span></div></SplineScene>
    </section>
  )
}

function AchievementsSection() {
  return (
    <section className="section achievements" id="achievements" aria-labelledby="achievements-title"><div className="container"><Reveal><SectionHeading id="achievements-title" eyebrow="Milestones reached" title="Hall of Achievements" align="center" /></Reveal><div className="achievement-grid">{achievements.map((achievement, index) => <Reveal key={achievement.id} delay={index * 0.05}><article className="achievement-card"><Icon name={achievement.icon} size={21} /><h3>{achievement.title}</h3><p>{achievement.description}</p></article></Reveal>)}</div></div></section>
  )
}

function AILab({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section className="ai-lab" aria-labelledby="ai-lab-title">
      <SplineScene name="radial-glass" className="ai-lab__scene" description="A twisting ribbon of stacked glass discs forms a continuously spinning radial knot that tilts and orbits with cursor movement.">
        <div className="ai-lab__top"><p className="eyebrow">Research environment / 03</p><span>pointer-reactive radial glass field</span></div>
        <div className="ai-lab__copy"><h2 id="ai-lab-title">AI LAB</h2><p>Exploring the intersection of mathematics, intelligence and computation.</p></div>
        <div className="lab-readouts" aria-hidden="true"><span><i /> Particle system <b>ONLINE</b></span><span><i /> Neural network <b>SYNCED</b></span><span><i /> Data streams <b>ACTIVE</b></span><span><i /> Orbit state <b>{reduceMotion ? 'STABLE' : 'LIVE'}</b></span></div>
      </SplineScene>
    </section>
  )
}

function Mathematics({ reduceMotion }: { reduceMotion: boolean }) {
  const formulas = ['∇f(x)', 'P(X|Y)', 'Σ wᵢxᵢ', 'f(x) → y', '∫', 'λ']
  return (
    <section className="section mathematics" aria-labelledby="mathematics-title"><div className="math-grid" aria-hidden="true" />{formulas.map((formula, index) => <motion.span key={formula} className={`formula formula--${index + 1}`} animate={reduceMotion ? undefined : { y: [0, -12, 0], opacity: [0.22, 0.38, 0.22] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}>{formula}</motion.span>)}<div className="container mathematics__content"><Reveal><SectionHeading id="mathematics-title" eyebrow="Foundations / mathematics × computation" title="Where Mathematics Meets Intelligence" description="Subtle equations, probability and gradients are not decoration here — they are part of the way I think about useful systems." /></Reveal></div></section>
  )
}

function FocusSection() {
  return <section className="section focus" aria-labelledby="focus-title"><div className="container"><Reveal><SectionHeading id="focus-title" eyebrow="Current field notes" title="Currently Exploring" /></Reveal><div className="focus-ladder">{focusItems.map((item, index) => <Reveal key={item.id} delay={index * 0.05}><article className={`focus-item focus-item--${item.side} focus-item--${item.accent}`}><span className="focus-item__index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight size={18} /></article></Reveal>)}</div></div></section>
}

function SocialAndContact() {
  return <section className="section contact" id="contact" aria-labelledby="contact-title"><div className="container"><div className="social-grid"><Reveal><a className="social-card" href={socialLinks.github} target="_blank" rel="noreferrer"><span className="eyebrow">Open-source work</span><h3>GitHub</h3><p>Technical repositories, experiments and projects built across AI, software engineering and cloud.</p><Icon name="github" size={22} /></a></Reveal><Reveal delay={0.08}><a className="social-card" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><span className="eyebrow">Professional journey</span><h3>LinkedIn</h3><p>Professional journey, community involvement and opportunities to build meaningful technology.</p><Icon name="linkedin" size={22} /></a></Reveal></div><div className="contact-cta"><Reveal><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let's Build Something Intelligent.</h2><p>Have an interesting idea, technical project, collaboration or opportunity? Let's connect.</p><div className="contact-cta__actions"><a className="button button--light" href={socialLinks.email}><Icon name="mail" size={16} /> Email Me</a><a className="button button--ghost" href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a className="button button--ghost" href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a></div></Reveal></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container site-footer__inner"><div><strong>SREERAMADASU MUKUNDA RAMA CHARY</strong><span>AI/ML · Mathematics &amp; Computing · Software Engineering</span></div><div className="site-footer__links"><a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></div><span>© 2026 Sreeramadasu Mukunda Rama Chary</span></div></footer>
}

export default App
