import { motion } from 'motion/react'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'left', id }: SectionHeadingProps) {
  return (
    <motion.div className={`section-heading section-heading--${align}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </motion.div>
  )
}
