import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { supabase, Project } from '../../lib/supabase';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjectAndImages() {
      if (!id) return;

      try {
        // Fetch project data
        const { data: projectData, error: projectError } = await supabase
          .from('Selflux_Archive')
          .select('*')
          .eq('ID', id)
          .single();

        if (projectError) throw projectError;
        setProject(projectData);

        // Fetch images from storage bucket
        const { data: imageList, error: imageError } = await supabase.storage
          .from('Portfolio-Visuals')
          .list(id);

        if (imageError) {
          console.error('Error fetching images:', imageError);
        } else if (imageList) {
          // Get signed URLs for all images
          const imageUrls = await Promise.all(
            imageList.map(async (file) => {
              const { data } = await supabase.storage
                .from('Portfolio-Visuals')
                .createSignedUrl(`${id}/${file.name}`, 3600); // 1 hour expiry
              return data?.signedUrl || '';
            })
          );
          setImages(imageUrls.filter(Boolean));
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectAndImages();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[#cfd860] min-h-screen w-full flex items-center justify-center">
        <p className="font-['Albert_Sans'] text-[24px] text-[#0c1517]">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-[#cfd860] min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Albert_Sans'] text-[24px] text-[#0c1517] mb-4">
            Project not found
          </p>
          <motion.button
            onClick={() => navigate('/')}
            className="font-['Albert_Sans'] text-[14px] text-[#d05d49] px-6 py-2 border border-[#d05d49]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Archive
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#cfd860] min-h-screen w-full">
      <div className="max-w-[1200px] mx-auto px-[40px] py-[60px]">
        {/* Back button */}
        <motion.button
          onClick={() => navigate('/')}
          className="font-['Albert_Sans'] font-semibold text-[12px] text-[#d05d49] mb-8 flex items-center gap-2"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          ← Back to Archive
        </motion.button>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-['Albert_Sans'] font-bold text-[60px] leading-[1.1] tracking-[-2px] text-[#d05d49] mb-4">
            {project.ClientName}
          </h1>
          
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-2">
                PROJECT TYPE
              </p>
              <p className="font-['Albert_Sans'] text-[16px] text-[#0c1517]">
                {project.PrimaryTag}
              </p>
            </div>
            <div>
              <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-2">
                INDUSTRY
              </p>
              <p className="font-['Albert_Sans'] text-[16px] text-[#0c1517]">
                {project.Industry}
              </p>
            </div>
            <div>
              <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-2">
                DATE
              </p>
              <p className="font-['Albert_Sans'] text-[16px] text-[#0c1517]">
                {project.Date}
              </p>
            </div>
            {project.Team && (
              <div>
                <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-2">
                  TEAM
                </p>
                <p className="font-['Albert_Sans'] text-[16px] text-[#0c1517]">
                  {project.Team}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Overview */}
        {project.Overview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-4">
              OVERVIEW
            </p>
            <p className="font-['Albert_Sans'] text-[18px] leading-[1.6] text-[#0c1517]">
              {project.Overview}
            </p>
          </motion.div>
        )}

        {/* Description */}
        {project.Description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="font-['Albert_Sans'] text-[16px] leading-[1.8] text-[#0c1517]">
              {project.Description}
            </p>
          </motion.div>
        )}

        {/* Images */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 gap-8"
          >
            {images.map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="w-full"
              >
                <img
                  src={imageUrl}
                  alt={`${project.ClientName} - ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                {project.Captions && project.Captions[index] && (
                  <p className="font-['Albert_Sans'] text-[12px] text-[#3e6064] mt-2 italic">
                    {project.Captions[index]}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Secondary Tags */}
        {project.SecondaryTags && project.SecondaryTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <p className="font-['Albert_Sans'] font-semibold text-[12px] text-[#1e3239] mb-4">
              TAGS
            </p>
            <div className="flex flex-wrap gap-2">
              {project.SecondaryTags.map((tag, index) => (
                <span
                  key={index}
                  className="font-['Albert_Sans'] text-[12px] text-[#0c1517] px-3 py-1 border border-[#0c1517]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}