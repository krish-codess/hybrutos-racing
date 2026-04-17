export default function TeamSuspension() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Suspension Team</h1>
      <p className="text-center text-gray-300 mb-12">Handling dynamics and ride optimization</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Suspension team designs and tests the vehicle's suspension system to optimize handling, 
          stability, and comfort during competition.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">6</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">Dynamics & Tuning</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">Multi-Link Design</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Suspension geometry design',
            'Spring and damper tuning',
            'Tire optimization',
            'Handling dynamics analysis',
            'Setup testing and validation',
            'Brake system integration'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Suspension Setup</h2>
        <div className="space-y-3">
          {[
            { component: 'Suspension Type', value: 'Double A-Arm with Push-Rod' },
            { component: 'Spring Rate (Front)', value: '80 N/mm' },
            { component: 'Spring Rate (Rear)', value: '100 N/mm' },
            { component: 'Damper Type', value: 'Adjustable telescopic' }
          ].map((spec, i) => (
            <div key={i} className="card">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">{spec.component}</span>
                <span className="text-orange-500 font-bold">{spec.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
