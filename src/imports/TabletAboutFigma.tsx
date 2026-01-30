import React from "react";
import svgPaths from "./svg-tablet-about-figma";
import imgAnchorCareer from "../assets/tablet-about/079a755a898474044bc532d2d9f2d1482826beb4.png";
import imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice from "../assets/tablet-about/8e82c1c2ec3cf79fa4cf777281927b745104c8c9.png";
import imgSmallCircle from "../assets/tablet-about/f5f18e2718ff7f58f9e4ec94a5c3fdd643df54b6.png";
import imgSmallCircle1 from "../assets/tablet-about/cc0c32e22cb9619f791823ba82ccc22313a5a13b.png";
import imgSmallCircle2 from "../assets/tablet-about/fd3980313444392dabc1579447aa28f420ef196b.png";
import imgSmallCircle3 from "../assets/tablet-about/f40e367f39aeaebd59179a4ef56b55ca91a076dd.png";
import imgETop from "../assets/tablet-about/e51fc0107345b3faa3299f9e129088bf661fe8b5.png";
import img1997 from "../assets/tablet-about/41429ae03e691a003f76dc061333ad2451d2a5a2.png";
import imgBigCircle from "../assets/tablet-about/328e6d9d3c6d04881b04c2c74084319dbd1bdc8c.png";
import imgSmallParallelagram from "../assets/tablet-about/a5ea30fbff7255548eba9dbad42de2267f7b5e20.png";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-tablet-about-groups";

