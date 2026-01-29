import { useState, useEffect } from 'react';
import { ArchivePage } from './ArchivePage';
import { ArchiveMobilePage } from './ArchiveMobilePage';

export function ArchivePageResponsive() {
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
  // Mobile: 320px - 776px (use ArchiveMobilePage)
  // Desktop: > 776px (use ArchivePage)

  if (windowWidth <= 776) {
    return <ArchiveMobilePage />;
  } else {
    return <ArchivePage />;
  }
}
