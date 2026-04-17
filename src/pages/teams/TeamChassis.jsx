export default function TeamChassis() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Chassis Team</h1>
      <p className="text-center text-gray-300 mb-12">Structural integrity and lightweight design excellence</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Chassis team designs and manufactures the structural backbone of our vehicles. 
          We focus on lightweight frame design, material selection, and rigidity optimization.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">7</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">Structural Design</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">Carbon Chassis</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Chassis design and FEA analysis',
            'Material selection and testing',
            'Manufacturing and assembly',
            'Structural optimization',
            'Crash safety analysis',
            'Component integration'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Materials Used</h2>
        <div className="space-y-3">
          {[
            { material: 'Carbon Fiber', props: '3K Plain weave composite' },
            { material: 'Aluminum 7075-T6', props: 'Structural components' },
            { material: 'Steel Tubing', props: 'Roll cage and safety structure' }
          ].map((mat, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-orange-500">{mat.material}</h3>
              <p className="text-gray-300 text-sm">{mat.props}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
