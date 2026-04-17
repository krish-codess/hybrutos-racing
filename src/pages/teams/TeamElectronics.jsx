export default function TeamElectronics() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Electronics Team</h1>
      <p className="text-center text-gray-300 mb-12">Advanced control systems and battery management</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Electronics team develops and integrates all electrical systems including power distribution, 
          battery management, telemetry, and vehicle control systems.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">6</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">High-Voltage Systems</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">BMS Integration</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Battery Management Systems (BMS)',
            'High-voltage power distribution',
            'Motor control unit programming',
            'Telemetry and data logging',
            'Vehicle sensors and interfaces',
            'Safety systems and interlocks'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Systems */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Core Systems</h2>
        <div className="space-y-3">
          {[
            { system: 'HV Battery Pack', spec: '48V 10kWh LiFePO4' },
            { system: 'Motor Controller', spec: '150kW SiC inverter' },
            { system: 'Data Logging', spec: '500Hz sampling rate' }
          ].map((sys, i) => (
            <div key={i} className="card">
              <h3 className="font-bold text-orange-500">{sys.system}</h3>
              <p className="text-gray-300 text-sm">{sys.spec}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
