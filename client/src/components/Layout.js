import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Layout
