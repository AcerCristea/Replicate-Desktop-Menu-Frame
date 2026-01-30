import React from "react";
import svgPaths from "./svg-desktop-about-figma";
import imgL from "../assets/desktop-about/8e82c1c2ec3cf79fa4cf777281927b745104c8c9.png";
import imgBigCircle from "../assets/desktop-about/328e6d9d3c6d04881b04c2c74084319dbd1bdc8c.png";
import img1997 from "../assets/desktop-about/41429ae03e691a003f76dc061333ad2451d2a5a2.png";
import { imgGroup, imgGroup1 } from "./svg-desktop-about-groups";

function NewSideBarMainMenu() {
  return (
    <button className="absolute block cursor-pointer h-[30px] left-0 top-0 w-[219px]" data-name="NewSideBarMainMenu">
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[24px] leading-[30px] left-0 text-[#aaccd0] text-[24px] text-left top-0 tracking-[-1px] w-[180px] whitespace-pre-wrap">
        <p className="mb-0">About</p>
        <p>&nbsp;</p>
      </div>
    </button>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-end left-0 right-[-0.91%] top-[calc(50%-3px)]">
      <p className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#aaccd0] text-[24px] tracking-[-1px] w-[180px] whitespace-pre-wrap">Approach</p>
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

function Frame1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-end left-0 right-[-0.91%] top-[calc(50%-3px)]">
      <div className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#aaccd0] text-[24px] tracking-[-1px] w-[180px] whitespace-pre-wrap">
        <p className="mb-0">Selected Works</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function NewSideBarMainMenu2() {
  return (
    <div className="absolute h-[30px] left-0 top-[60px] w-[219px]" data-name="NewSideBarMainMenu">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-end left-0 right-[-0.91%] top-[calc(50%-3px)]">
      <div className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#aaccd0] text-[24px] tracking-[-1px] w-[180px] whitespace-pre-wrap">
        <p className="mb-0">White Space</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function NewSideBarMainMenu3() {
  return (
    <div className="absolute h-[30px] left-0 top-[90px] w-[219px]" data-name="NewSideBarMainMenu">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-end left-0 right-[-0.91%] top-[calc(50%-3px)]">
      <div className="font-['Albert_Sans:Light',sans-serif] font-light h-[24px] leading-[30px] relative shrink-0 text-[#aaccd0] text-[24px] tracking-[-1px] w-[180px] whitespace-pre-wrap">
        <p className="mb-0">Archive</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function NewSideBarMainMenu4() {
  return (
    <div className="absolute h-[30px] left-0 top-[120px] w-[219px]" data-name="NewSideBarMainMenu">
      <Frame3 />
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
    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px min-w-px pr-[10px] relative" data-name="BottomBarLockup">
      <div className="flex h-[650px] items-center justify-center mr-[-10px] relative shrink-0 w-[74px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold h-[74px] justify-center leading-[0] relative text-[#6bcd72] text-[60px] tracking-[-2px] w-[650px]">
            <p className="leading-[30px] whitespace-pre-wrap">About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftColumnContents() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[956px] items-start left-[30px] top-[34px] w-[180px]" data-name="LeftColumnContents">
      <NewSideBarMainMenuMainNav />
      <BottomBarLockup />
    </div>
  );
}

function NewWebSideNav() {
  return (
    <div className="h-[1024px] relative shadow-[10px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-[210px]" data-name="NewWebSideNav">
      <div className="absolute bg-[#0a4947] h-[786px] left-0 shadow-[10px_0px_40px_0px_rgba(0,0,0,0.25)] top-[124px] w-[210px]" />
      <div className="absolute bg-[#0a4947] h-[1023px] left-0 top-px w-[210px]" />
      <LeftColumnContents />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[-20px] top-[3953px]">
      <div className="absolute bg-[#689ba1] h-[31px] left-[-20px] top-[4377px] w-[980px]" />
      <div className="absolute flex h-[424px] items-center justify-center left-[60px] top-[3953px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="bg-[#3e6064] h-[30px] w-[424px]" />
        </div>
      </div>
    </div>
  );
}

function L() {
  return (
    <div className="h-[315px] relative w-[30px]" data-name="L">
      <div className="absolute bg-[#689ba1] inset-0" data-name="L" />
    </div>
  );
}

function SmallCircle() {
  return (
    <div className="relative size-[174.037px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.037 174.037">
        <g id="Small Circle">
          <circle cx="87.0184" cy="87.0184" fill="var(--fill-0, #16A19D)" id="Small Circle_2" r="87.0184" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[85.74px] size-[175.481px] top-[3605.71px]">
      <div className="absolute flex items-center justify-center left-[85.74px] size-[175.481px] top-[3605.71px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-89.52deg]">
          <SmallCircle />
        </div>
      </div>
    </div>
  );
}

function SmallCircle1() {
  return (
    <div className="relative size-[176.416px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.416 176.416">
        <g id="Small Circle">
          <circle cx="88.2082" cy="88.2082" fill="var(--fill-0, #16A19D)" id="Small Circle_2" r="88.2082" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Inspiring</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Sees, communicates and builds products for the future</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-[549px] size-[160px] top-[4057px]" data-name="Component 9">
      <div className="absolute bg-[#5d4787] inset-0" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Empowering</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Elevates people and teams to design amazing products</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-[486px] size-[160px] top-[4217px]" data-name="Component 10">
      <div className="absolute bg-[#d05d49] inset-0" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Industrious</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Works fast towards high quality volume outputs</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute left-[337px] size-[160px] top-[4027px]" data-name="Component 11">
      <div className="absolute bg-[#95456e] inset-0" />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Grounded</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Driven by passion for the creation of great design not ego</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute left-[290px] size-[160px] top-[4217px]" data-name="Component 12">
      <div className="absolute bg-[#6bcd72] inset-0" />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Nimble</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Driven by passion for the creation of great design not ego</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute left-[617.99px] size-[160px] top-[3876px]" data-name="Component 13">
      <div className="absolute bg-[#e6e6e6] inset-0" />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Honest</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Leads with integrity, speaks truth to power</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute left-[724px] size-[160px] top-[4036px]" data-name="Component 14">
      <div className="absolute bg-[#cfd860] inset-0" />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Calm</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Leverages breadth and depth of expertise to navigate challenges</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute left-[670px] size-[160px] top-[4217px]" data-name="Component 15">
      <div className="absolute bg-[#6bb0cd] inset-0" />
      <Frame10 />
    </div>
  );
}

function LeftCurve() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCurve1() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] left-[3.23%] right-0 top-[calc(50%+28px)]" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve() {
  return (
    <div className="h-[124px] relative w-[62px]" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve />
        </div>
      </div>
      <LeftCurve1 />
    </div>
  );
}

function LeftCurve2() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCurve3() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] left-[3.23%] right-0 top-[calc(50%+28px)]" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve1() {
  return (
    <div className="h-[124px] relative w-[62px]" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve2 />
        </div>
      </div>
      <LeftCurve3 />
    </div>
  );
}

function L1() {
  return (
    <div className="absolute bottom-1/2 left-0 right-0 top-0" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #3E6064)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L2() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #3E6064)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function UShape() {
  return (
    <div className="absolute h-[120px] left-[90px] top-[3834px] w-[90px]" data-name="U-shape">
      <L1 />
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-scale-y-100 flex-none h-[60px] w-[90px]">
          <L2 />
        </div>
      </div>
    </div>
  );
}

function LargeParallelagram() {
  return (
    <div className="h-[30px] relative w-[150px]" data-name="LargeParallelagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30">
        <g id="LargeParallelagram">
          <path d="M30 0H150L120 30H0L30 0Z" fill="var(--fill-0, #6BB0CD)" id="Rectangle 61" />
        </g>
      </svg>
    </div>
  );
}

function LeftCurve4() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #CAE0E2)" id="Left-curve" stroke="var(--stroke-0, #CAE0E2)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCurve5() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] left-[3.23%] right-0 top-[calc(50%+28px)]" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #CAE0E2)" id="Left-curve" stroke="var(--stroke-0, #CAE0E2)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve2() {
  return (
    <div className="relative size-full" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve4 />
        </div>
      </div>
      <LeftCurve5 />
    </div>
  );
}

function LeftCurve6() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #CAE0E2)" id="Left-curve" stroke="var(--stroke-0, #CAE0E2)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component34Ring() {
  return (
    <div className="absolute left-[524px] size-[124px] top-[3623px]" data-name="3/4 Ring">
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-rotate-90 flex-none h-[124px] w-[62px]">
          <Component2Curve2 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] flex items-center justify-center left-[48.39%] right-[3.23%] top-[calc(50%-30px)]">
        <div className="flex-none rotate-180 size-[60px]">
          <LeftCurve6 />
        </div>
      </div>
    </div>
  );
}

function SmallCircle2() {
  return (
    <div className="absolute left-[640px] size-[30px] top-[3845px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Small Circle">
          <circle cx="15" cy="15" fill="var(--fill-0, #CFD860)" id="Small Circle_2" r="15" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle3() {
  return (
    <div className="absolute left-[660px] size-[20px] top-[4037px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Small Circle">
          <circle cx="10" cy="10" fill="var(--fill-0, #16A19D)" id="Small Circle_2" r="10" />
        </g>
      </svg>
    </div>
  );
}

function AnchorSkills() {
  return (
    <div className="absolute left-[504px] size-[60px] top-[3730px]" data-name="Anchor_Skills">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Anchor_Skills">
          <circle cx="30" cy="30" fill="var(--fill-0, #D05D49)" id="Big Circle" r="30" />
        </g>
      </svg>
    </div>
  );
}

function LeftCurve7() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #942976)" id="Left-curve" stroke="var(--stroke-0, #942976)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCurve8() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] left-[3.23%] right-0 top-[calc(50%+28px)]" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #942976)" id="Left-curve" stroke="var(--stroke-0, #942976)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve3() {
  return (
    <div className="relative size-full" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve7 />
        </div>
      </div>
      <LeftCurve8 />
    </div>
  );
}

function LeftCurve9() {
  return (
    <div className="relative size-full" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #942976)" id="Left-curve" stroke="var(--stroke-0, #942976)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftCurve10() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] left-[3.23%] right-0 top-[calc(50%+28px)]" data-name="Left-curve">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-90 size-[60px]">
          <div className="relative size-full" data-name="Left-curve">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #942976)" id="Left-curve" stroke="var(--stroke-0, #942976)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve4() {
  return (
    <div className="relative size-full" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve9 />
        </div>
      </div>
      <LeftCurve10 />
    </div>
  );
}

function Ring() {
  return (
    <div className="absolute left-[650px] size-[124px] top-[3747px]" data-name="Ring">
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-rotate-90 flex-none h-[124px] w-[62px]">
          <Component2Curve3 />
        </div>
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-0 right-0 top-0">
        <div className="-scale-y-100 flex-none h-[124px] rotate-90 w-[62px]">
          <Component2Curve4 />
        </div>
      </div>
    </div>
  );
}

function Semi() {
  return (
    <div className="absolute h-[40px] left-[789px] top-[3995px] w-[79px]" data-name="Semi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 40">
        <g id="Semi">
          <path clipRule="evenodd" d={svgPaths.p3db90400} fill="var(--fill-0, #6BCD72)" fillRule="evenodd" id="Semi_2" />
        </g>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="absolute left-[60px] size-[30px] top-[3924px]" data-name="SQUARE">
      <div className="absolute bg-[#689ba1] inset-0" data-name="SQUARE" />
    </div>
  );
}

function L3() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #AACCD0)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SmallParallelagram() {
  return (
    <div className="absolute h-[30px] left-[262px] top-[4187px] w-[120px]" data-name="Small-Parallelagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g id="Small-Parallelagram">
          <path d="M30 0H120L90 30H0L30 0Z" fill="var(--fill-0, #3E6064)" id="Rectangle 61" />
        </g>
      </svg>
    </div>
  );
}

function LittleRect() {
  return (
    <div className="h-[63px] relative w-[21px]" data-name="Little_rect">
      <div className="absolute bg-[#3e6064] inset-0" data-name="Little_rect" />
    </div>
  );
}

function SmallCircle4() {
  return (
    <div className="relative size-[100px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[79px] size-[121.309px] top-[3959px]">
      <div className="absolute flex items-center justify-center left-[79px] size-[121.309px] top-[3959px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-75.93deg]">
          <SmallCircle4 />
        </div>
      </div>
      <div className="absolute flex h-[66.576px] items-center justify-center left-[116.08px] top-[3976.44px] w-[66.444px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45.15deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle5() {
  return (
    <div className="absolute left-[177px] size-[100px] top-[3819px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[177px] top-[3819px]">
      <SmallCircle5 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[227.3px] top-[3847.75px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Square1() {
  return (
    <div className="relative size-[90px]" data-name="SQUARE">
      <div className="absolute bg-[#1e3239] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[153px] size-[141.869px] top-[3905px]">
      <div className="absolute flex items-center justify-center left-[163.16px] size-[121.551px] top-[3915.16px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-27.75deg]">
          <Square1 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[60.292px] items-center justify-center left-[220.85px] top-[3943.6px] w-[77.512px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-28.08deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function LeftCurve11() {
  return (
    <div className="relative size-[64.447px]" data-name="Left-curve">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.4467 64.4467">
        <g id="Left-curve">
          <path d={svgPaths.p4e628f0} fill="var(--fill-0, #6BB0CD)" id="Left-curve_2" stroke="var(--stroke-0, #6BB0CD)" />
        </g>
      </svg>
    </div>
  );
}

function Skills() {
  return (
    <div className="absolute contents left-[-20px] top-[3605.71px]" data-name="Skills">
      <Group22 />
      <div className="absolute flex h-[315px] items-center justify-center left-[571px] top-[3745px] w-[30px]">
        <div className="flex-none rotate-180">
          <L />
        </div>
      </div>
      <Group15 />
      <div className="absolute flex items-center justify-center left-[386px] size-[193.495px] top-[3840.99px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-95.86deg]">
          <SmallCircle1 />
        </div>
      </div>
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[85px] leading-[0] left-[104px] text-[#e6e6e6] text-[0px] text-[18px] top-[3657px] tracking-[-1px] w-[146px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[22px]">{`I have the `}</span>
          <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[22px] tracking-[-1px]">skills</span>
          <span className="leading-[22px]">{` `}</span>
        </p>
        <p className="leading-[22px] mb-0">{`to make or lead, `}</p>
        <p className="leading-[22px]">whatever you need</p>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[106.996px] items-center justify-center left-[410px] top-[3935.5px] w-[154.795px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-6.33deg]">
          <div className="flex flex-col font-['Albert_Sans:Light',sans-serif] font-light h-[91.494px] justify-center leading-[0] relative text-[#e6e6e6] text-[0px] tracking-[-1px] w-[145.591px]">
            <p className="text-[14px] whitespace-pre-wrap">
              <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[16px]">{`I am known for my `}</span>
              <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[16px]">ability</span>
              <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[16px]">{` to build and lead high performing teams.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[62px] items-center justify-center left-[113px] top-[3775px] w-[124px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component2Curve />
        </div>
      </div>
      <div className="absolute flex h-[120.498px] items-center justify-center left-[180px] top-[4281px] w-[137.533px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="flex-none rotate-[-123.8deg]">
          <Component2Curve1 />
        </div>
      </div>
      <UShape />
      <div className="absolute flex h-[110.478px] items-center justify-center left-[121px] top-[4269px] w-[140.157px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[145.07deg]">
          <LargeParallelagram />
        </div>
      </div>
      <Component34Ring />
      <SmallCircle2 />
      <SmallCircle3 />
      <AnchorSkills />
      <Ring />
      <Semi />
      <Square />
      <div className="absolute flex h-[90px] items-center justify-center left-[467px] top-[4127px] w-[60px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L3 />
        </div>
      </div>
      <SmallParallelagram />
      <div className="absolute flex h-[21px] items-center justify-center left-[793px] top-[4196px] w-[63px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <LittleRect />
        </div>
      </div>
      <Group14 />
      <Group16 />
      <Group17 />
      <div className="absolute flex items-center justify-center left-[509px] size-[64.447px] top-[3789.77px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <LeftCurve11 />
        </div>
      </div>
    </div>
  );
}

function AnchorCareer() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Anchor_Career">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g id="Anchor_Career">
          <path d="M30 0H120L90 30H0L30 0Z" fill="var(--fill-0, #D05D49)" id="Rectangle 61" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle6() {
  return (
    <div className="absolute left-[74px] size-[101px] top-[2940.01px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Small Circle">
          <circle cx="50.5" cy="50.5" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[74px] top-[2940.01px]">
      <SmallCircle6 />
      <div className="absolute flex h-[59.035px] items-center justify-center left-[101px] top-[2968.01px] w-[71.197px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-0.72px] w-[65px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle7() {
  return (
    <div className="relative size-[101px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Small Circle">
          <circle cx="50.5" cy="50.5" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[79px] size-[141.873px] top-[3017.01px]">
      <div className="absolute flex items-center justify-center left-[79px] size-[141.873px] top-[3017.01px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-38.34deg]">
          <SmallCircle7 />
        </div>
      </div>
      <div className="absolute flex h-[38.299px] items-center justify-center left-[129.59px] top-[3066.79px] w-[68.385px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-7.57deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-0.72px] w-[65px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle8() {
  return (
    <div className="absolute left-[99px] size-[101px] top-[2843px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Small Circle">
          <circle cx="50.5" cy="50.5" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[99px] top-[2843px]">
      <SmallCircle8 />
      <div className="-translate-x-1/2 absolute flex h-[42.815px] items-center justify-center left-[149.8px] top-[2872.05px] w-[76.169px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-0.72px] w-[71.849px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Square2() {
  return (
    <div className="absolute left-[82px] size-[122px] top-[2583.01px]" data-name="SQUARE">
      <div className="absolute bg-[#16a19d] inset-0" data-name="SQUARE" />
    </div>
  );
}

function L4() {
  return (
    <div className="h-[360px] relative w-[30px]" data-name="L">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgL} />
        <div className="absolute bg-[#6bcd72] inset-0" />
      </div>
    </div>
  );
}

function Square3() {
  return (
    <div className="relative size-[76.066px]" data-name="SQUARE">
      <div className="absolute bg-[#689ba1] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Square4() {
  return (
    <div className="relative size-[37.702px]" data-name="SQUARE">
      <div className="absolute bg-[#aaccd0] inset-0" data-name="SQUARE" />
    </div>
  );
}

function L5() {
  return (
    <div className="absolute h-[60px] left-[74px] top-[2705px] w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BCD72)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function L6() {
  return (
    <div className="absolute bottom-1/2 left-0 right-0 top-0" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BCD72)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L7() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BCD72)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function UShape1() {
  return (
    <div className="h-[120px] relative w-[90px]" data-name="U-shape">
      <L6 />
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-scale-y-100 flex-none h-[60px] w-[90px]">
          <L7 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>{`After 2 years producing CD-ROMs and teaching graduate students in Nottingham, UK, I joined Digit as a junior partner, designer and  programmer in 1995.`}</p>
    </div>
  );
}

function StoryCardNew() {
  return (
    <div className="absolute h-[100.739px] left-[273.17px] top-[2692.87px] w-[470.157px]" data-name="StoryCardNew">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>
        Over an 8 year period Digit made a lot of digital products, celebrated some big awards including 3 BAFTAs, and built the studio up to 50 people. Then we sold to WPP.
      </p>
    </div>
  );
}

function StoryCardNew1() {
  return (
    <div className="absolute h-[100.739px] left-[418.28px] top-[2784.37px] w-[470.157px]" data-name="StoryCardNew">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>
        In 2003 I co-founded AllofUs, branched out into large scale interactive experiences, and onto exciting new devices. AllofUs won lots more awards and 8 years later sold to McCann.
      </p>
    </div>
  );
}

function StoryCardNew2() {
  return (
    <div className="absolute h-[100.739px] left-[249.64px] top-[2892.06px] w-[470.157px]" data-name="StoryCardNew">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>
        I grew the AllofUs US office quickly with big projects for Yale school of Medicine and National Museum of Qatar, then in 2019 we were acquired by Boston Consulting Group (BCG).
      </p>
    </div>
  );
}

function StoryCardNew3() {
  return (
    <div className="absolute h-[100.739px] left-[207.77px] top-[3114.13px] w-[470.157px]" data-name="StoryCardNew">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>{`For the last 5 years I have been leading the North American design team at BCG and working on  transformational digital ecosystems for Healthcare and Finance clients.`}</p>
    </div>
  );
}

function StoryCardNew4() {
  return (
    <div className="absolute h-[100.739px] left-[288.03px] top-[3224.15px] w-[470.157px]" data-name="StoryCardNew">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>{`AllofUs grew it’s client base and delivered huge projects for McCann clients such as IKEA and Nestle. When AllofUs became independent again I moved to San Francisco to start our US office. `}</p>
    </div>
  );
}

function StoryCardNew5() {
  return (
    <div className="absolute h-[100.739px] left-[350.56px] top-[3003.77px] w-[470.157px]" data-name="StoryCardNew">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgL}')`, WebkitTextFillColor: "transparent" }}>
        I was trained as an industrial designer but fast pivoted to digital products - I started by designing a bedside tablet computer for NHS nurses in 1991.
      </p>
    </div>
  );
}

function StoryCardNew6() {
  return (
    <div className="absolute h-[100.739px] left-[421.64px] top-[2601.3px] w-[470.157px]" data-name="StoryCardNew">
      <Frame17 />
    </div>
  );
}

function Career() {
  return (
    <div className="absolute contents left-[-286px] top-[2499.01px]" data-name="Career">
      <div className="absolute flex h-[130.053px] items-center justify-center left-[389.32px] top-[3354.97px] w-[150.432px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-3 -scale-y-100 flex-none skew-x-[-0.37deg]">
          <div className="bg-[#3e6064] h-[122.594px] w-[145.003px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[77px] size-[106.066px] top-[2499.01px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-135 flex-none">
          <AnchorCareer />
        </div>
      </div>
      <Group19 />
      <Group21 />
      <Group20 />
      <Square2 />
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold leading-[0] left-[104px] size-[90px] text-[#e6e6e6] text-[18px] top-[2604.01px] tracking-[-0.72px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['Albert_Sans:Regular',sans-serif] font-normal leading-[22px]">A quick</span>
          <span className="leading-[22px]">{` `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[22px]">career</span>
          <span className="leading-[22px]">{` `}</span>
        </p>
        <p className="font-['Albert_Sans:Regular',sans-serif] font-normal leading-[22px]">snapshot</p>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[-286px] top-[2705px] w-[360px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1793" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[431.58px] size-[79.943px] top-[3511.6px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-3 flex-none">
          <Square3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[456.79px] size-[39.624px] top-[3587.81px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-3 flex-none">
          <Square4 />
        </div>
      </div>
      <L5 />
      <div className="absolute flex h-[90px] items-center justify-center left-[89px] top-[2765px] w-[120px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <UShape1 />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[315.62px] top-[3261.02px] w-[470px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[470px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[238.86px] top-[3140.54px] w-[470.002px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[470.002px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.945px] items-center justify-center left-[378.79px] top-[3037.44px] w-[470.006px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.945px] w-[470.006px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[272.71px] top-[2915.71px] w-[470.002px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[470.002px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[452.87px] top-[2807.94px] w-[470px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[470px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.944px] items-center justify-center left-[299.85px] top-[2716.45px] w-[470.008px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.944px] w-[470.008px]" />
        </div>
      </div>
      <div className="absolute flex h-[88.267px] items-center justify-center left-[446.05px] top-[2630.99px] w-[470.001px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[88.267px] w-[470.001px]" />
        </div>
      </div>
      <div className="absolute flex h-[39.501px] items-center justify-center left-[409.82px] top-[3477.28px] w-[117.222px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-3 -scale-y-100 flex-none skew-x-[-0.2deg]">
          <div className="bg-[#aaccd0] h-[33.483px] w-[115.746px]" />
        </div>
      </div>
      <StoryCardNew />
      <StoryCardNew1 />
      <StoryCardNew2 />
      <StoryCardNew3 />
      <StoryCardNew4 />
      <StoryCardNew5 />
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[299px] text-[#ebf3f4] text-[18px] top-[2656.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">1990 - 1993</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[777px] text-[#aaccd0] text-[18px] top-[2740.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">1993 - 1995</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[287px] text-[#ebf3f4] text-[18px] top-[2849.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">1995-2003</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[762px] text-[#aaccd0] text-[18px] top-[2946.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2003 - 2011</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[231px] text-[#ebf3f4] text-[18px] top-[3055.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2011 - 2016</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[726px] text-[#aaccd0] text-[18px] top-[3173.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2016 - 2020</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[30px] left-[147px] text-[#ebf3f4] text-[18px] top-[3268.01px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2020 - 2025</p>
      <StoryCardNew6 />
    </div>
  );
}

function BigCircle() {
  return (
    <div className="absolute left-[74px] size-[202px] top-[179px]" data-name="Big Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
        <g id="Big Circle">
          <circle cx="101" cy="101" fill="var(--fill-0, #D05D49)" id="Big Circle_2" r="101" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[74px] top-[179px]">
      <BigCircle />
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] left-[105px] text-[#e6e6e6] text-[36px] top-[260px] tracking-[-1.44px] w-[135px] whitespace-pre-wrap">Hello</p>
    </div>
  );
}

function SmallCircle9() {
  return (
    <div className="absolute inset-[60.47%_36.97%_0_21.01%]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundSkillsButton() {
  return (
    <div className="absolute contents inset-[60.47%_36.97%_0_21.01%]" data-name="RoundSkillsButton">
      <SmallCircle9 />
      <div className="absolute flex inset-[68.77%_43.15%_8.12%_27.23%] items-center justify-center">
        <div className="flex-none h-[29.703px] rotate-[30.78deg] w-[64.356px]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] relative size-full text-[#6bcd72] text-[18px] text-center tracking-[-1px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle10() {
  return (
    <div className="absolute inset-[26.48%_57.98%_33.99%_0]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundIntroButton() {
  return (
    <div className="absolute contents inset-[26.48%_57.98%_33.99%_0]" data-name="RoundIntroButton">
      <SmallCircle10 />
      <div className="absolute flex inset-[37.46%_63.02%_45.79%_5.29%] items-center justify-center">
        <div className="flex-none h-[29.703px] rotate-[10.7deg] w-[71.137px]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] relative size-full text-[#6bcd72] text-[18px] text-center tracking-[-1px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle11() {
  return (
    <div className="absolute inset-[41.9%_0_18.58%_57.98%]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundContactButton() {
  return (
    <div className="absolute contents inset-[41.9%_0_18.58%_57.98%]" data-name="RoundContactButton">
      <SmallCircle11 />
      <div className="absolute flex inset-[53.36%_5.08%_29.88%_63.23%] items-center justify-center">
        <div className="flex-none h-[29.703px] rotate-[10.7deg] w-[71.137px]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] relative size-full text-[#6bcd72] text-[18px] text-center tracking-[-1px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function CareerButton() {
  return (
    <div className="absolute contents inset-[0.43%_13.41%_45.58%_29.2%]" data-name="CareerButton">
      <div className="absolute flex inset-[0.43%_13.41%_45.58%_29.2%] items-center justify-center">
        <div className="-rotate-30 flex-none size-[100px]">
          <div className="bg-[#1e3239] size-full" data-name="SQUARE" />
        </div>
      </div>
      <div className="absolute flex inset-[15.42%_25.85%_60.11%_41.7%] items-center justify-center">
        <div className="-rotate-30 flex-none h-[30px] w-[71.849px]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] relative size-full text-[#6bcd72] text-[18px] text-center tracking-[-1px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function AboutButtons() {
  return (
    <div className="absolute h-[253px] left-[222px] top-[41px] w-[238px]" data-name="AboutButtons1">
      <RoundSkillsButton />
      <RoundIntroButton />
      <RoundContactButton />
      <CareerButton />
    </div>
  );
}

function DoubkleArrow() {
  return (
    <div className="h-[100px] relative w-[606.312px]" data-name="DoubkleArrow 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 606.312 100">
        <g clipPath="url(#clip0_1_2924)" id="DoubkleArrow 1">
          <path d={svgPaths.p2e8b1e00} fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2924">
            <rect fill="white" height="100" width="606.312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DoubkleArrow1() {
  return (
    <div className="h-[100px] relative w-[606.312px]" data-name="DoubkleArrow 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 606.312 100">
        <g clipPath="url(#clip0_1_2853)" id="DoubkleArrow 2">
          <path d={svgPaths.p2e8b1e00} fill="var(--fill-0, #AACCD0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2853">
            <rect fill="white" height="100" width="606.312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MidCutRect() {
  return (
    <div className="h-[100px] relative w-[300px]" data-name="MidCutRect 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 100">
        <g clipPath="url(#clip0_1_2918)" id="MidCutRect 1">
          <path d="M300 0L200 100H0V0H300Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2918">
            <rect fill="white" height="100" width="300" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve() {
  return (
    <div className="absolute left-[615px] size-[120px] top-[306px]" data-name="90curve 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g clipPath="url(#clip0_1_2915)" id="90curve 1">
          <path d={svgPaths.p244f5600} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2915">
            <rect fill="white" height="120" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve1() {
  return (
    <div className="relative size-[120px]" data-name="90curve 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g clipPath="url(#clip0_1_2912)" id="90curve 2">
          <path d={svgPaths.p244f5600} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2912">
            <rect fill="white" height="120" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Rectangle() {
  return (
    <div className="h-[30px] relative w-[90px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30">
        <g clipPath="url(#clip0_1_2909)" id="Rectangle 141">
          <path d={svgPaths.p16806300} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2909">
            <rect fill="white" height="30" width="90" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Parallela() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 1">
      <ClipPathGroup />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Parallela1() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 2">
      <ClipPathGroup1 />
    </div>
  );
}

function Parallela2() {
  return (
    <div className="h-[30px] relative w-[125px]" data-name="Parallela125 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g clipPath="url(#clip0_1_2955)" id="Parallela125 3">
          <path d={svgPaths.pd910b80} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2955">
            <rect fill="white" height="30" width="125" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RightCutRect() {
  return (
    <div className="h-[30px] relative w-[60px]" data-name="RightCutRect 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30">
        <g clipPath="url(#clip0_1_2906)" id="RightCutRect 1">
          <path d={svgPaths.pc358e00} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2906">
            <rect fill="white" height="30" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MediumParallela() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MediumParallela1() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve6() {
  return (
    <div className="absolute h-[54px] left-[734px] top-[732px] w-[55px]" data-name="90curve 9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_2897)" id="90curve 9">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2897">
            <rect fill="white" height="54" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve7() {
  return (
    <div className="h-[54px] relative w-[55px]" data-name="90curve 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_2967)" id="90curve 10">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2967">
            <rect fill="white" height="54" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve8() {
  return (
    <div className="relative size-[55px]" data-name="90curve 11">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g clipPath="url(#clip0_1_2891)" id="90curve 11">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2891">
            <rect fill="white" height="55" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve9() {
  return (
    <div className="relative size-[55px]" data-name="90curve 12">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g clipPath="url(#clip0_1_2888)" id="90curve 12">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2888">
            <rect fill="white" height="55" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftCut() {
  return (
    <div className="h-[100px] relative w-[283.333px]" data-name="LeftCut85 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283.333 100">
        <g clipPath="url(#clip0_1_2930)" id="LeftCut85 1">
          <path d={svgPaths.p2ad7fa00} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2930">
            <rect fill="white" height="100" width="283.333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square5() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2885)" id="SQUARE 1">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2885">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square6() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2885)" id="SQUARE 1">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2885">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Landing() {
  return (
    <div className="absolute contents left-[-94.5px] top-[41px]" data-name="Landing">
      <Group10 />
      <AboutButtons />
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[165px] leading-[0] left-[616px] text-[#e6e6e6] text-[0px] text-[18px] top-[448px] tracking-[-1px] w-[266px] whitespace-pre-wrap">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] mb-0">{`Welcome to Selflux, `}</p>
        <p>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{`a showcase of interactive products and experiences by `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#6bb0cd]">Nick Cristea</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#e6e6e6]">,</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{`and the amazingly talented teams, at `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#6bcd72]">BCG X</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">,</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#cfd860]">AllofUs</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">,</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{`and `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#d05d49]">Digit</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">.</span>
        </p>
      </div>
      <div className="absolute flex h-[372.941px] items-center justify-center left-[213px] top-[77px] w-[582.289px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-28 flex-none">
          <DoubkleArrow />
        </div>
      </div>
      <div className="absolute flex h-[582.289px] items-center justify-center left-[124.24px] top-[360.87px] w-[372.941px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-62">
          <DoubkleArrow1 />
        </div>
      </div>
      <div className="absolute flex h-[316.129px] items-center justify-center left-[-12.08px] top-[355.92px] w-[183.342px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-107">
          <MidCutRect />
        </div>
      </div>
      <Component90Curve />
      <div className="absolute flex items-center justify-center left-[765px] size-[120px] top-[306px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve1 />
        </div>
      </div>
      <div className="absolute flex h-[90px] items-center justify-center left-[735px] top-[276px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Rectangle />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[624px] top-[613px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[719px] top-[613px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela1 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[809px] top-[613px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela2 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[594px] top-[613px] w-[60px]">
        <div className="-scale-y-100 flex-none">
          <RightCutRect />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[564px] top-[523px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[904px] top-[524px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela1 />
        </div>
      </div>
      <Component90Curve6 />
      <div className="absolute flex h-[54px] items-center justify-center left-[788px] top-[732px] w-[55px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve7 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[734px] size-[55px] top-[786px]">
        <div className="-scale-y-100 flex-none">
          <Component90Curve8 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[788px] size-[55px] top-[786px]">
        <div className="flex-none rotate-180">
          <Component90Curve9 />
        </div>
      </div>
      <div className="absolute flex h-[300.033px] items-center justify-center left-[179.27px] top-[857.87px] w-[175.824px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[106.38deg]">
          <LeftCut />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[729px] size-[42.426px] top-[233px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[729px] size-[42.426px] top-[190px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square6 />
        </div>
      </div>
      <div className="absolute flex h-[240.608px] items-center justify-center left-[-94.5px] top-[658.81px] w-[508.459px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[16.29deg] skew-x-[1.19deg]">
          <div className="h-[103.499px] relative w-[501.638px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 501.638 103.499">
              <path d={svgPaths.p1583e100} fill="var(--fill-0, #3E6064)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function L8() {
  return (
    <div className="absolute inset-[0_-188.89%_0_188.89%]" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L9() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function SquareBracket() {
  return (
    <div className="absolute h-[60px] left-[612px] top-[1041px] w-[90px]" data-name="Square Bracket">
      <L8 />
      <div className="absolute bg-[#6bb0cd] bottom-1/2 left-full right-[-88.89%] top-0" />
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[60px] rotate-180 w-[90px]">
          <L9 />
        </div>
      </div>
    </div>
  );
}

function L10() {
  return (
    <div className="absolute inset-[0_-188.89%_0_188.89%]" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L11() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function SquareBracket1() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="Square Bracket">
      <L10 />
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[60px] rotate-180 w-[90px]">
          <L11 />
        </div>
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-full right-[-88.89%] top-0">
        <div className="-scale-y-100 flex-none h-[30px] w-[80px]">
          <div className="bg-[#6bb0cd] size-full" />
        </div>
      </div>
    </div>
  );
}

function SmallCircle12() {
  return (
    <div className="absolute left-[689px] size-[100px] top-[1273px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundSkillsButton1() {
  return (
    <div className="absolute contents left-[689px] top-[1273px]" data-name="RoundSkillsButton">
      <SmallCircle12 />
      <div className="-translate-x-1/2 absolute flex h-[58.451px] items-center justify-center left-[739.05px] top-[1294px] w-[70.492px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle13() {
  return (
    <div className="absolute left-[620px] size-[100px] top-[1201px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundIntroButton1() {
  return (
    <div className="absolute contents left-[620px] top-[1201px]" data-name="RoundIntroButton">
      <SmallCircle13 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[670.3px] top-[1228.76px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle14() {
  return (
    <div className="absolute left-[758px] size-[100px] top-[1201px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function RoundContactButton1() {
  return (
    <div className="absolute contents left-[758px] top-[1201px]" data-name="RoundContactButton">
      <SmallCircle14 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[808.19px] top-[1230px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[620px] top-[1201px]">
      <RoundSkillsButton1 />
      <RoundIntroButton1 />
      <RoundContactButton1 />
    </div>
  );
}

function DoubkleArrow2() {
  return (
    <div className="h-[60px] relative w-[363.787px]" data-name="DoubkleArrow 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363.787 60">
        <g clipPath="url(#clip0_1_2894)" id="DoubkleArrow 3">
          <path d={svgPaths.p12dcb9c0} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2894">
            <rect fill="white" height="60" width="363.787" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve2() {
  return (
    <div className="absolute h-[54px] left-[554px] top-[916px] w-[55px]" data-name="90curve 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_2868)" id="90curve 5">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2868">
            <rect fill="white" height="54" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve3() {
  return (
    <div className="h-[54px] relative w-[55px]" data-name="90curve 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_2865)" id="90curve 6">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2865">
            <rect fill="white" height="54" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve4() {
  return (
    <div className="relative size-[55px]" data-name="90curve 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g clipPath="url(#clip0_1_2973)" id="90curve 7">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2973">
            <rect fill="white" height="55" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve5() {
  return (
    <div className="relative size-[55px]" data-name="90curve 8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g clipPath="url(#clip0_1_2862)" id="90curve 8">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2862">
            <rect fill="white" height="55" width="55" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftCutRect() {
  return (
    <div className="h-[30px] relative w-[60px]" data-name="LeftCutRect 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30">
        <g clipPath="url(#clip0_1_2946)" id="LeftCutRect 1">
          <path d={svgPaths.p3d95ac80} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2946">
            <rect fill="white" height="30" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle15() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[856px]" data-name="Small Circle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AnchorContact() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[887px]" data-name="Anchor_Contact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle16() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[918px]" data-name="Small Circle 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle17() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[949px]" data-name="Small Circle 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle18() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[980px]" data-name="Small Circle 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle19() {
  return (
    <div className="absolute left-[773px] size-[30px] top-[1011px]" data-name="Small Circle 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2856)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2856">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Triangle() {
  return (
    <div className="relative size-[60px]" data-name="90_Triangle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_1_2848)" id="90_Triangle 1">
          <path d="M0 60H60V0L0 60Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2848">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[120.208px_120.208px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 60">
        <g id="Group">
          <path d={svgPaths.p1a51df00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function RightCut() {
  return (
    <div className="h-[60px] overflow-clip relative w-[110px]" data-name="RightCut55 1">
      <ClipPathGroup2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[60px_110px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 60">
        <g id="Group">
          <path d={svgPaths.p1a51df00} fill="var(--fill-0, #AACCD0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function RightCut1() {
  return (
    <div className="h-[60px] overflow-clip relative w-[110px]" data-name="RightCut55 3">
      <ClipPathGroup3 />
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="h-[30px] relative w-[90px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30">
        <g clipPath="url(#clip0_1_2964)" id="Rectangle 163">
          <path d={svgPaths.p16806300} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2964">
            <rect fill="white" height="30" width="90" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute contents left-[100px] top-[856px]" data-name="Contact">
      <SquareBracket />
      <div className="absolute flex h-[60px] items-center justify-center left-[612px] top-[1141px] w-[90px]">
        <div className="-scale-y-100 flex-none">
          <SquareBracket1 />
        </div>
      </div>
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[36px] leading-[30px] left-[100px] text-[36px] text-white top-[1110px] tracking-[-1px] w-[295px] whitespace-pre-wrap">Get in touch</p>
      <div className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal h-[198px] leading-[24px] left-[100px] text-[18px] text-white top-[1173px] tracking-[-1px] w-[361px] whitespace-pre-wrap">
        <p className="mb-0">Contact me if you are looking for an experienced design leader to help you innovate your digital product, or physical experience.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">I have access to great talent, love to travel, and can lead multi-skilled teams large and small.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">I have worked with startups and global brands across every industry and platform, and I know how to deliver great results at speed.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[68px] leading-[30px] left-[676px] text-[0px] text-white top-[1091px] tracking-[-1px] w-[145px] whitespace-pre-wrap">
        <p className="mb-0 text-[24px]">415 650 9536</p>
        <p className="text-[18px]">nick@selflux.com</p>
      </div>
      <Group18 />
      <div className="absolute bg-[#6bcd72] h-[60px] left-[378px] top-[1457px] w-[270px]" />
      <p className="-translate-x-1/2 absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[33px] leading-[36px] left-[515.98px] text-[18px] text-center text-white top-[1470px] tracking-[-1px] w-[270px] whitespace-pre-wrap">View professional profile</p>
      <div className="absolute bg-[#6bcd72] h-[60px] left-[677px] top-[1454px] w-[210px]" />
      <p className="-translate-x-1/2 absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[42px] leading-[36px] left-[780.5px] text-[18px] text-center text-white top-[1467px] tracking-[-1px] w-[211px] whitespace-pre-wrap">Download Resume</p>
      <div className="absolute flex items-center justify-center left-[115px] size-[299.663px] top-[1437px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-45">
          <DoubkleArrow2 />
        </div>
      </div>
      <Component90Curve2 />
      <div className="absolute flex h-[54px] items-center justify-center left-[608px] top-[916px] w-[55px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[554px] size-[55px] top-[970px]">
        <div className="-scale-y-100 flex-none">
          <Component90Curve4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[608px] size-[55px] top-[970px]">
        <div className="flex-none rotate-180">
          <Component90Curve5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[635px] size-[63.64px] top-[999px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-135 -scale-y-100 flex-none">
          <LeftCutRect />
        </div>
      </div>
      <SmallCircle15 />
      <AnchorContact />
      <SmallCircle16 />
      <SmallCircle17 />
      <SmallCircle18 />
      <SmallCircle19 />
      <div className="absolute flex items-center justify-center left-[497px] size-[60px] top-[1249px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Component90Triangle />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[504.98px] size-[120.208px] top-[1379px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <RightCut />
        </div>
      </div>
      <div className="absolute flex h-[110px] items-center justify-center left-[228px] top-[1459px] w-[60px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <RightCut1 />
        </div>
      </div>
      <div className="absolute flex h-[90px] items-center justify-center left-[647px] top-[1438px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Rectangle1 />
        </div>
      </div>
    </div>
  );
}

function MediumParallela4() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BigCircle1() {
  return (
    <div className="absolute left-[85px] size-[202px] top-[1699.04px]" data-name="Big Circle">
      <img alt="" className="block max-w-none size-full" height="202" src={imgBigCircle} width="202" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[85px] top-[1699.04px]">
      <BigCircle1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[380.47px] top-[1744.04px]">
      <div className="absolute h-[151.077px] left-[380.47px] top-[1744.04px] w-[115.529px]" data-name="1 997">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.29%] left-[-55%] max-w-none top-[-12.44%] w-[213.33%]" src={img1997} />
        </div>
      </div>
    </div>
  );
}

function SmallParallelagram1() {
  return (
    <div className="absolute h-[30px] left-[120px] top-[1900.04px] w-[120px]" data-name="Small-Parallelagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g id="Small-Parallelagram">
          <path d="M30 0H120L90 30H0L30 0Z" fill="var(--fill-0, #689BA1)" id="Rectangle 61" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle20() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Small Circle">
          <circle cx="12" cy="12" fill="var(--fill-0, #6BCD72)" id="Small Circle_2" r="12" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle21() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Small Circle">
          <circle cx="12" cy="12" fill="var(--fill-0, #16A19D)" id="Small Circle_2" r="12" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle22() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Small Circle">
          <circle cx="12" cy="12" fill="var(--fill-0, #942976)" id="Small Circle_2" r="12" />
        </g>
      </svg>
    </div>
  );
}

function L12() {
  return (
    <div className="h-[462px] relative w-[30px]" data-name="L">
      <div className="absolute bg-[#689ba1] inset-0" data-name="L" />
    </div>
  );
}

function SmallCircle23() {
  return (
    <div className="absolute left-[43px] size-[100px] top-[1930.04px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[43px] top-[1930.04px]">
      <SmallCircle23 />
      <div className="absolute flex h-[58.451px] items-center justify-center left-[69.73px] top-[1957.76px] w-[70.492px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle24() {
  return (
    <div className="absolute left-[93px] size-[100px] top-[2016.04px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[93px] top-[2016.04px]">
      <SmallCircle24 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[143.3px] top-[2044.8px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Square7() {
  return (
    <div className="relative size-[90px]" data-name="SQUARE">
      <div className="absolute bg-[#1e3239] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[120px] size-[166.951px] top-[1908.04px]">
      <div className="absolute flex items-center justify-center left-[142.23px] size-[122.501px] top-[1930.27px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-60.75deg]">
          <Square7 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[77.398px] items-center justify-center left-[199.7px] top-[1952.66px] w-[60.997px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-61.09deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle25() {
  return (
    <div className="absolute left-[474px] size-[64px] top-[2175px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Small Circle">
          <circle cx="32" cy="32" fill="var(--fill-0, #D05D49)" id="Small Circle_2" r="32" />
        </g>
      </svg>
    </div>
  );
}

function ETop() {
  return (
    <div className="absolute h-[62px] left-[770px] top-[2347.04px] w-[100px]" data-name="E-top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 62">
        <g id="E-top">
          <path d={svgPaths.p108df880} fill="var(--fill-0, #CFD860)" id="E-top_2" />
        </g>
      </svg>
    </div>
  );
}

function L13() {
  return (
    <div className="h-[676px] relative w-[93px]" data-name="L">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgL} />
        <div className="absolute bg-[#689ba1] inset-0" />
      </div>
    </div>
  );
}

function L14() {
  return (
    <div className="absolute inset-[0_0_33.33%_0]" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #942976)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L15() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #942976)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function EmptyBox() {
  return (
    <div className="relative size-[90px]" data-name="Empty-Box">
      <L14 />
      <div className="absolute flex inset-[33.33%_0_0_0] items-center justify-center">
        <div className="flex-none h-[60px] rotate-180 w-[90px]">
          <L15 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[19.64px] pt-[9px] text-center top-[18.98px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[38px] leading-[20px] relative shrink-0 text-[#3e6064] text-[24px] w-[153px]">2</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[101px] leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[-1px] w-[153px]">Invigorating physical experiences that bring people together</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[216.938px] left-[279px] top-[2190.04px] w-[226.631px]" data-name="Component 19">
      <div className="absolute bg-[#cfd860] inset-[5.59%_13.58%_13.02%_4.12%]" />
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[19.64px] pt-[9px] text-center top-[18.98px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[38px] leading-[20px] relative shrink-0 text-[#3e6064] text-[24px] w-[153px]">3</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[101px] leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[-1px] w-[153px]">Streamlined, access to advanced healthcare knowledge and services</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[216.938px] left-[492px] top-[2200.04px] w-[226.631px]" data-name="Component 20">
      <div className="absolute bg-[#6bb0cd] inset-[5.59%_13.58%_13.02%_4.12%]" />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[19.64px] pt-[9px] text-center top-[18.98px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[38px] leading-[20px] relative shrink-0 text-[#3e6064] text-[24px] w-[153px]">4</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[101px] leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[-1px] w-[153px]">Intelligent interfaces for advanced human machine relationships</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute h-[216.938px] left-[700px] top-[2157.04px] w-[226.631px]" data-name="Component 21">
      <div className="absolute bg-[#6bcd72] inset-[5.59%_13.58%_13.02%_4.12%]" />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[19.64px] pt-[9px] text-center top-[18.98px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[38px] leading-[20px] relative shrink-0 text-[#3e6064] text-[24px] w-[153px]">1</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[101px] leading-[18px] not-italic relative shrink-0 text-[16px] text-black tracking-[-1px] w-[153px]">{`Human first products for positive societal & inter-personal communication`}</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[216.938px] left-[79px] top-[2187.03px] w-[226.631px]" data-name="Component 18">
      <div className="absolute bg-[#aaccd0] inset-[5.59%_13.58%_13.02%_4.12%]" />
      <Frame21 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #0076C2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Parallela3() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 4">
      <ClipPathGroup4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #0076C2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Parallela6() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 7">
      <ClipPathGroup5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #0076C2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Parallela5() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 6">
      <ClipPathGroup6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[-1.2%_0.29%_1.2%_-0.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.36px_-0.361px] mask-size-[125px_30px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 30">
        <g id="Group">
          <path d={svgPaths.p11936f80} fill="var(--fill-0, #0076C2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Parallela4() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 5">
      <ClipPathGroup7 />
    </div>
  );
}

function MediumParallela2() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MediumParallela3() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MediumParallela5() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_2903)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2903">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square8() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square9() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AnchorIntro() {
  return (
    <div className="relative size-[30px]" data-name="Anchor_Intro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square10() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square11() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square12() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1580)" id="SQUARE 9">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #1E3239)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1580">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square13() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_2825)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2825">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Intro() {
  return (
    <div className="absolute contents left-[-286px] top-[1529.04px]" data-name="Intro">
      <div className="absolute flex h-[120px] items-center justify-center left-[496px] top-[1715.04px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela4 />
        </div>
      </div>
      <div className="absolute flex h-[110px] items-center justify-center left-[452px] top-[2065.03px] w-[462px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#3e6064] h-[110px] w-[462px]" />
        </div>
      </div>
      <div className="absolute flex h-[201.37px] items-center justify-center left-[76.68px] top-[2213.07px] w-[219.645px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[169.45deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <div className="absolute flex h-[193.448px] items-center justify-center left-[507px] top-[2216.04px] w-[213px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[172.24deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <div className="absolute flex h-[193.708px] items-center justify-center left-[305px] top-[2215.04px] w-[213.22px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-172.15deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <Group8 />
      <Group9 />
      <SmallParallelagram1 />
      <div className="absolute bg-[#3e6064] h-[96px] left-[311px] top-[1994.03px] w-[568px]" />
      <div className="absolute bg-[#3e6064] h-[101px] left-[616px] top-[1832.03px] w-[279px]" />
      <div className="absolute flex items-center justify-center left-[304px] size-[24px] top-[2384.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle20 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[259px] size-[24px] top-[2384.03px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle21 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[687px] size-[24px] top-[2385.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle22 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[-286px] top-[1900px] w-[462px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L12 />
        </div>
      </div>
      <Group11 />
      <Group13 />
      <Group12 />
      <div className="absolute flex h-[87.233px] items-center justify-center left-[382.29px] top-[2068.04px] w-[462.418px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[179.71deg]">
          <div className="bg-[#cae0e2] h-[84.932px] w-[462px]" />
        </div>
      </div>
      <div className="absolute flex h-[91.159px] items-center justify-center left-[400.37px] top-[2082.89px] w-[433.861px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.29deg]">
          <p className="font-['Cutive_Mono:Regular',sans-serif] h-[89px] leading-[18px] not-italic relative text-[#0c1517] text-[16px] tracking-[-2px] w-[433.423px] whitespace-pre-wrap">I remain passionate about the creative potential for technology to improve human existence and am currently focused on solutions across four key areas.</p>
        </div>
      </div>
      <div className="absolute bg-[#cae0e2] h-[85px] left-[283.51px] top-[1968.04px] w-[550px]" />
      <p className="absolute font-['Cutive_Mono:Regular',sans-serif] h-[54px] leading-[18px] left-[311px] not-italic text-[#0c1517] text-[16px] top-[1984.04px] tracking-[-2px] w-[509px] whitespace-pre-wrap">My career began with the design of a concept tablet for the NHS in 1991 and I have delivered over 160 successful projects for global brands and innovative startups since then.</p>
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[25px] leading-[30px] left-[115px] text-[#e6e6e6] text-[24px] top-[1784.04px] tracking-[-1px] w-[184px] whitespace-pre-wrap">Hello again</p>
      <div className="absolute flex h-[176.4px] items-center justify-center left-[730px] top-[2179.04px] w-[198.343px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-177.78deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <SmallCircle25 />
      <ETop />
      <div className="absolute flex h-[93px] items-center justify-center left-[144px] top-[2408.04px] w-[676px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1793" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L13 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[233px] size-[126.263px] top-[2118.58px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="flex-none rotate-[-37.76deg]">
          <EmptyBox />
        </div>
      </div>
      <Component8 />
      <Component9 />
      <Component10 />
      <Component7 />
      <div className="absolute flex h-[30px] items-center justify-center left-[351px] top-[1714.04px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela3 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[401px] top-[1894.04px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela6 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[353px] top-[1894.04px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela5 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[401px] top-[1714.04px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela4 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[352px] top-[1714.04px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela2 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[352px] top-[1804.04px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela3 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[496px] top-[1805.04px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1572.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square8 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1529.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square9 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1658.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AnchorIntro />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1615.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square10 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1701.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square11 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[644px] size-[42.426px] top-[1787.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square12 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[641px] size-[42.426px] top-[1744.04px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square13 />
        </div>
      </div>
      <div className="absolute bg-[#cae0e2] h-[123px] left-[580px] top-[1783.04px] w-[297px]" />
      <p className="absolute font-['Cutive_Mono:Regular',sans-serif] h-[57px] leading-[18px] left-[601px] not-italic text-[#0c1517] text-[16px] top-[1799.04px] tracking-[-2px] w-[262px] whitespace-pre-wrap">I’m Nick Cristea, an interactive designer with a rich history of creating potent products and experiences across industries and platforms.</p>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-[961px]" data-name="About-Content">
      <Skills />
      <Career />
      <Landing />
      <div className="absolute bg-[#6bb0cd] h-[423px] left-[62px] top-[1036px] w-[435px]" />
      <Contact />
      <Intro />
    </div>
  );
}

function Center() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1024px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Center">
      <div className="bg-[#0a4947] h-[120px] shadow-[10px_10px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" />
      <AboutContent />
      <div className="bg-[#0a4947] h-[120px] shadow-[10px_10px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" />
    </div>
  );
}

function Switch() {
  return (
    <div className="col-1 h-[167px] ml-[69.68px] mt-[428.5px] relative row-1 w-[56.318px]" data-name="Switch">
      <div className="absolute inset-[0_-4.76%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 167">
          <g id="Switch">
            <circle cx="29.5" cy="29.5" fill="var(--fill-0, #1E3239)" id="Lamp" r="29.5" />
            <g id="Pull">
              <circle cx="27.1374" cy="159.5" fill="var(--fill-0, #1E3239)" id="Ellipse 10" r="7.5" transform="rotate(0.206687 27.1374 159.5)" />
              <line id="Line 92" stroke="var(--stroke-0, #1E3239)" x1="27.4999" x2="27.1572" y1="59.0001" y2="153.999" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function RightBorder() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="RightBorder">
      <div className="bg-[#0a4947] col-1 h-[740px] ml-0 mt-[150px] row-1 shadow-[-10px_4px_40px_0px_rgba(0,0,0,0.25)] w-[210px]" />
      <div className="bg-[#0a4947] col-1 h-[1024px] ml-0 mt-0 row-1 w-[210px]" />
      <Switch />
    </div>
  );
}

export default function AboutParent() {
  return (
    <div className="bg-[#0a4947] content-stretch flex items-center py-[116px] relative size-full" data-name="About_Parent">
      <NewWebSideNav />
      <Center />
      <RightBorder />
    </div>
  );
}