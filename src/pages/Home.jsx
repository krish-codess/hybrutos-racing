import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─── Competition Timeline Data ─── */
const competitions = [
  {
    year: 2016,
    title: 'Team Founded',
    description: 'Hybrutos Racing was born at SRM Institute of Science and Technology with a vision to compete in Formula Student competitions worldwide.',
    achievements: ['Team Founded', 'First in Hybrid Progress - Formula Hybrid'],
  },
  {
    year: 2019,
    title: 'Rising Contenders',
    description: 'Refined our engineering approach and delivered a significantly improved vehicle with better performance metrics.',
    achievements: [
      'Overall 2nd in Hybrid Category - Formula Imperial',
      '1st in Static events - Formula Imperial',
      'Award for the Best Hybrid - Formula Imperial',
      'Endurance of 21 km Runner-up - Formula Imperial',
      'Best Design - Formula Imperial',
      'Best B-plan & Cost - Formula Imperial'
    ],
  },
  {
    year: 2020,
    title: 'Virtual Adaptation',
    description: 'Adapted to global challenges by participating in virtual design competitions and advancing our simulation capabilities.',
    achievements: ['Podium Finish - Formula Hybrid', 'Best in Engineering Design - Formula Hybrid'],
  },
  {
    year: 2021,
    title: 'Engineering Excellence',
    description: 'Pushed boundaries with innovative aerodynamic solutions and lightweight chassis design.',
    achievements: ['Podium Finish - Formula Hybrid'],
  },
  {
    year: 2025,
    title: 'Global Stage',
    description: 'Competing on the world stage with cutting-edge technology and a team of 60+ passionate engineers.',
    achievements: ['First in Cost Presentation', 'First in Engineering Design'],
  },
]

/* ─── Intersection Observer Hook ─── */
function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

