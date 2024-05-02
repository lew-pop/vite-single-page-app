import type { RouteParamsRaw } from 'vue-router'

type LinkType = {
  name: string
  params?: RouteParamsRaw
}

export type ServiceType = {
  image: string
  title: string
  description: string
  link?: LinkType
}


export type AuthorType = {
  image: string
  name: string
}

export type TestimonialType = {
  comment: string
  author: AuthorType
}

export type FeatureType = {
  image: string
  title: string
  description?: string
}
