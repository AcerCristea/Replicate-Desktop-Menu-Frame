import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "@/imports/svg-tablet-archive";
import svgPathsOverlay from "@/imports/svg-tablet-overlay";
import { useArchiveData, FilterColumn } from "../hooks/useArchiveData";

// --- Sub Components ---

function SectionTitle() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[14px] h-[600px] items-start justify-end left-0 w-[115px]" data-name="SectionTitle">
      <div className="flex h-[576px] items-center justify-center relative shrink-0 w-full">
        <div className="-rotate-90 flex-none w-full">
          <div className="flex flex-col font-['Albert_Sans',sans-serif] font-bold h-[115px] justify-center leading-[0] relative text-[#d05d49] text-[60px] tracking-[-2px] w-full">
            <p className="leading-[24px]">Archive</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Albert_Sans',sans-serif] font-semibold h-[10px] justify-center leading-[0] relative shrink-0 text-[#e6e6e6] text-[12px] text-center w-full">
        <p className="leading-[16px]">1996-2026</p>
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2627 29.8504">
        <g id="Hamburger">
          <path d={svgPaths.p2e108200} fill="#E6E6E6" id="Union" />
          <path d={svgPaths.p26ce6e00} fill="#E6E6E6" id="Union_2" />
          <path d={svgPaths.p12a4aa30} fill="#E6E6E6" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      className="absolute inset-[2.08%_13.04%_95.42%_17.39%] cursor-pointer group"
      data-name="MobileMenu"
      onClick={onOpen}
    >
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#e6e6e6] text-[14px] top-[29.17%] group-hover:text-[#d05d49] transition-colors duration-200">
        <p className="leading-[30px]">MENU</p>
      </div>
    </div>
  );
}

function TabletMenu({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="h-full relative shrink-0 w-[115px] bg-[#1e3239]" data-name="TabletMenu">
      <SectionTitle />
      <MobileMenu onOpen={onOpen} />
    </div>
  );
}

function LoadingRow() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-start flex flex-wrap gap-[0px_17px] items-start left-0 top-0 w-full py-[8px]">
        <div className="w-[180px] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
        <div className="w-[130px] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
        <div className="w-[130px] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
        <div className="w-[30px] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
      </div>
      <div className="h-px relative shrink-0 w-full bg-[#0c1517] opacity-50"></div>
    </div>
  );
}

// --- Overlay Components ---

