const authRoutes = [
  {
    path: '/notary-public',
    name: 'account.sign-in',
    meta: {
      title: 'Real Estate, Wills, and Contracts Notary | Cali-Girl Notary'
    },
    component: () => import('@/views/landing/index.vue')
  },
  {
    path: '/trusted-notary',
    name: 'account.sign-up',
    meta: {
      title: 'Online Notary Services | Secure & Legally Compliant | Cali-Girl Notary'
    },
    component: () => import('@/views/landing/index.vue')
  }
]

const errorPageRoutes = [
  {
    path: '/error-404-1',
    name: 'pages.error-404-1',
    meta: {
      title: '404 Not Found | Cali-Girl'
    },
    component: () => import('@/views/pages/error-404-1/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'pages.error-404-1'
  }
]


const landingRoute = [
  {
    path: '',
    name: 'landing',
    meta: {
      title: 'Certified Notary Services | Secure Document Authentication Near You | Cali-Girl Notary',
      authRequired: false
    },
    component: () => import('@/views/landing/index.vue')
  }
]

const landingsRoutes = [
  {
    path: '',
    name: 'landings',
    meta: { authRequired: false },
    children: [
      {
        path: '/home',
        name: 'landings.home',
        meta: {
          title: 'Mobile Notary Service  | English & Spanish Document Notarization | Cali-Girl Notary'
        },
        component: () => import('@/views/landings/home/index.vue')
      }
    ]
  }
]

const pagesRoutes = [
  {
    path: '/pages',
    name: 'pages',
    meta: { authRequired: false },
    children: [
     
      {
        path: 'about',
        name: 'pages.about',
        meta: {
          title: 'Trusted Certified Notary Public | Secure Document Notarization | Cali-Girl Notary'
        },
        component: () => import('@/views/pages/about/index.vue')
      },
      {
        path: 'services',
        name: 'pages.services',
        meta: {
          title: '24/7 Mobile Notary Services | Fast & Reliable  | Certified & Convenient Document Signing'
        },
        component: () => import('@/views/pages/services/index.vue')
      },
      {
        path: 'contacts',
        name: 'pages.contacts',
        meta: {
          title: 'Contact a Top-Rated Notary Public Near You | Secure Document Authentication Near You | Cali-Girl Notary'
        }, 
        component: () => import('@/views/pages/contacts/index.vue')
      },
     
      {
        path: 'blog',
        name: 'pages.blog',
        meta: {
          title: 'Comprehensive Guide to Notary Services | What is a Notary'
        },
        component: () => import('@/views/pages/blog/index.vue')
      },
      {
        path: 'faq',
        name: 'pages.faq',
        meta: {
          title: 'FAQs on Notary Public Services | Notary Signing Agent | Cali-Girl Notary'
        },
        component: () => import('@/views/pages/faq/index.vue')
      },
      {
        path: 'privacy',
        name: 'pages.privacy',
        meta: {
          title: 'Privacy Policy | Cali-Girl Notary Public'
        },
        component: () => import('@/views/pages/privacy/index.vue')
      },
    ]
  }
]
  const accountRoutes = [
    {
      path: '',
      name: 'account',
      meta: { authRequired: false },
      children: [
        {
          path: 'notary-services',
          name: 'account.details',
          meta: {
            title: 'Affordable Notarization and Witness Services | San Diego, CA | Chula Vista, CA | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'legal-notary',
          name: 'account.security',
          meta: {
            title: 'Official Notary Public for Apostille Services | San Diego, CA | National City, CA | Chula Vista, CA'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'notary-chula-vista',
          name: 'account.notifications',
          meta: {
            title: 'Comprehensive Notary Services | Print, Prep, Scan & Document Execution | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'notary-san-diego',
          name: 'account.messages',
          meta: {
            title: 'Certified Notary Public Services | San Diego, CA | Chula Vista, CA | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'expert-notary',
          name: 'account.saved-items',
          meta: {
            title: 'Bilingual Notary Services | Chula Vista, CA | San Diego, CA | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'best-notary-public',
          name: 'account.collections',
          meta: {
            title: '24/7 Mobile Notary Services | Fast & Reliable | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        },
        {
          path: 'notario-espanol',
          name: 'account.payment',
          meta: {
            title: 'Certified Notary Public Services | San Diego, California | Chula Vista, CA | Cali-Girl'
          },
          component: () => import('@/views/landing/index.vue')
        }
      ]
    }
  ]
 


export const allRoutes = [
  
  ...authRoutes,
  ...errorPageRoutes,
  ...landingRoute,
  ...landingsRoutes,
  ...pagesRoutes,
  ...accountRoutes,
  
 
]
