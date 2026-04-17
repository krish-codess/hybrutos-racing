export default function TeamPowertrain() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Powertrain Team</h1>
      <p className="text-center text-gray-300 mb-12">Motor and drivetrain engineering for maximum efficiency</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Powertrain team designs and optimizes the motor, gearbox, and drivetrain systems. 
          We focus on efficiency, power delivery, and reliability for competitive performance.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">10</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">Motor & Drivetrain</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">Motor Testing</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Motor selection and optimization',
            'Gearbox design and analysis',
            'Differential tuning',
            'Power delivery mapping',
            'Efficiency testing and validation',
            'Cooling system design'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Performance */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Performance Specs</h2>
        <div className="space-y-3">
          {[
            { metric: 'Max Power Output', value: '150 kW' },
            { metric: 'Peak Torque', value: '280 Nm' },
            { metric: 'Motor Efficiency', value: '>92%' },
            { metric: '0-100 km/h', value: '2.8 seconds' }
          ].map((perf, i) => (
            <div key={i} className="card">
              <div className="flex justify-between items-center">
                <h3 className="text-gray-300">{perf.metric}</h3>
                <span className="text-orange-500 font-bold text-lg">{perf.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
