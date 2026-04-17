export default function CompetitionDetail() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="section-heading text-center mb-12">Competition Details</h1>
      
      <div className="card mb-8">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-orange-500">Current Competition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Name:</span> Formula Student Electric 2024</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Location:</span> Stuttgart, Germany</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Teams:</span> 150+ from worldwide</p>
          </div>
          <div>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Status:</span> <span className="text-green-500">Active</span></p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Our Ranking:</span> Top 10</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-orange-500">Vehicle Type:</span> Electric</p>
          </div>
        </div>
      </div>

      {/* Events */}
      <section>
        <h2 className="text-2xl font-orbitron font-bold mb-6 text-orange-500">Competition Events</h2>
        <div className="space-y-4">
          {[
            { event: 'Design Event', score: 95, date: 'May 15, 2024' },
            { event: 'Cost Event', score: 88, date: 'May 16, 2024' },
            { event: 'Business Plan', score: 92, date: 'May 17, 2024' },
            { event: 'Acceleration', score: '2.8s 0-100km/h', date: 'May 18, 2024' },
            { event: 'Skidpad', score: '1.25g lateral', date: 'May 19, 2024' }
          ].map((item, i) => (
            <div key={i} className="card flex justify-between items-center">
              <div>
                <h3 className="font-orbitron font-bold text-white">{item.event}</h3>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-orange-500 font-bold text-lg">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
