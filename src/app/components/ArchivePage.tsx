import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { supabase, Project } from '../../lib/supabase';
import { LoadingSkeleton } from './LoadingSkeleton';

export function ArchivePage() {
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
    <div className="bg-[#cfd860] min-h-screen w-full relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute h-full right-[-200px] top-0 w-[800px] opacity-30 pointer-events-none">
        <div className="w-full h-full">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1059.95 1023.4"
          >
            <path
              d="M0 0H1059.95V1023.4H0V0Z"
              fill="rgba(104, 155, 161, 0.3)"
            />
          </svg>
        </div>
      </div>

      <div className="relative px-[20px] py-[30px] max-w-[800px]">
        {/* Header with column labels */}
        <div className="sticky top-0 bg-[#cfd860] z-10 pb-[15px]">
          <div className="flex gap-[17px] items-center mb-[10px]">
            <div className="w-[240px]">
              <p className="font-['Albert_Sans'] font-semibold text-[12px] leading-[16px] text-[#d05d49]">
                CLIENT
              </p>
            </div>
            <div className="w-[150px]">
              <p className="font-['Albert_Sans'] font-semibold text-[12px] leading-[16px] text-[#1e3239]">
                PROJECT TYPE
              </p>
            </div>
            <div className="w-[150px]">
              <p className="font-['Albert_Sans'] font-semibold text-[12px] leading-[16px] text-[#1e3239]">
                INDUSTRY
              </p>
            </div>
            <div className="w-[60px] text-right">
              <p className="font-['Albert_Sans'] font-semibold text-[12px] leading-[16px] text-[#1e3239]">
                DATE
              </p>
            </div>
          </div>
          
          {/* Red underline for CLIENT */}
          <div className="relative h-[5px] mb-[2px]">
            <div className="absolute left-0 w-[115px] h-[5px] bg-[#d05d49]" />
          </div>
          
          {/* Horizontal line */}
          <div className="w-full h-[2px] bg-[#d05d49]" />
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-[20px] mt-[15px]">
          {loading ? (
            <LoadingSkeleton />
          ) : projects.length === 0 ? (
            <p className="font-['Albert_Sans'] text-[12px] text-[#0c1517]">No projects found.</p>
          ) : (
            projects.map((project) => (
              <motion.div
                key={project.ID}
                className="cursor-pointer relative group"
                onClick={() => handleProjectClick(project.ID)}
                initial={{ opacity: 1 }}
                whileHover={{ 
                  opacity: 0.8,
                  x: 8,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="flex gap-[17px] items-start py-2">
                  <p className="font-['Albert_Sans'] text-[12px] leading-[16px] text-[#0c1517] w-[240px] overflow-hidden text-ellipsis transition-colors duration-200 group-hover:text-[#d05d49]">
                    {project.ClientName}
                  </p>
                  <p className="font-['Albert_Sans'] text-[12px] leading-[16px] text-[#0c1517] w-[150px] overflow-hidden text-ellipsis">
                    {project.PrimaryTag}
                  </p>
                  <p className="font-['Albert_Sans'] text-[12px] leading-[16px] text-[#0c1517] w-[150px] overflow-hidden text-ellipsis">
                    {project.Industry}
                  </p>
                  <div className="w-[60px] text-right">
                    <p className="font-['Albert_Sans'] text-[12px] leading-[16px] text-[#0c1517]">
                      {project.Date}
                    </p>
                  </div>
                </div>
                
                {/* Separator line */}
                <motion.div 
                  className="w-full h-[0.5px] bg-[#0c1517] mt-[8px]"
                  initial={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}