function Hamburger() {
  return (
    <div className="absolute inset-[0_67.17%_0_0]" data-name="Hamburger">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2627 27.9571">
        <g id="Hamburger">
          <path d={svgPaths.p1a61980} fill="var(--fill-0, #CAE0E2)" id="Union" />
          <path d={svgPaths.pec6d4f0} fill="var(--fill-0, #CAE0E2)" id="Union_2" />
          <path d={svgPaths.p5fcbb80} fill="var(--fill-0, #CAE0E2)" id="Union_3" />
        </g>
      </svg>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute inset-[2.93%_13.04%_94.73%_17.39%]" data-name="MobileMenu">
      <Hamburger />
      <div className="absolute bottom-1/4 flex flex-col font-['Albert_Sans:Black',sans-serif] font-black justify-center leading-[0] left-[44.44%] right-0 text-[#cae0e2] text-[14px] top-[29.17%]">
        <p className="leading-[30px] whitespace-pre-wrap">MENU</p>
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[37.85%_0_3.61%_0] items-start justify-end" data-name="SectionTitle">
      <div className="flex h-[576px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none w-full">
          <div className="flex flex-col font-['Albert_Sans:Bold',sans-serif] font-bold h-[115px] justify-center leading-[0] relative text-[#6bcd72] text-[60px] tracking-[-2px] w-full">
            <p className="leading-[24px] whitespace-pre-wrap">About</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletMenu() {
  return (
    <div className="h-[1194px] relative shrink-0 w-[115px]" data-name="TabletMenu">
      <div className="absolute bg-[#d9d9d9] inset-[9.63%_0] shadow-[10px_0px_40px_0px_rgba(0,0,0,0.25)]" data-name="ShadowBox" />
      <div className="absolute inset-0" data-name="LeftBlackBar" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 73, 71) 0%, rgb(10, 73, 71) 100%), linear-gradient(90deg, rgb(230, 230, 230) 0%, rgb(230, 230, 230) 100%)" }} />
      <MobileMenu />
      <SectionTitle />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[19.98px] top-[4827px]">
      <div className="absolute bg-[#689ba1] h-[31px] left-[19.98px] top-[4827px] w-[700px]" />
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
    <div className="relative size-[176.416px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176.416 176.416">
        <g id="Small Circle">
          <circle cx="88.2082" cy="88.2082" fill="var(--fill-0, #16A19D)" id="Small Circle_2" r="88.2082" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Inspiring</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Sees, communicates and builds products for the future</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute left-[329.98px] size-[160px] top-[4507px]" data-name="Component 9">
      <div className="absolute bg-[#5d4787] inset-0" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Empowering</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Elevates people and teams to design amazing products</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-[288.98px] size-[160px] top-[4667px]" data-name="Component 10">
      <div className="absolute bg-[#d05d49] inset-0" />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-[#e6e6e6] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[18px] w-full">Industrious</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[14px] w-full">Works fast towards high quality volume outputs</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute left-[139.98px] size-[160px] top-[4477px]" data-name="Component 11">
      <div className="absolute bg-[#95456e] inset-0" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Grounded</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Driven by passion for the creation of great design not ego</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute left-[92.98px] size-[160px] top-[4667px]" data-name="Component 12">
      <div className="absolute bg-[#6bcd72] inset-0" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Nimble</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Driven by passion for the creation of great design not ego</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute left-[420.97px] size-[160px] top-[4326.01px]" data-name="Component 13">
      <div className="absolute bg-[#e6e6e6] inset-0" />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Honest</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Leads with integrity, speaks truth to power</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute left-[504.99px] size-[160px] top-[4486px]" data-name="Component 14">
      <div className="absolute bg-[#cfd860] inset-0" />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[normal] left-[13.6px] text-center top-[19.62px] w-[133.709px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[17px] relative shrink-0 text-[#3e6064] text-[18px] w-full">Calm</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[78.491px] not-italic relative shrink-0 text-[#1e3239] text-[14px] w-full">Leverages breadth and depth of expertise to navigate challenges</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute left-[472.98px] size-[160px] top-[4667px]" data-name="Component 15">
      <div className="absolute bg-[#6bb0cd] inset-0" />
      <Frame9 />
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
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #CAE0E2)" id="Left-curve" stroke="var(--stroke-0, #CAE0E2)" />
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
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #CAE0E2)" id="Left-curve" stroke="var(--stroke-0, #CAE0E2)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve1() {
  return (
    <div className="relative size-full" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve2 />
        </div>
      </div>
      <LeftCurve3 />
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

function Component34Ring() {
  return (
    <div className="absolute left-[326.98px] size-[124px] top-[4073px]" data-name="3/4 Ring">
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-rotate-90 flex-none h-[124px] w-[62px]">
          <Component2Curve1 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[62.00001525878906/62] flex items-center justify-center left-[48.39%] right-[3.23%] top-[calc(50%-30px)]">
        <div className="flex-none rotate-180 size-[60px]">
          <LeftCurve4 />
        </div>
      </div>
    </div>
  );
}

function SmallCircle1() {
  return (
    <div className="absolute left-[442.98px] size-[30px] top-[4295px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Small Circle">
          <circle cx="15" cy="15" fill="var(--fill-0, #CFD860)" id="Small Circle_2" r="15" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle2() {
  return (
    <div className="absolute left-[462.98px] size-[20px] top-[4487px]" data-name="Small Circle">
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
    <div className="absolute left-[313px] size-[60px] top-[4254.01px]" data-name="Anchor_Skills">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Anchor_Skills">
          <circle cx="30" cy="30" fill="var(--fill-0, #D05D49)" id="Big Circle" r="30" />
        </g>
      </svg>
    </div>
  );
}

function LeftCurve5() {
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

function LeftCurve6() {
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

function Component2Curve2() {
  return (
    <div className="relative size-full" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve5 />
        </div>
      </div>
      <LeftCurve6 />
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

function Ring() {
  return (
    <div className="absolute left-[452.98px] size-[124px] top-[4197px]" data-name="Ring">
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-rotate-90 flex-none h-[124px] w-[62px]">
          <Component2Curve2 />
        </div>
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-0 right-0 top-0">
        <div className="-scale-y-100 flex-none h-[124px] rotate-90 w-[62px]">
          <Component2Curve3 />
        </div>
      </div>
    </div>
  );
}

function Semi() {
  return (
    <div className="absolute h-[40px] left-[591.99px] top-[4445px] w-[79px]" data-name="Semi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 40">
        <g id="Semi">
          <path clipRule="evenodd" d={svgPaths.p3db90400} fill="var(--fill-0, #6BCD72)" fillRule="evenodd" id="Semi_2" />
        </g>
      </svg>
    </div>
  );
}

function L1() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #689BA1)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SmallParallelagram() {
  return (
    <div className="absolute h-[30px] left-[64.98px] top-[4637px] w-[120px]" data-name="Small-Parallelagram">
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

function LargeParallelagram() {
  return (
    <div className="h-[30px] relative w-[150px]" data-name="LargeParallelagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 30">
        <g id="LargeParallelagram">
          <path d="M30 0H150L120 30H0L30 0Z" fill="var(--fill-0, #3E6064)" id="Rectangle 61" />
        </g>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="relative size-[90px]" data-name="SQUARE">
      <div className="absolute bg-[#1e3239] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[107px] size-[141.869px] top-[4155.01px]">
      <div className="absolute flex items-center justify-center left-[117.16px] size-[121.551px] top-[4165.16px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-27.75deg]">
          <Square />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[60.292px] items-center justify-center left-[174.85px] top-[4193.6px] w-[77.512px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-28.08deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle3() {
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

function Group16() {
  return (
    <div className="absolute contents left-[19px] size-[121.309px] top-[4184.01px]">
      <div className="absolute flex items-center justify-center left-[19px] size-[121.309px] top-[4184.01px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-75.93deg]">
          <SmallCircle3 />
        </div>
      </div>
      <div className="absolute flex h-[66.576px] items-center justify-center left-[56.08px] top-[4201.44px] w-[66.444px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45.15deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle4() {
  return (
    <div className="absolute left-[140px] size-[100px] top-[4066.01px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[140px] top-[4066.01px]">
      <SmallCircle4 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[190.3px] top-[4094.76px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Square1() {
  return (
    <div className="absolute left-[21px] size-[30px] top-[4165.01px]" data-name="SQUARE">
      <div className="absolute bg-[#689ba1] inset-0" data-name="SQUARE" />
    </div>
  );
}

function SmallCircle5() {
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

function Group17() {
  return (
    <div className="absolute contents left-[46px] size-[175.481px] top-[3847.01px]">
      <div className="absolute flex items-center justify-center left-[46px] size-[175.481px] top-[3847.01px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-89.52deg]">
          <SmallCircle5 />
        </div>
      </div>
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
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
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
              <path d={svgPaths.p13ed5d80} fill="var(--fill-0, #AACCD0)" id="Left-curve" stroke="var(--stroke-0, #AACCD0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component2Curve4() {
  return (
    <div className="h-[124px] relative w-[62px]" data-name="2curve">
      <div className="-translate-y-1/2 absolute aspect-[60/60] flex items-center justify-center left-[3.23%] right-0 top-[calc(50%-32px)]">
        <div className="flex-none rotate-90 size-[60px]">
          <LeftCurve9 />
        </div>
      </div>
      <LeftCurve10 />
    </div>
  );
}

function L2() {
  return (
    <div className="absolute bottom-1/2 left-0 right-0 top-0" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #689BA1)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L3() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #689BA1)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function UShape() {
  return (
    <div className="absolute h-[120px] left-[50.26px] top-[4075.3px] w-[90px]" data-name="U-shape">
      <L2 />
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-1/2">
        <div className="-scale-y-100 flex-none h-[60px] w-[90px]">
          <L3 />
        </div>
      </div>
    </div>
  );
}

function AnchorCareer() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Anchor_Career">
      <img alt="" className="block max-w-none size-full" height="30" src={imgAnchorCareer} width="120" />
    </div>
  );
}

function Skills() {
  return (
    <div className="absolute contents left-[-19.02px] top-[2783px]" data-name="Skills">
      <Group26 />
      <div className="absolute flex h-[315px] items-center justify-center left-[373.98px] top-[4195px] w-[30px]">
        <div className="flex-none rotate-180">
          <L />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[188.98px] size-[193.495px] top-[4291px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-95.86deg]">
          <SmallCircle />
        </div>
      </div>
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
      <div className="-translate-y-1/2 absolute flex h-[106.996px] items-center justify-center left-[212.98px] top-[4385.5px] w-[154.795px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-6.33deg]">
          <div className="flex flex-col font-['Albert_Sans:Light',sans-serif] font-light h-[91.494px] justify-center leading-[0] relative text-[#e6e6e6] text-[0px] w-[145.591px]">
            <p className="text-[14px] whitespace-pre-wrap">
              <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[16px]">{`I am known for my ability to `}</span>
              <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[16px]">build</span>
              <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[16px]">{` and `}</span>
              <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[16px]">lead</span>
              <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[16px]">{` high performing teams.`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[120.498px] items-center justify-center left-[-19.02px] top-[4731px] w-[137.533px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="flex-none rotate-[-123.8deg]">
          <Component2Curve />
        </div>
      </div>
      <Component34Ring />
      <SmallCircle1 />
      <SmallCircle2 />
      <AnchorSkills />
      <Ring />
      <Semi />
      <div className="absolute flex h-[90px] items-center justify-center left-[269.98px] top-[4577px] w-[60px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L1 />
        </div>
      </div>
      <SmallParallelagram />
      <div className="absolute flex h-[21px] items-center justify-center left-[545.99px] top-[4646px] w-[63px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <LittleRect />
        </div>
      </div>
      <div className="absolute flex h-[152.45px] items-center justify-center left-[632px] top-[4682px] w-[70.275px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-106.04deg]">
          <LargeParallelagram />
        </div>
      </div>
      <Group19 />
      <Group16 />
      <Group18 />
      <Square1 />
      <Group17 />
      <div className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal h-[85px] leading-[0] left-[64px] text-[#e6e6e6] text-[0px] text-[18px] top-[3898.01px] tracking-[-1px] w-[146px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[24px]">{`I have the `}</span>
          <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[24px]">skills</span>
          <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[24px]">{` `}</span>
        </p>
        <p className="font-['Albert_Sans:Light',sans-serif] font-light leading-[24px] mb-0">{`to make or lead, `}</p>
        <p className="font-['Albert_Sans:Light',sans-serif] font-light leading-[24px]">whatever you need</p>
      </div>
      <div className="absolute flex h-[62px] items-center justify-center left-[73.26px] top-[4016.3px] w-[124px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Component2Curve4 />
        </div>
      </div>
      <UShape />
      <div className="absolute flex items-center justify-center left-[103px] size-[106.066px] top-[2783px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "34" } as React.CSSProperties}>
        <div className="-rotate-135 flex-none">
          <AnchorCareer />
        </div>
      </div>
    </div>
  );
}

function StoryCard() {
  return (
    <div className="h-[100.739px] relative w-[179.55px]" data-name="StoryCard">
      <div className="absolute flex inset-[-1.08%_17.12%_67.37%_18.4%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[33.483px] rotate-[179.76deg] skew-x-[-0.24deg] w-[115.746px]">
          <div className="bg-[#aaccd0] size-full" />
        </div>
      </div>
    </div>
  );
}

function Square2() {
  return (
    <div className="relative size-[76.066px]" data-name="SQUARE">
      <div className="absolute bg-[#689ba1] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Square3() {
  return (
    <div className="relative size-[37.702px]" data-name="SQUARE">
      <div className="absolute bg-[#aaccd0] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>{`After 2 years producing CD-ROMs and teaching graduate students in Nottingham, UK, I joined Digit as a junior partner, designer and  programmer in 1995.`}</p>
    </div>
  );
}

function StoryCardNew() {
  return (
    <div className="absolute h-[100.739px] left-[48.97px] top-[3127.58px] w-[470.157px]" data-name="StoryCardNew">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>
        Over an 8 year period Digit made a lot of digital products, celebrated some big awards including 3 BAFTAs, and built the studio up to 50 people. Then we sold to WPP.
      </p>
    </div>
  );
}

function StoryCardNew1() {
  return (
    <div className="absolute h-[100.739px] left-[194.08px] top-[3234.08px] w-[470.157px]" data-name="StoryCardNew">
      <Frame1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>
        In 2003 I co-founded AllofUs, branched out into large scale interactive experiences, and onto exciting new devices. AllofUs won lots more awards and 8 years later sold to McCann.
      </p>
    </div>
  );
}

function StoryCardNew2() {
  return (
    <div className="absolute h-[100.739px] left-[45.43px] top-[3341.77px] w-[470.157px]" data-name="StoryCardNew">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#aaccd0] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>
        I grew the AllofUs US office quickly with big projects for Yale school of Medicine and National Museum of Qatar, then in 2019 we were acquired by Boston Consulting Group (BCG).
      </p>
    </div>
  );
}

function StoryCardNew3() {
  return (
    <div className="absolute h-[100.739px] left-[43.57px] top-[3563.83px] w-[470.157px]" data-name="StoryCardNew">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>{`For the last 5 years I have been leading the North American design team at BCG and working on  transformational digital ecosystems for Healthcare and Finance clients.`}</p>
    </div>
  );
}

function StoryCardNew4() {
  return (
    <div className="absolute h-[100.739px] left-[183.83px] top-[3673.85px] w-[470.157px]" data-name="StoryCardNew">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>{`AllofUs grew it’s client base and delivered huge projects for McCann clients such as IKEA and Nestle. When AllofUs became independent again I moved to San Francisco to start our US office. `}</p>
    </div>
  );
}

function StoryCardNew5() {
  return (
    <div className="absolute h-[100.739px] left-[205.36px] top-[3452.47px] w-[470.157px]" data-name="StoryCardNew">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#cae0e2] content-stretch flex items-center left-[0.06px] px-[15px] py-[10px] top-[17px] w-[480px]">
      <p className="bg-[top_left,center] bg-clip-text bg-size-[auto_auto,cover] flex-[1_0_0] font-['Cutive_Mono:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#0c1517] text-[16px] tracking-[-1px] whitespace-pre-wrap" style={{ backgroundRepeat: "repeat, no-repeat", backgroundImage: `linear-gradient(90deg, rgb(12, 21, 23) 0%, rgb(12, 21, 23) 100%), url('${imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice}')`, WebkitTextFillColor: "transparent" }}>
        I was trained as an industrial designer but fast pivoted to digital products - I started by designing a bedside tablet computer for NHS nurses in 1991.
      </p>
    </div>
  );
}

function StoryCardNew6() {
  return (
    <div className="absolute h-[100.739px] left-[167.43px] top-[3021px] w-[470.157px]" data-name="StoryCardNew">
      <Frame14 />
    </div>
  );
}

function L4() {
  return (
    <div className="h-[53px] relative w-[30px]" data-name="L">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice} />
        <div className="absolute bg-[#6bcd72] inset-0" />
      </div>
    </div>
  );
}

function L5() {
  return (
    <div className="absolute h-[60px] left-[20px] top-[2898px] w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #1E3239)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SmallCircle6() {
  return (
    <div className="absolute left-[367px] size-[101px] top-[2876px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Small Circle">
          <circle cx="50.5" cy="50.5" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[367px] top-[2876px]">
      <SmallCircle6 />
      <div className="-translate-x-1/2 absolute flex h-[42.815px] items-center justify-center left-[417.8px] top-[2905.04px] w-[76.169px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle7() {
  return (
    <div className="absolute left-[558px] size-[101px] top-[2882px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Small Circle">
          <circle cx="50.5" cy="50.5" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50.5" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[558px] top-[2882px]">
      <SmallCircle7 />
      <div className="absolute flex h-[59.035px] items-center justify-center left-[585px] top-[2910px] w-[71.197px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[65px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle8() {
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

function Group25() {
  return (
    <div className="absolute contents left-[442px] size-[141.873px] top-[2827px]">
      <div className="absolute flex items-center justify-center left-[442px] size-[141.873px] top-[2827px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-38.34deg]">
          <SmallCircle8 />
        </div>
      </div>
      <div className="absolute flex h-[38.299px] items-center justify-center left-[492.59px] top-[2876.79px] w-[68.385px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-7.57deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[65px] whitespace-pre-wrap">Intro</p>
        </div>
      </div>
    </div>
  );
}

function Square4() {
  return (
    <div className="absolute left-[108px] size-[122px] top-[2867px]" data-name="SQUARE">
      <div className="absolute bg-[#16a19d] inset-0" data-name="SQUARE" />
    </div>
  );
}

function L6() {
  return (
    <div className="absolute bottom-1/2 left-0 right-0 top-0" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #689BA1)" id="Union" />
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
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #689BA1)" id="Union" />
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

function Career() {
  return (
    <div className="absolute contents left-[20px] top-[2827px]" data-name="Career">
      <div className="absolute flex h-[162.063px] items-center justify-center left-[481.83px] top-[3761.88px] w-[105.204px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[176.64deg] skew-x-[-1.97deg]">
          <div className="bg-[#3e6064] h-[156.153px] w-[101.591px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[220.73px] top-[3700.72px] w-[465.254px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[465.254px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[76px] top-[3590.23px] w-[466.999px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[466.999px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.945px] items-center justify-center left-[233.95px] top-[3487.14px] w-[475.847px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.945px] w-[475.847px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[80.7px] top-[3365.41px] w-[462.153px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[462.153px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.946px] items-center justify-center left-[206.8px] top-[3262.64px] w-[485.738px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.946px] w-[485.737px]" />
        </div>
      </div>
      <div className="absolute flex h-[103.944px] items-center justify-center left-[89.69px] top-[3151.16px] w-[455.309px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[103.944px] w-[455.309px]" />
        </div>
      </div>
      <div className="absolute flex h-[88.267px] items-center justify-center left-[202.04px] top-[3064.69px] w-[462.605px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#3e6064] h-[88.267px] w-[462.605px]" />
        </div>
      </div>
      <div className="absolute flex h-[107.032px] items-center justify-center left-[443.8px] top-[3915.71px] w-[183.004px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.03deg]">
          <StoryCard />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[499.8px] size-[79.108px] top-[3949.71px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.34deg]">
          <Square2 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[522.8px] size-[39.21px] top-[4026.71px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-2.34deg]">
          <Square3 />
        </div>
      </div>
      <StoryCardNew />
      <StoryCardNew1 />
      <StoryCardNew2 />
      <StoryCardNew3 />
      <StoryCardNew4 />
      <StoryCardNew5 />
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[55px] text-[#ebf3f4] text-[18px] top-[3062px] tracking-[-1px] w-[112px] whitespace-pre-wrap">1990 - 1993</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[562.8px] text-[#aaccd0] text-[18px] top-[3178.71px] tracking-[-1px] w-[151px] whitespace-pre-wrap">1993 - 1995</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[62.8px] text-[#ebf3f4] text-[18px] top-[3298.71px] tracking-[-1px] w-[151px] whitespace-pre-wrap">1995-2003</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[560px] text-[#aaccd0] text-[18px] top-[3400px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2003 - 2011</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[85.8px] text-[#ebf3f4] text-[18px] top-[3504.71px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2011 - 2016</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[557.8px] text-[#aaccd0] text-[18px] top-[3618.71px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2016 - 2020</p>
      <p className="absolute font-['Albert_Sans:Black',sans-serif] font-black h-[29px] leading-[24px] left-[62.8px] text-[#ebf3f4] text-[18px] top-[3717.71px] tracking-[-1px] w-[151px] whitespace-pre-wrap">2020 - 2025</p>
      <StoryCardNew6 />
      <div className="absolute flex h-[30px] items-center justify-center left-[230px] top-[2913px] w-[53px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1793" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L4 />
        </div>
      </div>
      <L5 />
      <Group24 />
      <Group23 />
      <Group25 />
      <Square4 />
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold leading-[0] left-[130px] size-[90px] text-[#e6e6e6] text-[0px] text-[18px] top-[2888px] whitespace-pre-wrap">
        <p className="font-['Albert_Sans:Light',sans-serif] font-light mb-0">
          <span className="leading-[24px]">A quick</span>
          <span className="leading-[24px]">{` `}</span>
        </p>
        <p className="mb-0">
          <span className="font-['Albert_Sans:Black',sans-serif] font-black leading-[24px]">career</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[24px]">{` `}</span>
        </p>
        <p className="font-['Albert_Sans:Light',sans-serif] font-light leading-[24px]">snapshot</p>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[283px] top-[2867px] w-[90px]">
        <div className="flex-none rotate-180">
          <UShape1 />
        </div>
      </div>
    </div>
  );
}

function DoubkleArrow() {
  return (
    <div className="h-[100px] relative w-[606.312px]" data-name="DoubkleArrow 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 606.312 100">
        <g clipPath="url(#clip0_1_1753)" id="DoubkleArrow 1">
          <path d={svgPaths.p2e8b1e00} fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1753">
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
        <g clipPath="url(#clip0_1_1692)" id="DoubkleArrow 2">
          <path d={svgPaths.p2e8b1e00} fill="var(--fill-0, #AACCD0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1692">
            <rect fill="white" height="100" width="606.312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve() {
  return (
    <div className="absolute left-[365px] size-[120px] top-[330px]" data-name="90curve 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <g clipPath="url(#clip0_1_1833)" id="90curve 1">
          <path d={svgPaths.p244f5600} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1833">
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
        <g clipPath="url(#clip0_1_1747)" id="90curve 2">
          <path d={svgPaths.p244f5600} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1747">
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
        <g clipPath="url(#clip0_1_1744)" id="Rectangle 141">
          <path d={svgPaths.p16806300} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1744">
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

function Group2() {
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

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Parallela2() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 3">
      <ClipPathGroup2 />
    </div>
  );
}

function RightCutRect() {
  return (
    <div className="h-[30px] relative w-[60px]" data-name="RightCutRect 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30">
        <g clipPath="url(#clip0_1_1738)" id="RightCutRect 1">
          <path d={svgPaths.pc358e00} fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1738">
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
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
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
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Curve6() {
  return (
    <div className="absolute h-[54px] left-[504px] top-[720px] w-[55px]" data-name="90curve 9">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_1735)" id="90curve 9">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1735">
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
        <g clipPath="url(#clip0_1_1821)" id="90curve 10">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1821">
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
        <g clipPath="url(#clip0_1_1729)" id="90curve 11">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1729">
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
        <g clipPath="url(#clip0_1_1718)" id="90curve 12">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #6BCD72)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1718">
            <rect fill="white" height="55" width="55" />
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
        <g clipPath="url(#clip0_1_1715)" id="SQUARE 1">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1715">
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
        <g clipPath="url(#clip0_1_1715)" id="SQUARE 1">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #3E6064)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1715">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BigCircle() {
  return (
    <div className="absolute left-[25px] size-[202px] top-[85px]" data-name="Big Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
        <g id="Big Circle">
          <circle cx="101" cy="101" fill="var(--fill-0, #D05D49)" id="Big Circle_2" r="101" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[25px] top-[85px]">
      <BigCircle />
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] left-[66px] text-[#e6e6e6] text-[36px] top-[166px] tracking-[-1px] w-[121px] whitespace-pre-wrap">Hello</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[122.647px_89.232px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 60">
        <g id="Group">
          <path d={svgPaths.p1a51df00} fill="var(--fill-0, #D05D49)" id="Vector" />
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

function RightCut() {
  return (
    <div className="h-[60px] overflow-clip relative w-[110px]" data-name="RightCut55 1">
      <ClipPathGroup3 />
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
    <div className="absolute h-[253px] left-[31px] top-[381px] w-[238px]" data-name="AboutButtons1">
      <RoundSkillsButton />
      <RoundIntroButton />
      <RoundContactButton />
      <CareerButton />
    </div>
  );
}

function Landing() {
  return (
    <div className="absolute contents left-[-125.76px] top-[85px]" data-name="Landing">
      <div className="absolute font-['Albert_Sans:Light',sans-serif] font-light h-[165px] leading-[0] left-[366px] text-[#e6e6e6] text-[0px] text-[18px] top-[472px] tracking-[-0.72px] w-[266px] whitespace-pre-wrap">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] mb-0">{`Welcome to Selflux, `}</p>
        <p>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{`a showcase of interactive products and experiences by `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#6bb0cd]">Nick Cristea</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#e6e6e6]">,</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{`and the amazingly talented teams, at `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#6bcd72]">BCG X</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">{`, `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#cfd860]">AllofUs</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">,</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">and</span>
          <span className="font-['Albert_Sans:Light',sans-serif] font-light leading-[30px]">{` `}</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px] text-[#d05d49]">Digit</span>
          <span className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[30px]">.</span>
        </p>
      </div>
      <div className="absolute flex h-[372.941px] items-center justify-center left-[-37px] top-[101px] w-[582.289px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-28 flex-none">
          <DoubkleArrow />
        </div>
      </div>
      <div className="absolute flex h-[582.289px] items-center justify-center left-[-125.76px] top-[384.87px] w-[372.941px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-62">
          <DoubkleArrow1 />
        </div>
      </div>
      <Component90Curve />
      <div className="absolute flex items-center justify-center left-[515px] size-[120px] top-[330px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve1 />
        </div>
      </div>
      <div className="absolute flex h-[90px] items-center justify-center left-[485px] top-[300px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Rectangle />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[374px] top-[637px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[469px] top-[637px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela1 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[559px] top-[637px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela2 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[344px] top-[637px] w-[60px]">
        <div className="-scale-y-100 flex-none">
          <RightCutRect />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[314px] top-[547px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[654px] top-[548px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela1 />
        </div>
      </div>
      <Component90Curve6 />
      <div className="absolute flex h-[54px] items-center justify-center left-[558px] top-[720px] w-[55px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve7 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[504px] size-[55px] top-[774px]">
        <div className="-scale-y-100 flex-none">
          <Component90Curve8 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[558px] size-[55px] top-[774px]">
        <div className="flex-none rotate-180">
          <Component90Curve9 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[479px] size-[42.426px] top-[257px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[479px] size-[42.426px] top-[214px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square6 />
        </div>
      </div>
      <Group12 />
      <div className="absolute flex items-center justify-center left-[143.14px] size-[74.781px] top-[592.35px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.8deg]">
          <div className="relative size-[60px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
              <path d="M0 60H60V0L0 60Z" fill="var(--fill-0, #689BA1)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[89.232px] items-center justify-center left-[77.97px] top-[635.36px] w-[122.647px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.8deg]">
          <RightCut />
        </div>
      </div>
      <AboutButtons />
    </div>
  );
}

function SmallCircle12() {
  return (
    <div className="absolute left-[371.99px] size-[100px] top-[1195px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[371.99px] top-[1195px]">
      <SmallCircle12 />
      <div className="absolute flex h-[58.451px] items-center justify-center left-[398.73px] top-[1222.72px] w-[70.492px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle13() {
  return (
    <div className="absolute left-[553.99px] size-[100px] top-[1195px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[553.99px] top-[1195px]">
      <SmallCircle13 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[604.29px] top-[1222.76px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Intro</p>
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

function Group22() {
  return (
    <div className="absolute contents left-[456.99px] top-[1231px]">
      <div className="absolute flex items-center justify-center left-[456.99px] size-[125.62px] top-[1231px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-35.74deg]">
          <Square7 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[66.557px] items-center justify-center left-[516.45px] top-[1258.79px] w-[75.736px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-36.08deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function Component90Curve2() {
  return (
    <div className="absolute h-[54px] left-[325.99px] top-[889px] w-[55px]" data-name="90curve 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 54">
        <g clipPath="url(#clip0_1_1704)" id="90curve 5">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1704">
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
        <g clipPath="url(#clip0_1_1701)" id="90curve 6">
          <path d={svgPaths.p3eb66200} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1701">
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
        <g clipPath="url(#clip0_1_1830)" id="90curve 7">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1830">
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
        <g clipPath="url(#clip0_1_1698)" id="90curve 8">
          <path d={svgPaths.p1803a380} fill="var(--fill-0, #CFD860)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1698">
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
        <g clipPath="url(#clip0_1_1756)" id="LeftCutRect 1">
          <path d={svgPaths.p3d95ac80} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1756">
            <rect fill="white" height="30" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle14() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[829px]" data-name="Small Circle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AnchorContact() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[860px]" data-name="Anchor_Contact">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle15() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[891px]" data-name="Small Circle 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle16() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[922px]" data-name="Small Circle 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle17() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[953px]" data-name="Small Circle 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmallCircle18() {
  return (
    <div className="absolute left-[544.99px] size-[30px] top-[984px]" data-name="Small Circle 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1695)" id="Small Circle 1">
          <path d={svgPaths.pf149a00} fill="var(--fill-0, #D05D49)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1695">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component90Triangle() {
  return <div className="size-[60px]" data-name="90_Triangle 1" />;
}

function DoubkleArrow2() {
  return (
    <div className="h-[40px] relative w-[242.525px]" data-name="DoubkleArrow 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242.525 40">
        <g clipPath="url(#clip0_1_1710)" id="DoubkleArrow 3">
          <path d={svgPaths.p1f315000} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1710">
            <rect fill="white" height="40" width="242.525" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[39.818px_73px]" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 39.8182">
        <g id="Group">
          <path d={svgPaths.p28376100} fill="var(--fill-0, #AACCD0)" id="Vector" />
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

function RightCut1() {
  return (
    <div className="h-[39.818px] overflow-clip relative w-[73px]" data-name="RightCut55 3">
      <ClipPathGroup4 />
    </div>
  );
}

function Contact1() {
  return (
    <div className="absolute contents left-[6px] top-[1073px]" data-name="Contact">
      <div className="absolute bg-[#6bb0cd] h-[276px] left-[27.86px] top-[1073px] w-[284px]" />
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[23px] leading-[30px] left-[57px] text-[24px] text-white top-[1091px] tracking-[-1px] w-[217px] whitespace-pre-wrap">Get in touch</p>
      <div className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal h-[198px] leading-[16px] left-[56.86px] text-[12px] text-white top-[1128px] w-[232px] whitespace-pre-wrap">
        <p className="mb-0">Contact me if you are looking for an experienced design leader to help you innovate your digital product, or physical experience.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">I have access to great talent, love to travel, and can lead multi-skilled teams large and small.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">I have worked with startups and global brands across every industry and platform, and I know how to deliver great results at speed.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute bg-[#6bcd72] h-[60px] left-[28px] top-[1349px] w-[200px]" />
      <p className="-translate-x-1/2 absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[36px] left-[128px] text-[16px] text-center text-white top-[1362px] tracking-[-1px] w-[200px] whitespace-pre-wrap">View LinkedIn profile</p>
      <div className="absolute flex items-center justify-center left-[6px] size-[199.775px] top-[1395px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-135">
          <DoubkleArrow2 />
        </div>
      </div>
      <div className="absolute flex h-[73px] items-center justify-center left-[91.92px] top-[1409px] w-[39.818px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <RightCut1 />
        </div>
      </div>
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="h-[30px] relative w-[90px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 30">
        <g clipPath="url(#clip0_1_1818)" id="Rectangle 163">
          <path d={svgPaths.p16806300} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1818">
            <rect fill="white" height="30" width="90" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function L8() {
  return (
    <div className="absolute h-[60px] left-[504px] top-[1014px] w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function L9() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function L10() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function L11() {
  return (
    <div className="h-[60px] relative w-[90px]" data-name="L">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
        <g id="L">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6BB0CD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute contents left-[6px] top-[638.45px]" data-name="Contact">
      <div className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[47px] leading-[24px] left-[455px] text-[0px] text-white top-[1058px] tracking-[-1px] w-[107px] whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">415 650 9536</p>
        <p className="font-['Albert_Sans:Regular',sans-serif] font-normal text-[14px]">nick@selflux.com</p>
      </div>
      <Group20 />
      <Group21 />
      <Group22 />
      <Component90Curve2 />
      <div className="absolute flex h-[54px] items-center justify-center left-[379.99px] top-[889px] w-[55px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Component90Curve3 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[325.99px] size-[55px] top-[943px]">
        <div className="-scale-y-100 flex-none">
          <Component90Curve4 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[379.99px] size-[55px] top-[943px]">
        <div className="flex-none rotate-180">
          <Component90Curve5 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[407.99px] size-[63.64px] top-[972px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-135 -scale-y-100 flex-none">
          <LeftCutRect />
        </div>
      </div>
      <SmallCircle14 />
      <AnchorContact />
      <SmallCircle15 />
      <SmallCircle16 />
      <SmallCircle17 />
      <SmallCircle18 />
      <div className="absolute flex items-center justify-center left-[115.44px] size-[81.962px] top-[638.45px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-60">
          <Component90Triangle />
        </div>
      </div>
      <Contact1 />
      <div className="absolute bg-[#6bcd72] h-[60px] left-[257.86px] top-[1349px] w-[178px]" />
      <p className="-translate-x-1/2 absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[36px] left-[346.86px] text-[16px] text-center text-white top-[1363px] tracking-[-1px] w-[178px] whitespace-pre-wrap">Download Resume</p>
      <div className="absolute flex h-[90px] items-center justify-center left-[228px] top-[1349px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Rectangle1 />
        </div>
      </div>
      <L8 />
      <div className="absolute flex h-[60px] items-center justify-center left-[414px] top-[1014px] w-[90px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <L9 />
        </div>
      </div>
      <div className="absolute flex h-[60px] items-center justify-center left-[504px] top-[1094px] w-[90px]">
        <div className="-scale-y-100 flex-none">
          <L10 />
        </div>
      </div>
      <div className="absolute flex h-[60px] items-center justify-center left-[414px] top-[1094px] w-[90px]">
        <div className="flex-none rotate-180">
          <L11 />
        </div>
      </div>
    </div>
  );
}

function SmallCircle19() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <img alt="" className="block max-w-none size-full" height="24" src={imgSmallCircle} width="24" />
    </div>
  );
}

function SmallCircle20() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <img alt="" className="block max-w-none size-full" height="24" src={imgSmallCircle1} width="24" />
    </div>
  );
}

function SmallCircle21() {
  return (
    <div className="relative size-[24px]" data-name="Small Circle">
      <img alt="" className="block max-w-none size-full" height="24" src={imgSmallCircle2} width="24" />
    </div>
  );
}

function SmallCircle22() {
  return (
    <div className="absolute left-[312px] size-[64px] top-[2484px]" data-name="Small Circle">
      <img alt="" className="block max-w-none size-full" height="64" src={imgSmallCircle3} width="64" />
    </div>
  );
}

function ETop() {
  return (
    <div className="absolute h-[62px] left-[607.96px] top-[2653px] w-[100px]" data-name="E-top">
      <img alt="" className="block max-w-none size-full" height="62" src={imgETop} width="100" />
    </div>
  );
}

function L12() {
  return (
    <div className="absolute inset-[0_0_33.33%_0]" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6C1E56)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function L13() {
  return (
    <div className="relative size-full" data-name="L">
      <div className="absolute h-[60px] left-0 top-0 w-[90px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 60">
          <path d="M90 0V60H60V30H0V0H90Z" fill="var(--fill-0, #6C1E56)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function EmptyBox() {
  return (
    <div className="relative size-[90px]" data-name="Empty-Box">
      <L12 />
      <div className="absolute flex inset-[33.33%_0_0_0] items-center justify-center">
        <div className="flex-none h-[60px] rotate-180 w-[90px]">
          <L13 />
        </div>
      </div>
    </div>
  );
}

function L14() {
  return (
    <div className="h-[676px] relative w-[31px]" data-name="L">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice} />
        <div className="absolute bg-[#689ba1] inset-0" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[144px] items-start left-0 pt-[10px] px-[5px] text-center top-0 w-[153px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[21px] leading-[20px] relative shrink-0 text-[#3e6064] text-[18px] w-[142px]">2</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[88px] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-1px] w-[142px]">Invigorating physical experiences that bring people together</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[150px] left-[203px] top-[2569px] w-[145px]" data-name="Component 19">
      <div className="absolute bg-[#cfd860] inset-[0_-2.04%_3.85%_0]" />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[144px] items-start left-0 pt-[10px] px-[5px] text-center top-0 w-[153px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[21px] leading-[20px] relative shrink-0 text-[#3e6064] text-[18px] w-[142px]">3</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[88px] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-1px] w-[142px]">Streamlined, access to advanced healthcare knowledge and services</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[150px] left-[376px] top-[2524px] w-[145px]" data-name="Component 20">
      <div className="absolute bg-[#6bb0cd] inset-[0_-2.04%_3.85%_0]" />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[144px] items-start left-0 pt-[10px] px-[5px] text-center top-0 w-[153px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[21px] leading-[20px] relative shrink-0 text-[#3e6064] text-[18px] w-[142px]">4</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[88px] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-1px] w-[142px]">Intelligent interfaces for advanced human machine relationships</p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute h-[150px] left-[545.99px] top-[2508px] w-[145px]" data-name="Component 21">
      <div className="absolute bg-[#6bcd72] inset-[0_-2.04%_3.85%_0]" />
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[144px] items-start left-0 pt-[10px] px-[5px] text-center top-0 w-[153px] whitespace-pre-wrap">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[21px] leading-[20px] relative shrink-0 text-[#3e6064] text-[18px] w-[142px]">1</p>
      <p className="font-['Cutive_Mono:Regular',sans-serif] h-[88px] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[-1px] w-[142px]">{`Human first products for positive societal & inter-personal communication`}</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[150px] left-[32px] top-[2542px] w-[145px]" data-name="Component 18">
      <div className="absolute bg-[#aaccd0] inset-[0_-2.04%_3.85%_0]" />
      <Frame18 />
    </div>
  );
}

function MediumParallela4() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
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
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[504.45px] top-[1717px]">
      <div className="absolute h-[151.077px] left-[504.45px] top-[1717px] w-[115.529px]" data-name="1 997">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.29%] left-[-55%] max-w-none top-[-12.44%] w-[213.33%]" src={img1997} />
        </div>
      </div>
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

function Parallela3() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 4">
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

function Parallela6() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 7">
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

function Parallela5() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 6">
      <ClipPathGroup7 />
    </div>
  );
}

function Group8() {
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

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Parallela4() {
  return (
    <div className="h-[30px] overflow-clip relative w-[125px]" data-name="Parallela125 5">
      <ClipPathGroup8 />
    </div>
  );
}

function MediumParallela2() {
  return (
    <div className="h-[30px] relative w-[120px]" data-name="Medium-Parallela 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 30">
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
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
        <g clipPath="url(#clip0_1_1778)" id="Medium-Parallela 1">
          <path d="M120 0L90 30H0L30 0H120Z" fill="var(--fill-0, #6BB0CD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1778">
            <rect fill="white" height="30" width="120" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[474.98px] top-[1687px]">
      <div className="absolute flex h-[120px] items-center justify-center left-[614.98px] top-[1687px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela4 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[614.99px] top-[1777px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela5 />
        </div>
      </div>
      <Group11 />
      <div className="absolute flex h-[30px] items-center justify-center left-[474.98px] top-[1687px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela3 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[520.98px] top-[1867px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela6 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[476.98px] top-[1867px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela5 />
        </div>
      </div>
      <div className="absolute flex h-[30px] items-center justify-center left-[520.98px] top-[1687px] w-[125px]">
        <div className="-scale-y-100 flex-none">
          <Parallela4 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[474.98px] top-[1687px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela2 />
        </div>
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[474.98px] top-[1777px] w-[30px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <MediumParallela3 />
        </div>
      </div>
    </div>
  );
}

function Square8() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
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
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
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
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
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
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[474.98px] top-[1515px]">
      <Group27 />
      <div className="absolute flex items-center justify-center left-[529.98px] size-[42.426px] top-[1558px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square8 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[529.98px] size-[42.426px] top-[1515px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square9 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[529.98px] size-[42.426px] top-[1644px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <AnchorIntro />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[529.98px] size-[42.426px] top-[1601px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square10 />
        </div>
      </div>
    </div>
  );
}

function BigCircle1() {
  return (
    <div className="absolute left-[53px] size-[202px] top-[1701px]" data-name="Big Circle">
      <img alt="" className="block max-w-none size-full" height="202" src={imgBigCircle} width="202" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[53px] top-[1701px]">
      <BigCircle1 />
    </div>
  );
}

function SmallParallelagram1() {
  return (
    <div className="absolute h-[30px] left-[88px] top-[1902px] w-[120px]" data-name="Small-Parallelagram">
      <img alt="" className="block max-w-none size-full" height="30" src={imgSmallParallelagram} width="120" />
    </div>
  );
}

function L15() {
  return (
    <div className="h-[126px] relative w-[30px]" data-name="L">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgAllofUsGrewItsClientBaseAndDeliveredHugeProjectsForMcCannClientsIkeaAndNestleThenAllofUsBecameIndependentAgainAndIMovedToSanFranciscoToStartOurUsOffice} />
        <div className="absolute bg-[#689ba1] inset-0" />
      </div>
    </div>
  );
}

function SmallCircle23() {
  return (
    <div className="absolute left-[21px] size-[100px] top-[1932px]" data-name="Small Circle">
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
    <div className="absolute contents left-[21px] top-[1932px]">
      <SmallCircle23 />
      <div className="absolute flex h-[58.451px] items-center justify-center left-[47.73px] top-[1959.72px] w-[70.492px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[30.78deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] tracking-[-1px] w-[64.356px] whitespace-pre-wrap">Skills</p>
        </div>
      </div>
    </div>
  );
}

function SmallCircle24() {
  return (
    <div className="absolute left-[66px] size-[100px] top-[2021px]" data-name="Small Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Small Circle">
          <circle cx="50" cy="50" fill="var(--fill-0, #1E3239)" id="Small Circle_2" r="50" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[66px] top-[2021px]">
      <SmallCircle24 />
      <div className="-translate-x-1/2 absolute flex h-[42.391px] items-center justify-center left-[116.3px] top-[2049.76px] w-[75.415px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[10.7deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[29.703px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.137px] whitespace-pre-wrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Square11() {
  return (
    <div className="relative size-[90px]" data-name="SQUARE">
      <div className="absolute bg-[#1e3239] inset-0" data-name="SQUARE" />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[91px] size-[166.951px] top-[1912px]">
      <div className="absolute flex items-center justify-center left-[113.23px] size-[122.501px] top-[1934.23px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-60.75deg]">
          <Square11 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[77.398px] items-center justify-center left-[170.7px] top-[1956.62px] w-[60.997px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-61.09deg]">
          <p className="font-['Albert_Sans:Bold',sans-serif] font-bold h-[30px] leading-[30px] relative text-[#6bcd72] text-[18px] text-center tracking-[-1px] w-[71.849px] whitespace-pre-wrap">Career</p>
        </div>
      </div>
    </div>
  );
}

function Square12() {
  return (
    <div className="relative size-[30px]" data-name="SQUARE 8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
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
        <g clipPath="url(#clip0_1_1683)" id="SQUARE 3">
          <path d="M0 0H30V30H0V0Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1683">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Rectangle2() {
  return (
    <div className="h-[60px] relative w-[168px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168 60">
        <g id="Rectangle 164">
          <path d={svgPaths.p22c6c680} fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[170px_60px]" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 60">
        <g id="Group">
          <path d="M170 0L110 60H0V0H170Z" fill="var(--fill-0, #689BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function LeftCut() {
  return (
    <div className="h-[60px] overflow-clip relative w-[170px]" data-name="LeftCut85 1">
      <ClipPathGroup9 />
    </div>
  );
}

function Intro() {
  return (
    <div className="absolute contents left-[-35.33px] top-[1455px]" data-name="Intro">
      <div className="absolute flex h-[110px] items-center justify-center left-[199.96px] top-[2260.99px] w-[462px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#3e6064] h-[110px] w-[462px]" />
        </div>
      </div>
      <div className="absolute flex h-[201.37px] items-center justify-center left-[-35.33px] top-[2519.03px] w-[219.645px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[169.45deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <div className="absolute flex h-[193.448px] items-center justify-center left-[344.96px] top-[2522px] w-[213px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[172.24deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <div className="absolute flex h-[193.708px] items-center justify-center left-[193.02px] top-[2521px] w-[213.22px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-172.15deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <div className="absolute bg-[#3e6064] h-[96px] left-[211px] top-[2137px] w-[478px]" />
      <div className="absolute bg-[#3e6064] h-[101px] left-[401.03px] top-[1997px] w-[279px]" />
      <div className="absolute flex items-center justify-center left-[41px] size-[24px] top-[2688px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle19 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[146.99px] size-[24px] top-[2689.99px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle20 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[524.96px] size-[24px] top-[2691px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <SmallCircle21 />
        </div>
      </div>
      <div className="absolute flex h-[87.233px] items-center justify-center left-[130.25px] top-[2244px] w-[462.418px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[179.71deg]">
          <div className="bg-[#cae0e2] h-[84.932px] w-[462px]" />
        </div>
      </div>
      <div className="absolute flex h-[91.159px] items-center justify-center left-[148.39px] top-[2258.85px] w-[433.861px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "21.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.29deg]">
          <p className="font-['Cutive_Mono:Regular',sans-serif] h-[89px] leading-[18px] not-italic relative text-[#0c1517] text-[16px] tracking-[-2px] w-[433.423px] whitespace-pre-wrap">I remain passionate about the creative potential for technology to improve human existence and am currently focused on solutions across four key areas.</p>
        </div>
      </div>
      <div className="absolute bg-[#cae0e2] h-[98px] left-[188px] top-[2111px] w-[463px]" />
      <p className="absolute font-['Cutive_Mono:Regular',sans-serif] h-[54px] leading-[18px] left-[211px] not-italic text-[#0c1517] text-[16px] top-[2127px] tracking-[-2px] w-[428px] whitespace-pre-wrap">My career began with the design of a concept tablet for the NHS in 1991 and I have delivered over 160 successful projects for global brands and innovative startups since then.</p>
      <div className="absolute flex h-[176.4px] items-center justify-center left-[497.96px] top-[2459px] w-[198.343px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-177.78deg]">
          <div className="bg-[#3e6064] h-[169.081px] w-[191.927px]" />
        </div>
      </div>
      <SmallCircle22 />
      <ETop />
      <div className="absolute flex items-center justify-center left-[125px] size-[124.89px] top-[2425px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "308" } as React.CSSProperties}>
        <div className="flex-none rotate-[-33.88deg]">
          <EmptyBox />
        </div>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[31.96px] top-[2714px] w-[676px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1793" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L14 />
        </div>
      </div>
      <Component8 />
      <Component9 />
      <Component10 />
      <Component7 />
      <Group28 />
      <div className="absolute bg-[#cae0e2] h-[123px] left-[365.03px] top-[1948px] w-[297px]" />
      <p className="absolute font-['Cutive_Mono:Regular',sans-serif] h-[57px] leading-[18px] left-[386.03px] not-italic text-[#0c1517] text-[16px] top-[1964px] tracking-[-2px] w-[262px] whitespace-pre-wrap">I’m Nick Cristea, an interactive designer with a rich history of creating potent products and experiences across industries and platforms.</p>
      <Group10 />
      <SmallParallelagram1 />
      <div className="absolute flex h-[30px] items-center justify-center left-[18px] top-[1902px] w-[126px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "1793" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <L15 />
        </div>
      </div>
      <Group13 />
      <Group15 />
      <Group14 />
      <p className="absolute font-['Albert_Sans:Bold',sans-serif] font-bold h-[25px] leading-[30px] left-[83px] text-[#e6e6e6] text-[24px] top-[1786px] tracking-[-1px] w-[141px] whitespace-pre-wrap">Hello again</p>
      <div className="absolute flex items-center justify-center left-[449px] size-[42.426px] top-[2670px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square12 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[389px] size-[42.426px] top-[2669px]" style={{ "--transform-inner-width": "1184.65625", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-rotate-45 flex-none">
          <Square13 />
        </div>
      </div>
      <div className="absolute flex h-[60px] items-center justify-center left-[681px] top-[1455px] w-[168px]">
        <div className="flex-none rotate-180">
          <Rectangle2 />
        </div>
      </div>
      <div className="absolute flex h-[60px] items-center justify-center left-[550px] top-[1455px] w-[170px]">
        <div className="flex-none rotate-180">
          <LeftCut />
        </div>
      </div>
    </div>
  );
}

function AboutContentTablet() {
  return (
    <div className="-translate-x-1/2 absolute h-[1079px] left-1/2 top-[-115px] w-[700px]" data-name="About-Content-Tablet">
      <Skills />
      <Career />
      <Landing />
      <Contact />
      <Intro />
    </div>
  );
}

function TabletContentWindow() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Tablet-content-window">
      <AboutContentTablet />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1194px] items-center min-h-px min-w-px overflow-clip relative">
      <div className="h-[115px] relative shrink-0 w-full" data-name="TopBar">
        <div className="absolute inset-[-26.09%_-4.12%_-43.48%_-4.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1050 195">
            <g filter="url(#filter0_d_1_1844)" id="TopBar">
              <path d={svgPaths.p3ce67640} fill="var(--fill-0, #0A4947)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="195" id="filter0_d_1_1844" width="1050" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1844" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1844" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <TabletContentWindow />
      <div className="h-[115px] relative shrink-0 w-full" data-name="BottomBar">
        <div className="absolute inset-[-26.09%_-5.15%_-43.48%_-3.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1050 195">
            <g filter="url(#filter0_d_1_1672)" id="BottomBar">
              <path d="M30 30H1000V145H30V30Z" fill="var(--fill-0, #0A4947)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="195" id="filter0_d_1_1672" width="1050" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1672" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1672" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="h-[1194px] relative shrink-0 w-[115px]" data-name="RightColumn">
      <div className="absolute inset-[0_-26.09%_0_-43.48%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 1194">
          <g id="RightColumn">
            <g filter="url(#filter0_d_1_1663)" id="Rectangle 174">
              <rect fill="var(--fill-0, #0A4947)" height="964" width="115" x="50" y="115" />
            </g>
            <path d="M50 0H165V1194H50V0Z" fill="var(--fill-0, #0A4947)" id="Rectangle 173" />
            <g id="SmallSwitch">
              <g id="Group 126">
                <line id="Line 98" stroke="var(--stroke-0, #1E3239)" x1="104.48" x2="104.48" y1="104.44" y2="67" />
                <circle cx="104.5" cy="109.72" fill="var(--fill-0, #1E3239)" id="Ellipse 10" r="5.28" />
              </g>
              <circle cx="104.5" cy="56.5" fill="var(--fill-0, #1E3239)" id="Ellipse 11" r="10.5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1044" id="filter0_d_1_1663" width="195" x="0" y="75">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-10" />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1663" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1663" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function AboutFrame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[1194px] items-center max-w-[1200px] min-h-px min-w-[834px] relative" data-name="AboutFrame">
      <TabletMenu />
      <Frame7 />
      <RightColumn />
    </div>
  );
}

export default function IPadPro() {
  return (
    <div className="bg-[#0a4947] content-stretch flex items-start relative size-full" data-name="iPad Pro 11' - 2">
      <AboutFrame />
    </div>
  );
}