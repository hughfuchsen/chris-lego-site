import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">MyApp</Link>
    </nav>
  )
}

export default Navbar
