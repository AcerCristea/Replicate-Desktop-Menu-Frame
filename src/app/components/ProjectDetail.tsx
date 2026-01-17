import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase, Project } from '../../lib/supabase';
import svgPaths from '../../imports/svg-project-page';
import { SupabaseImage } from './SupabaseImage';

function Close() {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.pbe31300} fill="#1E3239" />
          <path d={svgPaths.p2a472b00} fill="#1E3239" />
        </g>
      </svg>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="h-[44px] relative shrink-0 w-[24px] cursor-pointer transition-opacity hover:opacity-70"
    >
      <Close />
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
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[1088px] top-[30px] w-[321px] max-h-[calc(100vh-347px)] overflow-y-auto scrollbar-hide pr-1">
      <p className="font-['Albert_Sans',sans-serif] font-bold leading-[30px] min-w-full relative shrink-0 text-[#1e3239] text-[36px] tracking-[-2px] w-[calc(100%-30px)]">
        {clientName}
      </p>
      <p className="font-['Albert_Sans',sans-serif] font-light leading-[30px] min-w-full relative shrink-0 text-[#1e3239] text-[24px] tracking-[-1px] w-[min-content]">
        {overview}
      </p>
      <div className="font-['Albert_Sans',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1e3239] text-[18px] w-full">
        <p>{description}</p>
      </div>
    </div>
  );
}


