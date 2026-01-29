import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, PanInfo } from 'motion/react';
import { supabase, Project } from '../../lib/supabase';
import svgPaths from '../../imports/svg-project-page';
import { SupabaseImage } from './SupabaseImage';

// --- SVG Paths for Mobile (smaller arrows) ---
const mobileSvgPaths = {
  // Small parallelogram for 36px arrows
  smallParallelogram: "M5.09117 0H20.3647L15.2735 5.09117H0L5.09117 0Z",
  // Angled rect for 36px arrows
  angledRect: "M0 21.892L21.7223 0H25.4558V3.73352L3.73352 25.4558H0V21.892Z",
};

// --- Close Button ---
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
      className="absolute right-0 top-0 bg-[#1e3239] size-[50px] cursor-pointer transition-opacity hover:opacity-70 flex items-center justify-center"
    >
      <Close />
    </div>
  );
}

// --- Image Container ---
function MobileImageContainer({
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <SupabaseImage
            bucketName="Portfolio-VIsuals"
            imagePath={mediaPath}
            alt="Project"
            className="w-full h-auto object-contain pointer-events-none"
            style={{
              aspectRatio: '998/561',
            }}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
}

// --- Arrow Components (36px size for mobile) ---
function SmallParallelagram() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3647 5.09117">
        <path d={mobileSvgPaths.smallParallelogram} fill="#CFD860" />
      </svg>
    </div>
  );
}

function AngledRectMobile() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4558 25.4558">
        <path d={mobileSvgPaths.angledRect} fill="#CFD860" />
      </svg>
    </div>
  );
}

function ForwardArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative shrink-0 size-[36px] transition-transform ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
      }`}
    >
      <div className="absolute flex inset-[5.2%_4.73%_44.8%_45.27%] items-center justify-center">
        <div className="flex-none h-[5.091px] rotate-45 w-[20.365px]">
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-[44.8%_4.73%_5.2%_45.27%] items-center justify-center">
        <div className="-rotate-45 -scale-y-100 flex-none h-[5.091px] w-[20.365px]">
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-45 size-[25.456px]">
          <AngledRectMobile />
        </div>
      </div>
    </button>
  );
}

function BackArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative size-[36px] transition-transform ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
      }`}
    >
      <div className="flex items-center justify-center size-full">
        <div className="-scale-y-100 rotate-180 size-[36px]">
          <div className="absolute flex inset-[5.2%_4.73%_44.8%_45.27%] items-center justify-center">
            <div className="flex-none h-[5.091px] rotate-45 w-[20.365px]">
              <SmallParallelagram />
            </div>
          </div>
          <div className="absolute flex inset-[44.8%_4.73%_5.2%_45.27%] items-center justify-center">
            <div className="-rotate-45 -scale-y-100 flex-none h-[5.091px] w-[20.365px]">
              <SmallParallelagram />
            </div>
          </div>
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none rotate-45 size-[25.456px]">
              <AngledRectMobile />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

// --- Tray Components ---
function DragBar() {
  return (
    <div className="h-4 relative shrink-0 w-full flex justify-center items-start cursor-grab active:cursor-grabbing">
      {/* Visual drag handle */}
      <div className="w-[76px] h-1 bg-[#E6E6E6] rounded-full opacity-50" />
    </div>
  );
}

