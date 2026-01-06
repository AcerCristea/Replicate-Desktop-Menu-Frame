import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ArchivePage } from "./components/ArchivePage";
import { ProjectDetail } from "./components/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full flex bg-[#e6e6e6]">
        <Navigation />
        <div className="flex-1 ml-[240px]">
          <Routes>
            <Route path="/" element={<ArchivePage />} />
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