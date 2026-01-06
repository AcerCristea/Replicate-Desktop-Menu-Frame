import svgPaths from "./svg-t3bhpg5d11";
import clsx from "clsx";
type ArchiveClientListing2Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function ArchiveClientListing2({ text, text1, text2, text3 }: ArchiveClientListing2Props) {
  return (
    <div className="absolute content-start flex flex-wrap gap-[0px_17px] items-start left-0 top-0 w-[523px]">
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[180px]">{text}</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">{text1}</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">{`Music & Entertainment`}</p>
      <div className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] text-right w-[30px]">
        <p className="mb-0">{text2}</p>
        <p>{text3}</p>
      </div>
      <Helper1 />
    </div>
  );
}

function Helper1() {
  return (
    <div className="h-0 relative shrink-0 w-[523px]">
      <div className="absolute inset-[-0.5px_0_0_0]" style={{ "--stroke-0": "rgba(12, 21, 23, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 0.5">
          <line id="Line 84" stroke="var(--stroke-0, #0C1517)" strokeWidth="0.5" x2="523" y1="0.25" y2="0.25" />
        </svg>
      </div>
    </div>
  );
}
type ArchiveNavLabelsTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ArchiveNavLabelsText({ text, additionalClassNames = "" }: ArchiveNavLabelsTextProps) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="absolute bottom-[11.14%] flex flex-col font-['Albert_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[#1e3239] text-[12px] text-nowrap top-[-11.14%]">
        <p className="leading-[16px]">{text}</p>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute content-stretch flex items-end left-0 top-[calc(50%-3px)] translate-y-[-50%]", additionalClassNames)}>
      <div className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#3e6064] text-[24px] tracking-[-1px] w-[180px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}

function NewSideBarMainMenu() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[219px]" data-name="NewSideBarMainMenu">
      <Helper text="About" text1="&nbsp;" additionalClassNames="right-[3.23%]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-end left-0 right-[3.23%] top-[calc(50%-3px)] translate-y-[-50%]">
      <p className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#3e6064] text-[24px] tracking-[-1px] w-[180px]">Approach</p>
    </div>
  );
}

function NewSideBarMainMenu1() {
  return (
    <div className="absolute h-[30px] left-0 top-[30px] w-[219px]" data-name="NewSideBarMainMenu">
      <Frame />
    </div>
  );
}

function NewSideBarMainMenu2() {
  return (
    <div className="absolute h-[30px] left-0 top-[60px] w-[219px]" data-name="NewSideBarMainMenu">
      <Helper text="Selected Works" text1="&nbsp;" additionalClassNames="right-[3.23%]" />
    </div>
  );
}

function NewSideBarMainMenu3() {
  return (
    <div className="absolute h-[30px] left-0 top-[90px] w-[219px]" data-name="NewSideBarMainMenu">
      <Helper text="White Space" text1="&nbsp;" additionalClassNames="right-[-0.91%]" />
    </div>
  );
}

