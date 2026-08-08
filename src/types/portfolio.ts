export type ProjectId = 'college-connects' | 'cinereserve' | 'aws-cloud' | 'product-feedback'
export type SplineSceneName = 'brain' | 'radial-glass' | 'zero-gravity'
export type Accent = 'violet' | 'mauve'

export interface SkillGroup {
  id: string
  label: string
  items: string[]
  icon: string
}

export interface Project {
  id: ProjectId
  eyebrow: string
  title: string
  tagline: string
  summary: string
  problem: string
  solution: string
  architecture: string[]
  technologies: string[]
  features: string[]
  challenges: string
  outcome: string
  githubUrl: string
  liveDemoUrl?: string
  accent: Accent
}

export interface Experience {
  id: string
  label: string
  title: string
  organisation: string
  description: string
  tags: string[]
  side: 'left' | 'right'
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
}

export interface FocusItem {
  id: string
  title: string
  description: string
  accent: Accent
  side: 'left' | 'right'
}
