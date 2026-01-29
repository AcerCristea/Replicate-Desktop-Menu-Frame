import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import svgPaths from "@/imports/svg-e88u7wsc8v";
import { supabase, Project } from "../../lib/supabase";

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2627 24">
        <g id="Hamburger">
          <path d={svgPaths.p16771280} fill="var(--fill-0, #3E6064)" id="Union" />
          <path d={svgPaths.pe02b380} fill="var(--fill-0, #3E6064)" id="Union_2" />
          <path d={svgPaths.p1d711500} fill="var(--fill-0, #3E6064)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="group cursor-pointer absolute h-[24px] left-0 top-[0.5px] w-[80px]" data-name="MobileMenu">
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#3e6064] text-[14px] top-[29.17%] group-hover:opacity-70 transition-opacity">
        <p className="leading-[30px] whitespace-pre-wrap">MENU</p>
      </div>
    </div>
  );
}

function NavHeader() {
  return (
    <div className="absolute contents left-0 top-[0.5px]" data-name="NavHeader">
      <MobileMenu />
    </div>
  );
}

function LeftMenu() {
  return (
    <div className="h-[24px] min-w-[80px] relative shrink-0 w-[100px]" data-name="LeftMenu">
      <NavHeader />
    </div>
  );
}

function RightPageTitle() {
  return (
    <div className="content-stretch flex flex-col items-end leading-[0] relative shrink-0 text-right w-[100px]" data-name="RightPageTItle">
      <div className="flex flex-col font-['Albert_Sans',sans-serif] font-bold h-[29px] justify-center relative shrink-0 text-[#d05d49] text-[24px] tracking-[-1px] w-full">
        <p className="leading-[30px] whitespace-pre-wrap">{`Archive `}</p>
      </div>
      <div className="flex flex-col font-['Albert_Sans',sans-serif] font-semibold h-[10px] justify-center relative shrink-0 text-[#1e3239] text-[14px] w-full">
        <p className="leading-[16px] whitespace-pre-wrap">1996-2026</p>
      </div>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="h-[73px] w-full shrink-0" data-name="MobileNav">
      <div className="flex items-start justify-between px-[20px] py-[30px] w-full h-full relative">
        <LeftMenu />
        <RightPageTitle />
      </div>
    </div>
  );
}

function LoadingRow() {
  return (
    <div className="flex flex-col w-full px-[20px]">
      <div className="flex gap-[20px] items-start py-[10px] w-full">
        <div className="flex-[1_0_0] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
        <div className="flex-[1_0_0] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
        <div className="w-[35px] h-[16px] bg-[#1e3239]/10 rounded animate-pulse" />
      </div>
      <div className="w-full h-[0.5px] bg-[#0C1517] opacity-20" />
    </div>
  );
}

export function ArchiveMobilePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="w-full min-h-screen bg-[#CEDD62] flex justify-center overflow-x-hidden">
      <div className="w-full min-w-[320px] max-w-[776px] flex flex-col h-screen max-h-screen relative shadow-2xl">
        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
          <MobileNav />

          {/* Sticky Subnav */}
          <div className="sticky top-0 z-10 bg-[#CEDD62] pt-2 pb-0 w-full shrink-0" data-name="ArchiveSubnavMobile">
            <div className="flex gap-[20px] items-center w-full px-[20px] pb-2">
              {/* CLIENT */}
              <div className="flex-[1_0_0] relative cursor-pointer group">
                <div className="flex flex-col gap-[15px] items-start w-full">
                  <div className="font-['Albert_Sans',sans-serif] font-semibold text-[#d05d49] text-[12px] leading-[16px] w-full group-hover:opacity-70">
                    CLIENT
                  </div>
                  {/* Red Underline */}
                  <div className="h-[5px] w-full bg-[#D05D49] mt-1"></div>
                </div>
              </div>

              {/* PROJECT TYPE */}
              <div className="flex-[1_0_0] relative cursor-pointer group">
                <div className="font-['Albert_Sans',sans-serif] font-semibold text-[#1e3239] text-[12px] leading-[16px] whitespace-nowrap group-hover:opacity-70">
                  PROJECT TYPE
                </div>
              </div>

              {/* DATE */}
              <div className="relative w-[35px] cursor-pointer group">
                <div className="font-['Albert_Sans',sans-serif] font-semibold text-[#1e3239] text-[12px] leading-[16px] text-right group-hover:opacity-70">
                  DATE
                </div>
              </div>
            </div>

            {/* Red Line */}
            <div className="w-full h-[1px] bg-[#D05D49]"></div>
          </div>

          {/* List Items */}
          <div className="flex flex-col w-full pb-10">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 15 }).map((_, index) => (
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
                  className="flex flex-col w-full px-[20px] hover:bg-black/5 transition-colors cursor-pointer group"
                  onClick={() => handleProjectClick(project.ID)}
                >
                  <div className="flex gap-[20px] items-start py-[10px] w-full font-['Albert_Sans',sans-serif] text-[12px] text-[#1e3239] leading-[16px]">
                    <p className="flex-[1_0_0] relative break-words group-hover:text-[#D05D49] transition-colors">
                      {project.ClientName}
                    </p>
                    <p className="flex-[1_0_0] relative break-words">
                      {project.PrimaryTag}
                    </p>
                    <p className="w-[35px] text-right relative shrink-0">
                      {project.Date}
                    </p>
                  </div>
                  {/* Divider Line */}
                  <div className="w-full h-[0.5px] bg-[#0C1517] opacity-20"></div>
                </div>
              ))
            )}
          </div>
        </div>

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
    </div>
  );
}
