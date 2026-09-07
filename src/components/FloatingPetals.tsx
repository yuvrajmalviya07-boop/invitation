import { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  colorType: 'yellow' | 'orange' | 'rose';
  rotation: number;
  drift: number;
}

// Optimized static petal SVG reusing global gradient definitions
const PetalSVG = memo(function PetalSVG({ size, colorType }: { size: number; colorType: 'yellow' | 'orange' | 'rose' }) {
  const gradId = colorType === 'yellow' ? 'petal-grad-yellow' : colorType === 'orange' ? 'petal-grad-orange' : 'petal-grad-rose';
  const veinColor = colorType === 'yellow' ? '#F59E0B' : colorType === 'orange' ? '#C2410C' : '#881337';

  return (
    <svg
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size * 1.3 }}
      className="pointer-events-none transform-gpu drop-shadow-xs"
    >
      <path
        d="M15 2 C22 2 28 12 28 24 C28 34 20 38 15 38 C10 38 2 34 2 24 C2 12 8 2 15 2 Z"
        fill={`url(#${gradId})`}
        opacity="0.92"
      />
      <path
        d="M15 6 Q15 22 15 34"
        stroke={veinColor}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
});

export function FloatingPetals({ burstTrigger = 0 }: { burstTrigger?: number }) {
  const [ambientPetals, setAmbientPetals] = useState<Petal[]>([]);
  const [burstPetals, setBurstPetals] = useState<Petal[]>([]);

  // Generate continuous automatic falling petals spanning the entire screen
  useEffect(() => {
    const types: ('yellow' | 'orange' | 'rose')[] = ['yellow', 'orange', 'orange', 'yellow', 'rose', 'orange', 'yellow'];
    const count = 22; // Rich, celebratory yet lightweight and smooth

    const initial: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * (100 / count)) + (Math.random() * 4 - 2), // Evenly spread horizontally across 0-100%
      size: Math.floor(Math.random() * 10) + 14, // 14px to 24px
      duration: Math.random() * 5 + 7.5, // 7.5s to 12.5s graceful fall
      delay: -(Math.random() * 10), // Negative delay so petals are already mid-fall on load!
      colorType: types[i % types.length],
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 80,
    }));

    setAmbientPetals(initial);
  }, []);

  // Extra celebratory shower when envelope opens
  useEffect(() => {
    if (burstTrigger > 0) {
      const burstCount = 16;
      const types: ('yellow' | 'orange' | 'rose')[] = ['yellow', 'orange', 'orange', 'rose', 'yellow'];
      const timestamp = Date.now();

      const newPetals: Petal[] = Array.from({ length: burstCount }, (_, i) => ({
        id: timestamp + i,
        x: Math.random() * 90 + 5,
        size: Math.floor(Math.random() * 12) + 16,
        duration: Math.random() * 2.5 + 4.5,
        delay: Math.random() * 0.4,
        colorType: types[i % types.length],
        rotation: Math.random() * 360,
        drift: (Math.random() - 0.5) * 100,
      }));

      setBurstPetals(newPetals);
    }
  }, [burstTrigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true" id="floating-petals-container">
      {/* Global SVG Gradients Definition defined ONCE */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <radialGradient id="petal-grad-yellow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
          <radialGradient id="petal-grad-orange" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </radialGradient>
          <radialGradient id="petal-grad-rose" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#881337" />
          </radialGradient>
        </defs>
      </svg>

      {/* Ambient Continuous Automatic Falling Petals */}
      {ambientPetals.map((petal) => (
        <motion.div
          key={`ambient-${petal.id}`}
          className="absolute top-0 will-change-transform transform-gpu pointer-events-none"
          style={{ left: `${petal.x}%` }}
          initial={{
            y: -50,
            x: 0,
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: petal.drift,
            rotate: petal.rotation + 360,
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <PetalSVG size={petal.size} colorType={petal.colorType} />
        </motion.div>
      ))}

      {/* Celebratory Petals Wave when unsealing letter */}
      <AnimatePresence>
        {burstPetals.map((petal) => (
          <motion.div
            key={`burst-${petal.id}`}
            className="absolute top-0 will-change-transform transform-gpu pointer-events-none"
            style={{ left: `${petal.x}%` }}
            initial={{
              y: -40,
              x: 0,
              rotate: petal.rotation,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              y: '110vh',
              x: petal.drift,
              rotate: petal.rotation + 420,
              opacity: [0, 0.95, 0.95, 0],
              scale: [0.7, 1.05, 0.9],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            <PetalSVG size={petal.size} colorType={petal.colorType} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
