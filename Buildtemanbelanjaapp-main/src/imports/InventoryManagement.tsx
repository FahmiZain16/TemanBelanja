import svgPaths from "./svg-bojusmnuui";
import imgUserProfile from "figma:asset/60df2c2d425a8a64952f89150df696bb8aa19897.png";

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[87.53px]">
        <p className="leading-[16px]">Workspace</p>
      </div>
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center relative shrink-0 text-[#181c1c] text-[30px] w-[349.48px]">
        <p className="leading-[36px]">Inventaris Management</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[21px] py-[14px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] text-center w-[160.05px]">
        <p className="leading-[20px]">Buat dari Daftar Belanja</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14.663px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6625 15">
        <g id="Container">
          <path d={svgPaths.p1d280200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#006565] content-stretch flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.34px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container2 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[100.84px]">
        <p className="leading-[20px]">Inventaris Baru</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderSectionWithActions() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section with Actions">
      <Paragraph />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[154.05px]">
        <p className="leading-[15px]">Stock Health Overview</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p4c2b800} fill="var(--fill-0, #006565)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[40px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[36px] w-[92.59px]">
        <p className="leading-[40px]">1,284</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[127.97px]">
        <p className="leading-[20px]">Total Items in Stock</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 w-[127.97px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0fdfa] content-stretch flex items-start justify-end px-[8px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#0d9488] text-[12px] text-right w-[110.05px]">
        <p className="leading-[16px]">+12% vs last month</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[-3px] content-stretch flex flex-col items-end left-[293.95px]" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white col-[1/span_2] justify-self-stretch min-h-[160px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[24px] relative w-full">
        <Paragraph1 />
        <Container3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Low Stock Alert</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[30px] w-full">
        <p className="leading-[36px]">12</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-full">
        <p className="leading-[20px]">Critical reorder points</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#f0f4f3] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#ba1a1a] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[28px] pr-[24px] py-[24px] relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-full">
          <p className="leading-[15px]">Expiring Soon</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#944200] text-[30px] w-full">
        <p className="leading-[36px]">08</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-full">
        <p className="leading-[20px]">Items within 7 days</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder1() {
  return (
    <div className="bg-[#f0f4f3] col-4 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#b8560a] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[28px] pr-[24px] py-[24px] relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function BentoStatusOverview() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_160px] relative shrink-0 w-full" data-name="Bento Status Overview">
      <Background />
      <BackgroundVerticalBorder />
      <BackgroundVerticalBorder1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-[156.84px]">
        <p className="leading-[28px]">Product Inventory</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2889b5c0} fill="var(--fill-0, #3E4949)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1c92c780} fill="var(--fill-0, #3E4949)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(240,244,243,0.5)] relative shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[24px] relative w-full">
          <Heading1 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[22px] relative shrink-0 w-[307.52px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[66.66px]">
        <p className="leading-[normal]">Item Name</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[24px] py-[16px] relative shrink-0 w-[110.25px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] text-center tracking-[1px] uppercase w-[31.84px]">
        <p className="leading-[normal] mb-0">Qty /</p>
        <p className="leading-[normal]">Unit</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[118.36px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[41.7px]">
        <p className="leading-[normal] mb-0">Harga</p>
        <p className="leading-[normal]">Beli</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[120.11px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[41.7px]">
        <p className="leading-[normal] mb-0">Harga</p>
        <p className="leading-[normal]">Jual</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[153.72px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[52.99px]">
        <p className="leading-[normal] mb-0">Status /</p>
        <p className="leading-[normal]">Expired</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[22px] relative shrink-0 w-[150.05px]" data-name="Cell">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] tracking-[1px] uppercase w-[39.97px]">
        <p className="leading-[normal]">Notes</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[rgba(240,244,243,0.3)] content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p18953040} fill="var(--fill-0, #008080)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[165.36px]">
        <p className="leading-[20px]">Beras Pandan Wangi 5kg</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-[69.7px]">
        <p className="leading-[normal]">SKU: TB-00129</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[165.36px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[243.52px]" data-name="Data">
      <Background2 />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[61.12px] top-[33px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center w-[20.09px]">
        <p className="leading-[16px]">Pcs</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="h-[80.5px] relative shrink-0 w-[110.25px]" data-name="Data">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%-13.99px)] text-[#181c1c] text-[14px] text-center top-[40px] w-[24.2px]">
        <p className="leading-[20px]">140</p>
      </div>
      <Container23 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30.5px] pr-[32px] pt-[30px] relative shrink-0 w-[86.36px]" data-name="Data">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[67.27px]">
        <p className="leading-[20px]">Rp 72,500</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30.5px] pr-[32px] pt-[30px] relative shrink-0 w-[88.11px]" data-name="Data">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[71.02px]">
        <p className="leading-[20px]">Rp 85,000</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[12px] w-full">
        <p className="leading-[16px]">Healthy</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-full">
        <p className="leading-[normal]">12 Jan 2025</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[97.71px]" data-name="Data">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[150px] overflow-clip pb-[32.5px] pl-[24px] pr-[32px] pt-[32px] relative shrink-0 w-[142.05px]" data-name="Data">
      <div className="flex flex-col font-['Public_Sans:Italic',sans-serif] font-normal h-[16px] italic justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[81.05px]">
        <p className="leading-[16px]">Restocked ye…</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[32px] relative w-full">
          <Data />
          <Data1 />
          <Data2 />
          <Data3 />
          <Data4 />
          <Data5 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p113ae80} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ffdad6] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[168.84px]">
        <p className="leading-[20px]">Minyak Goreng SunCo 2L</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-[71.95px]">
        <p className="leading-[normal]">SKU: TB-00244</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168.84px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[243.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background3 />
        <Container27 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[53.61px] top-[33.5px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center w-[20.09px]">
        <p className="leading-[16px]">Pcs</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="h-[81px] relative shrink-0 w-[110.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%-14px)] text-[#ba1a1a] text-[14px] text-center top-[40.5px] w-[9.19px]">
          <p className="leading-[20px]">4</p>
        </div>
        <Container30 />
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[86.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[64.45px]">
          <p className="leading-[20px]">Rp 31,000</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[88.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[70.69px]">
          <p className="leading-[20px]">Rp 36,000</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[10px] uppercase w-[59.73px]">
            <p className="leading-[normal]">Low Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-full">
        <p className="leading-[normal]">04 Feb 2025</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[97.71px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Background4 />
        <Container31 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="max-w-[150px] relative shrink-0 w-[142.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pl-[24px] pr-[32px] py-[32.5px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Public_Sans:Italic',sans-serif] font-normal h-[16px] italic justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[84.33px]">
          <p className="leading-[16px]">Urgent reorde…</p>
        </div>
      </div>
    </div>
  );
}

function Row2LowStock() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 2 (Low Stock)">
      <div aria-hidden="true" className="absolute border-[#f0f4f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[32px] pt-px relative w-full">
          <Data6 />
          <Data7 />
          <Data8 />
          <Data9 />
          <Data10 />
          <Data11 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
        <g id="Container">
          <path d={svgPaths.p2b6e040} fill="var(--fill-0, #944200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(184,86,10,0.2)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[173.23px]">
        <p className="leading-[20px]">Telur Ayam Negeri (30btr)</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-[70.13px]">
        <p className="leading-[normal]">SKU: TB-00561</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[173.23px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[243.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Overlay1 />
        <Container33 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[56.26px] top-[33.5px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center w-[24.06px]">
        <p className="leading-[16px]">Tray</p>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="h-[81px] relative shrink-0 w-[110.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%-15.99px)] text-[#181c1c] text-[14px] text-center top-[40.5px] w-[18.47px]">
          <p className="leading-[20px]">45</p>
        </div>
        <Container36 />
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[86.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[67px]">
          <p className="leading-[20px]">Rp 26,000</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[88.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[70.47px]">
          <p className="leading-[20px]">Rp 30,000</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#b8560a] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[2px] relative w-full">
          <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] relative shrink-0 text-[#fff7f4] text-[10px] uppercase w-[80.84px]">
            <p className="leading-[normal]">Expiring Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#944200] text-[10px] w-full">
        <p className="leading-[normal]">28 Oct 2023</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[97.71px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Background5 />
        <Container37 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="max-w-[150px] relative shrink-0 w-[142.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pl-[24px] pr-[32px] py-[32.5px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Public_Sans:Italic',sans-serif] font-normal h-[16px] italic justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[84.57px]">
          <p className="leading-[16px]">Check shell in…</p>
        </div>
      </div>
    </div>
  );
}

function Row3ExpiringSoon() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 3 (Expiring Soon)">
      <div aria-hidden="true" className="absolute border-[#f0f4f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[32px] pt-px relative w-full">
          <Data12 />
          <Data13 />
          <Data14 />
          <Data15 />
          <Data16 />
          <Data17 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p26145200} fill="var(--fill-0, #008080)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex h-[40px] items-center justify-center relative rounded-[8px] shrink-0 w-[39.25px]" data-name="Background">
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[148.2px]">
        <p className="leading-[20px] mb-0">Sabun Mandi Lifebuoy</p>
        <p className="leading-[20px]">450ml</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-[69.86px]">
        <p className="leading-[normal]">SKU: TB-00812</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148.2px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[243.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background6 />
        <Container39 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[58.17px] top-[39.5px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center w-[20.09px]">
        <p className="leading-[16px]">Pcs</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="h-[93px] relative shrink-0 w-[110.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%-14px)] text-[#181c1c] text-[14px] text-center top-[46.5px] w-[18.3px]">
          <p className="leading-[20px]">28</p>
        </div>
        <Container42 />
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[86.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[64.47px]">
          <p className="leading-[20px]">Rp 21,500</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[88.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[32px] py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[70.47px]">
          <p className="leading-[20px]">Rp 28,000</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[12px] w-full">
        <p className="leading-[16px]">Healthy</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-full">
        <p className="leading-[normal]">15 Aug 2026</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[97.71px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="max-w-[150px] relative shrink-0 w-[142.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pl-[24px] pr-[32px] py-[38.5px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Public_Sans:Italic',sans-serif] font-normal h-[16px] italic justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[28.41px]">
          <p className="leading-[16px]">None</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 4">
      <div aria-hidden="true" className="absolute border-[#f0f4f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[32px] pt-px relative w-full">
          <Data18 />
          <Data19 />
          <Data20 />
          <Data21 />
          <Data22 />
          <Data23 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p366fd780} fill="var(--fill-0, #008080)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[150.92px]">
        <p className="leading-[20px]">Kopi Kapal Api Mix 10s</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-[72.02px]">
        <p className="leading-[normal]">SKU: TB-00993</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.92px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[243.52px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Background7 />
        <Container46 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-[60.4px] top-[33.5px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] text-center w-[21.23px]">
        <p className="leading-[16px]">Box</p>
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="h-[80.5px] relative shrink-0 w-[110.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%-14.56px)] text-[#181c1c] text-[14px] text-center top-[40.5px] w-[23.91px]">
          <p className="leading-[20px]">210</p>
        </div>
        <Container49 />
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0 w-[86.36px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pr-[32px] pt-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[63.98px]">
          <p className="leading-[20px]">Rp 12,000</p>
        </div>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[88.11px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[30px] pr-[32px] pt-[30.5px] relative w-full">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] w-[68.09px]">
          <p className="leading-[20px]">Rp 15,500</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f766e] text-[12px] w-full">
        <p className="leading-[16px]">Healthy</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] w-full">
        <p className="leading-[normal]">10 Mar 2025</p>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[97.71px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="max-w-[150px] relative shrink-0 w-[142.05px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip pb-[32px] pl-[24px] pr-[32px] pt-[32.5px] relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Public_Sans:Italic',sans-serif] font-normal h-[16px] italic justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[84.52px]">
          <p className="leading-[16px]">Promo item fo…</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Row 5">
      <div aria-hidden="true" className="absolute border-[#f0f4f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[32px] items-center justify-center pl-[32px] pt-px relative w-full">
          <Data24 />
          <Data25 />
          <Data26 />
          <Data27 />
          <Data28 />
          <Data29 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row2LowStock />
      <Row3ExpiringSoon />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[142.28px]">
          <p>
            <span className="leading-[16px]">{`Showing `}</span>
            <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[16px] text-[#181c1c]">5</span>
            <span className="leading-[16px]">{` of `}</span>
            <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[16px] text-[#181c1c]">1,284</span>
            <span className="leading-[16px]">{` items`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-30 px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc9c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[12px] text-center w-[48.16px]">
        <p className="leading-[16px]">Previous</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#006565] content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc9c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-[4.95px]">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc9c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[12px] text-center w-[7.28px]">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc9c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[12px] text-center w-[7.69px]">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bdc9c8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[12px] text-center w-[26.81px]">
        <p className="leading-[16px]">Next</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function PaginationFooterOfTable() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pagination/Footer of Table">
      <div aria-hidden="true" className="absolute border-[#f0f4f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[24px] pt-[25px] px-[32px] relative w-full">
          <Container52 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function InventoryDataDisplay() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Inventory Data Display">
      <Overlay />
      <Table />
      <PaginationFooterOfTable />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[20px] w-full">
        <p className="leading-[28px]">Operational Insights</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-full">
        <p className="leading-[24px]">Inventory Turnover Slowing</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`Your "Pandan Wangi" rice is moving`}</p>
        <p className="leading-[22.75px] mb-0">15% slower than usual. Consider a</p>
        <p className="leading-[22.75px] mb-0">{`"Bundle Deal" with Cooking Oil to boost`}</p>
        <p className="leading-[22.75px]">turnover.</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f0f4f3] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <div className="h-[15px] relative shrink-0 w-[25px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
            <path d={svgPaths.p1c8f9920} fill="var(--fill-0, #006565)" id="Icon" />
          </svg>
        </div>
        <Heading3 />
        <Container56 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[76px]" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[197.25px]">
        <p className="leading-[24px]">Upcoming Expiry Warning</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[115.25px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[251.28px]">
        <p className="leading-[22.75px] mb-0">8 items are expiring within 48 hours.</p>
        <p className="leading-[22.75px] mb-0">We recommend clearing stock through</p>
        <p className="leading-[22.75px]">{`"Flash Sale" status on Shopping tab.`}</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f0f4f3] col-2 h-[231px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background">
      <div className="absolute left-[26.47px] size-[25.063px] top-[29.47px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0625 25.0625">
          <path d={svgPaths.p155ca820} fill="var(--fill-0, #944200)" id="Icon" />
        </svg>
      </div>
      <Heading4 />
      <Container57 />
    </div>
  );
}

function Container55() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_231px] relative shrink-0 w-full" data-name="Container">
      <Background8 />
      <Background9 />
    </div>
  );
}

function Container54() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading2 />
      <Container55 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Precision Forecast</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#e3fffe] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">{`Based on last week's sales, you will`}</p>
        <p className="leading-[22.75px] mb-0">{`run out of "Minyak Goreng SunCo"`}</p>
        <p className="mb-0">
          <span className="leading-[22.75px]">{`in `}</span>
          <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[22.75px]">2 days</span>
          <span className="leading-[22.75px]">. Suggested order quantity:</span>
        </p>
        <p className="leading-[22.75px]">48 Pcs.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container59 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] text-center w-[175.86px]">
        <p className="leading-[20px]">Apply Reorder Suggestion</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Button:margin">
      <Button9 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#006565] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[32px] bottom-[-40px] right-[-39.98px] rounded-[9999px] size-[160px]" data-name="Decorative Background Texture" />
          <div className="absolute bg-[rgba(0,128,128,0.2)] blur-[20px] left-[-40px] rounded-[9999px] size-[128px] top-[-40px]" data-name="Overlay+Blur" />
          <Container58 />
          <ButtonMargin />
        </div>
      </div>
    </div>
  );
}

function ContextualInsightsSectionAsymmetricEditorialStyle() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_283px] pb-[48px] relative shrink-0 w-full" data-name="Contextual Insights Section (Asymmetric Editorial Style)">
      <Container54 />
      <Background10 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 max-w-[1280px] p-[32px] right-0 top-[64px]" data-name="Container">
      <HeaderSectionWithActions />
      <BentoStatusOverview />
      <InventoryDataDisplay />
      <ContextualInsightsSectionAsymmetricEditorialStyle />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#f6faf9] h-[1024px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <Container />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search inventory items...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[16px] py-[10px] relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bottom-[11.11%] content-stretch flex flex-col items-start left-[12px] top-[11.11%]" data-name="Container">
      <div className="relative shrink-0 size-[13.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <path d={svgPaths.p2500af80} fill="var(--fill-0, #3E4949)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input />
      <Container63 />
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[238.17px] relative w-full">
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container67 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#006565] content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container68 />
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[67.78px]">
        <p className="leading-[20px]">Quick Add</p>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#dfe3e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <UserProfile />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container65 />
      <Button12 />
      <Background11 />
    </div>
  );
}

function HeaderTopNavBarAnchor() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,250,249,0.7)] content-stretch flex h-[64px] items-center justify-between left-[256px] px-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar Anchor">
      <Container60 />
      <Container64 />
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">Precision Curator</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[32px] relative w-full">
        <Heading />
        <Container70 />
      </div>
    </div>
  );
}

function Container71() {
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

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[80.86px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboardInactive() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Dashboard (Inactive)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
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

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[71.78px]">
        <p className="leading-[24px]">Shopping</p>
      </div>
    </div>
  );
}

function LinkShoppingInactive() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Shopping (Inactive)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container73 />
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p344095e0} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] w-[70.153px]">
          <p className="leading-[24px]">Inventory</p>
        </div>
      </div>
    </div>
  );
}

