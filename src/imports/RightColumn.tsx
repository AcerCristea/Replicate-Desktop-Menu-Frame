import svgPaths from "./svg-d2b20wjcg4";

function Close() {
  return (
    <button className="absolute block right-[30px] size-[24px] top-[30px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Close">
          <path d={svgPaths.pbe31300} fill="var(--fill-0, #AACCD0)" id="Angled-Rect" />
          <path d={svgPaths.p2a472b00} fill="var(--fill-0, #AACCD0)" id="Angled-Rect_2" />
        </g>
      </svg>
    </button>
  );
}

export default function RightColumn() {
  return (
    <div className="cursor-pointer relative size-full" data-name="RightColumn">
      <button className="absolute bg-[#00375a] block h-[856px] right-0 top-0 w-[180px]" data-name="RightColumnBgrd" />
      <Close />
    </div>
  );
}