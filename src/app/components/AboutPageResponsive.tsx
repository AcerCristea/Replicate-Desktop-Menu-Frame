import { useState, useEffect } from 'react';
import { AboutPage } from './AboutPage';
import { AboutTabletPage } from './AboutTabletPage';

export function AboutPageResponsive() {
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

  // Mobile: 320-700px
  // Tablet: 700-1200px
  // Desktop: 1200px+ (could add desktop version later)

  if (windowWidth <= 700) {
    return <AboutPage />;
  } else if (windowWidth <= 1200) {
    return <AboutTabletPage />;
  } else {
    // For now, use tablet version for desktop too
    // Can add desktop version later
    return <AboutTabletPage />;
  }
}
