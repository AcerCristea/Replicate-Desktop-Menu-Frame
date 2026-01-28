import svgPaths from "./svg-jc5hxfumlx";

function Hamburger() {
  return (
    <div
      className="absolute inset-[0_67.17%_0_0]"
      data-name="Hamburger"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.6211 21"
      >
        <g id="Hamburger">
          <path
            d={svgPaths.p3b4fa6f0}
            fill="var(--fill-0, #6BCD72)"
            id="Union"
          />
          <path
            d={svgPaths.p34de4800}
            fill="var(--fill-0, #6BCD72)"
            id="Union_2"
          />
          <path
            d={svgPaths.p2f881500}
            fill="var(--fill-0, #6BCD72)"
            id="Union_3"
          />
        </g>
      </svg>
    </div>
  );
}

function Hamburger1() {
  return (
    <div
      className="h-[21px] relative shrink-0 w-[75px]"
      data-name="Hamburger"
    >
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#6bcd72] text-[14px] top-[29.17%]">
        <p className="css-4hzbpn leading-[30px]">MENU</p>
      </div>
    </div>
  );
}

function SubNavItem() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[80px]"
      data-name="SubNavItem"
    >
      <p className="absolute css-ew64yg font-['Albert_Sans:Black',sans-serif] font-black leading-[24px] left-0 text-[#e6e6e6] text-[16px] top-0">
        Contact
      </p>
    </div>
  );
}

function SubNavItem1() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[55px]"
      data-name="SubNavItem"
    >
      <p className="absolute css-4hzbpn font-['Albert_Sans:Black',sans-serif] font-black leading-[24px] left-0 text-[#e6e6e6] text-[16px] top-0">
        Skills
      </p>
    </div>
  );
}

function SubNavItem2() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[50px]"
      data-name="SubNavItem"
    >
      <p className="absolute css-4hzbpn font-['Albert_Sans:Black',sans-serif] font-black leading-[24px] left-0 text-[#e6e6e6] text-[16px] top-0">
        Intro
      </p>
    </div>
  );
}

function SubNavItem3() {
  return (
    <div
      className="h-[24px] relative shrink-0 w-[75px]"
      data-name="SubNavItem"
    >
      <p className="absolute css-4hzbpn font-['Albert_Sans:Black',sans-serif] font-black leading-[24px] left-0 text-[#e6e6e6] text-[16px] top-0">
        Career
      </p>
    </div>
  );
}

function Subnav() {
  return (
    <div
      className="content-stretch flex items-start justify-between max-w-[300px] overflow-clip relative shrink-0 w-full"
      data-name="SUBNAV"
    >
      <SubNavItem />
      <SubNavItem1 />
      <SubNavItem2 />
      <SubNavItem3 />
    </div>
  );
}

function MobileMenu() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-[250px] relative"
      data-name="MobileMenu"
    >
      <Hamburger1 />
      <Subnav />
    </div>
  );
}

function SmallSwitch() {
  return (
    <div
      className="h-[69px] relative shrink-0 w-[21px]"
      data-name="SmallSwitch"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 69"
      >
        <g id="SmallSwitch">
          <g id="Group 126">
            <line
              id="Line 98"
              stroke="var(--stroke-0, #1E3239)"
              x1="10.48"
              x2="10.48"
              y1="58.44"
              y2="21"
            />
            <circle
              cx="10.5"
              cy="63.72"
              fill="var(--fill-0, #1E3239)"
              id="Ellipse 10"
              r="5.28"
            />
          </g>
          <circle
            cx="10.5"
            cy="10.5"
            fill="var(--fill-0, #1E3239)"
            id="Ellipse 11"
            r="10.5"
          />
        </g>
      </svg>
    </div>
  );
}

export default function TopMenu() {
  return (
    <div
      className="bg-[#0a4947] content-stretch flex items-start justify-between pb-[15px] pt-[30px] px-[30px] relative shadow-[0px_10px_40px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="TopMenu"
    >
      <MobileMenu />
      <SmallSwitch />
    </div>
  );
}