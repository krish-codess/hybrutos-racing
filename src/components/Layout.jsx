import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ theme, toggleTheme, children }) {
  return (
    <div className={`site-wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="site-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