function ImageNumberCounter({ current, total }: { current: number; total: number }) {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[24px] relative shrink-0 text-[#cfd860] text-[36px] tracking-[-2px]">
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">{current} </p>
      <p className="font-['Albert_Sans',sans-serif] font-thin relative shrink-0">of</p>
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">{total}</p>
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
    <div className="content-stretch flex flex-col gap-[5px] h-[101px] items-center relative shrink-0 w-full">
      {/* Navigation Row */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <BackArrow onClick={onPrevious} disabled={isAtStart} />
        <ImageNumberCounter current={currentIndex + 1} total={totalCaptions} />
        <ForwardArrow onClick={onNext} disabled={isAtEnd} />
      </div>
      {/* Caption Text */}
      <p className="font-['Albert_Sans',sans-serif] leading-[16px] max-w-[400px] not-italic relative shrink-0 text-[#aaccd0] text-[12px] w-full">
        {currentCaption}
      </p>
    </div>
  );
}

function Keyline() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 1">
          <line stroke="#CAE0E2" x2="330" y1="0.5" y2="0.5" />
        </svg>
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
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[12px] relative shrink-0 text-[#e6e6e6] w-full">
      <p className="font-['Albert_Sans',sans-serif] font-bold leading-[24px] relative shrink-0 text-[36px] tracking-[-2px] w-full">
        {clientName}
      </p>
      <p className="font-['Albert_Sans',sans-serif] font-light leading-[24px] relative shrink-0 text-[18px] w-full">
        {overview}
      </p>
      <div className="font-['Albert_Sans',sans-serif] font-normal leading-[18px] relative shrink-0 text-[14px] w-full">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Categories({
  industry,
  primaryTag,
  secondaryTags
}: {
  industry: string;
  primaryTag: string;
  secondaryTags: string;
}) {
  const allTags = secondaryTags ? `${primaryTag}, ${secondaryTags}` : primaryTag;

  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 text-[#aaccd0] text-[12px] w-full">
      <p className="font-['Albert_Sans',sans-serif] font-black leading-[24px] relative shrink-0 w-[164px]">
        {industry}
      </p>
      <p className="font-['Albert_Sans',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 w-[min-content]">
        {allTags}
      </p>
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
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pb-[15px] pt-[8px] relative shrink-0 w-full">
      <p className="font-['Albert_Sans',sans-serif] font-black h-[41px] leading-[30px] relative shrink-0 text-[#cfd860] text-[42px] tracking-[-2px] w-[124px]">
        {date}
      </p>
      <Categories industry={industry} primaryTag={primaryTag} secondaryTags={secondaryTags} />
      <div className="font-['Albert_Sans',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#cfd860] text-[14px] w-full">
        <p>{team}</p>
      </div>
    </div>
  );
}

function ScrollableContent({
  clientName,
  overview,
  description,
  date,
  industry,
  primaryTag,
  secondaryTags,
  team,
  isOpen
}: {
  clientName: string;
  overview: string;
  description: string;
  date: string;
  industry: string;
  primaryTag: string;
  secondaryTags: string;
  team: string;
  isOpen: boolean;
}) {
  return (
    <>
      {isOpen ? (
        // OPEN state: ProjectInformation scrolls, ProjectDetails pinned at bottom
        <div className="flex flex-col h-full overflow-hidden w-full">
          {/* Scrollable Information */}
          <div className="flex-1 overflow-y-auto scrollbar-hide pr-2 pb-4">
            <ProjectInformation
              clientName={clientName}
              overview={overview}
              description={description}
            />
          </div>

          {/* Keyline */}
          <div className="h-px w-full bg-[#CAE0E2] shrink-0 my-2 opacity-30" />

          {/* Fixed Details at bottom */}
          <div className="shrink-0 w-full">
            <ProjectDetails
              date={date}
              industry={industry}
              primaryTag={primaryTag}
              secondaryTags={secondaryTags}
              team={team}
            />
          </div>
        </div>
      ) : (
        // CLOSED state: Everything scrolls together
        <div className="content-stretch flex flex-col gap-[10px] flex-1 items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full scrollbar-hide">
          <ProjectInformation
            clientName={clientName}
            overview={overview}
            description={description}
          />
          {/* Keyline */}
          <div className="h-px w-full bg-[#CAE0E2] shrink-0 my-2 opacity-30" />
          <ProjectDetails
            date={date}
            industry={industry}
            primaryTag={primaryTag}
            secondaryTags={secondaryTags}
            team={team}
          />
        </div>
      )}
    </>
  );
}

function TrayContent({
  clientName,
  overview,
  description,
  date,
  industry,
  primaryTag,
  secondaryTags,
  team,
  captions,
  currentCaptionIndex,
  onNext,
  onPrevious
}: {
  clientName: string;
  overview: string;
  description: string;
  date: string;
  industry: string;
  primaryTag: string;
  secondaryTags: string;
  team: string;
  captions: string[];
  currentCaptionIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Height variants: 40vh when closed, 75vh when open
  const variants = {
    closed: { height: "40vh" },
    open: { height: "75vh" }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50; // drag distance to trigger toggle

    if (isOpen) {
      // If open, drag down (positive y) to close
      if (info.offset.y > threshold) {
        setIsOpen(false);
      }
    } else {
      // If closed, drag up (negative y) to open
      if (info.offset.y < -threshold) {
        setIsOpen(true);
      }
    }
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.05}
      onDragEnd={handleDragEnd}
      className="bg-[#1e3239] min-h-[320px] relative shadow-[0px_-10px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-10 flex flex-col will-change-[height]"
    >
      <div className="flex flex-col gap-[15px] items-start pb-[7px] pt-[20px] px-[30px] relative size-full overflow-hidden">
        {/* Clickable DragBar to toggle */}
        <div className="w-full shrink-0" onClick={() => setIsOpen(!isOpen)}>
          <DragBar />
        </div>
        <Captions
          captions={captions}
          currentIndex={currentCaptionIndex}
          onNext={onNext}
          onPrevious={onPrevious}
        />
        {/* Keyline - only show when closed, as ScrollableContent handles it when open */}
        {!isOpen && <Keyline />}
        <ScrollableContent
          clientName={clientName}
          overview={overview}
          description={description}
          date={date}
          industry={industry}
          primaryTag={primaryTag}
          secondaryTags={secondaryTags}
          team={team}
          isOpen={isOpen}
        />
      </div>
    </motion.div>
  );
}

// --- Main Mobile Canvas ---
function MobileImageCanvas({
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
    <div className="bg-[#1e3239] content-stretch flex flex-col h-screen overflow-hidden w-full max-w-[700px] min-w-[320px] relative">
      {/* Close Button */}
      <CloseButton onClick={onClose} />

      {/* Image Area - takes remaining space */}
      <MobileImageContainer
        projectId={projectId}
        filename={filename}
        imageNumber={currentImageNumber}
      />

      {/* Tray Content - draggable, animates between 40vh (closed) and 75vh (open) */}
      <TrayContent
        clientName={clientName}
        overview={overview}
        description={description}
        date={date}
        industry={industry}
        primaryTag={primaryTag}
        secondaryTags={secondaryTags}
        team={team}
        captions={captions}
        currentCaptionIndex={currentCaptionIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

// --- Main Export ---
export function ProjectDetailMobile() {
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
      <MobileImageCanvas
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
