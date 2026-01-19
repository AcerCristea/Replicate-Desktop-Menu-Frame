function MobileMainMenu() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="MobileMainMenu">
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[24px] left-0 text-[#aaccd0] text-[18px] top-0 w-[180px]">
        <p className="css-4hzbpn mb-0">About</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function MobileMainMenu1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="MobileMainMenu">
      <p className="absolute css-4hzbpn font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[24px] left-0 text-[#aaccd0] text-[18px] top-0 w-[180px]">Approach</p>
    </div>
  );
}

function MobileMainMenu2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="MobileMainMenu">
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[24px] left-0 text-[#aaccd0] text-[18px] top-0 w-[180px]">
        <p className="css-4hzbpn mb-0">Selected Works</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function MobileMainMenu3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="MobileMainMenu">
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[24px] left-0 text-[#aaccd0] text-[18px] top-0 w-[180px]">
        <p className="css-4hzbpn mb-0">White Space</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function MobileMainMenu4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="MobileMainMenu">
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[24px] leading-[24px] left-0 text-[#aaccd0] text-[18px] top-0 w-[180px]">
        <p className="css-4hzbpn mb-0">Archive</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function NavStack() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-0 pb-0 pt-[10px] px-0 top-[-10px] w-[180px]" data-name="NavStack">
      <MobileMainMenu />
      <MobileMainMenu1 />
      <MobileMainMenu2 />
      <MobileMainMenu3 />
      <MobileMainMenu4 />
    </div>
  );
}

function MobileMainNav() {
  return (
    <div className="h-[225px] overflow-clip relative shrink-0 w-full" data-name="MobileMainNav">
      <NavStack />
    </div>
  );
}

function LeftColumnContents() {
  return (
    <div className="absolute content-stretch flex flex-col h-[764px] items-start justify-between left-[18px] top-[54px] w-[162px]" data-name="LeftColumnContents">
      <MobileMainNav />
      <div className="flex h-[514px] items-center justify-center relative shrink-0 w-[80px]" style={{ "--transform-inner-width": "125.28125", "--transform-inner-height": "42.65625" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold h-[80px] justify-center leading-[0] relative text-[#d05d49] text-[60px] tracking-[-2px] w-[514px]">
            <p className="css-4hzbpn">
              <span className="leading-[30px] text-[#6bb0cd]">Nick</span>
              <span className="leading-[30px] text-[#aaccd0]">Cristea</span>
              <span className="leading-[30px] text-[#e6e6e6]">Selflux</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeftColumn() {
  return (
    <div className="relative size-full" data-name="LeftColumn">
      <div className="absolute bg-[#00375a] h-full left-0 top-0 w-[180px]" data-name="LeftColumnBgrd" />
      <LeftColumnContents />
    </div>
  );
}