import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6 mt-0" style={{ borderTopColor: 'var(--glass-inner-border)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem'
            }}>
              HYBRUTOS RACING
            </h3>
            <p className="footer-text" style={{
              fontSize: '0.85rem',
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif"
            }}>
              Pushing the limits of automotive innovation and performance.
            </p>
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1rem'
            }}>
              Links
            </h4>
            <ul className="space-y-2" style={{ fontSize: '0.85rem', fontFamily: "'Inter', sans-serif" }}>
              <li><Link to="/" className="footer-text" style={{ textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = ''}>Home</Link></li>
              <li><Link to="/about" className="footer-text" style={{ textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = ''}>About</Link></li>
              {/* <li><Link to="/competition" className="footer-text" style={{ textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = ''}>Competition</Link></li> */}
              <li><Link to="/sponsors" className="footer-text" style={{ textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = ''}>Sponsors</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1rem'
            }}>
              Connect
            </h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/hybrutos-racing/" target="_blank" rel="noopener noreferrer" className="footer-text" style={{
                textDecoration: 'none',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                transition: 'border-color 0.2s, color 0.2s'
              }}
                title="LinkedIn"
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = '' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/hybrutosracing/" target="_blank" rel="noopener noreferrer" className="footer-text" style={{
                textDecoration: 'none',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                transition: 'border-color 0.2s, color 0.2s'
              }}
                title="Instagram"
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = '' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center" style={{ borderTopColor: 'var(--glass-inner-border)' }}>
          <p className="footer-text" style={{
            fontSize: '0.75rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.02em'
          }}>
            &copy; 2026 Hybrutos Racing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
