import { useState, useEffect } from 'react';
import { DesktopLanding } from './landing/DesktopLanding';
import { TabletLanding } from './landing/TabletLanding';
import { MobileLanding } from './landing/MobileLanding';

export function LandingPage() {
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

  // Breakpoints based on Figma frame sizes
  // Desktop: >= 1024px
  // Tablet: >= 698px and < 1024px
  // Mobile: < 698px

  if (windowWidth >= 1024) {
    return <DesktopLanding />;
  } else if (windowWidth >= 698) {
    return <TabletLanding />;
  } else {
    return <MobileLanding />;
  }
}
