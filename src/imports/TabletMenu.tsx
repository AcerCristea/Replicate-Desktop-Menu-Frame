import svgPaths from "./svg-spnn8u9ymw";

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2627 27.9571">
        <g id="Hamburger">
          <path d={svgPaths.p1a61980} fill="var(--fill-0, #AACCD0)" id="Union" />
          <path d={svgPaths.pec6d4f0} fill="var(--fill-0, #AACCD0)" id="Union_2" />
          <path d={svgPaths.p5fcbb80} fill="var(--fill-0, #AACCD0)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute inset-[2.93%_13.04%_94.73%_17.39%]" data-name="MobileMenu">
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#aaccd0] text-[14px] top-[29.17%]">
        <p className="css-4hzbpn leading-[30px]">MENU</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[37.85%_0_3.61%_0] items-start justify-end" data-name="SectionTitle">
      <div className="flex h-[576px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "125.28125", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold h-[115px] justify-center leading-[0] relative text-[#d05d49] text-[60px] tracking-[-2px] w-full">
            <p className="css-4hzbpn">
              <span className="leading-[24px] text-[#0076c2]">Nick</span>
              <span className="leading-[24px] text-[#6bb0cd]">Cristea</span>
              <span className="leading-[24px] text-[#b7d8e7]">Selflux</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TabletMenu() {
  return (
    <div className="relative shadow-[10px_4px_40px_0px_rgba(0,0,0,0.25)] size-full" data-name="TabletMenu">
      <div className="absolute inset-[0_0_0.1%_0]" data-name="LeftBlackBar" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 55, 90) 0%, rgb(0, 55, 90) 100%), linear-gradient(90deg, rgb(230, 230, 230) 0%, rgb(230, 230, 230) 100%)" }} />
      <MobileMenu />
      <SectionTitle />
    </div>
  );
}