import svgPaths from "./svg-e135cj6326";
import imgProfessionalHeadshot from "figma:asset/93b5027a830ca459eb57abf97838c94206b9e445.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Cari laporan...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[16px] py-[8px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[12.5%] content-stretch flex flex-col items-start left-[12px] top-[12.5%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #6E7979)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[264.16px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #6E7979)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #6E7979)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#008080] content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#e3fffe] text-[12px] text-center tracking-[0.6px] uppercase w-[71.81px]">
        <p className="leading-[16px]">Quick Add</p>
      </div>
    </div>
  );
}

function ProfessionalHeadshot() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Professional headshot">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfessionalHeadshot} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dfe3e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <ProfessionalHeadshot />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container5 />
      <Button />
      <Background />
    </div>
  );
}

function HeaderTopNavBarAuthoritySourceJson() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(246,250,249,0.7)] h-[64px] relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full z-[3]" data-name="Header - TopNavBar (Authority Source: JSON)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] relative size-full">
          <Container />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[124.52px]">
        <p className="leading-[16px]">Digital Curator</p>
      </div>
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center relative shrink-0 text-[#006565] text-[30px] w-[364.69px]">
        <p className="leading-[36px]">{`Keuangan & Perhitungan`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 16">
        <g id="Container">
          <path d={svgPaths.p1de06c00} fill="var(--fill-0, #3E4949)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container9 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[16px] text-center w-[69.89px]">
        <p className="leading-[24px]">Mei 2024</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[12.8px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8">
        <g id="Container">
          <path d={svgPaths.p3e48ab80} fill="var(--fill-0, #3E4949)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex gap-[7.99px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container10 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[16px] text-center w-[84.3px]">
        <p className="leading-[24px]">Export PDF</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function HeadlineHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Headline Header">
      <Paragraph />
      <Container8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-[215.66px]">
        <p className="leading-[20px]">Total Belanja Bulan Ini</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[48px] justify-center leading-[0] relative shrink-0 text-[48px] text-white tracking-[-1.2px] w-[316.42px]">
        <p className="leading-[48px]">Rp12.450.000</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[316.42px]" data-name="Container">
      <Container13 />
      <Heading1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <div className="h-[27px] relative shrink-0 w-[28.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5 27">
          <path d={svgPaths.p101f0e80} fill="var(--fill-0, white)" id="Icon" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[119.84px]">
        <p className="leading-[16px]">Projected Spend</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[101.13px]">
        <p className="leading-[28px]">Rp14.200k</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[119.84px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[117.44px]">
        <p className="leading-[16px]">Inventory Value</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[103.84px]">
        <p className="leading-[28px]">Rp45.890k</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[117.44px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] h-full items-start relative">
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white w-[67.83px]">
        <p className="leading-[16px]">4.2% vs Apr</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center px-[12px] py-[4px] relative">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[25px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
      <Overlay />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function MainHighValueCard() {
  return (
    <div className="col-[1/span_8] justify-self-stretch min-h-[240px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Main High-Value Card" style={{ backgroundImage: "linear-gradient(143.807deg, rgb(0, 101, 101) 0%, rgb(0, 128, 128) 100%)" }}>
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[32px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Main High-Value Card:shadow" />
        <Container11 />
        <Margin />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center tracking-[1.2px] uppercase w-[153.94px]">
        <p className="leading-[16px]">Distribusi Kategori</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.03px] pb-[24px] top-[32px]" data-name="Margin">
      <Container23 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-center w-[85.09px]">
        <p className="leading-[16px]">Business Stock</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] h-[16px] items-center justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-[#006565] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-center w-[53.95px]">
        <p className="leading-[16px]">Groceries</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[16px] items-center justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-[#944200] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-center w-[31.81px]">
        <p className="leading-[16px]">Other</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] h-[16px] items-center justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <div className="bg-[#35618f] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container30 />
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__16px_16px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container27 />
      <Container29 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pt-[32px] right-[32px] top-[216px]" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-full overflow-clip relative w-[144px]" data-name="SVG">
      <div className="absolute inset-[5.56%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
            <path d={svgPaths.p3d639280} id="Vector" stroke="var(--stroke-0, #EBEFEE)" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[8px] size-[128px] top-[8px]" data-name="Vector">
        <div className="absolute inset-[5.87%_-6.25%_-6.25%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 128.491">
            <path d={svgPaths.p16455480} id="Vector" stroke="var(--stroke-0, #006565)" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[8px] size-[128px] top-[8px]" data-name="Vector">
        <div className="absolute inset-[-6.25%_19.39%_84.33%_15.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.8234 28.0628">
            <path d={svgPaths.p6290080} id="Vector" stroke="var(--stroke-0, #944200)" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[8px] size-[128px] top-[8px]" data-name="Vector">
        <div className="absolute inset-[2.81%_-6.14%_52.72%_73.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3853 56.9231">
            <path d={svgPaths.p2069a200} id="Vector" stroke="var(--stroke-0, #35618F)" strokeWidth="16" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[18px] text-center w-[37.95px]">
        <p className="leading-[28px]">65%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] text-center tracking-[-0.5px] uppercase w-[46.47px]">
        <p className="leading-[15px]">Business</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container31() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start justify-center left-1/2 size-[144px] top-[calc(50%-20px)]" data-name="Container">
      <div className="flex h-[144px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "84" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <Svg />
        </div>
      </div>
      <Container32 />
    </div>
  );
}

function CategoryBreakdownPieChartMimic() {
  return (
    <div className="bg-white col-[9/span_4] h-[328px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Category Breakdown Pie Chart Mimic">
      <Margin1 />
      <Margin2 />
      <Container31 />
    </div>
  );
}

function SummarySectionBentoStyle() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_328px] relative shrink-0 w-full" data-name="Summary Section: Bento Style">
      <MainHighValueCard />
      <CategoryBreakdownPieChartMimic />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[38.75px] relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[20px] w-[171.89px]">
        <p className="leading-[28px] mb-0">Bikin Perhitungan</p>
        <p className="leading-[28px]">Sendiri</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p27cfa400} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container36 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Contoh: Stok Kedai Kopi</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-[14px] relative w-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[123.88px]">
        <p className="leading-[16px]">Nama Item/Grup</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip right-[27px] top-[14px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-[8.58px]">
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Container44() {
  return <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex items-center left-[12px] right-[12px] top-[12px]" data-name="Container">
      <Container44 />
      <div className="flex flex-row items-center self-stretch">
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[44px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[56.31px]">
        <p className="leading-[16px]">Jumlah</p>
      </div>
      <Input2 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Rp</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-[14px] relative w-full">
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[56.03px]">
        <p className="leading-[16px] mb-0">Harga</p>
        <p className="leading-[16px]">Satuan</p>
      </div>
      <Input3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_84px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container45 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="SVG">
          <path d="M6.3 8.4L10.5 12.6L14.7 8.4" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-start justify-center left-0 overflow-clip pl-[205.66px] pr-[8px] py-[11.5px] top-0 w-[234.66px]" data-name="image fill">
      <Svg1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[12px] overflow-clip right-[12.01px] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[14px] w-[99.28px]">
        <p className="leading-[20px]">Business Stock</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <ImageFill />
      <Container48 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[70.31px]">
        <p className="leading-[16px]">Kategori</p>
      </div>
      <Options />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[90.5px]">
        <p className="leading-[20px]">Estimasi Total</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[18px] w-[34.81px]">
        <p className="leading-[28px]">Rp0</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#006565] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[16px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[128.25px]">
          <p className="leading-[24px]">{`Hitung & Simpan`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container49 />
      <Button3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container40 />
      <Container47 />
      <HorizontalBorder1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container35 />
        <Container37 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#331200] text-[14px] w-[88.86px]">
        <p className="leading-[20px]">Tips Efisiensi</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[78px] justify-center leading-[0] relative shrink-0 text-[#331200] text-[12px] w-[190.56px]">
        <p className="leading-[19.5px] mb-0">Pengeluaran Business Stock Anda</p>
        <p className="leading-[19.5px] mb-0">naik 15% dari bulan lalu.</p>
        <p className="leading-[19.5px] mb-0">Pertimbangkan beli grosir untuk</p>
        <p className="leading-[19.5px]">kategori Sembako.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[3.25px] items-start relative shrink-0 w-[190.56px]" data-name="Container">
      <Heading3 />
      <Container53 />
    </div>
  );
}

function FinancialHealthAlert() {
  return (
    <div className="bg-[#b8560a] relative rounded-[12px] shrink-0 w-full" data-name="Financial Health Alert">
      <div className="content-stretch flex gap-[16px] items-start p-[24px] relative w-full">
        <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
            <path d={svgPaths.pb720300} fill="var(--fill-0, #944200)" id="Icon" />
          </svg>
        </div>
        <Container52 />
      </div>
    </div>
  );
}

function CustomCalculatorSection() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Custom Calculator Section">
      <Background1 />
      <FinancialHealthAlert />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[20px] w-[211.03px]">
        <p className="leading-[28px]">Daftar Belanja Groups</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[139.27px]">
        <p className="leading-[20px]">Lihat Semua Laporan</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Link />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Container">
          <path d={svgPaths.p2a93db80} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,128,128,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Overlay">
      <Container57 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-[219.98px]">
        <p className="leading-[28px]">Restock Kedai Awal Bulan</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] tracking-[0.6px] uppercase w-[179.86px]">
        <p className="leading-[16px]">Business Stock • 12 Items</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[219.98px]" data-name="Container">
      <Heading5 />
      <Container59 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Overlay1 />
      <Container58 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[20px] text-right w-[126.89px]">
        <p className="leading-[28px]">Rp4.200.000</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-right w-[148.52px]">
        <p className="leading-[16px]">Diverifikasi 2 jam yang lalu</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.52px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ebefee] content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container63 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function SpendingItem() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Spending Item 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[24.01px] py-[24px] relative w-full">
          <Container56 />
          <Container60 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p27876700} fill="var(--fill-0, #944200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(184,86,10,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Overlay">
      <Container65 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-[203.52px]">
        <p className="leading-[28px]">Belanja Bulanan Rumah</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] tracking-[0.6px] uppercase w-[144.78px]">
        <p className="leading-[16px]">Groceries • 45 Items</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[203.52px]" data-name="Container">
      <Heading6 />
      <Container67 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Overlay2 />
      <Container66 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[20px] text-right w-[126.19px]">
        <p className="leading-[28px]">Rp2.850.000</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-right w-[110.91px]">
        <p className="leading-[16px]">Diverifikasi Kemarin</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[126.19px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ebefee] content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container71 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function SpendingItem1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Spending Item 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container64 />
          <Container68 />
          <ButtonMargin1 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[21px] relative shrink-0 w-[19.95px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.95 21">
        <g id="Container">
          <path d={svgPaths.p6fac000} fill="var(--fill-0, #35618F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(160,202,254,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Overlay">
      <Container73 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-[178.97px]">
        <p className="leading-[28px]">{`Renovasi Kecil & Alat`}</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] tracking-[0.6px] uppercase w-[157.98px]">
        <p className="leading-[16px]">Maintenance • 3 Items</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178.97px]" data-name="Container">
      <Heading7 />
      <Container75 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Overlay3 />
      <Container74 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[20px] text-right w-[116.53px]">
        <p className="leading-[28px]">Rp1.120.000</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-right w-[149.95px]">
        <p className="leading-[16px]">Diverifikasi 3 hari yang lalu</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[149.95px]" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ebefee] content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container79 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function SpendingItem2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Spending Item 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container72 />
          <Container76 />
          <ButtonMargin2 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] tracking-[1.4px] uppercase w-[263.88px]">
        <p className="leading-[20px]">Tren Pengeluaran Mingguan</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] uppercase w-[39.53px]">
        <p className="leading-[15px]">Actual</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#006565] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] uppercase w-[41.03px]">
        <p className="leading-[15px]">Budget</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#bdc9c8] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container85 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[16px] h-[15px] items-start relative shrink-0" data-name="Container">
      <Container82 />
      <Container84 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Container81 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] w-[13.61px]">
        <p className="leading-[15px]">W1</p>
      </div>
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pt-[8px] relative" data-name="Week 1">
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] w-[15.5px]">
        <p className="leading-[15px]">W2</p>
      </div>
    </div>
  );
}

