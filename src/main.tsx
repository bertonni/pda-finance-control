import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/Landing/index.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/index.tsx'
import HomePage from './pages/Home/index.tsx'
import TuitionPage from './pages/Tuition/index.tsx'
import DetailsPage from './pages/Details/index.tsx'
import AuthContextProvider from './contexts/Auth/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/finance',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'tuition',
        element: <TuitionPage />
      },
      {
        path: 'details',
        element: <DetailsPage />
      },
      {
        path: 'other',
        element: <HomePage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
