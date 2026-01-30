import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutParent from '../../imports/DesktopAboutFigma';

export function AboutDesktopPage() {
  const [isOn, setIsOn] = useState(true); // Start with colors ON
  const navigate = useNavigate();

  // Navigation menu setup
  useEffect(() => {
    const menuItems = [
      { text: 'About', path: '/about' },
      { text: 'Approach', path: '/approach' },
      { text: 'Selected Works', path: '/selected-works' },
      { text: 'White Space', path: '/white-space' },
      { text: 'Archive', path: '/archive' },
    ];

    // Find all menu items in the sidebar
    const menuElements = document.querySelectorAll('[data-name="NewSideBarMainMenu"]');

    menuElements.forEach((el) => {
      // Get the text content to match with routes
      const textContent = el.textContent?.trim();
      const menuItem = menuItems.find(item => textContent?.includes(item.text));

      if (menuItem) {
        const htmlEl = el as HTMLElement;
        htmlEl.style.cursor = 'pointer';

        const handleClick = () => {
          navigate(menuItem.path);
        };

        el.addEventListener('click', handleClick);

        // Store the handler for cleanup
        (el as any)._navHandler = handleClick;
      }
    });

    // Cleanup
    return () => {
      menuElements.forEach((el) => {
        if ((el as any)._navHandler) {
          el.removeEventListener('click', (el as any)._navHandler);
        }
      });
    };
  }, [navigate]);

  useEffect(() => {
    // Add interaction logic to the Light Switch
    const switchEl = document.querySelector('[data-name="Switch"]');

    if (switchEl) {
      const handleClick = () => {
        setIsOn(prev => !prev);

        // Animate pull down
        const svgEl = switchEl.querySelector('svg');
        if (svgEl) {
          svgEl.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          svgEl.style.transform = 'translateY(30px)';

          // Spring back
          setTimeout(() => {
            svgEl.style.transform = 'translateY(0)';
          }, 200);
        }
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
    const lampEl = document.getElementById('Lamp');
    const pullEl = document.getElementById('Ellipse 10');
    if (lampEl) {
      lampEl.style.transition = 'fill 0.2s ease';
      lampEl.style.fill = isOn ? '#6BCD72' : '#1E3239';
    }
    if (pullEl) {
      pullEl.style.transition = 'fill 0.2s ease';
      pullEl.style.fill = isOn ? '#6BCD72' : '#1E3239';
    }
  }, [isOn]);

  return (
    <div className={`w-full h-screen bg-[#0a4947] flex justify-center overflow-hidden ${!isOn ? 'desktop-colors-off' : ''}`}>
      {/* CSS Overrides for the imported component */}
      <style>{`
        /* Scrollbar hiding for the content window */
        div[data-name="About-Content"] {
          overflow-y: auto !important;
          overflow-x: hidden !important;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE 10+ */
        }
        div[data-name="About-Content"]::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }

        /* Light Switch Cursor */
        div[data-name="Switch"] {
          cursor: pointer;
        }
        div[data-name="Switch"]:hover {
          filter: brightness(1.2);
        }

        /* Navigation Menu Items */
        div[data-name="NewSideBarMainMenu"] {
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        div[data-name="NewSideBarMainMenu"]:hover {
          opacity: 0.7;
        }
        div[data-name="NewSideBarMainMenu"]:hover p {
          color: #e6e6e6 !important;
        }

        /* Responsive adjustments */
        div[data-name="About_Parent"] {
          width: 100%;
          min-width: 1200px;
        }

        /* ========================================
           COLOR TOGGLE SYSTEM
           When .desktop-colors-off is applied:
           - All shapes using var(--fill-0) turn to #1E3239
           - EXCEPT static shapes that should keep their colors
           ======================================== */

        /* Colors OFF state - override CSS variable fills for SVG shapes */
        .desktop-colors-off svg path[fill^="var(--fill"],
        .desktop-colors-off svg circle[fill^="var(--fill"],
        .desktop-colors-off svg rect[fill^="var(--fill"] {
          fill: #1E3239 !important;
        }

        .desktop-colors-off svg line[stroke^="var(--stroke"],
        .desktop-colors-off svg path[stroke^="var(--stroke"] {
          stroke: #1E3239 !important;
        }

        /* Background color shapes - turn off */
        .desktop-colors-off div[data-name="SQUARE"] > div.bg-\\[\\#689ba1\\],
        .desktop-colors-off div[data-name="SQUARE"] > div.bg-\\[\\#aaccd0\\],
        .desktop-colors-off div[data-name="L"] > div.bg-\\[\\#689ba1\\],
        .desktop-colors-off div.bg-\\[\\#689ba1\\],
        .desktop-colors-off div.bg-\\[\\#6bcd72\\],
        .desktop-colors-off div.bg-\\[\\#cfd860\\],
        .desktop-colors-off div.bg-\\[\\#16a19d\\],
        .desktop-colors-off div.bg-\\[\\#d05d49\\],
        .desktop-colors-off div.bg-\\[\\#942976\\],
        .desktop-colors-off div.bg-\\[\\#95456e\\],
        .desktop-colors-off div.bg-\\[\\#5d4787\\],
        .desktop-colors-off div.bg-\\[\\#6bb0cd\\],
        .desktop-colors-off div.bg-\\[\\#aaccd0\\],
        .desktop-colors-off div.bg-\\[\\#cae0e2\\],
        .desktop-colors-off div.bg-\\[\\#3e6064\\] {
          background-color: #1E3239 !important;
        }

        /* ========================================
           STATIC ELEMENTS - NEVER CHANGE COLOR
           ======================================== */

        /* Navigation buttons (Intro, Skills, Contact, Career) - keep #1E3239 background */
        .desktop-colors-off div[data-name="RoundSkillsButton"] svg circle,
        .desktop-colors-off div[data-name="RoundIntroButton"] svg circle,
        .desktop-colors-off div[data-name="RoundContactButton"] svg circle,
        .desktop-colors-off div[data-name="CareerButton"] div.bg-\\[\\#1e3239\\],
        .desktop-colors-off div[data-name="AboutButtons1"] svg circle[fill^="var(--fill"],
        .desktop-colors-off div[data-name="AboutButtons1"] div.bg-\\[\\#1e3239\\] {
          fill: #1E3239 !important;
          background-color: #1E3239 !important;
        }

        /* Value/Trait squares - keep their vibrant colors */
        /* Component 9 - Inspiring - Purple #5D4787 */
        .desktop-colors-off div[data-name="Component 9"] > div.bg-\\[\\#5d4787\\] {
          background-color: #5D4787 !important;
        }
        /* Component 10 - Empowering - Red #D05D49 */
        .desktop-colors-off div[data-name="Component 10"] > div.bg-\\[\\#d05d49\\] {
          background-color: #D05D49 !important;
        }
        /* Component 11 - Industrious - Pink #95456E */
        .desktop-colors-off div[data-name="Component 11"] > div.bg-\\[\\#95456e\\] {
          background-color: #95456E !important;
        }
        /* Component 12 - Grounded - Green #6BCD72 */
        .desktop-colors-off div[data-name="Component 12"] > div.bg-\\[\\#6bcd72\\] {
          background-color: #6BCD72 !important;
        }
        /* Component 13 - Nimble - Light gray #E6E6E6 */
        .desktop-colors-off div[data-name="Component 13"] > div.bg-\\[\\#e6e6e6\\] {
          background-color: #E6E6E6 !important;
        }
        /* Component 14 - Honest - Yellow #CFD860 */
        .desktop-colors-off div[data-name="Component 14"] > div.bg-\\[\\#cfd860\\] {
          background-color: #CFD860 !important;
        }
        /* Component 15 - Calm - Blue #6BB0CD */
        .desktop-colors-off div[data-name="Component 15"] > div.bg-\\[\\#6bb0cd\\] {
          background-color: #6BB0CD !important;
        }

        /* Focus area boxes (Component 18-21) - keep their colors */
        /* Component 18 - "Human first products..." - #AACCD0 */
        .desktop-colors-off div[data-name="Component 18"] > div.bg-\\[\\#aaccd0\\] {
          background-color: #AACCD0 !important;
        }
        /* Component 19 - "Invigorating physical..." - #CFD860 */
        .desktop-colors-off div[data-name="Component 19"] > div.bg-\\[\\#cfd860\\] {
          background-color: #CFD860 !important;
        }
        /* Component 20 - "Streamlined, access..." - #6BB0CD */
        .desktop-colors-off div[data-name="Component 20"] > div.bg-\\[\\#6bb0cd\\] {
          background-color: #6BB0CD !important;
        }
        /* Component 21 - "Intelligent interfaces..." - #6BCD72 */
        .desktop-colors-off div[data-name="Component 21"] > div.bg-\\[\\#6bcd72\\] {
          background-color: #6BCD72 !important;
        }

        /* LinkedIn and Resume buttons - keep dark */
        .desktop-colors-off svg path[d*="M50.526 0H555.786"] {
          fill: #1E3239 !important;
        }

        /* Bio/story card backgrounds - turn off */
        .desktop-colors-off div[data-name="StoryCardNew"] div.bg-\\[\\#aaccd0\\],
        .desktop-colors-off div[data-name="StoryCardNew"] div.bg-\\[\\#cae0e2\\] {
          background-color: #1E3239 !important;
        }

        /* Intro section text boxes - turn off */
        .desktop-colors-off div[data-name="Intro"] > div.bg-\\[\\#cae0e2\\],
        .desktop-colors-off div[data-name="Intro"] > div.bg-\\[\\#3e6064\\] {
          background-color: #1E3239 !important;
        }

        /* Keep the light switch lamp and pull visible when on */
        #Lamp, #Ellipse\\ 10 {
          transition: fill 0.3s ease;
        }
      `}</style>

      {/* Render the imported Figma component */}
      <div className="w-full h-full flex justify-center">
        <AboutParent />
      </div>
    </div>
  );
}
