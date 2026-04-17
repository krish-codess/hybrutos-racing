import { Link } from 'react-router-dom'

export default function Header({ toggleTheme, theme }) {
  return (
    <header className="border-b py-6 px-6" style={{ borderBottomColor: 'var(--border-color)' }}>
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link to="/" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: 'var(--text-primary)',
          textDecoration: 'none'
        }}>
          HYBRUTOS RACING
        </Link>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
