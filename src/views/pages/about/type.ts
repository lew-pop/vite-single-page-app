import type { IconifyIcon } from '@iconify/vue'

export type SolutionType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type UserType = {
  image: string
  name: string
  
}

export type TestimonialType = {
  comment: string
  user: UserType
}


export type FAQType = {
  question: string
  answers: string[]
}