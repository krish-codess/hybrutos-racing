export default function TeamBusiness() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-4">Business & Operations Team</h1>
      <p className="text-center text-gray-300 mb-12">Managing resources and driving organizational excellence</p>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Team Overview</h2>
        <p className="text-gray-300 mb-4">
          The Business & Operations team handles project management, financial planning, sponsorship coordination, 
          and strategic decision-making for the team.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div><span className="text-orange-500 font-bold">Members:</span> <span className="text-gray-300">8</span></div>
          <div><span className="text-orange-500 font-bold">Focus Area:</span> <span className="text-gray-300">Strategy & Operations</span></div>
          <div><span className="text-orange-500 font-bold">Key Project:</span> <span className="text-gray-300">Budget Planning</span></div>
        </div>
      </div>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Key Responsibilities</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Team leadership and management',
            'Financial planning and budgeting',
            'Sponsorship acquisition',
            'Event coordination',
            'Marketing and PR',
            'Strategic planning'
          ].map((resp, i) => (
            <div key={i} className="card">
              <p className="text-gray-300">✓ {resp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Breakdown */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Budget Allocation</h2>
        <div className="space-y-3">
          {[
            { category: 'Materials & Components', percent: '45%' },
            { category: 'Competition & Travel', percent: '25%' },
            { category: 'Software & Tools', percent: '15%' },
            { category: 'Operations', percent: '10%' },
            { category: 'Testing', percent: '5%' }
          ].map((item, i) => (
            <div key={i} className="card">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{item.category}</span>
                <span className="text-orange-500 font-bold">{item.percent}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full"
                  style={{ width: item.percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
