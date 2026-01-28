import { useState } from 'react';
import TopMenuOriginal from '@/imports/TopMenu';
import AboutMobileOriginal from '@/imports/AboutMobile';

export function AboutPage() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0a4947]">
      <div
        className="w-full h-full relative"
        style={{
          minWidth: '320px',
          maxWidth: '700px',
        }}
      >
        <ColorSwitchApp isOn={isOn} onToggle={() => setIsOn(!isOn)} />
      </div>
    </div>
  );
}

function ColorSwitchApp({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <div
      className="relative size-full"
      style={{
        ...makeColorVars(isOn)
      } as React.CSSProperties}
    >
      {/* Fixed Top Menu - wrapped to prevent it from being hidden by our CSS */}
      <div className="absolute top-0 left-0 right-0 z-20" data-name="FixedTopMenu">
        <TopMenuOriginal />
      </div>

      {/* Clickable light switch overlay */}
      <div
        className="absolute top-[30px] right-[30px] w-[21px] h-[69px] z-50 cursor-pointer"
        onClick={onToggle}
        title="Click to toggle colors"
      />

      {/* Scrollable content area with top padding for fixed menu */}
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden pt-[104px]" data-name="ScrollableContent">
        <AboutMobileOriginal />
      </div>

      {/* Apply global color overrides via inline styles */}
      <style>{`
        ${generateColorOverrides(isOn)}
      `}</style>
    </div>
  );
}

function makeColorVars(isOn: boolean): Record<string, string> {
  // Map inline style variables used in the component
  const offColor = '#1E3239'; // CleanSlate 800

  return {
    '--fill-0-green': isOn ? '#6BCD72' : offColor,
    '--fill-0-blue': isOn ? '#6BB0CD' : offColor,
    '--fill-0-red': isOn ? '#D05D49' : offColor,
    '--fill-0-teal': isOn ? '#16A19D' : offColor,
    '--fill-0-yellow': isOn ? '#CFD860' : offColor,
    '--fill-0-purple': isOn ? '#942976' : offColor,
    '--fill-0-dark-purple': isOn ? '#5d4787' : offColor,
    '--fill-0-pink': isOn ? '#95456E' : offColor,
    '--fill-0-dark-blue': isOn ? '#0076C2' : offColor,
    '--fill-0-blue-gray': isOn ? '#689BA1' : offColor,
    '--fill-0-cyan': isOn ? '#AACCD0' : offColor,
    '--fill-0-light-cyan': isOn ? '#CAE0E2' : offColor,
    '--fill-0-dark-teal': isOn ? '#3E6064' : offColor,
    '--stroke-0': isOn ? '#6BCD72' : offColor,
  };
}

function generateColorOverrides(isOn: boolean): string {
  const offColor = '#1E3239';

  if (!isOn) {
    // In OFF state, override ALL color fills/strokes to offColor
    return `
      /* Hide scrollbar */
      .overflow-y-auto::-webkit-scrollbar {
        display: none;
      }
      .overflow-y-auto {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      /* Hide the TopMenu from AboutMobile (inside scrollable content) since we render it separately */
      [data-name="ScrollableContent"] [data-name="TopMenu"] {
        display: none !important;
      }

      /* SVG fills */
      [fill="#6BCD72"], [fill="#6bcd72"] { fill: ${offColor} !important; }
      [fill="#6BB0CD"], [fill="#6bb0cd"] { fill: ${offColor} !important; }
      [fill="#D05D49"], [fill="#d05d49"] { fill: ${offColor} !important; }
      [fill="#16A19D"], [fill="#16a19d"] { fill: ${offColor} !important; }
      [fill="#CFD860"], [fill="#cfd860"] { fill: ${offColor} !important; }
      [fill="#942976"] { fill: ${offColor} !important; }
      [fill="#5d4787"], [fill="#5D4787"] { fill: ${offColor} !important; }
      [fill="#95456E"], [fill="#95456e"] { fill: ${offColor} !important; }
      [fill="#689BA1"], [fill="#689ba1"] { fill: ${offColor} !important; }
      [fill="#AACCD0"], [fill="#aaccd0"] { fill: ${offColor} !important; }
      [fill="#CAE0E2"], [fill="#cae0e2"] { fill: ${offColor} !important; }
      [fill="#3E6064"], [fill="#3e6064"] { fill: ${offColor} !important; }
      [fill="#E6E6E6"], [fill="#e6e6e6"] { fill: ${offColor} !important; }
      [fill="#0076C2"], [fill="#0076c2"] { fill: ${offColor} !important; }
      [fill="#1E3239"], [fill="#1e3239"] { fill: ${offColor} !important; }

      /* SVG strokes */
      [stroke="#6BCD72"], [stroke="#6bcd72"] { stroke: ${offColor} !important; }
      [stroke="#6BB0CD"], [stroke="#6bb0cd"] { stroke: ${offColor} !important; }
      [stroke="#AACCD0"], [stroke="#aaccd0"] { stroke: ${offColor} !important; }
      [stroke="#CAE0E2"], [stroke="#cae0e2"] { stroke: ${offColor} !important; }
      [stroke="#942976"] { stroke: ${offColor} !important; }
      [stroke="#1E3239"], [stroke="#1e3239"] { stroke: ${offColor} !important; }

      /* Handle CSS variables */
      [style*="--fill-0"] path,
      [style*="--fill-0"] circle,
      [style*="--fill-0"] rect,
      [style*="--stroke-0"] path,
      [style*="--stroke-0"] line {
        fill: ${offColor} !important;
        stroke: ${offColor} !important;
      }

      /* Background colors using attribute selector */
      [class*="bg-[#6bcd72]"] { background-color: ${offColor} !important; }
      [class*="bg-[#6bb0cd]"] { background-color: ${offColor} !important; }
      [class*="bg-[#d05d49]"] { background-color: ${offColor} !important; }
      [class*="bg-[#16a19d]"] { background-color: ${offColor} !important; }
      [class*="bg-[#cfd860]"] { background-color: ${offColor} !important; }
      [class*="bg-[#5d4787]"] { background-color: ${offColor} !important; }
      [class*="bg-[#95456e]"] { background-color: ${offColor} !important; }
      [class*="bg-[#689ba1]"] { background-color: ${offColor} !important; }
      [class*="bg-[#aaccd0]"] { background-color: ${offColor} !important; }
      [class*="bg-[#cae0e2]"] { background-color: ${offColor} !important; }
      [class*="bg-[#3e6064]"] { background-color: ${offColor} !important; }
      [class*="bg-[#e6e6e6]"] { background-color: ${offColor} !important; }
      [class*="bg-[#0076c2]"] { background-color: ${offColor} !important; }

      /* Text colors */
      [style*="color"][style*="#6bcd72"],
      [style*="color"][style*="rgb(107, 205, 114)"],
      [style*="color"][style*="rgb(107, 176, 205)"],
      [style*="color"][style*="rgb(207, 216, 96)"] {
        color: ${offColor} !important;
      }
    `;
  }

  // ON state - colors stay as they are (no overrides needed)
  // But still hide scrollbar and the duplicate TopMenu
  return `
    /* Hide scrollbar */
    .overflow-y-auto::-webkit-scrollbar {
      display: none;
    }
    .overflow-y-auto {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Hide the TopMenu from AboutMobile (inside scrollable content) since we render it separately */
    [data-name="ScrollableContent"] [data-name="TopMenu"] {
      display: none !important;
    }
  `;
}
