interface DiyaProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  delay?: number;
}

export function Diya({ size = 'md', className = '', delay = 0 }: DiyaProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`} id={`diya-${size}-${delay}`}>
      {/* Ambient Flame Glow */}
      <div 
        className="absolute -top-3 w-12 h-12 rounded-full bg-amber-400/40 blur-lg pointer-events-none animate-pulse"
        style={{ animationDuration: `${2.2 + delay * 0.4}s` }}
      />
      
      {/* SVG Diya with animated flame */}
      <svg 
        viewBox="0 0 100 80" 
        className={`${sizeClasses[size]} drop-shadow-md overflow-visible`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Flame Gradient */}
          <linearGradient id={`flameGrad-${delay}`} x1="50" y1="5" x2="50" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="90%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>

          {/* Diya Clay/Brass Gradient */}
          <linearGradient id={`brassGrad-${delay}`} x1="10" y1="40" x2="90" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="30%" stopColor="#D97706" />
            <stop offset="70%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Oil Reservoir Gradient */}
          <linearGradient id={`oilGrad-${delay}`} x1="30" y1="40" x2="70" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Outer Halo */}
        <ellipse cx="50" cy="22" rx="16" ry="20" fill="#FEF08A" opacity="0.3" />

        {/* Animated Flame */}
        <g 
          className={delay % 2 === 0 ? "animate-diya origin-bottom" : "animate-diya-delayed origin-bottom"}
          style={{ transformOrigin: "50px 38px" }}
        >
          {/* Outer orange flame */}
          <path 
            d="M50 6 C43 18 40 26 42 35 C44 41 47 43 50 43 C53 43 56 41 58 35 C60 26 57 18 50 6 Z" 
            fill={`url(#flameGrad-${delay})`}
          />
          {/* Inner golden-white core */}
          <path 
            d="M50 14 C46 22 44 28 46 34 C47 38 48 40 50 40 C52 40 53 38 54 34 C56 28 54 22 50 14 Z" 
            fill="#FEF9C3" 
            opacity="0.95"
          />
          {/* Wick */}
          <line x1="50" y1="36" x2="50" y2="43" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Diya Base - Traditional earthen/brass bowl */}
        {/* Rim */}
        <ellipse cx="50" cy="44" rx="38" ry="10" fill={`url(#brassGrad-${delay})`} stroke="#FDE68A" strokeWidth="1" />
        {/* Inner Oil pool */}
        <ellipse cx="50" cy="43" rx="32" ry="7" fill={`url(#oilGrad-${delay})`} />
        
        {/* Main Body */}
        <path 
          d="M12 44 C12 60 28 72 50 72 C72 72 88 60 88 44 C76 49 24 49 12 44 Z" 
          fill={`url(#brassGrad-${delay})`} 
          stroke="#78350F" 
          strokeWidth="1" 
        />

        {/* Ornamental Carvings on Diya */}
        <path 
          d="M26 53 Q50 64 74 53" 
          stroke="#FEF08A" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          opacity="0.75" 
        />
        <circle cx="50" cy="62" r="2" fill="#FEF08A" opacity="0.9" />
        <circle cx="42" cy="60" r="1.5" fill="#FEF08A" opacity="0.8" />
        <circle cx="58" cy="60" r="1.5" fill="#FEF08A" opacity="0.8" />

        {/* Pedestal Stand */}
        <path 
          d="M40 71 L36 78 Q50 81 64 78 L60 71 Z" 
          fill="#78350F" 
          stroke="#D97706" 
          strokeWidth="1" 
        />
      </svg>
    </div>
  );
}