function PortraitImageContainer({
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
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [availableHeight, setAvailableHeight] = useState<number>(707); // default fallback
  const [availableWidth, setAvailableWidth] = useState<number>(646); // default fallback
  const [availablePortraitHeight, setAvailablePortraitHeight] = useState<number>(647); // default fallback
  const [availablePortraitWidth, setAvailablePortraitWidth] = useState<number>(600); // default fallback

  useEffect(() => {
    // Calculate available height: viewport height - caption area (287px) - top margin (30px)
    // Available width is fixed at 996px (the max-width of ImageContainer)
    const calculateAvailableDimensions = () => {
      const viewportHeight = window.innerHeight;

      const captionAreaHeight = 287;
      const topMargin = 30;
      const calculatedHeight = viewportHeight - captionAreaHeight - topMargin;

      // ImageContainer has fixed width of 998px with max-width 996px
      const containerWidth = 996;

      const portraitHeightMax = viewportHeight - 60;



      const portraitWidthMax = 660;
      setAvailablePortraitWidth(portraitWidthMax);

      setAvailableHeight(calculatedHeight);
      setAvailableWidth(containerWidth);
      setAvailablePortraitHeight(portraitHeightMax);
      console.log('Available dimensions - Height:', calculatedHeight, 'Width:', containerWidth);
    };

    calculateAvailableDimensions();
    window.addEventListener('resize', calculateAvailableDimensions);

    return () => window.removeEventListener('resize', calculateAvailableDimensions);
  }, []);

  useEffect(() => {
    // Format the image number with leading zero (01, 02, 03, etc.)
    const formattedNumber = imageNumber.toString().padStart(2, '0');
    // Start by trying .jpeg
    const jpegPath = `${projectId}/${formattedNumber}_${filename}.jpeg`;

    console.log('=== PortraitImageContainer Debug ===');
    console.log('projectId:', projectId);
    console.log('filename:', filename);
    console.log('imageNumber:', imageNumber);
    console.log('formattedNumber:', formattedNumber);
    console.log('trying jpeg first:', jpegPath);
    console.log('===================================');

    setMediaPath(jpegPath);
    setHasError(false);
  }, [projectId, filename, imageNumber]);

  // If jpeg fails, try mp4
  const handleImageError = () => {
    if (!hasError && mediaPath.endsWith('.jpeg')) {
      const formattedNumber = imageNumber.toString().padStart(2, '0');
      const mp4Path = `${projectId}/${formattedNumber}_${filename}.mp4`;

      console.log('=== Jpeg failed, trying mp4 ===');
      console.log('mp4 path:', mp4Path);
      console.log('================================');

      setMediaPath(mp4Path);
      setHasError(true);
    }
  };

  if (!mediaPath) {
    return <div className="relative w-full h-full bg-gray-200" />;
  }

  // Handle image load to determine orientation and store dimensions
  const handleImageLoad = (dimensions: { width: number; height: number; isLandscape: boolean }) => {
    setIsLandscape(dimensions.isLandscape);
    setImageDimensions({ width: dimensions.width, height: dimensions.height });
    console.log('Image orientation detected:', dimensions.isLandscape ? 'landscape' : 'portrait');
    console.log('Image dimensions:', dimensions);
  };

  // Calculate styling based on orientation
  let imageStyle: React.CSSProperties = {};

  if (isLandscape) {
    // LANDSCAPE: Always scale to available height, width adjusts proportionally
    imageStyle = {
      height: `${availableHeight}px`,
      width: 'auto',
      maxWidth: '996px',
      objectFit: 'contain',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
  } else if (imageDimensions) {
    // PORTRAIT: Only scale by width (996px), height scales naturally without constraint
    console.log('Portrait - scaling by width:', {
      availableWidth
    });

    imageStyle = {
      width: `${availableWidth}px`,
      height: 'auto',
      maxHeight: `${availablePortraitHeight}px`,
      maxWidth: `${availablePortraitWidth}px`,
      objectFit: 'contain',
      objectPosition: 'top right',
      position: 'absolute',
      top: '0',
      right: '0'
    };
  } else {
    // Default fallback while image is loading
    imageStyle = {
      maxHeight: `${availableHeight}px`,
      maxWidth: `${availableWidth}px`,
      objectFit: 'contain',
      objectPosition: 'top right',
      position: 'absolute',
      top: '0',
      right: '0'
    };
  }

  return (
    <div className="relative w-full h-full">
      <SupabaseImage
        bucketName="Portfolio-VIsuals"
        imagePath={mediaPath}
        alt="Project"
        className="pointer-events-none"
        style={imageStyle}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

function ImageContainer({
  projectId,
  filename,
  imageNumber
}: {
  projectId: string;
  filename: string;
  imageNumber: number;
}) {
  return (
    <div className="absolute flex flex-col items-center justify-center right-[412px] top-[30px] bottom-[287px] w-[998px] max-w-[996px]">
      <PortraitImageContainer projectId={projectId} filename={filename} imageNumber={imageNumber} />
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
  // Combine primary tag and secondary tags
  // If secondaryTags exists, add it after primary with comma
  const allTags = secondaryTags
    ? `${primaryTag}, ${secondaryTags}`
    : primaryTag;

  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 text-[#aaccd0] text-[14px] w-full">
      <p className="font-['Albert_Sans',sans-serif] font-black leading-[30px] relative shrink-0 w-full">{industry}</p>
      <p className="font-['Albert_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 w-full">{allTags}</p>
    </div>
  );
}

function ProjectDetails({
  team,
  date,
  industry,
  primaryTag,
  secondaryTags
}: {
  team: string;
  date: string;
  industry: string;
  primaryTag: string;
  secondaryTags: string;
}) {
  return (
    <div className="absolute bottom-[60px] content-stretch flex flex-col gap-[20px] items-start justify-end left-[30px] w-[322px]">
      <div className="font-['Albert_Sans',sans-serif] font-semibold h-[20px] leading-[18px] relative shrink-0 text-[#cfd860] text-[16px] w-full">
        <p className="mb-0">{team}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <Categories industry={industry} primaryTag={primaryTag} secondaryTags={secondaryTags} />
      <p className="font-['Albert_Sans',sans-serif] font-black h-[41px] leading-[48px] relative shrink-0 text-[#cfd860] text-[48px] tracking-[-2px] w-[124px]">{date}</p>
    </div>
  );
}

function ImageNumberCounter({ current, total }: { current: number; total: number }) {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[22px] relative shrink-0 text-[#cfd860] text-[48px] text-nowrap tracking-[-0.96px]">
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">{current} </p>
      <p className="font-['Albert_Sans',sans-serif] font-thin relative shrink-0">of</p>
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">{total}</p>
    </div>
  );
}

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

function ForwardArrow({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`block relative shrink-0 size-[60px] transition-transform ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110'
      }`}
    >
      <div className="absolute flex inset-[5.2%_4.73%_44.8%_45.27%] items-center justify-center">
        <div className="flex-none h-[8.485px] rotate-[45deg] w-[33.941px]">
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-[44.8%_4.73%_5.2%_45.27%] items-center justify-center">
        <div className="flex-none h-[8.485px] rotate-[315deg] scale-y-[-100%] w-[33.941px]">
          <SmallParallelagram />
        </div>
      </div>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[45deg] size-[42.426px]">
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
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[1086px] bottom-[78px] w-[323px]">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <ImageNumberCounter current={currentIndex + 1} total={totalCaptions} />
        <ForwardArrow onClick={onNext} disabled={isAtEnd} />
      </div>
      <p className="font-['Albert_Sans',sans-serif] h-[68px] leading-[16px] not-italic relative shrink-0 text-[#aaccd0] text-[14px] w-full">
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

function ImageCanvas({
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
  // Image number state - starts at 1 for "01"
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
    <div className="h-screen overflow-clip relative w-[1440px]">
      {/* Fixed close button */}
      <div className="absolute right-[30px] top-[30px] z-10">
        <CloseButton onClick={onClose} />
      </div>

      {/* Bottom caption block - fixed */}
      <div className="absolute bg-[#1e3239] h-[287px] left-[1058px] shadow-[0px_-10px_40px_0px_rgba(0,0,0,0.25)] bottom-0 w-[382px]" />

      {/* Left main block - full height */}
      <div className="absolute bg-[#1e3239] h-full left-0 top-0 w-[1058px]" />

      <ProjectInformation
        clientName={clientName}
        overview={overview}
        description={description}
      />
      <ImageContainer projectId={projectId} filename={filename} imageNumber={currentImageNumber} />
      <ProjectDetails team={team} date={date} industry={industry} primaryTag={primaryTag} secondaryTags={secondaryTags} />
      <Captions
        captions={captions}
        currentIndex={currentCaptionIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}


export function ProjectDetail() {
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
    navigate('/');
  };

  if (loading) {
    return (
      <div className="bg-[#cfd860] min-h-screen w-full flex items-center justify-center">
        <p className="font-['Albert_Sans',sans-serif] text-[#1e3239] text-[18px]">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-[#cfd860] min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="font-['Albert_Sans',sans-serif] text-[#1e3239] text-[24px] mb-4">Project not found</p>
          <button
            onClick={handleClose}
            className="font-['Albert_Sans',sans-serif] text-[14px] text-[#d05d49] px-6 py-2 border border-[#d05d49] hover:bg-[#d05d49] hover:text-white transition-colors"
          >
            Back to Archive
          </button>
        </div>
      </div>
    );
  }

  // Convert SecondaryTags array to string if needed
  const secondaryTagsString = Array.isArray(project.SecondaryTags)
    ? project.SecondaryTags.join(', ')
    : (project.SecondaryTags || '');

  // Parse captions string - split by || and filter out empty/NA entries
  const captionsArray = Array.isArray(project.Captions)
    ? project.Captions
    : typeof project.Captions === 'string'
        ? (project.Captions as string).split('||')
            .map(caption => caption.trim())
            .filter(caption => caption && caption !== 'NA')
        : [];

  console.log('=== ProjectDetail Debug ===');
  console.log('project.ID:', project.ID);
  console.log('project.ClientName:', project.ClientName);
  console.log('project.Filename:', project.Filename);
  console.log('Full project object:', project);
  console.log('===========================');

  return (
    <div className="bg-[#cfd860] content-stretch flex items-center justify-center relative w-full min-h-screen">
      <ImageCanvas
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
