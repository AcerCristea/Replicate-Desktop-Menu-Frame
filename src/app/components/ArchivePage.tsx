import { useEffect, useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { supabase, Project } from '../../lib/supabase';
import { LoadingSkeleton } from './LoadingSkeleton';
import svgPaths from '../../imports/svg-archive-bg';

type FilterColumn = 'CLIENT' | 'PROJECT TYPE' | 'INDUSTRY' | 'DATE';

function Keyline({ isHovered }: { isHovered?: boolean }) {
  return (
    <div className="h-0 relative shrink-0 w-[571px]">
      <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": isHovered ? "rgba(208, 93, 73, 1)" : "rgba(12, 21, 23, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 571 0.5">
          <motion.line
            stroke={isHovered ? "#d05d49" : "#0C1517"}
            strokeWidth="0.5"
            x2="571"
            y1="0.25"
            y2="0.25"
            transition={{ duration: 0.2 }}
          />
        </svg>
      </div>
    </div>
  );
}

function ProjectListingRow({
  project,
  index,
  onClick
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.02,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.div
        className="absolute content-start flex flex-wrap gap-[0px_10px] items-start left-0 top-0 w-[570px]"
        animate={{ x: isHovered ? 8 : 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.p
          className="font-['Albert_Sans',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[14px] w-[200px] transition-colors duration-200"
          animate={{
            color: isHovered ? '#d05d49' : '#0c1517',
            fontWeight: isHovered ? 600 : 400
          }}
          transition={{ duration: 0.2 }}
        >
          {project.ClientName}
        </motion.p>
        <motion.p
          className="font-['Albert_Sans',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[14px] w-[150px]"
          animate={{
            fontWeight: isHovered ? 600 : 400
          }}
          transition={{ duration: 0.2 }}
        >
          {project.PrimaryTag}
        </motion.p>
        <motion.p
          className="font-['Albert_Sans',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[14px] w-[150px]"
          animate={{
            fontWeight: isHovered ? 600 : 400
          }}
          transition={{ duration: 0.2 }}
        >
          {project.Industry}
        </motion.p>
        <motion.div
          className="font-['Albert_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 size-[40px] text-[#0c1517] text-[14px] text-right"
          animate={{
            fontWeight: isHovered ? 600 : 400
          }}
          transition={{ duration: 0.2 }}
        >
          <p className="mb-0">{project.Date}</p>
          <p>&nbsp;</p>
        </motion.div>
        <Keyline isHovered={isHovered} />
      </motion.div>
    </motion.div>
  );
}

function ColumnHeaderButton({
  text,
  width,
  isActive,
  onClick
}: {
  text: string;
  width: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[16px] relative shrink-0 cursor-pointer transition-colors ${width}`}
    >
      <div className="absolute bottom-[11.14%] flex flex-col font-['Albert_Sans',sans-serif] font-semibold justify-center leading-[0] left-0 text-[14px] text-nowrap top-[-11.14%]">
        <p className={`leading-[16px] transition-colors duration-200 ${
          isActive ? 'text-[#d05d49]' : isHovered ? 'text-[#d05d49]' : 'text-[#1e3239]'
        }`}>
          {text}
        </p>
      </div>
    </button>
  );
}

function ArchiveHeader({
  activeFilter,
  onFilterChange
}: {
  activeFilter: FilterColumn;
  onFilterChange: (filter: FilterColumn) => void;
}) {
  const filters: { name: FilterColumn; width: string; position: number; underlineWidth: number }[] = [
    { name: 'CLIENT', width: 'w-[200px]', position: 0, underlineWidth: 200 },
    { name: 'PROJECT TYPE', width: 'w-[150px]', position: 210, underlineWidth: 150 },
    { name: 'INDUSTRY', width: 'w-[150px]', position: 370, underlineWidth: 150 },
    { name: 'DATE', width: 'w-[40px]', position: 530, underlineWidth: 40 }
  ];

  const activeFilterConfig = filters.find(f => f.name === activeFilter) || filters[0];

  return (
    <motion.div
      className="shrink-0 sticky top-0 w-[570px] bg-[#cfd860] z-10 pb-[10px]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="h-[35px] relative">
        {/* Base keyline */}
        <div className="absolute bottom-0 left-[0.15%] right-0 top-full">
          <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(208, 93, 73, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 569.162 2">
              <line stroke="var(--stroke-0, #D05D49)" strokeWidth="2" x2="569.162" y1="1" y2="1" />
            </svg>
          </div>
        </div>

        {/* Animated highlight underline */}
        <motion.div
          className="absolute bottom-0 top-full"
          animate={{
            left: activeFilterConfig.position,
            width: activeFilterConfig.underlineWidth
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="absolute inset-[-5px_0_0_0]" style={{ "--stroke-0": "rgba(208, 93, 73, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 5">
              <line stroke="var(--stroke-0, #D05D49)" strokeWidth="5" x2="200" y1="2.5" y2="2.5" />
            </svg>
          </div>
        </motion.div>

        {/* Column headers */}
        <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[4px] w-[680px]">
          {filters.map((filter) => (
            <ColumnHeaderButton
              key={filter.name}
              text={filter.name}
              width={filter.width}
              isActive={activeFilter === filter.name}
              onClick={() => onFilterChange(filter.name)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ArchivePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterColumn>('CLIENT');
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const svgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 0.15]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('Selflux_Archive')
          .select('*')
          .eq('Visible', 'TRUE')
          .order('Date', { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const sortedProjects = useMemo(() => {
    const sorted = [...projects];

    switch (activeFilter) {
      case 'CLIENT':
        return sorted.sort((a, b) => a.ClientName.localeCompare(b.ClientName));
      case 'PROJECT TYPE':
        return sorted.sort((a, b) => a.PrimaryTag.localeCompare(b.PrimaryTag));
      case 'INDUSTRY':
        return sorted.sort((a, b) => a.Industry.localeCompare(b.Industry));
      case 'DATE':
        return sorted.sort((a, b) => b.Date.localeCompare(a.Date));
      default:
        return sorted;
    }
  }, [projects, activeFilter]);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
// STEP 1: RESTORE FULL WIDTH HERE
    // Removed ml-[240px] and w-[calc...] to eliminate the white bar
    <div className="bg-[#cfd860] h-screen w-full relative overflow-hidden flex flex-col">
      
      {/* Background SVG */}
      <motion.div
        className="absolute h-[100vh] left-[50vw] top-[0px] w-[1060px] pointer-events-none"
        style={{ opacity: svgOpacity }}
      >
<div className="h-full" style={{ "--fill-0": "rgba(104, 155, 161, 100)" } as React.CSSProperties}>
          <svg 
            className="h-full w-auto" 
            fill="none" 
            preserveAspectRatio="xMinYMin meet" 
            viewBox="0 0 1059.95 1023.4"
          >
            <path d={svgPaths.p39aca200} fill="var(--fill-0, #689BA1)" opacity="1" />
          </svg>
        </div>
      </motion.div>

      {/* STEP 2: APPLY OFFSET HERE */}
      {/* Added pl-[240px]. This reserves space for the Nav but keeps centering correct relative to remaining space. */}
      <div className="relative flex justify-center items-start gap-[30px] w-full h-full pt-[30px] pr-[240px]">
        
        {/* Left Black Bar */}
        <motion.div
          className="bg-[#1e3239] h-full shrink-0 w-[170px]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Center Column (Scrollable) */}
        <div
          ref={scrollRef}
          className="flex flex-col gap-[10px] h-full items-start overflow-x-hidden overflow-y-auto relative shrink-0 w-[580px]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          } as React.CSSProperties}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <ArchiveHeader
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="flex flex-col gap-[15px] items-start relative shrink-0 w-[580px] pb-[50px]">
            {loading ? (
              <LoadingSkeleton />
            ) : projects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full py-[40px] text-center"
              >
                <p className="font-['Albert_Sans',sans-serif] text-[#1e3239] text-[16px]">
                  No projects found.
                </p>
              </motion.div>
            ) : (
              sortedProjects.map((project, index) => (
                <div key={project.ID} className="h-[33px] relative shrink-0 w-[579px]">
                  <ProjectListingRow
                    project={project}
                    index={index}
                    onClick={() => handleProjectClick(project.ID)}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Black Bar */}
        <motion.div
          className="bg-[#1e3239] h-full shrink-0 w-[170px]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </div>
  );
}
