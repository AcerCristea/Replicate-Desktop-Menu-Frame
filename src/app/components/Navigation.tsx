import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Approach', path: '/approach' },
  { label: 'Selected Works', path: '/selected-works' },
  { label: 'White Space', path: '/white-space' },
  { label: 'Archive', path: '/' },
];

export function Navigation() {
  const location = useLocation();

  // Determine the dynamic label based on the current path
  const activeItem = navItems.find(item => 
    item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
  );
  const dynamicLabel = activeItem ? activeItem.label : 'Archive';

  return (
    <div className="fixed left-0 top-0 bottom-0 w-[240px] bg-[#cfd860] z-50">
      <div className="flex flex-col h-full px-[30px] py-[34px]">
        <nav className="flex flex-col gap-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group h-[30px] block relative"
              >
                <motion.div
                  className="flex items-end h-full"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p
                    className={`font-['Albert_Sans'] text-[24px] tracking-[-1px] leading-[30px] ${
                      isActive
                        ? 'font-bold text-[#3e6064]'
                        : 'font-light text-[#3e6064]'
                    } transition-all duration-200`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </nav>
        
        <div className="flex-grow" />

{/* BOTTOM SECTION: Dynamic Label and Date aligned side-by-side */}
<div className="relative w-full">

  {/* Single rotated container for both texts */}
  <div className="absolute bottom-0 left-[90px] rotate-[270deg] origin-bottom-left whitespace-nowrap flex flex-col items-start gap-[10px]">
    <motion.p
      key={dynamicLabel}
      initial={{ opacity: 1 }}
      className="font-['Albert_Sans'] font-bold text-[60px] tracking-[-2px] leading-[0.8] text-[#d05d49]"
    >
      {dynamicLabel}
    </motion.p>
    <p className="font-['Albert_Sans'] font-semibold text-[14px] leading-[1] text-[#1e3239]">
      1996-2026
    </p>
  </div>

</div>
      </div>
    </div>
  );
}
