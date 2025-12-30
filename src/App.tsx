import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ErrorPage } from './pages/Error'
import { ROUTES } from './config/routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
