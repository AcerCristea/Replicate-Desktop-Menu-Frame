import { useState } from 'react';
import TopMenuOriginal from '@/imports/TopMenu';
import AboutMobileOriginal from '@/imports/AboutMobile';

export function AboutPage() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[var(--about-bg)]">
      <div
        className={`w-full h-full relative ${!isOn ? 'about-colors-off' : ''}`}
        style={{
          minWidth: '320px',
          maxWidth: '700px',
        }}
      >
        {/* Fixed Top Menu */}
        <div className="absolute top-0 left-0 right-0 z-20" data-name="FixedTopMenu">
          <TopMenuOriginal />
        </div>

        {/* Clickable light switch overlay */}
        <div
          className="absolute top-[30px] right-[30px] w-[21px] h-[69px] z-50 cursor-pointer"
          onClick={() => setIsOn(!isOn)}
          title="Click to toggle colors"
        />

        {/* Scrollable content area with top padding for fixed menu */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden pt-[104px] scrollbar-hide" data-name="ScrollableContent">
          <AboutMobileOriginal />
        </div>

        {/* Minimal CSS for hiding duplicate TopMenu and scrollbar */}
        <style>{`
          [data-name="ScrollableContent"] [data-name="TopMenu"] {
            display: none !important;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
}
