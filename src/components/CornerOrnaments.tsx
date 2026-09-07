interface CornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export function CornerOrnament({ position, className = '' }: CornerOrnamentProps) {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div 
      className={`absolute w-12 h-12 md:w-16 md:h-16 pointer-events-none select-none ${rotationClass} ${className}`}
      id={`corner-${position}`}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="goldCornerGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* Outer Corner Frame lines */}
        <path d="M0 6 L94 6 C94 6 50 12 50 50 C12 50 6 94 6 94 L6 0" fill="none" stroke="url(#goldCornerGrad)" strokeWidth="2.5" />
        
        {/* Inner Ornate Filigree */}
        <path d="M12 12 Q45 15 45 45 Q15 45 12 12 Z" fill="none" stroke="url(#goldCornerGrad)" strokeWidth="1.5" />
        <path d="M18 18 Q35 20 35 35 Q20 35 18 18 Z" fill="url(#goldCornerGrad)" opacity="0.35" />
        
        {/* Sacred Floral Knot */}
        <circle cx="25" cy="25" r="3.5" fill="url(#goldCornerGrad)" />
        <circle cx="12" cy="55" r="2" fill="url(#goldCornerGrad)" />
        <circle cx="55" cy="12" r="2" fill="url(#goldCornerGrad)" />
        <circle cx="8" cy="75" r="1.5" fill="url(#goldCornerGrad)" />
        <circle cx="75" cy="8" r="1.5" fill="url(#goldCornerGrad)" />

        {/* Curled flourishes */}
        <path d="M22 6 C28 16 38 22 55 22" stroke="url(#goldCornerGrad)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 22 C16 28 22 38 22 55" stroke="url(#goldCornerGrad)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
