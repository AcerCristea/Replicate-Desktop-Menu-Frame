import svgPaths from "./svg-j6x2ow7li6";

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2627 24">
        <g id="Hamburger">
          <path d={svgPaths.p16771280} fill="var(--fill-0, #6BB0CD)" id="Union" />
          <path d={svgPaths.pe02b380} fill="var(--fill-0, #6BB0CD)" id="Union_2" />
          <path d={svgPaths.p1d711500} fill="var(--fill-0, #6BB0CD)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute h-[24px] left-[30px] top-[30px] w-[80px]" data-name="MobileMenu">
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#6bb0cd] text-[14px] top-[29.17%]">
        <p className="css-4hzbpn leading-[30px]">MENU</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#00375a] h-[75px] left-0 top-0 w-[390px]" />
      <MobileMenu />
      <div className="absolute flex flex-col font-['Albert_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[360px] text-[#d05d49] text-[0px] text-right top-[43px] translate-x-[-100%] translate-y-[-50%] w-[132px]">
        <p className="css-4hzbpn font-['Albert_Sans:Black',sans-serif] font-black text-[14px]">
          <span className="leading-[16px] text-[#0076c2]">Nick</span>
          <span className="leading-[16px] text-[#6bb0cd]">Cristea</span>
          <span className="leading-[16px] text-[#b7d8e7]">Selflux</span>
        </p>
      </div>
    </div>
  );
}