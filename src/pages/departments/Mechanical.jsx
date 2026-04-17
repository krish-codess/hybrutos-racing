import React from 'react';

export default function Mechanical() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative">
      {/* Decorative background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #22c55e 0%, transparent 60%)', filter: 'blur(80px)' }} />

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center justify-center p-4 rounded-2xl mb-6 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.2)', color: '#22c55e' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
        <h1 className="text-5xl font-black mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Mechanical <span style={{ color: '#22c55e' }}>Department</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Engineering the physical foundation and dynamic performance of our racing vehicles.
        </p>
      </div>

      <div 
        className="card backdrop-blur-xl mb-16 border rounded-[24px] p-10 relative overflow-hidden" 
        style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'var(--card-bg)', boxShadow: '0 8px 32px rgba(34,197,94,0.1)' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#22c55e] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        <p className="text-lg md:text-xl leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
          Handles the design, fabrication, and integration of the vehicle’s physical systems, ensuring all components function cohesively. Responsible for the chassis, suspension, and drivetrain packaging, optimizing for performance, durability, and weight. Ensures structural reliability and safety under dynamic conditions while maintaining manufacturability and ease of assembly. Collaborates with other subsystems to achieve seamless integration and meet design constraints and regulations.
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>Focus Areas</h2>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div 
          className="group relative overflow-hidden rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(34,197,94,0.1), transparent 70%)' }} />
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#22c55e' }}>Aerodynamics</h3>
          <p style={{ color: 'var(--text-secondary)', leading: 1.7 }}>
            Focuses on managing airflow around the vehicle to generate downforce, reduce drag, and improve cornering speeds, ensuring the vehicle stays planted on the track.
          </p>
        </div>

        <div 
          className="group relative overflow-hidden rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 border"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(34,197,94,0.1), transparent 70%)' }} />
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#22c55e' }}>Vehicle Dynamics (VD)</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Optimizes the suspension, steering, and chassis performance to ensure maximum grip, stability, and driver control under the most demanding racing conditions.
          </p>
        </div>
      </div>

      {/* Team Lead Section */}
      <div className="mb-12 mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>Team Lead</h2>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#22c55e' }}></div>
      </div>

      <div className="flex justify-center relative z-10 mb-8">
        <div 
          className="group relative overflow-hidden rounded-[24px] p-8 text-center transition-all duration-500 hover:-translate-y-2 border w-full max-w-sm"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: '0 4px 20px var(--glass-shadow)' }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top, rgba(34,197,94,0.1), transparent 70%)' }} />
          
          <div className="w-48 h-48 mx-auto rounded-full mb-6 border-4 overflow-hidden relative flex items-center justify-center" style={{ borderColor: 'rgba(34,197,94,0.3)', backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--text-muted)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            {/* TODO: Add Team Lead Image Here */}
            {/* <img src="/path-to-image.jpg" alt="Mechanical Team Lead" className="w-full h-full object-cover relative z-10" /> */}
          </div>
          
          <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Lead Name</h3>
          <p className="font-medium tracking-wide uppercase text-sm mb-4" style={{ color: '#22c55e' }}>
            Mechanical Lead
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Driving physical excellence and structural integrity for the team.
          </p>
        </div>
      </div>
    </div>
  );
}
