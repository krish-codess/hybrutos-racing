import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/Profile'
import TeamAerodynamics from './pages/teams/TeamAerodynamics'
import TeamBusiness from './pages/teams/TeamBusiness'
import TeamChassis from './pages/teams/TeamChassis'
import TeamElectronics from './pages/teams/TeamElectronics'
import TeamPowertrain from './pages/teams/TeamPowertrain'
import TeamSuspension from './pages/teams/TeamSuspension'
import CompetitionDetail from './pages/CompetitionDetail'
import Sponsors from './pages/Sponsors'
import Mechanical from './pages/departments/Mechanical'
import Electrical from './pages/departments/Electrical'
import Corporate from './pages/departments/Corporate'
import Contact from './pages/Contact'

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team/aerodynamics" element={<TeamAerodynamics />} />
          <Route path="/team/business" element={<TeamBusiness />} />
          <Route path="/team/chassis" element={<TeamChassis />} />
          <Route path="/team/electronics" element={<TeamElectronics />} />
          <Route path="/team/powertrain" element={<TeamPowertrain />} />
          <Route path="/team/suspension" element={<TeamSuspension />} />
          <Route path="/department/mechanical" element={<Mechanical />} />
          <Route path="/department/electrical" element={<Electrical />} />
          <Route path="/department/corporate" element={<Corporate />} />
          <Route path="/competition" element={<CompetitionDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
