import React from 'react'
import { NavigationBottom } from '../NavigationBottom'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-1'>
        <Outlet />
      </div>
      <NavigationBottom />
    </div>
  )
}
