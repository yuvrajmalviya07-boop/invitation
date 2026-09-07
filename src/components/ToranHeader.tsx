export function ToranHeader({ className = '' }: { className?: string }) {
  // Repeating flower & leaf units
  const units = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`} id="toran-header">
      <div className="relative w-full h-14 md:h-18 flex items-start justify-center">
        {/* Main Sacred Golden Garland Thread / Dori */}
        <div className="absolute top-1 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 shadow-sm" />

        {/* Small hanging toran loops */}
        <div className="w-full flex items-start justify-between px-2 md:px-6 relative z-10">
          {units.map((i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Top Marigold Flower knot */}
              <div className="relative">
                {/* Mango Leaf behind */}
                <div 
                  className="w-3 md:w-4 h-6 md:h-8 bg-gradient-to-b from-emerald-600 to-green-800 rounded-b-full transform origin-top shadow-xs"
                  style={{
                    transform: `rotate(${i % 2 === 0 ? '-8deg' : '8deg'})`,
                  }}
                />
                {/* Marigold Blossom */}
                <div className="absolute -top-1 -left-1.5 md:-left-2 w-6 md:w-8 h-6 md:h-8 rounded-full flex items-center justify-center">
                  <div 
                    className={`w-full h-full rounded-full ${
                      i % 2 === 0 
                        ? 'bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600' 
                        : 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400'
                    } shadow-md border border-amber-300/40 flex items-center justify-center`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-200/70 blur-[0.5px]" />
                  </div>
                </div>
              </div>

              {/* Hanging string with small golden bell or pearl */}
              <div className="w-0.5 h-3 md:h-5 bg-amber-400/80" />
              <div className="w-2 md:w-2.5 h-2.5 md:h-3 rounded-b-full bg-gradient-to-b from-amber-300 to-amber-600 shadow-xs border border-amber-200/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
