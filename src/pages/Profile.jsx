import { Link } from 'react-router-dom';

export default function About() {
  const departments = [
    {
      category: 'Electrical',
      color: '#3b82f6',
      borderClass: 'group-hover:border-[#3b82f6]',
      shadowClass: 'group-hover:shadow-[0_8px_32px_rgba(59,130,246,0.25)]',
      gradient: 'radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 70%)',
      iconBg: 'rgba(59,130,246,0.1)',
      subs: ['High Voltage (HV)', 'Low Voltage (LV)'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
      )
    },
    {
      category: 'Mechanical',
      color: '#22c55e',
      borderClass: 'group-hover:border-[#22c55e]',
      shadowClass: 'group-hover:shadow-[0_8px_32px_rgba(34,197,94,0.25)]',
      gradient: 'radial-gradient(circle at top right, rgba(34,197,94,0.15), transparent 70%)',
      iconBg: 'rgba(34,197,94,0.1)',
      subs: ['Aerodynamics', 'Vehicle Dynamics (VD)'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
      )
    },
    {
      category: 'Corporate',
      color: '#a855f7',
      borderClass: 'group-hover:border-[#a855f7]',
      shadowClass: 'group-hover:shadow-[0_8px_32px_rgba(168,85,247,0.25)]',
      gradient: 'radial-gradient(circle at top right, rgba(168,85,247,0.15), transparent 70%)',
      iconBg: 'rgba(168,85,247,0.1)',
      subs: ['Technical Corporate', 'Non-Technical Corporate', 'Media'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
      )
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-12">About Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent)', fontFamily: "'Inter', sans-serif" }}>
            Who We Are
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}>
            Hybrutos Racing is a premier automotive engineering organization dedicated to pushing the boundaries of
            performance and innovation. Our multidisciplinary team works collaboratively to develop cutting-edge racing vehicles.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontFamily: "'Inter', sans-serif" }}>
            With expertise spanning aerodynamics, powertrain engineering, chassis design, and electronics,
            we combine science and passion to create racing machines of the future.
          </p>
        </div>

        <div className="card h-full flex flex-col justify-center p-8 border backdrop-blur-xl" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 24px var(--glass-shadow)', borderRadius: '24px' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--accent)', fontFamily: "'Inter', sans-serif" }}>
            Key Stats
          </h3>
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { label: 'Founded', value: '2016' },
              { label: 'Members', value: '30+' },
              { label: 'Departments', value: '3' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <section className="mt-20 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>Our <span className="gradient-text">Departments</span></h2>
          <p className="text-lg mx-auto max-w-2xl font-medium" style={{ color: 'var(--text-muted)' }}>
            The backbone of our innovation. Specialized teams working in harmony to engineer the future of racing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Link
              to={`/department/${dept.category.toLowerCase()}`}
              key={dept.category}
              className={`block group relative overflow-hidden rounded-[24px] p-8 transition-all duration-500 ease-out border backdrop-blur-xl ${dept.borderClass} ${dept.shadowClass} hover:-translate-y-2`}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: '0 4px 24px var(--glass-shadow)',
              }}
            >
              {/* Animated Background Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: dept.gradient }}
              />

              {/* Header section */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border"
                  style={{
                    backgroundColor: dept.iconBg,
                    color: dept.color,
                    borderColor: `${dept.color}30`
                  }}
                >
                  {dept.icon}
                </div>

                <h3 className="text-2xl font-bold font-inter tracking-tight transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {dept.category}
                </h3>
              </div>

              {/* Sub-departments */}
              <ul className="relative z-10 flex flex-col gap-4">
                {dept.subs.map((sub) => (
                  <li
                    key={sub}
                    className="flex items-center gap-4 text-base font-semibold font-inter transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <div
                      className="h-[2px] rounded-full transition-all duration-500 opacity-60 group-hover:opacity-100"
                      style={{
                        width: '32px',
                        backgroundColor: dept.color,
                        boxShadow: `0 0 10px ${dept.color}80`
                      }}
                    />
                    <span className="group-hover:text-[var(--text-primary)] transition-colors duration-300">{sub}</span>
                  </li>
                ))}
              </ul>

              {/* Faded background letter */}
              <div
                className="absolute -bottom-8 -right-4 font-black text-[12rem] leading-none opacity-[0.02] pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4"
                style={{ color: dept.color }}
              >
                {dept.category.charAt(0)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
