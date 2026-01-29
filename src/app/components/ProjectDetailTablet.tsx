import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase, Project } from '../../lib/supabase';
import svgPaths from '../../imports/svg-project-page';
import { SupabaseImage } from './SupabaseImage';

// --- Reusable Components ---

function Close() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.pbe31300} fill="#E6E6E6" />
          <path d={svgPaths.p2a472b00} fill="#E6E6E6" />
        </g>
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1e3239] p-[13px] cursor-pointer transition-opacity hover:opacity-70"
    >
      <Close />
    </div>
  );
}

// --- Image Components ---

function TabletImageContainer({
  projectId,
  filename,
  imageNumber
}: {
  projectId: string;
  filename: string;
  imageNumber: number;
}) {
  const [mediaPath, setMediaPath] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const formattedNumber = imageNumber.toString().padStart(2, '0');
    const jpegPath = `${projectId}/${formattedNumber}_${filename}.jpeg`;
    setMediaPath(jpegPath);
    setHasError(false);
  }, [projectId, filename, imageNumber]);

  const handleImageError = () => {
    if (!hasError && mediaPath.endsWith('.jpeg')) {
      const formattedNumber = imageNumber.toString().padStart(2, '0');
      const mp4Path = `${projectId}/${formattedNumber}_${filename}.mp4`;
      setMediaPath(mp4Path);
      setHasError(true);
    }
  };

  if (!mediaPath) {
    return <div className="relative w-full h-full bg-gray-200" />;
  }

  return (
    <div className="relative w-full flex items-center justify-center">
      <SupabaseImage
        bucketName="Portfolio-VIsuals"
        imagePath={mediaPath}
        alt="Project"
        className="w-full h-auto object-contain pointer-events-none"
        style={{
          maxWidth: '100%',
          aspectRatio: '998/561', // Default landscape aspect ratio
        }}
        onError={handleImageError}
      />
    </div>
  );
}

// --- Navigation Arrow Components ---

function SmallParallelagram() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.9411 8.48528">
        <g>
          <rect fill="#CFD860" height="8.48528" width="8.48528" x="8.48528" />
          <path d={svgPaths.p327fc80} fill="#CFD860" />
          <path d={svgPaths.p12559b00} fill="#CFD860" />
          <rect fill="#CFD860" height="8.48528" width="8.48528" x="16.9706" />
        </g>
      </svg>
    </div>
  );
}

function AngledRect() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.4264 42.4264">
        <g>
          <path d={svgPaths.p1caaf900} fill="#CFD860" />
        </g>
      </svg>
    </div>
  );
}

function ForwardArrow({ onClick, disabled, size = 48 }: { onClick: () => void; disabled: boolean; size?: number }) {
  const scale = size / 60;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`block relative shrink-0 transition-transform ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
      }`}
      style={{ width: size, height: size }}
    >
      <div className="absolute flex inset-[5.2%_4.73%_44.8%_45.27%] items-center justify-center">
        <div className="flex-none rotate-[45deg]" style={{ height: 8.485 * scale, width: 33.941 * scale }}>
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-[44.8%_4.73%_5.2%_45.27%] items-center justify-center">
        <div className="flex-none rotate-[315deg] scale-y-[-100%]" style={{ height: 8.485 * scale, width: 33.941 * scale }}>
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[45deg]" style={{ width: 42.426 * scale, height: 42.426 * scale }}>
          <AngledRect />
        </div>
      </div>
    </button>
  );
}

function SmallParallelagram1() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9706 4.24264">
        <g>
          <rect fill="#CFD860" height="4.24264" width="4.24264" x="4.24264" />
          <path d={svgPaths.p1c08af80} fill="#CFD860" />
          <path d={svgPaths.p3aa7f200} fill="#CFD860" />
          <rect fill="#CFD860" height="4.24264" width="4.24264" x="8.48528" />
        </g>
      </svg>
    </div>
  );
}

function AngledRect1() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2132 21.2132">
        <g>
          <path d={svgPaths.p33f62680} fill="#CFD860" />
        </g>
      </svg>
    </div>
  );
}

function BackArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative size-[30px] transition-transform ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
      }`}
    >
      <div className="absolute flex inset-[5.2%_4.73%_44.8%_45.27%] items-center justify-center">
        <div className="flex-none h-[4.243px] rotate-[45deg] w-[16.971px]">
          <SmallParallelagram1 />
        </div>
      </div>
      <div className="absolute flex inset-[44.8%_4.73%_5.2%_45.27%] items-center justify-center">
        <div className="flex-none h-[4.243px] rotate-[315deg] scale-y-[-100%] w-[16.971px]">
          <SmallParallelagram1 />
        </div>
      </div>
      <div className="absolute flex inset-[0] items-center justify-center">
        <div className="flex-none rotate-[45deg] size-[21.213px]">
          <AngledRect1 />
        </div>
      </div>
    </button>
  );
}

// --- Info Section Components ---

function ImageNumberCounter({ current, total }: { current: number; total: number }) {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 text-[#cfd860] tracking-[-2px]">
      <p className="font-['Albert_Sans',sans-serif] font-black leading-[30px] text-[42px]">{current} </p>
      <p className="font-['Albert_Sans',sans-serif] font-thin leading-[24px] text-[36px]">of</p>
      <p className="font-['Albert_Sans',sans-serif] font-black leading-[30px] text-[42px]">{total}</p>
    </div>
  );
}

function ProjectDetails({
  date,
  industry,
  primaryTag,
  secondaryTags,
  team
}: {
  date: string;
  industry: string;
  primaryTag: string;
  secondaryTags: string;
  team: string;
}) {
  const allTags = secondaryTags ? `${primaryTag}, ${secondaryTags}` : primaryTag;

  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start py-[8px] relative shrink-0 w-[160px]">
      <p className="font-['Albert_Sans',sans-serif] font-black h-[41px] leading-[30px] relative shrink-0 text-[#cfd860] text-[42px] tracking-[-2px]">
        {date}
      </p>
      <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 text-[#aaccd0] text-[12px] w-[164px]">
        <p className="font-['Albert_Sans',sans-serif] font-black leading-[24px] relative shrink-0 w-[164px]">
          {industry}
        </p>
        <p className="font-['Albert_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 w-[164px]">
          {allTags}
        </p>
      </div>
      <div className="font-['Albert_Sans',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#cfd860] text-[14px] w-full">
        <p>{team}</p>
      </div>
    </div>
  );
}

function ProjectInformation({
  clientName,
  overview,
  description
}: {
  clientName: string;
  overview: string;
  description: string;
}) {
  const descriptionParagraphs = description.split('\n').filter(para => para.trim() !== '');

  return (
    <div className="flex-[1_0_0] h-[241px] max-w-[500px] min-h-px min-w-px relative">
      {/* Entire section scrolls */}
      <div className="flex flex-col items-start max-w-[inherit] overflow-y-auto h-full scrollbar-hide">
        <div className="content-stretch flex flex-col gap-[16px] items-start leading-[24px] max-w-[inherit] px-[30px] py-[12px] relative w-full text-[#e6e6e6]">
          <p className="font-['Albert_Sans',sans-serif] font-bold relative shrink-0 text-[36px] tracking-[-2px] w-full">
            {clientName}
          </p>
          <p className="font-['Albert_Sans',sans-serif] font-light relative shrink-0 text-[20px] w-full">
            {overview}
          </p>
          <div className="font-['Albert_Sans',sans-serif] font-normal text-[18px] w-full">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Captions({
  captions,
  currentIndex,
  onNext,
  onPrevious
}: {
  captions: string[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const totalCaptions = captions.length;
  const currentCaption = captions[currentIndex] || '';
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === totalCaptions - 1;

  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[160px]">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <ImageNumberCounter current={currentIndex + 1} total={totalCaptions} />
        <ForwardArrow onClick={onNext} disabled={isAtEnd} size={48} />
      </div>
      <p className="font-['Albert_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#aaccd0] text-[12px] w-full">
        {currentCaption}
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <BackArrow onClick={onPrevious} disabled={isAtStart} />
        </div>
      </div>
    </div>
  );
}

// --- Main Tablet Canvas ---

function TabletImageCanvas({
  onClose,
  projectId,
  clientName,
  filename,
  overview,
  description,
  team,
  date,
  industry,
  primaryTag,
  secondaryTags,
  captions
}: {
  onClose: () => void;
  projectId: string;
  clientName: string;
  filename: string;
  overview: string;
  description: string;
  team: string;
  date: string;
  industry: string;
  primaryTag: string;
  secondaryTags: string;
  captions: string[];
}) {
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);
  const [currentImageNumber, setCurrentImageNumber] = useState(1);

  const handleNext = () => {
    if (currentCaptionIndex < captions.length - 1) {
      setCurrentCaptionIndex(currentCaptionIndex + 1);
      setCurrentImageNumber(currentImageNumber + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCaptionIndex > 0) {
      setCurrentCaptionIndex(currentCaptionIndex - 1);
      setCurrentImageNumber(currentImageNumber - 1);
    }
  };

  return (
    <div className="bg-[#1e3239] content-stretch flex flex-col gap-[30px] items-center h-screen overflow-hidden w-full max-w-[1200px] min-w-[700px] relative">
      {/* Close Button */}
      <div className="h-[70px] relative shrink-0 w-full">
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex items-start justify-end pr-[20px] py-[20px] relative">
            <CloseButton onClick={onClose} />
          </div>
        </div>
      </div>

      {/* Image Holder - responsive width with padding */}
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[30px] relative size-full">
            <TabletImageContainer
              projectId={projectId}
              filename={filename}
              imageNumber={currentImageNumber}
            />
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="h-[240px] relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between px-[30px] relative size-full">
          <ProjectDetails
            date={date}
            industry={industry}
            primaryTag={primaryTag}
            secondaryTags={secondaryTags}
            team={team}
          />
          <ProjectInformation
            clientName={clientName}
            overview={overview}
            description={description}
          />
          <Captions
            captions={captions}
            currentIndex={currentCaptionIndex}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
}

// --- Main Export ---

export function ProjectDetailTablet() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('Selflux_Archive')
          .select('*')
          .eq('ID', id)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  const handleClose = () => {
    navigate('/archive');
  };

  if (loading) {
    return (
      <div className="bg-[#1e3239] min-h-screen w-full flex items-center justify-center">
        <p className="font-['Albert_Sans',sans-serif] text-[#e6e6e6] text-[18px]">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-[#1e3239] min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Albert_Sans',sans-serif] text-[#e6e6e6] text-[24px] mb-4">Project not found</p>
          <button
            onClick={handleClose}
            className="font-['Albert_Sans',sans-serif] text-[14px] text-[#cfd860] px-6 py-2 border border-[#cfd860] hover:bg-[#cfd860] hover:text-[#1e3239] transition-colors"
          >
            Back to Archive
          </button>
        </div>
      </div>
    );
  }

  const secondaryTagsString = Array.isArray(project.SecondaryTags)
    ? project.SecondaryTags.join(', ')
    : (project.SecondaryTags || '');

  const captionsArray = Array.isArray(project.Captions)
    ? project.Captions
    : typeof project.Captions === 'string'
        ? (project.Captions as string).split('||')
            .map(caption => caption.trim())
            .filter(caption => caption && caption !== 'NA')
        : [];

  return (
    <div className="bg-[#1e3239] content-stretch flex items-center justify-center relative w-full min-h-screen">
      <TabletImageCanvas
        onClose={handleClose}
        projectId={project.ID}
        clientName={project.ClientName}
        filename={project.Filename}
        overview={project.Overview || 'No overview available'}
        description={project.Description || 'No description available'}
        team={project.Team || 'Team information not available'}
        date={project.Date || 'Date not available'}
        industry={project.Industry || 'Industry not available'}
        primaryTag={project.PrimaryTag || ''}
        secondaryTags={secondaryTagsString}
        captions={captionsArray.length > 0 ? captionsArray : ['No captions available']}
      />
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
