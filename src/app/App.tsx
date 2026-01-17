import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { ArchivePage } from "./components/ArchivePage";
import { ProjectDetail } from "./components/ProjectDetail";

function AppContent() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');
  const isLandingPage = location.pathname === '/';

  return (
    <div className="size-full flex bg-[#e6e6e6]">
      {!isProjectPage && !isLandingPage && <Navigation />}
      <div className={isProjectPage || isLandingPage ? "flex-1" : "flex-1 ml-[240px]"}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route
            path="/project/:id"
            element={<ProjectDetail />}
          />
          <Route
            path="/about"
            element={<PlaceholderPage title="About" />}
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