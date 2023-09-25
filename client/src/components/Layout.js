import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
