interface RangoliPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function RangoliPattern({ className = '', size = 300, opacity = 0.15 }: RangoliPatternProps) {
  return (
    <div 
      className={`pointer-events-none select-none flex items-center justify-center ${className}`} 
      style={{ opacity, width: size, height: size }}
      id="rangoli-pattern"
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full text-amber-500 stroke-current animate-[spin_120s_linear_infinite]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Petals */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path
                d="M100 10 C106 30 115 50 100 70 C85 50 94 30 100 10 Z"
                strokeWidth="1"
                fill="currentColor"
                fillOpacity="0.08"
              />
              <circle cx="100" cy="18" r="1.5" fill="currentColor" />
            </g>
          );
        })}

        {/* Outer concentric sacred circles */}
        <circle cx="100" cy="100" r="92" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="80" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="64" strokeWidth="0.8" />

        {/* Inner 8-Petal Lotus */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <path
              key={`lotus-${i}`}
              transform={`rotate(${angle} 100 100)`}
              d="M100 45 Q115 70 100 95 Q85 70 100 45 Z"
              strokeWidth="1.2"
              fill="currentColor"
              fillOpacity="0.12"
            />
          );
        })}

        {/* Core Sacred Bindu / Sun */}
        <circle cx="100" cy="100" r="28" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="14" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="4" fill="currentColor" />
      </svg>
    </div>
  );
}
