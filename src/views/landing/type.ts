import { type IconifyIcon } from '@iconify/vue'

export type ServiceType = {
  icon?: IconifyIcon | string
  image?: string
  title: string
  description: string
}

export type StatisticType = {
  image: string
  title: string
  content?: string
}

export type UserType = {
  image?: string
  name: string
}

export type TestimonialType = {
  rating?: number
  comment: string
  user: UserType
}


