import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Diya } from './Diya';
import { CornerOrnament } from './CornerOrnaments';

interface LetterEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  onStartOpen?: () => void;
}

export function LetterEnvelope({ isOpen, onOpen, onStartOpen }: LetterEnvelopeProps) {
  const [isUnsealing, setIsUnsealing] = useState(false);

  const handleTriggerOpen = () => {
    if (isOpen || isUnsealing) return;
    setIsUnsealing(true);
    onStartOpen?.();
    // Snappy, silky smooth 320ms opening sequence
    setTimeout(() => {
      onOpen();
    }, 320);
  };

  return (
    <div className="w-full max-w-[560px] mx-auto perspective-1500 flex flex-col items-center select-none" id="letter-envelope-container">
      {/* Flanking Diyas atop the closed letter for a serene temple feel */}
      <div className="w-full flex items-center justify-between px-6 mb-2">
        <Diya size="sm" delay={0} />
        <div className="flex items-center gap-2">
          <span className="text-amber-400/90 text-sm sm:text-base font-devanagari-heading font-bold">
            शुभ गणेशोत्सव निमंत्रण
          </span>
        </div>
        <Diya size="sm" delay={1} />
      </div>

      {/* Royal Indian Envelope Outer Container */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] perspective-1500">
        <motion.div
          className="relative w-full h-full rounded-2xl p-1 sm:p-2 shadow-2xl shadow-black/80 cursor-pointer group"
          onClick={handleTriggerOpen}
          whileHover={!isUnsealing ? { scale: 1.02, y: -4 } : {}}
          whileTap={!isUnsealing ? { scale: 0.98 } : {}}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            background: 'linear-gradient(135deg, #78350F 0%, #D97706 25%, #FEF08A 50%, #D97706 75%, #451A03 100%)',
          }}
          id="royal-envelope"
          role="button"
          tabIndex={0}
          aria-label="Open Ganpati Invitation Letter"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleTriggerOpen();
            }
          }}
        >
          {/* Envelope Main Body */}
          <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#5C0D11] via-[#781116] to-[#3B070A] border border-amber-400/50 overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 text-center">
            {/* Subtle gold grid pattern background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#FDE68A 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
              }}
            />

            {/* Corner Filigrees */}
            <CornerOrnament position="top-left" className="top-1 left-1 opacity-80" />
            <CornerOrnament position="top-right" className="top-1 right-1 opacity-80" />
            <CornerOrnament position="bottom-left" className="bottom-1 left-1 opacity-80" />
            <CornerOrnament position="bottom-right" className="bottom-1 right-1 opacity-80" />

            {/* Top Auspicious Inscription */}
            <div className="relative z-10 pt-2">
              <p className="text-amber-300 font-devanagari-heading text-lg sm:text-2xl font-bold tracking-widest drop-shadow-md">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <div className="w-28 sm:w-36 h-0.5 mx-auto mt-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            {/* 3D Envelope Flap Animation */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 origin-top preserve-3d pointer-events-none z-20 transform-gpu will-change-transform backface-hidden"
              initial={false}
              animate={isUnsealing ? { rotateX: 180, opacity: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Flap SVG Triangular Fold */}
              <svg viewBox="0 0 500 160" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="flapGrad" x1="250" y1="0" x2="250" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#450A0A" />
                    <stop offset="70%" stopColor="#7F1D1D" />
                    <stop offset="100%" stopColor="#991B1B" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 500,0 250,158" fill="url(#flapGrad)" stroke="#FDE68A" strokeWidth="1.5" />
              </svg>
            </motion.div>

            {/* Center Golden Wax Seal with Ganesha Symbol */}
            <div className="relative z-30 my-auto flex flex-col items-center">
              <motion.div 
                className="relative transform-gpu will-change-transform"
                animate={isUnsealing ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.28, ease: 'easeIn' }}
              >
                {/* Outer Golden Glow Pulse */}
                <div className="absolute -inset-2.5 rounded-full bg-amber-400/30 blur-md pointer-events-none" />
                
                {/* Wax Seal Medallion */}
                <div 
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 shadow-2xl flex items-center justify-center border-2 border-amber-200/90 group-hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #FDE68A 0%, #F59E0B 30%, #B45309 70%, #78350F 100%)',
                  }}
                >
                  {/* Inner Ring with bead pattern */}
                  <div className="w-full h-full rounded-full border border-dashed border-amber-100/70 flex flex-col items-center justify-center p-1 bg-amber-950/20">
                    <span className="text-2xl sm:text-3xl text-amber-100 font-serif drop-shadow-sm select-none">
                      卐
                    </span>
                    <span className="text-[10px] sm:text-xs font-devanagari-heading font-bold text-amber-100 tracking-wider">
                      श्री गणेश
                    </span>
                  </div>
                </div>
              </motion.div>

              <p className="mt-2 text-amber-200/90 font-devanagari-heading text-base sm:text-lg font-semibold tracking-wide">
                सप्रेम निमंत्रण
              </p>
            </div>

            {/* Bottom Host Name & Action Prompt */}
            <div className="relative z-10 pb-2 w-full flex flex-col items-center">
              <p className="text-amber-300/80 font-devanagari-body text-xs sm:text-sm font-medium">
                — मालवीय परिवार की ओर से —
              </p>

              {/* Tap to Open CTA Badge */}
              <motion.div 
                className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-amber-950 font-bold text-xs sm:text-sm shadow-lg shadow-black/40 border border-amber-200 cursor-pointer"
                animate={isUnsealing ? { scale: 0.9, opacity: 0.5 } : {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 4px 14px rgba(245, 158, 11, 0.4)',
                    '0 6px 20px rgba(251, 191, 36, 0.7)',
                    '0 4px 14px rgba(245, 158, 11, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-900" />
                <span className="font-devanagari-heading tracking-wide">
                  {isUnsealing ? 'खुल रहा है...' : 'निमंत्रण पत्र खोलें'}
                </span>
                <span className="text-xs">📜</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Helper text below */}
      <p className="mt-4 text-amber-300/70 text-xs sm:text-sm font-devanagari-body text-center animate-pulse">
        {isUnsealing ? 'शुभ आगमन... बप्पा की कृपा बरस रही है' : 'बप्पा के दर्शन के लिए निमंत्रण पत्र पर क्लिक करें'}
      </p>
    </div>
  );
}
