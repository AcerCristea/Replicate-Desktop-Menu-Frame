import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase, Project } from '../../lib/supabase';
import svgPaths from '../../imports/svg-project-page';

// Placeholder image - you can replace this with a real image URL
const placeholderImage = "data:image/svg+xml,%3Csvg width='998' height='707' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='998' height='707' fill='%233e6064'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23cfd860' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";

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
  onClose,
  clientName,
  overview,
  description
}: {
  onClose: () => void;
  clientName: string;
  overview: string;
  description: string;
}) {
  return (
 <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[1088px] top-[30px] w-[321px] max-h-[calc(100vh-317px)] overflow-y-auto scrollbar-hide">
      <CloseButton onClick={onClose} />
      <p className="font-['Albert_Sans',sans-serif] font-bold leading-[30px] min-w-full relative shrink-0 text-[#1e3239] text-[36px] tracking-[-2px] w-[min-content]">
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

function PortraitImageContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="absolute h-[707px] right-0 top-0 w-[998px]">
        <img
          alt="Project"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={placeholderImage}
        />
      </div>
      <div className="absolute h-[707px] right-0 top-[717px] w-[998px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={placeholderImage}
          />
          <div className="absolute bg-[#1e3239] inset-0" />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[707px] items-end max-h-[707px] right-[412px] top-[30px] w-[998px]">
      <PortraitImageContainer />
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 text-[#aaccd0] text-[14px] w-full">
      <p className="font-['Albert_Sans',sans-serif] font-black leading-[30px] relative shrink-0 w-full">FINANCE & INSURANCE</p>
      <p className="font-['Albert_Sans',sans-serif] leading-[16px] not-italic relative shrink-0 w-full">Video / Streaming, Subscription, Multi-platform, Service Design, Social Features</p>
    </div>
  );
}

function ProjectDetails() {
  return (
    <div className="absolute bottom-[90px] content-stretch flex flex-col gap-[20px] items-start justify-end left-[30px] w-[322px]">
      <div className="font-['Albert_Sans',sans-serif] font-semibold h-[20px] leading-[18px] relative shrink-0 text-[#cfd860] text-[16px] w-full">
        <p className="mb-0">Designed by AllofUs</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <Categories />
      <p className="font-['Albert_Sans',sans-serif] font-black h-[41px] leading-[48px] relative shrink-0 text-[#cfd860] text-[48px] tracking-[-2px] w-[124px]">2014</p>
    </div>
  );
}

function ImageNumberCounter() {
  return (
    <div className="content-stretch flex gap-[5px] items-center leading-[22px] relative shrink-0 text-[#cfd860] text-[48px] text-nowrap tracking-[-0.96px]">
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">11 </p>
      <p className="font-['Albert_Sans',sans-serif] font-thin relative shrink-0">of</p>
      <p className="font-['Albert_Sans',sans-serif] font-black relative shrink-0">19</p>
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

function ForwardArrow() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[60px] transition-transform hover:scale-110">
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

function BackArrow() {
  return (
    <div className="relative size-[30px] cursor-pointer transition-transform hover:scale-110">
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
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[45deg] size-[21.213px]">
          <AngledRect1 />
        </div>
      </div>
    </div>
  );
}

function Captions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] items-start left-[1086px] top-[778.98px] w-[323px]">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <ImageNumberCounter />
        <ForwardArrow />
      </div>
      <p className="font-['Albert_Sans',sans-serif] h-[68px] leading-[16px] not-italic relative shrink-0 text-[#aaccd0] text-[14px] w-full">
        Product cutouts allowed users to see recommended combinations important when buying shirts and ties, when buying shirts and ties.
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <BackArrow />
        </div>
      </div>
    </div>
  );
}

function ImageCanvas({
  onClose,
  clientName,
  overview,
  description
}: {
  onClose: () => void;
  clientName: string;
  overview: string;
  description: string;
}) {
  return (
    <div className="h-[1023.984px] overflow-clip relative shrink-0 w-[1440px]">
      <div className="absolute bg-[#1e3239] h-[287px] left-[1058px] shadow-[0px_-10px_40px_0px_rgba(0,0,0,0.25)] top-[736.98px] w-[382px]" />
      <div className="absolute bg-[#1e3239] h-[1023.984px] left-0 top-0 w-[1058px]" />
      <ProjectInformation
        onClose={onClose}
        clientName={clientName}
        overview={overview}
        description={description}
      />
      <ImageContainer />
      <ProjectDetails />
      <Captions />
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

  return (
    <div className="bg-[#cfd860] content-stretch flex items-center justify-center relative w-full min-h-screen">
      <ImageCanvas
        onClose={handleClose}
        clientName={project.ClientName}
        overview={project.Overview || 'No overview available'}
        description={project.Description || 'No description available'}
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
