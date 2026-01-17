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
