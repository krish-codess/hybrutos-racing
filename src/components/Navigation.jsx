import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const location = useLocation()
  const [openTeamMenu, setOpenTeamMenu] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-8 items-center font-rajdhani">
          <Link
            to="/"
            className={`nav-link tab-nav-link ${isActive('/') ? 'active' : ''} transition`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-link tab-nav-link ${isActive('/about') ? 'active' : ''} transition`}
          >
            About
          </Link>

          <div className="relative group">
            <button
              className="nav-link tab-nav-link transition flex items-center gap-2"
              onClick={() => setOpenTeamMenu(!openTeamMenu)}
            >
              Teams
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="hidden group-hover:block absolute left-0 mt-0 w-48 nav-dropdown rounded-lg shadow-lg border">
              <Link to="/team/aerodynamics" className="nav-dropdown-link block px-4 py-2 transition rounded-t-lg">Aerodynamics</Link>
              <Link to="/team/business"     className="nav-dropdown-link block px-4 py-2 transition">Business &amp; Ops</Link>
              <Link to="/team/chassis"      className="nav-dropdown-link block px-4 py-2 transition">Chassis</Link>
              <Link to="/team/electronics"  className="nav-dropdown-link block px-4 py-2 transition">Electronics</Link>
              <Link to="/team/powertrain"   className="nav-dropdown-link block px-4 py-2 transition">Powertrain</Link>
              <Link to="/team/suspension"   className="nav-dropdown-link block px-4 py-2 transition rounded-b-lg">Suspension</Link>
            </div>
          </div>

          <Link
            to="/competition"
            className={`nav-link tab-nav-link ${isActive('/competition') ? 'active' : ''} transition`}
          >
            Competition
          </Link>
        </div>
      </div>
    </nav>
  )
}
