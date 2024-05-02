import type { RouteParamsRaw } from 'vue-router'

export type LinkType = {
  name: string
  params?: RouteParamsRaw
}


export type NavLinkType = {
  title: string
  link?: LinkType
}

// sidebar
export type ChildrenLinkType = {  
  title: string
  link?: LinkType
 
}

export type SidebarLinkType = {
  title: string
  link?: LinkType
}
