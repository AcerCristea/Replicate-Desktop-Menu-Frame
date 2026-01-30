import { useState, useEffect } from 'react';
import IPadPro from '../../imports/TabletAboutFigma';

export function AboutTabletPage() {
  const [isOn, setIsOn] = useState(true); // Start with colors ON

  useEffect(() => {
    // Add interaction logic to the Light Switch which is deeply nested in the imported component
    const switchEl = document.getElementById('SmallSwitch');

    if (switchEl) {
      const handleClick = () => {
        setIsOn(prev => !prev);

        // Animate pull down
        switchEl.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        switchEl.style.transform = 'translateY(15px)';

        // Spring back
        setTimeout(() => {
          switchEl.style.transform = 'translateY(0)';
        }, 200);
      };

      switchEl.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        switchEl.removeEventListener('click', handleClick);
      };
    }
  }, []);

  // Update the light indicator color when isOn changes
  useEffect(() => {
    const lightIndicator = document.getElementById('Ellipse 10');
    if (lightIndicator) {
      lightIndicator.style.transition = 'fill 0.2s ease';
      lightIndicator.style.fill = isOn ? '#6BCD72' : '#1E3239';
    }
  }, [isOn]);

  return (
    <div className={`w-full h-screen bg-[#0a4947] flex justify-center overflow-hidden ${!isOn ? 'tablet-colors-off' : ''}`}>
      {/* CSS Overrides for the imported component */}
      <style>{`
        /* Scrollbar hiding for the content window */
        div[data-name="Tablet-content-window"] {
          overflow-y: auto !important;
          overflow-x: hidden !important;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE 10+ */
          height: 100%;
        }
        div[data-name="Tablet-content-window"]::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }

        /* Light Switch Cursor */
        #SmallSwitch {
          cursor: pointer;
        }
        #SmallSwitch:hover {
          filter: brightness(1.2);
        }

        /* Responsive adjustments */
        div[data-name="AboutFrame"] {
          width: 100%;
          max-width: 1200px;
          min-width: 700px;
          margin: 0 auto;
        }

        /* Ensure the content container is tall enough to scroll */
        div[data-name="About-Content-Tablet"] {
          height: 5200px !important;
        }

        /* ========================================
           COLOR TOGGLE SYSTEM
           When .tablet-colors-off is applied:
           - All shapes using var(--fill-0) turn to #1E3239
           - EXCEPT static shapes that should keep their colors
           ======================================== */

        /* Colors OFF state - override CSS variable fills for SVG shapes */
        .tablet-colors-off svg path[fill^="var(--fill"],
        .tablet-colors-off svg circle[fill^="var(--fill"],
        .tablet-colors-off svg rect[fill^="var(--fill"] {
          fill: #1E3239 !important;
        }

        .tablet-colors-off svg line[stroke^="var(--stroke"],
        .tablet-colors-off svg path[stroke^="var(--stroke"] {
          stroke: #1E3239 !important;
        }

        /* Small circle images - apply grayscale/color filter when off */
        .tablet-colors-off div[data-name="Small Circle"] img {
          filter: brightness(0) saturate(100%) invert(14%) sepia(15%) saturate(746%) hue-rotate(152deg) brightness(95%) contrast(91%) !important;
        }

        /* Background color shapes - turn off */
        .tablet-colors-off div[data-name="SQUARE"] > div.bg-\\[\\#689ba1\\],
        .tablet-colors-off div[data-name="SQUARE"] > div.bg-\\[\\#aaccd0\\],
        .tablet-colors-off div[data-name="L"] > div.bg-\\[\\#689ba1\\],
        .tablet-colors-off div.bg-\\[\\#689ba1\\],
        .tablet-colors-off div.bg-\\[\\#6bcd72\\],
        .tablet-colors-off div.bg-\\[\\#cfd860\\],
        .tablet-colors-off div.bg-\\[\\#16a19d\\],
        .tablet-colors-off div.bg-\\[\\#d05d49\\],
        .tablet-colors-off div.bg-\\[\\#942976\\],
        .tablet-colors-off div.bg-\\[\\#95456e\\],
        .tablet-colors-off div.bg-\\[\\#5d4787\\],
        .tablet-colors-off div.bg-\\[\\#6bb0cd\\],
        .tablet-colors-off div.bg-\\[\\#aaccd0\\],
        .tablet-colors-off div.bg-\\[\\#cae0e2\\],
        .tablet-colors-off div.bg-\\[\\#3e6064\\] {
          background-color: #1E3239 !important;
        }

        /* ========================================
           STATIC ELEMENTS - NEVER CHANGE COLOR
           ======================================== */

        /* RightColumn, TopBar, BottomBar, TabletMenu - keep original background */
        .tablet-colors-off div[data-name="RightColumn"] svg path,
        .tablet-colors-off div[data-name="RightColumn"] svg rect {
          fill: #0A4947 !important;
        }
        .tablet-colors-off div[data-name="TopBar"] svg path {
          fill: #0A4947 !important;
        }
        .tablet-colors-off div[data-name="BottomBar"] svg path {
          fill: #0A4947 !important;
        }
        .tablet-colors-off div[data-name="TabletMenu"] div[data-name="LeftBlackBar"] {
          background-image: linear-gradient(90deg, rgb(10, 73, 71) 0%, rgb(10, 73, 71) 100%), linear-gradient(90deg, rgb(230, 230, 230) 0%, rgb(230, 230, 230) 100%) !important;
        }

        /* Navigation buttons (Intro, Skills, Contact, Career) - keep #1E3239 background */
        .tablet-colors-off div[data-name="RoundSkillsButton"] svg circle,
        .tablet-colors-off div[data-name="RoundIntroButton"] svg circle,
        .tablet-colors-off div[data-name="RoundContactButton"] svg circle,
        .tablet-colors-off div[data-name="CareerButton"] div.bg-\\[\\#1e3239\\],
        .tablet-colors-off div[data-name="AboutButtons1"] svg circle[fill^="var(--fill"],
        .tablet-colors-off div[data-name="AboutButtons1"] div.bg-\\[\\#1e3239\\] {
          fill: #1E3239 !important;
          background-color: #1E3239 !important;
        }

        /* Skills section nav buttons */
        .tablet-colors-off div[data-name="Skills"] > div[class*="contents"] svg circle[fill^="var(--fill-0, #1E3239)"] {
          fill: #1E3239 !important;
        }

        /* Value/Trait squares - keep their vibrant colors */
        /* Component 9 - Inspiring - Purple #5D4787 */
        .tablet-colors-off div[data-name="Component 9"] > div.bg-\\[\\#5d4787\\] {
          background-color: #5D4787 !important;
        }
        /* Component 10 - Empowering - Red #D05D49 */
        .tablet-colors-off div[data-name="Component 10"] > div.bg-\\[\\#d05d49\\] {
          background-color: #D05D49 !important;
        }
        /* Component 11 - Industrious - Pink #95456E */
        .tablet-colors-off div[data-name="Component 11"] > div.bg-\\[\\#95456e\\] {
          background-color: #95456E !important;
        }
        /* Component 12 - Grounded - Green #6BCD72 */
        .tablet-colors-off div[data-name="Component 12"] > div.bg-\\[\\#6bcd72\\] {
          background-color: #6BCD72 !important;
        }
        /* Component 13 - Nimble - Light gray #E6E6E6 */
        .tablet-colors-off div[data-name="Component 13"] > div.bg-\\[\\#e6e6e6\\] {
          background-color: #E6E6E6 !important;
        }
        /* Component 14 - Honest - Yellow #CFD860 */
        .tablet-colors-off div[data-name="Component 14"] > div.bg-\\[\\#cfd860\\] {
          background-color: #CFD860 !important;
        }
        /* Component 15 - Calm - Blue #6BB0CD */
        .tablet-colors-off div[data-name="Component 15"] > div.bg-\\[\\#6bb0cd\\] {
          background-color: #6BB0CD !important;
        }

        /* Focus area boxes (Component 18-21) - keep their colors */
        /* Component 18 - "Human first products..." - #AACCD0 */
        .tablet-colors-off div[data-name="Component 18"] > div.bg-\\[\\#aaccd0\\] {
          background-color: #AACCD0 !important;
        }
        /* Component 19 - "Invigorating physical..." - #CFD860 */
        .tablet-colors-off div[data-name="Component 19"] > div.bg-\\[\\#cfd860\\] {
          background-color: #CFD860 !important;
        }
        /* Component 20 - "Streamlined, access..." - #6BB0CD */
        .tablet-colors-off div[data-name="Component 20"] > div.bg-\\[\\#6bb0cd\\] {
          background-color: #6BB0CD !important;
        }
        /* Component 21 - "Intelligent interfaces..." - #6BCD72 */
        .tablet-colors-off div[data-name="Component 21"] > div.bg-\\[\\#6bcd72\\] {
          background-color: #6BCD72 !important;
        }

        /* LinkedIn and Resume buttons - keep dark */
        .tablet-colors-off svg path[d*="M20.2104 0H222.314"] {
          fill: #1E3239 !important;
        }

        /* Bio/story card backgrounds - turn off */
        .tablet-colors-off div[data-name="StoryCardNew"] div.bg-\\[\\#aaccd0\\],
        .tablet-colors-off div[data-name="StoryCardNew"] div.bg-\\[\\#cae0e2\\] {
          background-color: #1E3239 !important;
        }

        /* Intro section text boxes - turn off */
        .tablet-colors-off div[data-name="Intro"] > div.bg-\\[\\#cae0e2\\],
        .tablet-colors-off div[data-name="Intro"] > div.bg-\\[\\#3e6064\\] {
          background-color: #1E3239 !important;
        }
      `}</style>

      {/* Render the imported Figma component */}
      <div className="w-full h-full flex justify-center">
        <IPadPro />
      </div>
    </div>
  );
}
