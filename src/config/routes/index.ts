export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/404',
  ERROR: '/error',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = (typeof ROUTES)[RouteKey]
