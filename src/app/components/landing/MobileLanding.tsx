import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import MobileHeader from '../../../imports/Frame3';
import Group123Mobile from '../../../imports/Group123-1-3009';
import LeftColumn from '../../../imports/LeftColumn';
import RightColumn from '../../../imports/RightColumn';

function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#6bb0cd] z-50 w-screen h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full flex">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[180px]"
              initial={{ x: -180 }}
              animate={{ x: 0 }}
              exit={{ x: -180 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <LeftColumn />
            </motion.div>
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[180px]"
              initial={{ x: 180 }}
              animate={{ x: 0 }}
              exit={{ x: 180 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={onClose}
            >
              <RightColumn />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DecoShapesMobile() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Section Shapes */}
      <motion.div className="absolute left-[32px] w-[18px] h-[30px]" style={{ top: '108px' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#CAE0E2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[100px] w-[25px] h-[11px]" style={{ top: '125px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 30"><path d="M85 0L55 30H0V0H85Z" fill="#6BCD72" /></svg>
      </motion.div>
      <motion.div className="absolute left-[166px] w-[20px] h-[11px]" style={{ top: '115px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M0 30L1.31134e-06 0L90 3.93402e-06V30H0Z" fill="#CFD860" /></svg>
      </motion.div>
      <motion.div className="absolute left-[220px] size-[11px]" style={{ top: '110px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="5.5" fill="#D05D49" /></svg>
      </motion.div>
      <motion.div className="absolute left-[267px] w-[18px] h-[42px]" style={{ top: '120px' }} initial={{ opacity: 0, rotate: 15 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#0076C2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[300px] w-[25px] h-[11px]" style={{ top: '142px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#CFD860" /></svg>
      </motion.div>
      <motion.div className="absolute left-[340px] w-[25px] h-[11px]" style={{ top: '142px' }} initial={{ opacity: 0, rotate: 25 }} animate={{ opacity: 1, rotate: 25 }} transition={{ delay: 0.6, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#C37EA2" /></svg>
      </motion.div>

      {/* Triangle shapes */}
      <motion.div className="absolute left-[60px] size-[11px]" style={{ top: '185px' }} initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.65, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 11H11V0L0 11Z" fill="#CFD860" /></svg>
      </motion.div>
      <motion.div className="absolute left-[120px] w-[42px] h-[22px]" style={{ top: '188px' }} initial={{ opacity: 0, rotate: -15 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#0076C2" /></svg>
      </motion.div>

      {/* Middle section shapes */}
      <motion.div className="absolute left-[34px] size-[11px]" style={{ top: '242px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.75, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 0H11V11H0V0Z" fill="#B7E7BA" /></svg>
      </motion.div>
      <motion.div className="absolute left-[230px] w-[18px] h-[30px]" style={{ top: '230px' }} initial={{ opacity: 0, rotate: 12 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#C37EA2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[285px] size-[11px]" style={{ top: '250px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.85, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 0H11V11H0V0Z" fill="#E6E6E6" /></svg>
      </motion.div>

      {/* Small circle */}
      <motion.div className="absolute left-[131px] size-[11px]" style={{ top: '281px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="5.5" fill="#E6E6E6" /></svg>
      </motion.div>

      {/* Parallelograms and shapes around center */}
      <motion.div className="absolute left-[209px] w-[30px] h-[11px]" style={{ top: '298px' }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#E6E6E6" /></svg>
      </motion.div>
      <motion.div className="absolute left-[335px] size-[11px]" style={{ top: '310px' }} initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 45 }} transition={{ delay: 1, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 0H11V11H0V0Z" fill="#E6E6E6" /></svg>
      </motion.div>

      {/* Lower section shapes */}
      <motion.div className="absolute left-[135px] size-[11px]" style={{ top: '520px' }} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 1.05, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 11H11V0L0 11Z" fill="#CFD860" /></svg>
      </motion.div>
      <motion.div className="absolute left-[60px] w-[25px] h-[11px]" style={{ top: '545px' }} initial={{ opacity: 0, rotate: -20 }} animate={{ opacity: 1, rotate: -10 }} transition={{ delay: 1.1, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#C37EA2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[355px] w-[18px] h-[30px]" style={{ top: '530px' }} initial={{ opacity: 0, rotate: 15 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 1.15, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#C37EA2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[185px] w-[25px] h-[11px]" style={{ top: '595px' }} initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 1, rotate: 10 }} transition={{ delay: 1.2, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#C37EA2" /></svg>
      </motion.div>

      {/* Bottom shapes */}
      <motion.div className="absolute left-[255px] size-[11px]" style={{ top: '635px' }} initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 15 }} transition={{ delay: 1.25, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 11H11V0L0 11Z" fill="#CFD860" /></svg>
      </motion.div>
      <motion.div className="absolute left-[335px] size-[11px]" style={{ top: '634px' }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11"><path d="M0 0H11V11H0V0Z" fill="#E6E6E6" /></svg>
      </motion.div>
      <motion.div className="absolute left-[46px] w-[56px] h-[11px]" style={{ top: '645px' }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.35, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#0076C2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[162px] w-[42px] h-[11px]" style={{ top: '683px' }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#CAE0E2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[220px] w-[35px] h-[22px]" style={{ top: '695px' }} initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 1.45, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#0076C2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[69px] w-[35px] h-[11px]" style={{ top: '728px' }} initial={{ opacity: 0, rotate: 25 }} animate={{ opacity: 1, rotate: 15 }} transition={{ delay: 1.5, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30"><path d="M90 0L60 30H0V0H90Z" fill="#C37EA2" /></svg>
      </motion.div>
      <motion.div className="absolute left-[310px] w-[42px] h-[22px]" style={{ top: '725px' }} initial={{ opacity: 0, rotate: -20 }} animate={{ opacity: 1, rotate: -10 }} transition={{ delay: 1.55, duration: 0.5 }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30"><path d="M120 30H0L30 0H150L120 30Z" fill="#16A19D" /></svg>
      </motion.div>
    </div>
  );
}

function CentralContent() {
  return (
    <div className="absolute top-[300px] left-0 right-0 flex flex-col items-center justify-center pointer-events-none">
      <motion.div className="relative w-[330px] h-[180px] flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}>
        <div className="w-full flex items-center justify-center">
          <Group123Mobile />
        </div>
      </motion.div>
      <motion.div className="font-['Albert_Sans',sans-serif] font-bold text-[#e6e6e6] text-center mt-[90px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <p className="m-0 text-[16px] tracking-[-0.48px] leading-[20px]">Potent</p>
        <p className="m-0 text-[16px] tracking-[-0.48px] leading-[20px]">products &</p>
        <p className="m-0 text-[16px] tracking-[-0.48px] leading-[20px]">experiences</p>
      </motion.div>
    </div>
  );
}

export function MobileLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#8ac4d0] overflow-hidden">
      <DecoShapesMobile />
      <CentralContent />
      <div className="absolute top-0 left-0 right-0 z-40" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MobileHeader />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <motion.div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 font-['Albert_Sans',sans-serif] font-normal text-[#3e6064] text-[10px] tracking-[-0.4px] text-center w-[300px] px-[20px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <p className="m-0 leading-[13px]">All work designed and produced by Nick Cristea unless otherwise credited</p>
      </motion.div>
    </div>
  );
}
