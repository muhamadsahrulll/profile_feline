'use client'

export function Stats() {
  const stats = [
    {
      number: '3+',
      label: 'Games in Development',
      color: 'bg-white',
    },
    {
      number: '2026',
      label: 'Founded',
      color: 'bg-white',
    },
    {
      number: 'Indonesia',
      label: 'Based Studio',
      color: 'bg-white',
    },
    {
      number: 'Cozy',
      label: 'Game Experience',
      color: 'bg-white',
    },
  ]

  return (
    <section className="bg-[#fbf5df] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} border border-yellow-100 rounded-[2rem] p-8 sm:p-10 text-center shadow-sm`}
            >
              <div className="text-3xl sm:text-4xl font-black text-yellow-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
