import React from 'react';

export default function Corporate() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative">
      {/* Decorative background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #a855f7 0%, transparent 60%)', filter: 'blur(80px)' }} />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl mb-6 border" style={{ backgroundColor: 'rgba(168,85,247,0.1)', borderColor: 'rgba(168,85,247,0.2)', color: '#a855f7' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <h1 className="text-5xl font-black mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Corporate <span style={{ color: '#a855f7' }}>Department</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Building relationships, securing resources, and amplifying our brand presence.
        </p>
      </div>

      <div 
        className="card backdrop-blur-xl mb-16 border rounded-[24px] p-10 relative overflow-hidden" 
        style={{ borderColor: 'rgba(168,85,247,0.2)', backgroundColor: 'var(--card-bg)', boxShadow: '0 8px 32px rgba(168,85,247,0.1)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#a855f7] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <p className="text-lg md:text-xl leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
          Oversees the team’s external relations, funding, and brand presence, ensuring strong visibility and professional outreach. Responsible for securing sponsorships, building partnerships, and managing marketing initiatives to support team growth. Handles communication with industry and media, while ensuring consistent branding across platforms. Works to effectively showcase the team’s achievements and maintain long-term relationships with stakeholders and supporters.
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>Focus Areas</h2>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#a855f7' }}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div 
          className="group relative overflow-hidden rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(168,85,247,0.1), transparent 70%)' }} />
          <h3 className="text-xl font-bold mb-4" style={{ color: '#a855f7' }}>Technical Corporate</h3>
          <p style={{ color: 'var(--text-secondary)', leading: 1.7, fontSize: '0.95rem' }}>
            Bridges the gap between engineering and business, translating technical milestones into value propositions for sponsors and industry partners.
          </p>
        </div>

        <div 
          className="group relative overflow-hidden rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(168,85,247,0.1), transparent 70%)' }} />
          <h3 className="text-xl font-bold mb-4" style={{ color: '#a855f7' }}>Non-Technical Corporate</h3>
          <p style={{ color: 'var(--text-secondary)', leading: 1.7, fontSize: '0.95rem' }}>
            Manages team finances, logistics, and organizational growth, ensuring the team runs efficiently and has the resources necessary to succeed.
          </p>
        </div>

        <div 
          className="group relative overflow-hidden rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(168,85,247,0.1), transparent 70%)' }} />
          <h3 className="text-xl font-bold mb-4" style={{ color: '#a855f7' }}>Media</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Directs the team's visual identity and digital presence, producing high-impact content to engage fans, highlight sponsors, and document our journey.
          </p>
        </div>
      </div>

      {/* Team Lead Section (Commented out for now) */}
      {false && (
        <>
          <div className="mb-12 mt-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>Team Lead</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#a855f7' }}></div>
          </div>

          <div className="flex justify-center relative z-10 mb-8">
            <div 
              className="group relative overflow-hidden rounded-[24px] p-8 text-center transition-all duration-500 hover:-translate-y-2 border w-full max-w-sm"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top, rgba(168,85,247,0.1), transparent 70%)' }} />
              
              <div className="w-48 h-48 mx-auto rounded-full mb-6 border-4 overflow-hidden relative flex items-center justify-center" style={{ borderColor: 'rgba(168,85,247,0.3)', backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                {/* TODO: Add Team Lead Image Here */}
                {/* <img src="/path-to-image.jpg" alt="Corporate Team Lead" className="w-full h-full object-cover relative z-10" /> */}
              </div>
              
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Lead Name</h3>
              <p className="font-medium tracking-wide uppercase text-sm mb-4" style={{ color: '#a855f7' }}>
                Corporate Lead
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Leading our business strategy, partnerships, and brand presence.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
