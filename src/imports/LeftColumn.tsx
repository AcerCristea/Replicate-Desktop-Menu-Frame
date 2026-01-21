import { Link } from 'react-router-dom';

function NavButton({
  text,
  path,
}: {
  text: string;
  path: string;
}) {
  return (
    <Link to={path}>
      <button className="font-['Albert_Sans',sans-serif] font-light text-[#aaccd0] text-[18px] leading-[10px] hover:text-[#e6e6e6] transition-colors cursor-pointer bg-transparent border-none text-left px-0 py-1 w-full">
        {text}
      </button>
    </Link>
  );
}

function MobileMainNav() {
  const menuItems = [
    { label: 'About', path: '/about' },
    { label: 'Approach', path: '/approach' },
    { label: 'Selected Works', path: '/selected-works' },
    { label: 'White Space', path: '/white-space' },
    { label: 'Archive', path: '/archive' },
  ];

  return (
    <nav className="flex flex-col gap-2 w-full" data-name="MobileMainNav">
      {menuItems.map((item) => (
        <NavButton key={item.path} text={item.label} path={item.path} />
      ))}
    </nav>
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