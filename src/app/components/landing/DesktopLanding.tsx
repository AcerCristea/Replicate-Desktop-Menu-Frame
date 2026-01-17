import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import svgPaths from '../../../imports/svg-landing';
import Group123 from '../../../imports/Group123';

// Navigation Menu Items
function NavMenuItem({
  text,
  path,
  index,
}: {
  text: string;
  path: string;
  index: number;
}) {
  return (
    <Link to={path}>
      <motion.div
        className="h-[30px] w-[219px] relative block cursor-pointer group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ x: 10 }}
      >
        <div className="absolute content-stretch flex items-end left-0 right-[-0.91%] top-[calc(50%-3px)] translate-y-[-50%]">
          <div className="font-['Albert_Sans',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#aaccd0] text-[24px] tracking-[-1px] w-[180px] group-hover:text-[#e6e6e6] transition-colors">
            <p className="mb-0">{text}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Left Navigation Sidebar
function LeftSidebar() {
  const menuItems = [
    { label: 'About', path: '/about' },
    { label: 'Approach', path: '/approach' },
    { label: 'Selected Works', path: '/selected-works' },
    { label: 'White Space', path: '/white-space' },
    { label: 'Archive', path: '/archive' },
  ];

  return (
    <motion.div
      className="bg-[#00375a] content-stretch flex flex-col h-full items-start px-[30px] py-[34px] shadow-[10px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-[210px]"
      initial={{ x: -210 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative w-[180px]">
        {/* Navigation Stack */}
        <div className="h-[210px] overflow-clip relative shrink-0 w-full">
          <div className="absolute h-[150px] left-0 top-0 w-[210px] space-y-0">
            {menuItems.map((item, index) => (
              <div
                key={item.path}
                style={{
                  position: 'absolute',
                  top: `${index * 30}px`,
                  left: 0,
                }}
              >
                <NavMenuItem text={item.label} path={item.path} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Lockup - Rotated Text */}
        <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px pl-0 pr-[10px] py-0 relative">
          <div className="flex h-[650px] items-center justify-center mr-[-10px] relative shrink-0 w-[74px]">
            <div className="flex-none rotate-[270deg]">
              <div className="flex flex-col font-['Albert_Sans',sans-serif] font-bold h-[74px] justify-center leading-[0] relative text-[60px] tracking-[-2px] w-[650px]">
                <p className="m-0">
                  <span className="leading-[30px] text-[#6bb0cd]">Nick</span>
                  <span className="leading-[30px] text-[#aaccd0]">Cristea</span>
                  <span className="leading-[30px] text-[#e6e6e6]">Selflux</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Right Sidebar with Date Range
function RightSidebar() {
  return (
    <motion.div
      className="h-full relative shadow-[-10px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-[220px]"
      initial={{ x: 220 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute bg-[#00375a] h-full left-0 top-px w-[240px]" />
      <div className="absolute contents font-['Albert_Sans',sans-serif] font-thin leading-[79px] left-[20px] top-[434px]">
        <motion.p
          className="absolute h-[71px] left-[20px] text-[#3e6064] text-[95px] top-[519px] tracking-[-5.7px] w-[181px] m-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          1996
        </motion.p>
        <motion.div
          className="absolute flex flex-col h-[85px] justify-end left-[201px] text-[#6bb0cd] text-[80px] text-right top-[519px] tracking-[-4.8px] translate-x-[-100%] translate-y-[-100%] w-[181px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="m-0">2026</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Decorative Shape Components - Sample shapes (abbreviated for file size)
function DecoShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top scattered shapes */}
      <motion.div
        className="absolute left-[280px] size-[30px] top-[246px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d="M0 0H30V30H0V0Z" fill="#E6E6E6" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[982px] size-[30px] top-[123px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.pf149a00} fill="#D05D49" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[694px] size-[30px] top-[54px]"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d="M0 30H30V0L0 30Z" fill="#CFD860" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-[340px] size-[30px] top-[72px]"
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 180 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d="M0 30H30V0L0 30Z" fill="#CFD860" />
        </svg>
      </motion.div>

      {/* Add more shapes as needed - keeping file concise */}
    </div>
  );
}

// Central Content with SELFLUX Logo
function CentralContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative w-[800px] h-[400px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <Group123 />
      </motion.div>
    </div>
  );
}

// Main Desktop Landing Component
export function DesktopLanding() {
  return (
    <div className="relative w-full h-screen bg-[#8ac4d0] overflow-hidden">
      {/* Decorative Shapes */}
      <DecoShapes />

      {/* Central Content */}
      <CentralContent />

      {/* Sidebars Container */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <LeftSidebar />
        </div>
        <div className="pointer-events-auto">
          <RightSidebar />
        </div>
      </div>

      {/* Footer Credit */}
      <motion.div
        className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 font-['Albert_Sans',sans-serif] font-normal text-[#3e6064] text-[12px] tracking-[-0.48px] text-center w-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="m-0 leading-[15px]">
          All work designed and produced by Nick Cristea unless otherwise credited
        </p>
      </motion.div>
    </div>
  );
}
