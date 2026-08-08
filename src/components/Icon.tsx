import type { LucideIcon } from 'lucide-react'
import { Award, BrainCircuit, Cloud, Code2, Database, FileText, Github, GraduationCap, Layers3, Linkedin, Mail, Medal, Network, Orbit, Sparkles, Terminal, Users } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  award: Award,
  brain: BrainCircuit,
  cloud: Cloud,
  code: Code2,
  database: Database,
  file: FileText,
  github: Github,
  graduation: GraduationCap,
  layers: Layers3,
  linkedin: Linkedin,
  mail: Mail,
  medal: Medal,
  network: Network,
  orbit: Orbit,
  sparkles: Sparkles,
  terminal: Terminal,
  users: Users,
}

interface IconProps {
  name: string
  size?: number
  strokeWidth?: number
  className?: string
}

export function Icon({ name, size = 18, strokeWidth = 1.7, className }: IconProps) {
  const Component = icons[name] ?? Sparkles
  return <Component aria-hidden="true" className={className} size={size} strokeWidth={strokeWidth} />
}
