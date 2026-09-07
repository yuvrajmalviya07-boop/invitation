interface ScrollRodProps {
  position: 'top' | 'bottom';
  className?: string;
}

export function ScrollRod({ position, className = '' }: ScrollRodProps) {
  const isTop = position === 'top';

  return (
    <div 
      className={`relative w-full flex items-center justify-center select-none pointer-events-none z-20 ${className}`}
      id={`scroll-rod-${position}`}
    >
      {/* Left Finial / Knob */}
      <div className="relative flex items-center">
        {/* Outer jewel cap */}
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-red-600 via-amber-400 to-red-800 shadow-md border border-amber-200" />
        {/* Finial neck */}
        <div className="w-2.5 h-6 sm:w-3 sm:h-8 bg-gradient-to-r from-amber-700 via-yellow-400 to-amber-800 rounded-sm shadow-sm" />
        {/* Finial collar */}
        <div className="w-2 h-7 sm:w-2.5 sm:h-10 bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-900 rounded-sm" />
      </div>

      {/* Main Golden Roller Cylinder */}
      <div className="flex-1 h-5 sm:h-7 relative mx-[-2px]">
        {/* Cylinder Body with metallic radial sheen */}
        <div 
          className="w-full h-full rounded-xs shadow-lg border-y border-amber-200/90"
          style={{
            background: 'linear-gradient(180deg, #FEF08A 0%, #F59E0B 25%, #B45309 60%, #78350F 85%, #451A03 100%)',
          }}
        />
        {/* Engraved decorative bands */}
        <div className="absolute inset-0 flex justify-between px-6 sm:px-12 pointer-events-none">
          <div className="w-1.5 h-full bg-amber-200/60 border-x border-amber-800/40" />
          <div className="w-1.5 h-full bg-amber-200/60 border-x border-amber-800/40" />
          <div className="w-1.5 h-full bg-amber-200/60 border-x border-amber-800/40" />
        </div>
        {/* Soft shadow cast onto the parchment */}
        <div 
          className={`absolute left-0 right-0 h-3 pointer-events-none ${
            isTop ? '-bottom-3 bg-gradient-to-b from-black/25 to-transparent' : '-top-3 bg-gradient-to-t from-black/25 to-transparent'
          }`}
        />
      </div>

      {/* Right Finial / Knob */}
      <div className="relative flex items-center">
        {/* Finial collar */}
        <div className="w-2 h-7 sm:w-2.5 sm:h-10 bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-900 rounded-sm" />
        {/* Finial neck */}
        <div className="w-2.5 h-6 sm:w-3 sm:h-8 bg-gradient-to-r from-amber-700 via-yellow-400 to-amber-800 rounded-sm shadow-sm" />
        {/* Outer jewel cap */}
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-bl from-red-600 via-amber-400 to-red-800 shadow-md border border-amber-200" />
      </div>

      {/* Hanging Tassels for top rod */}
      {isTop && (
        <>
          <div className="absolute left-6 -bottom-6 flex flex-col items-center pointer-events-none hidden sm:flex">
            <div className="w-0.5 h-4 bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-red-600 border border-amber-300" />
            <div className="w-3 h-5 bg-gradient-to-b from-red-600 to-red-800 rounded-b-md shadow-xs" />
          </div>
          <div className="absolute right-6 -bottom-6 flex flex-col items-center pointer-events-none hidden sm:flex">
            <div className="w-0.5 h-4 bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-red-600 border border-amber-300" />
            <div className="w-3 h-5 bg-gradient-to-b from-red-600 to-red-800 rounded-b-md shadow-xs" />
          </div>
        </>
      )}
    </div>
  );
}
