import { useState, useEffect } from 'react';
import { ProjectDetail } from './ProjectDetail';
import { ProjectDetailTablet } from './ProjectDetailTablet';

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
  // Tablet: 700px - 1200px (use ProjectDetailTablet)
  // Desktop: > 1200px (use ProjectDetail)
  // Note: Mobile version can be added later for < 700px

  if (windowWidth <= 1200) {
    return <ProjectDetailTablet />;
  } else {
    return <ProjectDetail />;
  }
}