function LinkInventoryActive() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex gap-[12px] items-center pl-[16px] pr-[20px] py-[12px] relative w-[232px]" data-name="Link - Inventory (ACTIVE)">
      <div aria-hidden="true" className="absolute border-[#006565] border-r-4 border-solid inset-0 pointer-events-none" />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[58.98px]">
        <p className="leading-[24px]">Finance</p>
      </div>
    </div>
  );
}

function LinkFinanceInactive() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Finance (Inactive)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center px-[12px] relative size-full">
          <LinkDashboardInactive />
          <LinkShoppingInactive />
          <div className="flex h-[47.04px] items-center justify-center relative shrink-0 w-[227.36px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none scale-x-98 scale-y-98">
              <LinkInventoryActive />
            </div>
          </div>
          <LinkFinanceInactive />
        </div>
      </div>
    </div>
  );
}

function Container79() {
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

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[62.88px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
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

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[52.48px]">
        <p className="leading-[24px]">Logout</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[17px] px-[16px] relative w-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

function AsideSideNavBarAnchor() {
  return (
    <div className="absolute bg-[#f6faf9] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 top-0 w-[256px]" data-name="Aside - SideNavBar Anchor">
      <Container69 />
      <Nav />
      <HorizontalBorder />
    </div>
  );
}

export default function InventoryManagement() {
  return (
    <div className="bg-[#f6faf9] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Inventory Management">
      <MainContentCanvas />
      <HeaderTopNavBarAnchor />
      <AsideSideNavBarAnchor />
    </div>
  );
}