function NewSideBarMainMenu4() {
  return (
    <div className="absolute h-[30px] left-0 top-[120px] w-[219px]" data-name="NewSideBarMainMenu">
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[24px] leading-[30px] left-0 text-[#3e6064] text-[24px] top-0 tracking-[-1px] w-[180px]">
        <p className="mb-0">Archive</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function NavStack() {
  return (
    <div className="absolute h-[150px] left-0 top-0 w-[210px]" data-name="NavStack">
      <NewSideBarMainMenu />
      <NewSideBarMainMenu1 />
      <NewSideBarMainMenu2 />
      <NewSideBarMainMenu3 />
      <NewSideBarMainMenu4 />
    </div>
  );
}

function NewSideBarMainMenuMainNav() {
  return (
    <div className="h-[210px] overflow-clip relative shrink-0 w-full" data-name="NewSideBarMainMenu/MainNav">
      <NavStack />
    </div>
  );
}

function BottomBarLockup() {
  return (
    <div className="basis-0 content-stretch flex grow items-end min-h-px min-w-px pl-0 pr-[10px] py-0 relative shrink-0" data-name="BottomBarLockup">
      <div className="flex h-[650px] items-center justify-center mr-[-10px] relative shrink-0 w-[74px]" style={{ "--transform-inner-width": "206.109375", "--transform-inner-height": "30" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold h-[74px] justify-center leading-[0] relative text-[#d05d49] text-[60px] tracking-[-2px] w-[650px]">
            <p className="leading-[30px]">Archive</p>
          </div>
        </div>
      </div>
      <div className="flex h-[131.354px] items-center justify-center mr-[-10px] relative shrink-0 w-[55.974px]" style={{ "--transform-inner-width": "66.953125", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <p className="font-['Albert_Sans:SemiBold',sans-serif] font-semibold h-[55.974px] leading-[16px] relative text-[#1e3239] text-[14px] w-[131.354px]">1996-2026</p>
        </div>
      </div>
    </div>
  );
}

function LeftColumnContents() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 w-[180px]" data-name="LeftColumnContents">
      <NewSideBarMainMenuMainNav />
      <BottomBarLockup />
    </div>
  );
}

function NewWebSideNav() {
  return (
    <div className="bg-[#cfd860] h-[1024px] opacity-0 relative shrink-0 w-0" data-name="NewWebSideNav">
      <div className="content-stretch flex flex-col items-start px-[30px] py-[34px] relative size-full">
        <LeftColumnContents />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute bottom-[3.33%] left-0 top-[49.38%] w-[115px]" data-name="SectionTitle">
      <div className="absolute flex flex-col font-['Albert_Sans:SemiBold',sans-serif] font-semibold inset-[97.8%_0_0_0] justify-center leading-[0] text-[#e6e6e6] text-[12px] text-center">
        <p className="leading-[16px]">1996-2026</p>
      </div>
      <div className="absolute flex inset-[0_6.96%_5.29%_0] items-center justify-center">
        <div className="flex-none h-[107px] rotate-[270deg] w-[430px]">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative size-full text-[#d05d49] text-[60px] tracking-[-2px]">
            <p className="leading-[30px]">Archive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <div className="absolute inset-[0_-2.81%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
          <g id="Hamburger">
            <path d={svgPaths.p23d0dcc0} fill="var(--fill-0, #E6E6E6)" id="Union" />
            <path d={svgPaths.p1ccb3180} fill="var(--fill-0, #E6E6E6)" id="Union_2" />
            <path d={svgPaths.p1f4b8900} fill="var(--fill-0, #E6E6E6)" id="Union_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute inset-[2.08%_13.04%_95.42%_17.39%]" data-name="MobileMenu">
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#e6e6e6] text-[12px] top-[29.17%]">
        <p className="leading-[30px]">MENU</p>
      </div>
    </div>
  );
}

function TabletMenu() {
  return (
    <div className="h-[960px] relative shrink-0 w-[115px]" data-name="TabletMenu">
      <div className="absolute bg-[#1e3239] inset-0" data-name="LeftBlackBar" />
      <SectionTitle />
      <MobileMenu />
    </div>
  );
}

function ArchiveNavLabels() {
  return (
    <div className="h-[16px] relative shrink-0 w-[180px]" data-name="ArchiveNavLabels">
      <div className="absolute bottom-[11.14%] flex flex-col font-['Albert_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[#d05d49] text-[12px] text-nowrap top-[-11.14%]">
        <p className="leading-[16px]">CLIENT</p>
      </div>
    </div>
  );
}

function NavHeaders() {
  return (
    <div className="absolute content-stretch flex gap-[17px] items-center left-0 top-[10px] w-[523px]" data-name="NavHeaders">
      <ArchiveNavLabels />
      <ArchiveNavLabelsText text="PROJECT TYPE" additionalClassNames="w-[130px]" />
      <ArchiveNavLabelsText text="INDUSTRY" additionalClassNames="w-[130px]" />
      <ArchiveNavLabelsText text="DATE" additionalClassNames="w-[30px]" />
    </div>
  );
}

function ArchiveSubnavTablet() {
  return (
    <div className="h-[35px] shrink-0 sticky top-0 w-[523px]" data-name="ArchiveSubnavTablet">
      <div className="absolute bottom-0 left-[0.15%] right-[-0.15%] top-full" data-name="Keyline">
        <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(208, 93, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 2">
            <line id="Keyline" stroke="var(--stroke-0, #D05D49)" strokeWidth="2" x2="523" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-[77.94%] top-full" data-name="Highlight">
        <div className="absolute inset-[-5px_0_0_0]" style={{ "--stroke-0": "rgba(208, 93, 73, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.368 5">
            <line id="Highlight" stroke="var(--stroke-0, #D05D49)" strokeWidth="5" x2="115.368" y1="2.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <NavHeaders />
    </div>
  );
}

function ArchiveClientListing() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[0px_17px] items-start left-0 top-0 w-[523px]" data-name="ArchiveClientListing">
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[180px]">Acticol</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">Mobile App</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">{`Healthcare & Wellness`}</p>
      <div className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] text-right w-[30px]">
        <p className="mb-0">1996</p>
        <p>&nbsp;</p>
      </div>
      <Helper1 />
    </div>
  );
}

function ArchiveClientListing1() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing />
    </div>
  );
}

function ArchiveClientListing3() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Porto Montenegro" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing4() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Renault" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing5() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="RHDC" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing6() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Sainsbury’s" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing7() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Science Museum" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing8() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Selfridges" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing9() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Serpentine" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing10() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Siemens" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing11() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Sky" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing12() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Sonnetti" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing13() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="TAQA" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing14() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Tate" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing15() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Taylors" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing16() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="TBWA" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing17() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Telegraph" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing18() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="The Loop" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing19() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Thomas Pink" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing20() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Tony Blair" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing21() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Wedgwood" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing22() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Wellcome Trust" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing23() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Wells Fargo" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing24() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Westfield" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing25() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[0px_17px] items-start left-0 top-0 w-[523px]" data-name="ArchiveClientListing">
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[180px]">{`Wieden & Kennedy`}</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">Interactive Installation</p>
      <p className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] w-[130px]">{`Music & Entertainment`}</p>
      <div className="font-['Albert_Sans:400',sans-serif] h-[40px] leading-[16px] not-italic relative shrink-0 text-[#0c1517] text-[12px] text-right w-[30px]">
        <p className="mb-0">1996</p>
        <p>&nbsp;</p>
      </div>
      <Helper1 />
    </div>
  );
}

function ArchiveClientListing26() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing25 />
    </div>
  );
}

