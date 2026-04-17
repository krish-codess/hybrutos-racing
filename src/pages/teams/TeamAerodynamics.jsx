export default function TeamAerodynamics() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Aerodynamics Team</h1>
      <p className="text-center text-gray-300 mb-12">Optimizing performance through aerodynamic excellence</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Aerodynamics team is responsible for designing and optimizing the vehicle's aerodynamic performance. 
          We use advanced CFD simulations and wind tunnel testing to minimize drag and maximize downforce.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">8</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">CFD & Simulation</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">2024 Vehicle Design</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Aerodynamic analysis and optimization',
            'Wind tunnel testing and parametrization',
            'CFD simulations (Ansys Fluent)',
            'Drag coefficient prediction',
            'Downforce distribution optimization',
            'Vehicle stability analysis'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Recent Achievements</h2>
        <div className="space-y-3">
          {[
            { title: '2024 Design Award', desc: 'Recognized for innovative aerodynamic design' },
            { title: '15% Drag Reduction', desc: 'Compared with previous generation vehicle' },
            { title: 'Wind Tunnel Tests', desc: '+50 hours of testing completed' }
          ].map((ach, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-orange-500">{ach.title}</h3>
              <p className="text-gray-300 text-sm">{ach.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
