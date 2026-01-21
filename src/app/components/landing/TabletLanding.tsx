import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import svgPathsShapes from '../../../imports/svg-ugeqeu5njn';
import TabletMenu from '../../../imports/TabletMenu';
import Group123 from '../../../imports/Group123-2-4509';
import DateRangeLockup from '../../../imports/DateRangeLockup';

// Menu Overlay Component
function MenuOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuItems = [
    { label: 'About', path: '/about' },
    { label: 'Approach', path: '/approach' },
    { label: 'Selected Works', path: '/selected-works' },
    { label: 'White Space', path: '/white-space' },
    { label: 'Archive', path: '/archive' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-0 left-0 h-full w-[175px] bg-[#00375a] shadow-[10px_4px_40px_0px_rgba(0,0,0,0.25)] z-50"
          initial={{ x: -175 }}
          animate={{ x: 0 }}
          exit={{ x: -175 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className="px-[25px] py-[34px] h-full flex flex-col">
            {/* Close Button */}
            <div className="mb-[40px]">
              <motion.button
                className="cursor-pointer bg-transparent border-none p-0"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M7.5 7.5L22.5 22.5M22.5 7.5L7.5 22.5"
                    stroke="#aaccd0"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <Link key={item.path} to={item.path}>
                  <motion.button
                    className="font-['Albert_Sans',sans-serif] font-light text-[#aaccd0] text-[20px] tracking-[-0.6px] leading-[20px] hover:text-[#e6e6e6] transition-colors cursor-pointer bg-transparent border-none text-left px-0 py-1 w-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                </Link>
              ))}
            </div>

            {/* Bottom Text - Rotated */}
            <div className="flex-1 flex items-end justify-start mt-auto mb-[0px]">
              <div className="flex h-[400px] items-center justify-center w-[60px]">
                <div className="flex-none rotate-[270deg]">
                  <div className="font-['Albert_Sans',sans-serif] font-bold text-[50px] tracking-[-1.6px] whitespace-nowrap">
                    <span className="text-[#6bb0cd]">Nick</span>
                    <span className="text-[#aaccd0]">Cristea</span>
                    <span className="text-[#e6e6e6]">Selflux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Left Column Component
function LeftColumn({
  isMenuOpen,
  onMenuToggle,
}: {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <motion.div
      className="absolute left-0 top-0 h-full w-[96px] z-40"
      initial={{ x: -96 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full h-full cursor-pointer" onClick={onMenuToggle}>
        <TabletMenu />
      </div>
    </motion.div>
  );
}

// Decorative Shapes for Tablet
function DecoShapesTablet() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1: Component90Curve3 */}
      <motion.div
        className="absolute left-[402px] size-[36px] top-[259px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 36"
        >
          <path d={svgPathsShapes.pc682970} fill="#C37EA2" />
        </svg>
      </motion.div>

      {/* Shape 2: Component90Curve4 (rotated 270deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[445px] size-[35px] top-[862px]"
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block size-[35px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 35 35"
          >
            <path d={svgPathsShapes.p2b3aff00} fill="#C37EA2" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 3: Component90Curve5 (rotated 270deg, scaled) */}
      <motion.div
        className="absolute flex h-[34px] items-center justify-center left-[579px] top-[901px] w-[35px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <svg
            className="block w-[34px] h-[35px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 34 35"
          >
            <path d={svgPathsShapes.p2e943980} fill="#C37EA2" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 4: Square3 */}
      <motion.div
        className="absolute left-[347px] size-[18px] top-[673px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 18"
        >
          <path d="M0 0H18V18H0V0Z" fill="#E6E6E6" />
        </svg>
      </motion.div>

      {/* Shape 5: Square4 (rotated 315deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[597px] size-[25.1px] top-[756px]"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex-none rotate-[315deg]">
          <svg
            className="block size-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 17.7483 17.7483"
          >
            <path d="M0 0H17.7483V17.7483H0V0Z" fill="#E6E6E6" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 6: Square5 */}
      <motion.div
        className="absolute left-[267px] size-[18px] top-[324px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 18"
        >
          <path d="M0 0H18V18H0V0Z" fill="#E6E6E6" />
        </svg>
      </motion.div>

      {/* Shape 7: SmallCircle1 */}
      <motion.div
        className="absolute h-[17px] left-[514px] top-[284px] w-[18px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 17"
        >
          <path d={svgPathsShapes.p208f5bf2} fill="#D05D49" />
        </svg>
      </motion.div>

      {/* Shape 8: RightCutRect1 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[35px] items-center justify-center left-[468px] top-[329px] w-[17px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[35px] h-[17px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 35 17"
          >
            <path d={svgPathsShapes.p2dc24130} fill="#E6E6E6" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 9: Rectangle1 (rotated 90deg) */}
      <motion.div
        className="absolute flex h-[53px] items-center justify-center left-[340px] top-[266px] w-[16px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="flex-none rotate-[90deg]">
          <svg
            className="block w-[53px] h-[16px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 53 16"
          >
            <path d={svgPathsShapes.p2de0f680} fill="#CFD860" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 10: MidCutRect5 */}
      <motion.div
        className="absolute h-[18px] left-[200px] top-[375px] w-[50px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 50 18"
        >
          <path d="M50 0L32.3529 18H0V0H50Z" fill="#6BCD72" />
        </svg>
      </motion.div>

      {/* Shape 11: MidCutRect6 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[54px] items-center justify-center left-[395px] top-[752px] w-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[54px] h-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 54 18"
          >
            <path d="M54 0L36 18H0V0H54Z" fill="#8F79B9" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 12: MidCutRect7 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[53px] items-center justify-center left-[404px] top-[111px] w-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[53px] h-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 53 18"
          >
            <path d={svgPathsShapes.p2af8d500} fill="#8F79B9" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 13: MidCutRect8 (rotated 135deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[538px] size-[50.2px] top-[673px]"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex-none rotate-[135deg]">
          <svg
            className="block w-[53.245px] h-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 53.245 17.7483"
          >
            <path d={svgPathsShapes.p1c7b2b80} fill="#8F79B9" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 14: MidCutRect9 (rotated 315deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[599px] size-[50.2px] top-[79px]"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex-none rotate-[315deg]">
          <svg
            className="block w-[53.245px] h-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 53.245 17.7483"
          >
            <path d={svgPathsShapes.pbb34900} fill="#8F79B9" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 15: MediumParallela1 */}
      <motion.div
        className="absolute h-[18px] left-[321px] top-[888px] w-[71px]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 71 18"
        >
          <path d="M71 0L53.25 18H0L17.75 0H71Z" fill="#AACCD0" />
        </svg>
      </motion.div>

      {/* Shape 16: LongParallela4 (rotated 315deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[254px] size-[75.3px] top-[756px]"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <div className="flex-none rotate-[315deg]">
          <svg
            className="block w-[88.742px] h-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 88.7416 17.7483"
          >
            <path d={svgPathsShapes.p3897d380} fill="#0076C2" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 17: LongParallela5 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[89px] items-center justify-center left-[468px] top-[707px] w-[17px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[89px] h-[17px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 89 17"
          >
            <path d={svgPathsShapes.p189b6c80} fill="#0076C2" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 18: LongParallela6 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[89px] items-center justify-center left-[627px] top-[221px] w-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[89px] h-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 89 18"
          >
            <path d={svgPathsShapes.p25f36600} fill="#0076C2" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 19: LeftCutRect4 (rotated 270deg) */}
      <motion.div
        className="absolute flex h-[37px] items-center justify-center left-[429px] top-[686px] w-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <div className="flex-none rotate-[270deg]">
          <svg
            className="block w-[37px] h-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 37 18"
          >
            <path d={svgPathsShapes.p13e46100} fill="#B7E7BA" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 20: LeftCutRect5 */}
      <motion.div
        className="absolute h-[18px] left-[569px] top-[384px] w-[36px]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 18"
        >
          <path d={svgPathsShapes.pfcb60c0} fill="#B7E7BA" />
        </svg>
      </motion.div>

      {/* Shape 21: LeftCutRect6 */}
      <motion.div
        className="absolute h-[18px] left-[207px] top-[277px] w-[36px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 18"
        >
          <path d={svgPathsShapes.pfcb60c0} fill="#B7E7BA" />
        </svg>
      </motion.div>

      {/* Shape 22: LeftCutRect7 (rotated 90deg) */}
      <motion.div
        className="absolute flex h-[37px] items-center justify-center left-[211px] top-[819px] w-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
      >
        <div className="flex-none rotate-[90deg]">
          <svg
            className="block w-[37px] h-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 37 18"
          >
            <path d={svgPathsShapes.p13e46100} fill="#B7E7BA" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 23: Component90Triangle2 */}
      <motion.div
        className="absolute h-[18px] left-[407px] top-[57px] w-[17px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 18"
        >
          <path d="M0 18H17V0L0 18Z" fill="#CFD860" />
        </svg>
      </motion.div>

      {/* Shape 24: Component90Triangle3 (rotated 180deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[226px] size-[18px] top-[120px]"
        initial={{ opacity: 0, rotate: 90 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex-none rotate-[180deg]">
          <svg
            className="block size-[18px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18"
          >
            <path d="M0 18H18V0L0 18Z" fill="#CFD860" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 25: DoubkleArrow1 (rotated 45deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[499px] size-[87.85px] top-[117px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex-none rotate-[45deg]">
          <svg
            className="block w-[106.49px] h-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 106.49 17.7483"
          >
            <path d={svgPathsShapes.p17ab5580} fill="#16A19D" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 26: LongParallela7 */}
      <motion.div
        className="absolute h-[16px] left-[178px] top-[927px] w-[89px]"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 89 16"
        >
          <path d={svgPathsShapes.p848d300} fill="#0076C2" />
        </svg>
      </motion.div>

      {/* Shape 27: LongParallela8 (rotated 45deg) */}
      <motion.div
        className="absolute flex items-center justify-center left-[221px] size-[75.3px] top-[660px]"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      >
        <div className="flex-none rotate-[45deg]">
          <svg
            className="block w-[88.742px] h-[17.748px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 88.7416 17.7483"
          >
            <path d={svgPathsShapes.p3a8aa500} fill="#E6E6E6" />
          </svg>
        </div>
      </motion.div>

      {/* Shape 28: MediumParallela2 */}
      <motion.div
        className="absolute h-[18px] left-[258px] top-[174px] w-[62px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 62 18"
        >
          <path d={svgPathsShapes.p26dfbf00} fill="#CAE0E2" />
        </svg>
      </motion.div>
    </div>
  );
}

// Central Content
function CentralContent() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        {/* Custom Geometric Logo */}
        <div className="relative w-[442px] h-[116px] mx-auto">
          <Group123 />
        </div>
      </motion.div>
    </div>
  );
}

// Right Sidebar
function RightSidebar() {
  return (
    <motion.div
      className="absolute right-0 top-0 h-full w-[95px] bg-[#00375a] shadow-[-10px_4px_40px_0px_rgba(0,0,0,0.25)] z-30"
      initial={{ x: 95 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute right-[15px] top-[430px] w-[97px] h-[136px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <DateRangeLockup />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Main Tablet Landing Component
export function TabletLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#8ac4d0] overflow-hidden">
      {/* Decorative Shapes */}
      <DecoShapesTablet />

      {/* Central Content */}
      <CentralContent />

      {/* Left Column */}
      <LeftColumn
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Right Sidebar */}
      <RightSidebar />

      {/* Footer Credit */}
      <motion.div
        className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 font-['Albert_Sans',sans-serif] font-normal text-[#3e6064] text-[10px] tracking-[-0.4px] text-center w-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="m-0 leading-[12px]">
          All work designed and produced by Nick Cristea unless otherwise
          credited
        </p>
      </motion.div>
    </div>
  );
}
