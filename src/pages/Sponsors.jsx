import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import solidworksLogo from '../assets/logos/SolidWorks.png'
import ansysLogo from '../assets/logos/ansys.svg'
import aboutEnergyLogo from '../assets/logos/About Energy green.png'
import viGradeLogo from '../assets/logos/vi-grade.png'
import gtaLogo from '../assets/logos/GTA.png'
import axicutLogo from '../assets/logos/axicut.png'
import matrixLogo from '../assets/logos/Matrix.png'
import winstonLogo from '../assets/logos/Winston.png'
import benderLogo from '../assets/logos/bender.png'
import onlyscrewsLogo from '../assets/logos/Onlyscrews white.png'
import delta5Logo from '../assets/logos/delta-5.png'
import cemLogo from '../assets/logos/CEM.jpeg'

/* ─── Intersection Observer Hook ─── */
function useReveal(threshold = 0.15) {
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

/* ─── Sponsor Data ─── */
const sponsorCategories = [
  {
    id: 'gold',
    name: 'Gold Sponsors',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.5 5 5.5.8-4 3.9 1 5.3-5-2.6-5 2.6 1-5.3-4-3.9 5.5-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    sponsors: [
      {
        name: 'Axicut Solutions',
        logo: '⚡',
        logoImage: axicutLogo,
        tier: 'Gold',
        role: 'Laser Cutting',
        link: 'http://axicut.com/',
        description: 'Axicut Solutions provides high-precision laser cutting services that help us manufacture lightweight and accurate sheet metal components essential for chassis structures, mounts, and various custom parts.',
      },
      {
        name: 'Matrix',
        logo: '⚙️',
        logoImage: matrixLogo,
        tier: 'Gold',
        role: 'CNC Machining',
        link: '',
        description: 'Matrix supports our team with precision CNC machining, enabling the manufacturing of complex, high-tolerance mechanical components such as suspension parts, motor mounts, and drivetrain assemblies.',
      },
      {
        name: 'Bender',
        logo: '🔌',
        logoImage: benderLogo,
        tier: 'Gold',
        role: 'Insulation Monitoring Device',
        link: 'https://www.bender.de/en/',
        description: 'Bender supplies insulation monitoring technology that ensures electrical safety in our high-voltage system by continuously measures the insulation resistance between unearthed (IT) power systems and earth.',
      },
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsors',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    sponsors: [
      {
        name: 'Global Tech Art',
        logo: '🌊',
        logoImage: gtaLogo,
        tier: 'Silver',
        role: 'Water Jet Cutting',
        link: 'https://globaltechart.in/',
        description: 'Global Tech Art supports our manufacturing process by providing precision water jet cutting, allowing us to produce complex metal and composite parts accurately without thermal distortion.',
      },
      {
        name: 'OnlyScrews',
        logo: '🔩',
        logoImage: onlyscrewsLogo,
        tier: 'Silver',
        role: 'Screws & Fasteners',
        link: 'http://onlyscrews.in/',
        description: 'OnlyScrews supplies high-quality fasteners and hardware essential for assembling and securing vehicle components, ensuring structural reliability, ease of maintenance, and durability during racing conditions.',
      },
      {
        name: 'Delta 5 Performance',
        logo: '🛠️',
        logoImage: delta5Logo,
        tier: 'Silver',
        role: 'Tuning & Upgrades',
        link: 'https://deltaa5performance.com/',
        description: 'Delta 5 Performance assists with performance optimization, tuning strategies, and system upgrades that help improve vehicle efficiency, drivability, and overall competitive performance.',
      },
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsors',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 10h12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    sponsors: [
      {
        name: 'SolidWorks',
        logo: '💻',
        logoImage: solidworksLogo,
        tier: 'Bronze',
        role: '3D CAD Modelling',
        link: 'https://www.solidworks.com/',
        description: 'SolidWorks helps our team design and develop detailed 3D models of vehicle components and assemblies, enabling accurate part design, fitment checks, and efficient iteration during the vehicle development process.',
      },
      {
        name: 'Ansys',
        logo: '🔬',
        logoImage: ansysLogo,
        tier: 'Bronze',
        role: 'Simulation Software',
        link: 'https://www.ansys.com/en-in',
        description: 'Ansys allows us to simulate structural, thermal, and fluid behavior of components before manufacturing, helping optimize designs, improve reliability, and reduce costly physical testing during vehicle development.',
      },
      {
        name: 'About Energy',
        logo: '🔋',
        logoImage: aboutEnergyLogo,
        tier: 'Bronze',
        role: 'Battery Simulation',
        link: 'https://www.aboutenergy.io/',
        description: 'About:Energy provides advanced battery modelling tools that help us simulate battery performance, thermal behavior, and degradation, allowing safer and more efficient battery pack design for our electric race car.',
      },
      {
        name: 'VI Grade',
        logo: '🏎️',
        logoImage: viGradeLogo,
        tier: 'Bronze',
        role: 'Vehicle Simulation',
        link: 'https://www.vi-grade.com/',
        description: 'VI Grade provides vehicle dynamics simulation software that allows our team to test suspension setups, vehicle handling characteristics, and performance virtually before implementing changes on the actual car.',
      },
      {
        name: 'Centre For eMobility',
        logo: '🏫',
        logoImage: cemLogo,
        tier: 'Bronze',
        role: 'Technical Partnership',
        link: 'https://www.srmist.edu.in/department/centre-for-electric-mobility/',
        description: 'The Centre for eMobility provides us with dedicated lab space and facilities to safely test and validate our electric components, including battery systems and electronics, during vehicle development.',
      },
    ],
  },

]

/* ─── Category Section Component ─── */
function SponsorCategory({ category, index }) {
  const [ref, visible] = useReveal(0.1)

  return (
    <section
      className={`sponsors__category ${visible ? 'sponsors__category--visible' : ''}`}
      ref={ref}
      id={`sponsors-category-${category.id}`}
      style={{ '--cat-delay': `${index * 0.1}s` }}
    >
      <div className="sponsors__category-header">
        <span className="sponsors__category-icon">{category.icon}</span>
        <h2 className="sponsors__category-name">{category.name}</h2>
        <span className="sponsors__category-count">{category.sponsors.length} sponsor{category.sponsors.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="sponsors__grid">
        {category.sponsors.map((sponsor, i) => {
          const CardTag = sponsor.link ? 'a' : 'div';
          return (
            <CardTag
              key={i}
              {...(sponsor.link ? { href: sponsor.link, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="sponsors__card"
              style={{ '--card-delay': `${0.1 + i * 0.08}s`, textDecoration: 'none', color: 'inherit', cursor: sponsor.link ? 'pointer' : 'default' }}
              id={`sponsor-card-${category.id}-${i}`}
            >
              <div className="sponsors__card-logo" style={{ overflow: 'hidden' }}>
                {sponsor.logoImage ? (
                  <img src={sponsor.logoImage} alt={`${sponsor.name} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }} />
                ) : (
                  <span>{sponsor.logo}</span>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 className="sponsors__card-title">{sponsor.name}</h3>
                  {sponsor.tier && sponsor.tier !== '-' && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '2px 8px', borderRadius: '12px', backgroundColor: sponsor.tier === 'Gold' ? 'rgba(255, 215, 0, 0.2)' : sponsor.tier === 'Silver' ? 'rgba(192, 192, 192, 0.2)' : sponsor.tier === 'Bronze' ? 'rgba(205, 127, 50, 0.2)' : 'rgba(255, 255, 255, 0.1)', color: sponsor.tier === 'Gold' ? '#ffd700' : sponsor.tier === 'Silver' ? '#c0c0c0' : sponsor.tier === 'Bronze' ? '#cd7f32' : '#ffffff' }}>
                      {sponsor.tier}
                    </span>
                  )}
                </div>
                {sponsor.role && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-primary, #64ffda)', margin: '4px 0 0 0', fontWeight: 500 }}>
                    {sponsor.role}
                  </p>
                )}
              </div>

              <div className="sponsors__card-content">
                <p className="sponsors__card-desc" style={{ marginBottom: sponsor.link ? '16px' : '0' }}>{sponsor.description}</p>
                {sponsor.link && (
                  <div style={{ fontSize: '0.875rem', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px', opacity: 0.8, marginTop: 'auto' }}>
                    Visit Website
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                )}
              </div>
              <div className="sponsors__card-accent"></div>
            </CardTag>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Sponsors Page ─── */
export default function Sponsors() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCategories = activeFilter === 'all'
    ? sponsorCategories
    : sponsorCategories.filter(c => c.id === activeFilter)

  return (
    <div className="sponsors-page" id="sponsors-page">
      {/* Hero Header */}
      <section
        className={`sponsors__hero ${heroVisible ? 'sponsors__hero--visible' : ''}`}
        ref={heroRef}
        id="sponsors-hero"
      >
        <span className="sponsors__hero-label">Our Partners</span>
        <h1 className="sponsors__hero-title">Sponsors</h1>
        <div className="sponsors__hero-divider"></div>
        <p className="sponsors__hero-desc">
          The companies and organizations that make our racing journey possible.
          We are grateful for their support, resources, and shared passion for engineering excellence.
        </p>
      </section>

      {/* Category Filter Pills */}
      <div className="sponsors__filters" id="sponsors-filters">
        <button
          className={`sponsors__filter-pill ${activeFilter === 'all' ? 'sponsors__filter-pill--active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        {sponsorCategories.map(cat => (
          <button
            key={cat.id}
            className={`sponsors__filter-pill ${activeFilter === cat.id ? 'sponsors__filter-pill--active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Sponsor Categories */}
      <div className="sponsors__content">
        {filteredCategories.map((category, i) => (
          <SponsorCategory key={category.id} category={category} index={i} />
        ))}
      </div>

      {/* Become a Sponsor CTA */}
      <section className="sponsors__cta" id="sponsors-cta">
        <div className="sponsors__cta-card">
          <span className="sponsors__cta-label">Join Us</span>
          <h2 className="sponsors__cta-title">Become a Sponsor</h2>
          <p className="sponsors__cta-desc">
            Interested in supporting the next generation of automotive engineers?
            Partner with Hybrutos Racing and gain visibility in the Formula Student community.
          </p>
          <Link to="/contact" className="sponsors__cta-btn" id="sponsors-contact-btn">
            <span>Contact Us</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0l-3.5-3.5M13 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
