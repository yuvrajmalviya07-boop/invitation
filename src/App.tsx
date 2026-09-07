import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Copy, Check, RotateCcw } from 'lucide-react';
import ganpatiImage from './assets/images/ganpati_divine_blessing_1788725474040.jpg';
import { Diya } from './components/Diya';
import { ToranHeader } from './components/ToranHeader';
import { CornerOrnament } from './components/CornerOrnaments';
import { FloatingPetals } from './components/FloatingPetals';
import { RangoliPattern } from './components/RangoliPattern';
import { LetterEnvelope } from './components/LetterEnvelope';
import { ScrollRod } from './components/ScrollRod';
import { DevotionalAudioPlayer } from './components/DevotionalAudioPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [burstTrigger, setBurstTrigger] = useState(0);
  const [copied, setCopied] = useState(false);

  const fullAddress = `A-401 Raj Tarang, Shiv Vallabh Cross Road, Ashokvan, Rawalpada, Dahisar East`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleStartOpen = () => {
    setShouldPlayMusic(true);
  };

  const handleOpenLetter = () => {
    setIsOpen(true);
    setShouldPlayMusic(true);
    // Trigger festive flower shower smoothly once the scroll starts revealing
    setTimeout(() => {
      setBurstTrigger((prev) => prev + 1);
    }, 180);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
    setShouldPlayMusic(false);
  };

  return (
    <div className="min-h-screen bg-[#1F0407] text-[#2C0A0E] relative overflow-x-hidden flex flex-col items-center justify-start py-4 md:py-10 px-3 sm:px-4">
      {/* Background Sacred Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Gold Aura */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/25 via-red-600/15 to-transparent rounded-full blur-3xl" />
        {/* Subtle Side Saffron Lights */}
        <div className="absolute top-1/3 -left-32 w-80 h-96 bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-32 w-80 h-96 bg-amber-500/15 rounded-full blur-3xl" />
      </div>

      {/* Floating Petals Animation (Automatic continuous flower rain) */}
      <FloatingPetals burstTrigger={burstTrigger} />

      {/* Devotional Background Music Player (Plays when letter is opened from 15s) */}
      <DevotionalAudioPlayer shouldPlay={shouldPlayMusic} />

      {/* Top Replay / Fold Letter Button (Visible when scroll is open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 z-30"
          >
            <button
              onClick={handleCloseLetter}
              id="fold-letter-btn"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 hover:bg-amber-900 text-amber-200 border border-amber-400/40 shadow-md text-xs sm:text-sm font-devanagari-body transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>पत्र पुनः बंद करें (View Envelope Again)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area: Either Envelope View OR Unrolled Royal Scroll */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* STATE 1: Closed Royal Invitation Letter Envelope */
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeIn' }}
            className="w-full flex items-center justify-center my-auto py-6 sm:py-8"
          >
            <LetterEnvelope 
              isOpen={isOpen} 
              onStartOpen={handleStartOpen}
              onOpen={handleOpenLetter} 
            />
          </motion.div>
        ) : (
          /* STATE 2: Unrolled Royal Parchment Scroll */
          <motion.div
            key="scroll-view"
            className="w-full max-w-[640px] flex flex-col items-center relative z-10 transform-gpu will-change-transform"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top Royal Golden Scroll Rod */}
            <motion.div 
              className="w-full relative z-30"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ScrollRod position="top" />
            </motion.div>

            {/* Master Parchment Scroll */}
            <main 
              id="ganpati-invitation-card"
              className="relative z-10 w-full rounded-none px-2 sm:px-3 shadow-2xl shadow-black/80 overflow-hidden transform-gpu"
              style={{
                background: 'linear-gradient(145deg, #B45309 0%, #D97706 15%, #FEF08A 50%, #D97706 85%, #78350F 100%)',
              }}
            >
              {/* Inner Card Parchment / Silk Canvas */}
              <div className="relative w-full bg-[#FFFDF7] border-x-2 border-[#D97706]/40 p-4 sm:p-6 md:p-8 overflow-hidden shadow-inner">
                
                {/* Subtle Background Rangoli Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <RangoliPattern size={480} opacity={0.06} />
                </div>

                {/* Traditional Golden Corner Filigrees */}
                <CornerOrnament position="top-left" className="top-2 left-2" />
                <CornerOrnament position="top-right" className="top-2 right-2" />
                <CornerOrnament position="bottom-left" className="bottom-2 left-2" />
                <CornerOrnament position="bottom-right" className="bottom-2 right-2" />

                {/* Decorative Toran (Bandhanwar) at Top */}
                <div className="-mt-2 -mx-2 mb-2 sm:mb-4">
                  <ToranHeader />
                </div>

                {/* Sacred Auspicious Shloka */}
                <div className="text-center mt-1 mb-4 sm:mb-5">
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-1">
                    <span className="text-amber-700 text-lg sm:text-xl">卐</span>
                    <h2 className="font-devanagari-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#991B1B] drop-shadow-xs">
                      ॥ श्री गणेशाय नमः ॥
                    </h2>
                    <span className="text-amber-700 text-lg sm:text-xl">卐</span>
                  </div>
                  {/* Delicate Golden Divider */}
                  <div className="w-24 sm:w-32 h-0.5 mx-auto mt-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                </div>

                {/* Ganpati Bappa Sacred Artwork with Golden Glow */}
                <div className="relative flex flex-col items-center justify-center my-3 sm:my-5">
                  {/* Background Halo Pulse Effect */}
                  <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

                  {/* Glowing Golden Ring Frame with Diyas */}
                  <div className="relative flex items-center justify-center">
                    {/* Left Diya */}
                    <div className="absolute -left-5 sm:-left-8 z-20">
                      <Diya size="sm" delay={0} />
                    </div>

                    {/* Ornate Circular Arched Medallion */}
                    <div className="relative p-2 rounded-full gold-gradient-border shadow-xl animate-divine-aura">
                      <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-amber-200/90 shadow-inner bg-amber-950/10">
                        <img
                          src={ganpatiImage}
                          alt="Lord Ganesha Devotional Blessing Artwork"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Right Diya */}
                    <div className="absolute -right-5 sm:-right-8 z-20">
                      <Diya size="sm" delay={1} />
                    </div>
                  </div>

                  {/* Marigold Garland Accent underneath */}
                  <div className="flex items-center justify-center gap-1.5 mt-3 select-none">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
                    <span className="text-amber-800 font-devanagari-heading text-sm px-1.5 font-bold">जय गणेश</span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-xs" />
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-xs" />
                  </div>
                </div>

                {/* Main Greeting Section */}
                <div className="text-center space-y-2 sm:space-y-3 px-2 sm:px-4">
                  <h1 className="font-devanagari-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7F1D1D] tracking-wide">
                    गणपति बप्पा मोरया! <span className="inline-block hover:scale-110 transition-transform">🙏</span>
                  </h1>

                  <p className="font-devanagari-heading text-lg sm:text-xl md:text-2xl font-bold text-[#9A3412] leading-snug">
                    हमारे घर गणपति बप्पा के दर्शन के लिए जरूर पधारें!
                  </p>

                  <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent my-2" />

                  <p className="font-devanagari-body text-base sm:text-lg text-[#5B1010] font-medium leading-relaxed max-w-lg mx-auto">
                    आपकी उपस्थिति हमारे लिए आनंद और आशीर्वाद है।
                    <br />
                    <span className="block mt-1">
                      इस गणेशोत्सव पर अपने परिवार सहित हमारे घर बप्पा के दर्शन के लिए जरूर पधारें।
                    </span>
                  </p>
                </div>

                {/* Elegant Invitation Details Card */}
                <div 
                  id="invitation-details-card"
                  className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border border-amber-300/80 bg-gradient-to-b from-[#FFFDF2] to-[#FEF9E7] shadow-md relative"
                >
                  {/* Decorative Corner Dots */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-amber-500" />

                  <div className="space-y-4 text-center">
                    {/* Date Box */}
                    <div className="flex flex-col items-center">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/70 text-[#991B1B] mb-1.5">
                        <Calendar className="w-4 h-4 text-amber-700" />
                        <span className="font-devanagari-heading font-semibold text-sm sm:text-base">दिनांक</span>
                      </div>
                      <p className="font-devanagari-heading text-xl sm:text-2xl font-bold text-[#7F1D1D] tracking-wide">
                        14 सितंबर से 15 सितंबर
                      </p>
                    </div>

                    {/* Ornamental Divider */}
                    <div className="w-full flex items-center justify-center gap-2 text-amber-400">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-amber-400" />
                      <span className="text-xs font-serif text-amber-600">✦ ✦ ✦</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-300 to-amber-400" />
                    </div>

                    {/* Location Box */}
                    <div className="flex flex-col items-center">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/70 text-[#991B1B] mb-2">
                        <MapPin className="w-4 h-4 text-amber-700" />
                        <span className="font-devanagari-heading font-semibold text-sm sm:text-base">स्थान</span>
                      </div>
                      
                      <address className="not-italic font-devanagari-body text-[#450A0A] text-base sm:text-lg font-medium leading-relaxed max-w-md">
                        <span className="font-bold block text-lg sm:text-xl text-[#7F1D1D] font-cinzel">A-401 Raj Tarang</span>
                        <span>Shiv Vallabh Cross Road,</span>
                        <br />
                        <span>Ashokvan, Rawalpada,</span>
                        <br />
                        <span className="font-semibold text-[#831843]">Dahisar East</span>
                      </address>

                      {/* Subtle Copy Address helper */}
                      <button
                        onClick={handleCopyAddress}
                        id="copy-address-btn"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-medium px-3 py-1 rounded-md bg-amber-200/50 hover:bg-amber-200 border border-amber-300 transition-colors cursor-pointer"
                        title="पता कॉपी करें"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-700" />
                            <span className="text-green-800 font-semibold">पता कॉपी हो गया!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-amber-800" />
                            <span>पता कॉपी करें (Copy Address)</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="w-full flex items-center justify-center gap-2 text-amber-400 pt-1">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-amber-400" />
                      <span className="text-xs font-serif text-amber-600">✦</span>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-300 to-amber-400" />
                    </div>

                    {/* Host Signature */}
                    <div className="pt-1">
                      <p className="font-devanagari-heading text-sm sm:text-base text-amber-900 font-semibold mb-0.5">
                        आपके स्नेहांकित
                      </p>
                      <p className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#991B1B] drop-shadow-xs">
                        Malviya's
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Message Section */}
                <div 
                  id="special-message-section"
                  className="my-6 sm:my-8 px-4 py-4 sm:px-6 sm:py-5 rounded-xl bg-gradient-to-br from-[#FFFBEB] via-[#FEF3C7]/40 to-[#FFFBEB] border-l-4 border-l-amber-500 border border-amber-200/80 shadow-xs relative text-center"
                >
                  <div className="text-2xl sm:text-3xl text-amber-500 leading-none mb-1 font-serif">“</div>
                  <blockquote className="font-devanagari-body text-[#581C1C] text-base sm:text-lg font-medium leading-relaxed italic px-2">
                    बप्पा के आगमन का यह मंगलमय उत्सव आपकी उपस्थिति के बिना अधूरा है।
                    <br />
                    <span className="block mt-1 text-[#78350F]">
                      आप सपरिवार हमारे घर पधारकर गणराय का आशीर्वाद प्राप्त करें, यही हमारी विनम्र प्रार्थना है।
                    </span>
                  </blockquote>
                  <div className="text-2xl sm:text-3xl text-amber-500 leading-none mt-1 font-serif">”</div>
                </div>

                {/* Bottom Flanking Diyas */}
                <div className="flex items-center justify-around py-1">
                  <Diya size="sm" delay={2} />
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>
                  <Diya size="sm" delay={3} />
                </div>

                {/* Footer Section */}
                <footer 
                  id="invitation-footer"
                  className="mt-4 pt-4 border-t border-amber-300/60 text-center space-y-2"
                >
                  <h3 className="font-devanagari-heading text-xl sm:text-2xl font-bold text-[#991B1B] tracking-wide">
                    ॥ गणपति बप्पा मोरया ॥
                  </h3>

                  <p className="font-devanagari-body text-base sm:text-lg font-semibold text-[#831843] flex items-center justify-center gap-1.5 flex-wrap">
                    <span>आपके आगमन की हमें बेसब्री से प्रतीक्षा रहेगी!</span>
                    <span className="inline-flex items-center gap-1">❤️🙏</span>
                  </p>

                  <p className="font-cinzel text-lg sm:text-xl font-bold text-[#B45309] tracking-widest pt-1">
                    — Malviya's
                  </p>

                  <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-3" />
                </footer>

              </div>
            </main>

            {/* Bottom Royal Golden Scroll Rod */}
            <motion.div 
              className="w-full relative z-30"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ScrollRod position="bottom" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle outer bottom devotional greeting */}
      <div className="mt-6 mb-2 text-center text-amber-300/70 text-xs sm:text-sm font-devanagari-body select-none">
        शुभ गणेशोत्सव २०२६ • मालवीय परिवार
      </div>
    </div>
  );
}
