import { useState, useEffect } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { ProjectDetailTablet } from './ProjectDetailTablet';
import { ProjectDetailMobile } from './ProjectDetailMobile';

export function ProjectDetailResponsive() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints:
  // Mobile: 320px - 700px (use ProjectDetailMobile)
  // Tablet: 700px - 1200px (use ProjectDetailTablet)
  // Desktop: > 1200px (use ProjectDetail)

  if (windowWidth <= 700) {
    return <ProjectDetailMobile />;
  } else if (windowWidth <= 1200) {
    return <ProjectDetailTablet />;
  } else {
    return <ProjectDetail />;
  }
}
