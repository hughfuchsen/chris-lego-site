import React from 'react'

function Home() {
  return (
    <div className="p-8 min-h-screen bg-gray-100 flex justify-center">
      <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Spacer column (left) */}
        <div></div>

        {/* Middle column */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">Item {i}</h2>
              <p className="text-gray-600">Info {i}.</p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {['A', 'B', 'C'].map((label) => (
            <div key={label} className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">Item {label}</h2>
              <p className="text-gray-600">Info {label}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