/* ─── Animated Hero — Minimal ─── */
function AnimatedHero() {
  const [mounted, setMounted] = useState(false)
  const [taglineVisible, setTaglineVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setMounted(true), 300)
    const t2 = setTimeout(() => setTaglineVisible(true), 1600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const teamName = 'HYBRUTOS RACING'

  return (
    <section className="hero" id="hero-section">
      <div className="hero__content">
        {/* Team name with smooth staggered reveal */}
        <h1 className="hero__title" id="hero-title">
          {teamName.split('').map((char, i) => (
            <span
              key={i}
              className={`hero__letter ${mounted ? 'hero__letter--visible' : ''}`}
              style={{ '--letter-delay': `${i * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Simple divider line */}
        <div className={`hero__stripe ${mounted ? 'hero__stripe--visible' : ''}`}>
          <div className="hero__stripe-inner"></div>
        </div>

        {/* Tagline */}
        <p className={`hero__tagline ${taglineVisible ? 'hero__tagline--visible' : ''}`} id="hero-tagline">
          One Team, One Dream, One Car
        </p>

        {/* Institutional badge */}
        <div className={`hero__badge ${taglineVisible ? 'hero__badge--visible' : ''}`}>
          <span>SRM Institute of Science &amp; Technology</span>
        </div>
      </div>

      {/* Scroll indicator — positioned relative to hero section */}
      <div className={`hero__scroll-indicator ${taglineVisible ? 'hero__scroll-indicator--visible' : ''}`}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

/* ─── About / Overview Section — Minimal ─── */
function TeamOverview() {
  const [ref, visible] = useReveal(0.15)

  const stats = [
    { value: '30+', label: 'Team Members', icon: '→' },
    { value: '3', label: 'Departments', icon: '→' },
    { value: '9+', label: 'Years', icon: '→' },
    { value: '5+', label: 'Competitions', icon: '→' },
  ]

  return (
    <section className={`overview ${visible ? 'overview--visible' : ''}`} ref={ref} id="overview-section">
      <div className="overview__header">
        <span className="overview__label">About Us</span>
        <h2 className="overview__title">Engineering the Future of Motorsport</h2>
        <div className="overview__divider"></div>
      </div>

      <div className="overview__grid">
        <div className="overview__text">
          <p>
            Hybrutos Racing is the Formula Student hybrid team from SRM Institute of Science & Technology, Chennai. Founded in 2016, we design, build, and race a hybrid electric-IC formula-style vehicle every year blending mechanical precision with advanced electrical engineering.
          </p>
          <p>
            Our multidisciplinary team of 30+ engineers operates across six core domains: Powertrain, Electrical & Battery Systems, Vehicle Dynamics, Aerodynamics, Chassis, and Business. United by a shared drive to push the boundaries of sustainable motorsport, we bring the same intensity to every component we build and every lap we race.
          </p>

        </div>

        <div className="overview__stats">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="overview__stat-card"
              style={{ '--stat-delay': `${0.2 + i * 0.1}s` }}
            >
              <span className="overview__stat-value">{stat.value}</span>
              <span className="overview__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Timeline Section — Minimal ─── */
function Timeline() {
  const [ref, visible] = useReveal(0.1)
  const [activeYear, setActiveYear] = useState(2016)
  const [hoveredYear, setHoveredYear] = useState(null)

  const displayedComp = competitions.find(
    (c) => c.year === (hoveredYear || activeYear)
  )

  return (
    <section className={`timeline ${visible ? 'timeline--visible' : ''}`} ref={ref} id="timeline-section">
      <div className="timeline__header">
        <span className="timeline__label">Our Journey</span>
        <h2 className="timeline__title">A Decade of Racing Excellence</h2>
        <div className="timeline__divider"></div>
      </div>

      {/* Year picker bar */}
      <div className="timeline__picker" id="timeline-picker">
        <div className="timeline__track">
          <div className="timeline__track-line"></div>
          {competitions.map((comp, i) => (
            <button
              key={comp.year}
              className={`timeline__dot ${(hoveredYear || activeYear) === comp.year ? 'timeline__dot--active' : ''
                }`}
              style={{ '--dot-index': i, '--dot-delay': `${0.3 + i * 0.06}s` }}
              onMouseEnter={() => setHoveredYear(comp.year)}
              onMouseLeave={() => setHoveredYear(null)}
              onClick={() => setActiveYear(comp.year === activeYear ? null : comp.year)}
              id={`timeline-dot-${comp.year}`}
            >
              <span className="timeline__dot-pip"></span>
              <span className="timeline__dot-year">{comp.year}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail card */}
      <div className="timeline__detail-area">
        {displayedComp ? (
          <div className="timeline__card" key={displayedComp.year}>
            <div className="timeline__card-header">
              <span className="timeline__card-year">{displayedComp.year}</span>
              <h3 className="timeline__card-title">{displayedComp.title}</h3>
            </div>
            <p className="timeline__card-desc">{displayedComp.description}</p>
            <div className="timeline__card-achievements">
              <span className="timeline__card-achievements-label">Key Highlights</span>
              <ul>
                {displayedComp.achievements.map((a, i) => (
                  <li key={i}>
                    <span className="timeline__achievement-bullet">—</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="timeline__placeholder">
            <div className="timeline__placeholder-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
                <path d="M20 12v8l5.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
              </svg>
            </div>
            <p>Select a year to explore our journey</p>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Partner CTA Section — Minimal ─── */
function PartnerCTA() {
  const [ref, visible] = useReveal(0.2)

  return (
    <section className={`partner ${visible ? 'partner--visible' : ''}`} ref={ref} id="partner-section">
      <div className="partner__content">
        <span className="partner__label">Sponsorship</span>
        <h2 className="partner__title">Partner With Us</h2>
        <p className="partner__description">
          Join forces with Hybrutos Racing and be part of our journey to engineering excellence.
          Together, we can push the boundaries of what's possible in Formula Student racing.
        </p>
        <div className="partner__cta-row">
          <Link to="/sponsors" className="partner__btn partner__btn--primary" id="partner-contact-btn">
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0l-3.5-3.5M13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link to="/profile" className="partner__btn partner__btn--secondary" id="partner-learn-btn">
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <div className="home-page" id="home-page">
      <AnimatedHero />
      <TeamOverview />
      <Timeline />
      <PartnerCTA />
    </div>
  )
}
