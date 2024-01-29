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
import { RegisterPage } from './pages/Register/index.tsx'
import FinanceContextProvider from './contexts/Finance/index.tsx'

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
        path: 'register',
        element: <RegisterPage />
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
      <FinanceContextProvider>
        <RouterProvider router={router} />
      </FinanceContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