function Week1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pt-[8px] relative" data-name="Week 2">
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] w-[15.84px]">
        <p className="leading-[15px]">W3</p>
      </div>
    </div>
  );
}

function Week2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pt-[8px] relative" data-name="Week 3">
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[10px] w-[15.83px]">
        <p className="leading-[15px]">W4</p>
      </div>
    </div>
  );
}

function Week3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px pt-[8px] relative" data-name="Week 4">
      <Container90 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[128px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Week />
      <Week1 />
      <Week2 />
      <Week3 />
    </div>
  );
}

function MiniChartForTimeline() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Mini Chart for Timeline">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container80 />
        <Container86 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <SpendingItem />
      <SpendingItem1 />
      <SpendingItem2 />
      <MiniChartForTimeline />
    </div>
  );
}

function SectionSpendingGroupsBreakdown() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[87px] relative row-1 self-start shrink-0" data-name="Section - Spending Groups Breakdown">
      <Container54 />
      <Container55 />
    </div>
  );
}

function MainContentAreaCalculatorAndGroupLists() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_743px] relative shrink-0 w-full" data-name="Main Content Area: Calculator and Group Lists">
      <CustomCalculatorSection />
      <SectionSpendingGroupsBreakdown />
    </div>
  );
}

function FinanceDashboardContent() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full z-[2]" data-name="Finance Dashboard Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] p-[32px] relative w-full">
        <HeadlineHeader />
        <SummarySectionBentoStyle />
        <MainContentAreaCalculatorAndGroupLists />
      </div>
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px overflow-clip relative self-stretch" data-name="Main Canvas">
      <HeaderTopNavBarAuthoritySourceJson />
      <FinanceDashboardContent />
      <div className="absolute bg-[rgba(0,101,101,0.05)] blur-[32px] right-[-96px] rounded-[9999px] size-[384px] top-[-96px] z-[1]" data-name="Decorative Subtle Texture (Absolute)" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006565] text-[20px] w-full">
        <p className="leading-[28px]">Teman Belanja</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Precision Curator</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[32px] relative w-full">
        <Heading />
        <Container92 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[80.2px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container93 />
          <Container94 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3faf9100} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[71.31px]">
        <p className="leading-[24px]">Shopping</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container95 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p643d217} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[69.45px]">
        <p className="leading-[24px]">Inventory</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container97 />
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p421b880} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] w-[59.38px]">
          <p className="leading-[24px]">Finance</p>
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006565] border-r-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[20px] py-[12px] relative w-full">
          <Container99 />
          <Container100 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[1003px] relative shrink-0 w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[68.39px]">
        <p className="leading-[24px]">Add Item</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 101, 101) 0%, rgb(0, 128, 128) 100%)" }}>
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Button7 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start justify-end min-h-[80px] pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container101 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[62.14px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container105 />
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[52.16px]">
        <p className="leading-[24px]">Logout</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container107 />
          <Container108 />
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32px] px-[16px] relative w-full">
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function AsideSideNavBarAuthoritySourceJson() {
  return (
    <div className="absolute bg-[#f6faf9] content-stretch flex flex-col h-[1355px] items-start left-0 top-0 w-[256px]" data-name="Aside - SideNavBar (Authority Source: JSON)">
      <Container91 />
      <Nav />
      <Margin3 />
      <Container104 />
    </div>
  );
}

export default function FinancialOverview() {
  return (
    <div className="bg-[#f6faf9] content-stretch flex items-start justify-center pl-[256px] relative size-full" data-name="Financial Overview">
      <MainCanvas />
      <AsideSideNavBarAuthoritySourceJson />
    </div>
  );
}