import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { ArchivePageResponsive } from "./components/ArchivePageResponsive";
import { ProjectDetailResponsive } from "./components/ProjectDetailResponsive";
import { AboutPage } from "./components/AboutPage";

function AppContent() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');
  const isLandingPage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isArchivePage = location.pathname === '/archive';

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

  // Hide navigation on mobile (<=776px) and tablet (<=1200px) for archive page
  const isMobileOrTablet = windowWidth <= 1200;
  const hideNav = isProjectPage || isLandingPage || isAboutPage || (isArchivePage && isMobileOrTablet);
  const needsMargin = !hideNav;

  return (
    <div className="size-full flex bg-[#e6e6e6]">
      {!hideNav && <Navigation />}
      <div className={needsMargin ? "flex-1 ml-[240px]" : "flex-1"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchivePageResponsive />} />
          <Route
            path="/project/:id"
            element={<ProjectDetailResponsive />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/approach"
            element={<PlaceholderPage title="Approach" />}
          />
          <Route
            path="/selected-works"
            element={
              <PlaceholderPage title="Selected Works" />
            }
          />
          <Route
            path="/white-space"
            element={<PlaceholderPage title="White Space" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="bg-[#cfd860] min-h-screen w-full flex items-center justify-center">
      <h1 className="font-['Albert_Sans'] font-bold text-[60px] tracking-[-2px] text-[#d05d49]">
        {title}
      </h1>
    </div>
  );
}