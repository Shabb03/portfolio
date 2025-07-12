export interface SkillData {
  category: string
  icon: string
  skills: {
    name: string
    icon: string
  }[]
}

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
  image: string
  codeUrl: string
  featured: boolean
}

export interface AccomplishmentsData {
  accomplishments: {
    title: string
    organization: string
    date: string
    description: string
    category: string
    icon: string
  }[]
  categories: {
    [key: string]: string
  }
}

export interface TimelineItem {
  year: string
  title: string
  company: string
  description: string[]
  type: string
}

export interface HistoryData {
  timelineData: TimelineItem[]
}

export interface HobbiesData {
  hobbies: {
    name: string
    icon: string
    image: string
  }[]
  benefits: {
    icon: string
    title: string
    description: string
  }[]
}

export type AnimationType =
  | 'fadeIn'
  | 'slideUp'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleIn'

export type Theme = 'light' | 'dark'
