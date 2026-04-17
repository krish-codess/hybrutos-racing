import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import mainLogo from '../assets/logos/mainLogo.png'

export default function Navbar({ toggleTheme, theme }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [departmentsOpen, setDepartmentsOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const departments = [
    { path: '/department/mechanical', label: 'Mechanical' },
    { path: '/department/electrical', label: 'Electrical' },
    { path: '/department/corporate', label: 'Corporate' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner">
        {/* Logo — minimal text mark */}
        <Link to="/" className="navbar__logo" id="nav-logo">
          <img src={mainLogo} alt="Hybrutos Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} className="navbar__logo-icon" />
          <span className="navbar__logo-text">HYBRUTOS RACING</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar__links">
          <Link
            to="/"
            className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}
            id="nav-home"
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}
            id="nav-about"
          >
            About
          </Link>

          {/* Departments Dropdown */}
          <div
            className="navbar__dropdown"
            onMouseEnter={() => setDepartmentsOpen(true)}
            onMouseLeave={() => setDepartmentsOpen(false)}
          >
            <button className="navbar__link navbar__link--dropdown" id="nav-departments">
              Departments
              <svg
                className={`navbar__chevron ${departmentsOpen ? 'navbar__chevron--open' : ''}`}
                width="12" height="12" viewBox="0 0 12 12" fill="none"
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`navbar__dropdown-menu ${departmentsOpen ? 'navbar__dropdown-menu--open' : ''}`}>
              {departments.map((dept) => (
                <Link
                  key={dept.path}
                  to={dept.path}
                  className={`navbar__dropdown-item ${isActive(dept.path) ? 'navbar__dropdown-item--active' : ''}`}
                >
                  <span className="navbar__dropdown-dot"></span>
                  {dept.label}
                </Link>
              ))}
            </div>
          </div>

          {/* <Link
            to="/competition"
            className={`navbar__link ${isActive('/competition') ? 'navbar__link--active' : ''}`}
            id="nav-competition"
          >
            Competition
          </Link> */}

          <Link
            to="/sponsors"
            className={`navbar__link ${isActive('/sponsors') ? 'navbar__link--active' : ''}`}
            id="nav-sponsors"
          >
            Sponsors
          </Link>
        </div>

        {/* Right side actions */}
        <div className="navbar__actions">
          <button
            onClick={toggleTheme}
            className="navbar__theme-btn"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            id="theme-toggle"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Mobile hamburger */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        <Link to="/" className={`navbar__mobile-link ${isActive('/') ? 'navbar__mobile-link--active' : ''}`}>Home</Link>
        <Link to="/about" className={`navbar__mobile-link ${isActive('/about') ? 'navbar__mobile-link--active' : ''}`}>About</Link>
        <div className="navbar__mobile-group">
          <span className="navbar__mobile-group-title">Departments</span>
          {departments.map((dept) => (
            <Link
              key={dept.path}
              to={dept.path}
              className={`navbar__mobile-sublink ${isActive(dept.path) ? 'navbar__mobile-link--active' : ''}`}
            >
              {dept.label}
            </Link>
          ))}
        </div>
        <Link to="/competition" className={`navbar__mobile-link ${isActive('/competition') ? 'navbar__mobile-link--active' : ''}`}>Competition</Link>
        <Link to="/sponsors" className={`navbar__mobile-link ${isActive('/sponsors') ? 'navbar__mobile-link--active' : ''}`}>Sponsors</Link>
      </div>
    </nav>
  )
}
