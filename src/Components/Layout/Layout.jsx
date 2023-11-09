import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return <>
  <div className=" bg-slate-800 py-4 ">

    <Navbar/>
    <div className="mt-10 ">

   <Outlet/>
    </div>
  </div>

  </>
}