function ArchiveClientListing27() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Xbox" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing28() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Yale" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ArchiveClientListing29() {
  return (
    <div className="h-[33px] relative shrink-0 w-[579px]" data-name="ArchiveClientListing">
      <ArchiveClientListing2 text="Yota" text1="Interactive Installation" text2="1996" text3="&nbsp;" />
    </div>
  );
}

function ClientList() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[915px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="ClientList">
      <ArchiveClientListing1 />
      <ArchiveClientListing3 />
      <ArchiveClientListing4 />
      <ArchiveClientListing5 />
      <ArchiveClientListing6 />
      <ArchiveClientListing7 />
      <ArchiveClientListing8 />
      <ArchiveClientListing9 />
      <ArchiveClientListing10 />
      <ArchiveClientListing11 />
      <ArchiveClientListing12 />
      <ArchiveClientListing13 />
      <ArchiveClientListing14 />
      <ArchiveClientListing15 />
      <ArchiveClientListing16 />
      <ArchiveClientListing17 />
      <ArchiveClientListing18 />
      <ArchiveClientListing9 />
      <ArchiveClientListing10 />
      <ArchiveClientListing11 />
      <ArchiveClientListing12 />
      <ArchiveClientListing13 />
      <ArchiveClientListing14 />
      <ArchiveClientListing15 />
      <ArchiveClientListing16 />
      <ArchiveClientListing17 />
      <ArchiveClientListing18 />
      <ArchiveClientListing19 />
      <ArchiveClientListing20 />
      <ArchiveClientListing21 />
      <ArchiveClientListing22 />
      <ArchiveClientListing23 />
      <ArchiveClientListing24 />
      <ArchiveClientListing26 />
      <ArchiveClientListing27 />
      <ArchiveClientListing28 />
      <ArchiveClientListing29 />
    </div>
  );
}

function ArchiveClientBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[523px]" data-name="ArchiveClientBlock">
      <ArchiveSubnavTablet />
      <ClientList />
    </div>
  );
}

function ArchiveList() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-0 pb-0 pt-[30px] px-[20px] top-0" data-name="ArchiveList">
      <TabletMenu />
      <ArchiveClientBlock />
      <div className="bg-[#1e3239] h-[960px] shrink-0 w-[115px]" data-name="RightBlackBar" />
    </div>
  );
}

function ArchiveHomeContent() {
  return (
    <div className="basis-0 bg-[#cfd860] grow h-[1024px] min-h-px min-w-px relative shrink-0" data-name="ArchiveHomeContent">
      <div className="absolute h-[1023.4px] right-[-452.39px] top-[-0.4px] w-[1059.95px]" data-name="ArchiveLARGE">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(104, 155, 161, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1059.95 1023.4">
            <path d={svgPaths.p39aca200} fill="var(--fill-0, #689BA1)" id="ArchiveLARGE" opacity="0.3" />
          </svg>
        </div>
      </div>
      <ArchiveList />
    </div>
  );
}

export default function ArchiveDeskGrid() {
  return (
    <div className="bg-[#e6e6e6] content-stretch flex items-start relative size-full" data-name="Archive_Desk_Grid">
      <NewWebSideNav />
      <ArchiveHomeContent />
    </div>
  );
}