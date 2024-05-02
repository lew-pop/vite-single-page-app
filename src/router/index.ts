import { createRouter, createWebHistory } from 'vue-router'
import { allRoutes } from '@/router/routes'
import { useFakeAuthStore } from '@/stores/fakeAuth'

const router = createRouter({
  history: createWebHistory('/notary'),
  routes: allRoutes
})

// Before each route for page title
router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title.toString()
  }
  next()
})

// Before each route for login
router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()

  const useFakeAuth = useFakeAuthStore()
  // If auth is required and the user is logged in...
  if (useFakeAuth.isAuthenticated) {
    return next()
  }

 
})

export default router
