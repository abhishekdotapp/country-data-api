import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <header className="w-full px-8 text-gray-100 bg-slate-800 shadow-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to={"/"} className="flex items-center mb-5 md:mb-0">
            <span className="text-xl font-black text-slate-400 select-none">
              Just <span className="text-indigo-600">Explorr</span>
            </span>
          </NavLink>

          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8">
            <NavLink to={"/"} className="mr-5 font-medium text-slate-300 hover:text-slate-600" >Home</NavLink>
            <NavLink to={"/countries"} className="mr-5 font-medium text-slate-300 hover:text-slate-600">Countries</NavLink>
            <NavLink to={"/about"} className="mr-5 font-medium text-slate-300 hover:text-slaye-600">About</NavLink>
          </nav>
      </div>
     </div>
    </header>
  )
}

export default Navbar