function MobileMainNav() {
  const navigate = useNavigate();
  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Approach", path: "/approach" },
    { label: "Selected Works", path: "/selected-works" },
    { label: "White Space", path: "/white-space" },
    { label: "Archive", path: "/archive" },
  ];

  return (
    <div className="absolute inset-[7.71%_77.34%_70.42%_3.91%] overflow-clip z-50 w-[200px]" data-name="MobileMainNav">
      <div className="flex flex-col gap-[5px] items-start pt-[10px]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative shrink-0 w-full py-1 cursor-pointer group"
            onClick={() => navigate(item.path)}
          >
            <p className={`font-['Albert_Sans',sans-serif] ${item.label === 'Archive' ? 'font-bold' : 'font-light'} text-[20px] text-[#aaccd0] group-hover:text-white transition-colors`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OverlayClose({ onClose }: { onClose: () => void }) {
  return (
    <button
      className="absolute block cursor-pointer left-[156px] size-[24px] top-[30px] z-50 hover:scale-110 transition-transform"
      data-name="Close"
      onClick={onClose}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <path d={svgPathsOverlay.pbe31300} fill="#AACCD0" id="Angled-Rect" />
          <path d={svgPathsOverlay.p2a472b00} fill="#AACCD0" id="Angled-Rect_2" />
        </g>
      </svg>
    </button>
  );
}

function ArchiveOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-50"
          data-name="Overlay"
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[#1e3239] opacity-95" onClick={onClose}></div>

          {/* Menu Content Container */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="absolute left-0 top-0 bottom-0 w-full md:w-[768px] pointer-events-none"
          >
            {/* Left Dark Bar for Menu */}
            <div className="absolute inset-y-0 left-0 w-[210px] bg-[#1e3239] pointer-events-auto" />

            {/* We need to allow pointer events on children */}
            <div className="pointer-events-auto contents">
              <MobileMainNav />
              <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[14px] h-[600px] items-start justify-end left-0 w-[115px] z-10 pointer-events-none">
                <SectionTitle />
              </div>
              <OverlayClose onClose={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Page ---

export function ArchiveTabletPage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const {
    projects,
    loading,
    activeFilter,
    handleFilterChange,
    handleProjectClick,
  } = useArchiveData();

  // Helper to get header styles based on active state
  const getHeaderStyles = (column: FilterColumn) => {
    const isActive = activeFilter === column;
    return {
      textColor: isActive ? 'text-[#d05d49]' : 'text-[#1e3239]',
      showUnderline: isActive,
    };
  };

  return (
    <div className="relative size-full overflow-hidden flex flex-row h-screen w-screen bg-[#cfd860]">
      {/* Left sidebar menu */}
      <TabletMenu onOpen={() => setIsOverlayOpen(true)} />

      {/* Main content area */}
      <div className="bg-[#cfd860] flex-1 h-full overflow-clip relative" data-name="ArchiveHomeContent">
        {/* Large decorative A in background */}
        <div className="absolute h-[1023.4px] right-[-452.39px] top-[103.6px] w-[1059.95px] pointer-events-none" data-name="ArchiveLARGE">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1059.95 1023.4">
            <path d="M557.022 165.206H504.39L203.218 1023.4H0L366.962 0H692.988L1059.95 1023.4H856.732L557.022 165.206ZM222.224 622.812H818.72V788.018H222.224V622.812Z" fill="#689BA1" opacity="0.3" />
          </svg>
        </div>

        {/* Archive list centered */}
        <div className="absolute left-1/2 -translate-x-1/2 content-stretch flex h-full items-start pt-[30px] px-[20px] top-0 w-auto" data-name="ArchiveList">
          <div className="content-stretch flex flex-col gap-[15px] h-full items-start relative shrink-0 w-[523px]" data-name="ArchiveClientBlock">
            {/* Sticky subnav */}
            <div className="h-[35px] shrink-0 sticky top-0 w-full z-10 bg-[#cfd860]" data-name="ArchiveSubnavTablet">
              <div className="absolute bottom-0 left-[0.15%] right-[-0.15%] top-full" data-name="Keyline">
                <div className="absolute inset-[-2px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 2">
                    <line stroke="#D05D49" strokeWidth="2" x2="523" y1="1" y2="1" />
                  </svg>
                </div>
              </div>
              {/* Highlight line under active filter */}
              <div
                className="absolute bottom-0 top-full transition-all duration-200"
                data-name="Highlight"
                style={{
                  left: activeFilter === 'CLIENT' ? '0' :
                        activeFilter === 'PROJECT TYPE' ? '197px' :
                        activeFilter === 'INDUSTRY' ? '344px' : '491px',
                  width: activeFilter === 'CLIENT' ? '180px' :
                         activeFilter === 'PROJECT TYPE' ? '130px' :
                         activeFilter === 'INDUSTRY' ? '130px' : '32px',
                }}
              >
                <div className="absolute inset-[-5px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 5">
                    <line stroke="#D05D49" strokeWidth="5" x2="180" y1="2.5" y2="2.5" />
                  </svg>
                </div>
              </div>
              {/* Nav headers */}
              <div className="absolute content-stretch flex gap-[17px] items-center left-0 top-[10px] w-full max-w-[523px]" data-name="NavHeaders">
                <div
                  className="h-[16px] relative shrink-0 w-[180px] cursor-pointer group"
                  onClick={() => handleFilterChange('CLIENT')}
                >
                  <div className={`absolute bottom-[11.14%] flex flex-col font-['Albert_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 ${getHeaderStyles('CLIENT').textColor} text-[14px] top-[-11.14%] whitespace-nowrap group-hover:opacity-70 transition-opacity`}>
                    <p className="leading-[16px]">CLIENT</p>
                  </div>
                </div>
                <div
                  className="h-[16px] relative shrink-0 w-[130px] cursor-pointer group"
                  onClick={() => handleFilterChange('PROJECT TYPE')}
                >
                  <div className={`absolute bottom-[11.14%] flex flex-col font-['Albert_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 ${getHeaderStyles('PROJECT TYPE').textColor} text-[14px] top-[-11.14%] whitespace-nowrap group-hover:opacity-70 transition-opacity`}>
                    <p className="leading-[16px]">PROJECT TYPE</p>
                  </div>
                </div>
                <div
                  className="h-[16px] relative shrink-0 w-[130px] cursor-pointer group"
                  onClick={() => handleFilterChange('INDUSTRY')}
                >
                  <div className={`absolute bottom-[11.14%] flex flex-col font-['Albert_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 ${getHeaderStyles('INDUSTRY').textColor} text-[14px] top-[-11.14%] whitespace-nowrap group-hover:opacity-70 transition-opacity`}>
                    <p className="leading-[16px]">INDUSTRY</p>
                  </div>
                </div>
                <div
                  className="h-[16px] relative shrink-0 w-[30px] cursor-pointer group"
                  onClick={() => handleFilterChange('DATE')}
                >
                  <div className={`absolute bottom-[11.14%] flex flex-col font-['Albert_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 ${getHeaderStyles('DATE').textColor} text-[14px] top-[-11.14%] whitespace-nowrap group-hover:opacity-70 transition-opacity`}>
                    <p className="leading-[16px]">DATE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client list */}
            <div
              className="content-stretch flex flex-col gap-[0px] h-full items-start overflow-y-auto relative shrink-0 w-full no-scrollbar pb-[50px]"
              data-name="ClientList"
            >
              {loading ? (
                Array.from({ length: 20 }).map((_, index) => (
                  <LoadingRow key={index} />
                ))
              ) : projects.length === 0 ? (
                <div className="w-full py-[40px] text-center">
                  <p className="font-['Albert_Sans',sans-serif] text-[#1e3239] text-[14px]">
                    No projects found.
                  </p>
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.ID}
                    className="relative shrink-0 w-full hover:bg-[#d05d49]/10 transition-colors duration-200 group cursor-pointer"
                    data-name="ArchiveClientListing"
                    onClick={() => handleProjectClick(project.ID)}
                  >
                    <div className="content-start flex flex-wrap gap-[0px_17px] items-start left-0 top-0 w-full py-[8px]">
                      <p className="font-['Albert_Sans',sans-serif] min-h-[16px] leading-[16px] relative shrink-0 text-[#0c1517] text-[12px] w-[180px] group-hover:font-semibold transition-all">
                        {project.ClientName}
                      </p>
                      <p className="font-['Albert_Sans',sans-serif] min-h-[16px] leading-[16px] relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">
                        {project.PrimaryTag}
                      </p>
                      <p className="font-['Albert_Sans',sans-serif] min-h-[16px] leading-[16px] relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">
                        {project.Industry}
                      </p>
                      <div className="font-['Albert_Sans',sans-serif] min-h-[16px] leading-[16px] relative shrink-0 text-[#0c1517] text-[12px] text-right w-[30px]">
                        <p className="mb-0">{project.Date}</p>
                      </div>
                    </div>
                    <div className="h-px relative shrink-0 w-full bg-[#0c1517] opacity-50"></div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right black bar */}
      <div className="bg-[#1e3239] h-full shrink-0 w-[115px]" data-name="RightBlackBar" />

      {/* Menu Overlay */}
      <ArchiveOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

      {/* Style for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
