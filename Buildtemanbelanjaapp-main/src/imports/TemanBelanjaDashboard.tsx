import svgPaths from "./svg-hz07bw6216";
import imgOrganicMilk from "figma:asset/6f3aa3f2726c6f9594f060302eecf7a7676a7c25.png";
import imgProfessionalHeadshot from "figma:asset/61e533e913d8acb3c19c7666367319de9dae5439.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Precision Curator</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Overview</p>
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Dashboard Header">
      <Container />
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[24px] w-[164.22px]">
        <p className="leading-[32px]">Daftar Belanja</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[174.98px]">
        <p className="leading-[20px]">Ongoing curated collection</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[174.98px]" data-name="Container">
      <Heading2 />
      <Container3 />
    </div>
  );
}

function Background1() {
  return (
    <div className="h-[43px] relative shrink-0 w-[45.976px]" data-name="Background">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.9758 43">
        <g id="Background">
          <rect fill="var(--fill-0, #F0F4F3)" height="43" rx="16" width="45.9758" />
          <path d={svgPaths.pebf2180} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Container2 />
        <Background1 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[36px] w-[79.08px]">
        <p className="leading-[40px]">75%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] tracking-[0.6px] uppercase w-[84.3px]">
        <p className="leading-[16px]">Completion</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84.3px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[144.25px]">
        <p className="leading-[20px]">12 of 16 items secured</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container9 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0f4f3] h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006565] bottom-0 left-0 right-1/4 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[154px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Background2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="var(--fill-0, #008080)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[40px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-full">
        <p className="leading-[24px]">Bulanan Rumah Tangga</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] w-full">
        <p className="leading-[16px]">Modified 2 hours ago</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[12px] text-center tracking-[0.6px] uppercase w-[33.39px]">
        <p className="leading-[16px]">View</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(240,244,243,0.5)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Background3 />
          <Container11 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-solid border-t inset-0 pointer-events-none" />
      <Overlay />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <Margin />
        <Container4 />
        <Margin1 />
      </div>
    </div>
  );
}

function Section1ShoppingListDaftarBelanjaMediumLargeSpan() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Section - 1. Shopping List (Daftar Belanja) - Medium/Large Span">
      <Background />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[24px] text-white w-[116.5px]">
        <p className="leading-[32px]">Keuangan</p>
      </div>
      <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
          <path d={svgPaths.p53fc80} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">Monthly Expenditure</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Rp 4.250.000</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Heading3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[98.3px]">
          <p className="leading-[20px]">Grocery Spend</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[59.23px]">
          <p className="leading-[24px]">Rp 2.1M</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative w-full">
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[76.72px]">
          <p className="leading-[20px]">Operational</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[59.58px]">
          <p className="leading-[24px]">Rp 1.4M</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[94.34px]">
          <p className="leading-[20px]">Miscellaneous</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[63.81px]">
          <p className="leading-[24px]">Rp 750k</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[13px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[132.53px]">
        <p className="leading-[20px]">Detailed Breakdown</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Background4() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Background" style={{ backgroundImage: "linear-gradient(119.542deg, rgb(0, 101, 101) 0%, rgb(0, 128, 128) 100%)" }}>
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Margin2 />
        <Margin3 />
        <Container16 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function Section2FinanceSummaryKeuanganVerticalSpan() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Section - 2. Finance Summary (Keuangan) - Vertical Span">
      <Background4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[24px] w-[117.17px]">
        <p className="leading-[32px]">Inventaris</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[175.69px]">
        <p className="leading-[20px]">Real-time stock monitoring</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175.69px]" data-name="Container">
      <Heading4 />
      <Container25 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#b8560a] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[16px] py-[6px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#331200] text-[12px] uppercase w-[81.41px]">
          <p className="leading-[16px]">3 Low Stock</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#ffdad6] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[16px] py-[6px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#93000a] text-[12px] uppercase w-[59.7px]">
          <p className="leading-[16px]">1 Expired</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0" data-name="Container">
      <Background5 />
      <Background6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[17.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 22.5">
        <g id="Container">
          <path d={svgPaths.p2ca73400} fill="var(--fill-0, #6E7979)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <Container28 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[7.47px] relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[84.3px]">
        <p className="leading-[24px] mb-0">Telur Ayam</p>
        <p className="leading-[24px]">Broiler</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative w-full">
        <Heading5 />
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[12px] uppercase w-[54.89px]">
          <p className="leading-[16px]">Critical</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] w-full">
        <p className="leading-[16px]">Remaining: 2 Units</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f0f4f3] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#ba1a1a] inset-[0_85.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container30 />
      <Container31 />
      <Background8 />
    </div>
  );
}

function InventoryItem() {
  return (
    <div className="bg-white col-1 h-[130px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Inventory Item 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <Background7 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function OrganicMilk() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Organic Milk">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOrganicMilk} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <OrganicMilk />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[28.91px] relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[60.23px]">
        <p className="leading-[24px] mb-0">Susu</p>
        <p className="leading-[24px]">Organik</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#944200] text-[12px] uppercase w-[57.53px]">
        <p className="leading-[16px]">Expiring</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] w-full">
        <p className="leading-[16px]">Expires in 2 days</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#f0f4f3] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#944200] inset-[0_55%_0_0]" data-name="Background" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container33 />
      <Container34 />
      <Background10 />
    </div>
  );
}

function InventoryItem1() {
  return (
    <div className="bg-white col-2 h-[130px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Inventory Item 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <Background9 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Container">
          <path d={svgPaths.p2a5d2218} fill="var(--fill-0, #6E7979)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#f0f4f3] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <Container35 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex font-bold items-start justify-between leading-[0] pr-[0.01px] relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[24px] justify-center relative shrink-0 text-[#181c1c] text-[16px] w-[95.45px]">
          <p className="leading-[24px]">Kopi Arabika</p>
        </div>
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] h-[16px] justify-center relative shrink-0 text-[#006565] text-[12px] uppercase w-[45.67px]">
          <p className="leading-[16px]">Stable</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] w-full">
        <p className="leading-[16px]">Stock level: 65%</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#f0f4f3] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006565] inset-[0_35.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Paragraph1 />
      <Container37 />
      <Background12 />
    </div>
  );
}

function InventoryItem2() {
  return (
    <div className="bg-white col-3 h-[130px] justify-self-stretch relative rounded-[24px] row-1 shrink-0" data-name="Inventory Item 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <Background11 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_130px] relative shrink-0 w-full" data-name="Container">
      <InventoryItem />
      <InventoryItem1 />
      <InventoryItem2 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[14px] text-center w-[149.56px]">
        <p className="leading-[20px]">Full Inventory Analysis</p>
      </div>
      <Container39 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Component3InventoryInventarisFullWidthBottomSection() {
  return (
    <div className="bg-[#f0f4f3] col-[1/span_12] justify-self-stretch relative rounded-[24px] row-2 self-start shrink-0" data-name="3. Inventory (Inventaris) - Full Width Bottom Section">
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Container23 />
        <Container27 />
        <Container38 />
      </div>
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__527px_334px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <Section1ShoppingListDaftarBelanjaMediumLargeSpan />
      <Section2FinanceSummaryKeuanganVerticalSpan />
      <Component3InventoryInventarisFullWidthBottomSection />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="min-h-[1125px] relative shrink-0 w-full" data-name="Main Content Area">
      <div className="content-stretch flex flex-col gap-[40px] items-start min-h-[inherit] pb-[96px] pt-[32px] px-[32px] relative w-full">
        <DashboardHeader />
        <BentoGridLayout />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search curated lists...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[16px] py-[10px] relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bottom-[22.22%] content-stretch flex flex-col items-start left-[12px] top-[22.22%]" data-name="Container">
      <div className="relative shrink-0 size-[10.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <path d={svgPaths.p210dd580} fill="var(--fill-0, #6E7979)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input />
      <Container43 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[263.47px] relative w-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container46() {
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

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container47() {
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

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] text-right uppercase w-[56.27px]">
        <p className="leading-[12px]">Curator</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] text-right w-[83.5px]">
        <p className="leading-[20px]">Alex Morgan</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[83.5px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function ProfessionalHeadshot() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Professional headshot">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfessionalHeadshot} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container49 />
      <ProfessionalHeadshot />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container45 />
      <div className="bg-[rgba(189,201,200,0.3)] h-[32px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container48 />
    </div>
  );
}

function HeaderTopNavBarShell() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,250,249,0.7)] content-stretch flex h-[64px] items-center justify-between left-[256px] px-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[-64px] w-[1024px]" data-name="Header - TopNavBar Shell">
      <Container40 />
      <Container44 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p344095e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#006565] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[40px]" data-name="Background">
      <Container54 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[20px] w-[139.88px]">
        <p className="leading-[20px]">Teman Belanja</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#6e7979] text-[12px] tracking-[1.2px] uppercase w-[143.67px]">
        <p className="leading-[16px]">Precision Curator</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[143.67px]" data-name="Container">
      <Heading />
      <Container56 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background13 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] w-[81.541px]">
          <p className="leading-[24px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function LinkDashboardActive() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[20px] py-[12px] relative w-[208px]" data-name="Link - Dashboard Active">
      <div aria-hidden="true" className="absolute border-[#006565] border-r-4 border-solid inset-0 pointer-events-none" />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[71.31px]">
        <p className="leading-[24px]">Shopping</p>
      </div>
    </div>
  );
}

function LinkOtherItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link - Other Items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[69.45px]">
        <p className="leading-[24px]">Inventory</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container61 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[58.56px]">
        <p className="leading-[24px]">Finance</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container63 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-center relative shrink-0 w-full" data-name="Nav">
      <div className="flex h-[47.04px] items-center justify-center relative shrink-0 w-[203.84px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none scale-x-98 scale-y-98">
          <LinkDashboardActive />
        </div>
      </div>
      <LinkOtherItems />
      <Link />
      <Link1 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[32px] relative w-full">
        <Container53 />
        <Nav />
      </div>
    </div>
  );
}

function Container65() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[68.39px]">
        <p className="leading-[24px]">Add Item</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#006565] relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[62.14px]">
        <p className="leading-[24px]">Settings</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[52.16px]">
        <p className="leading-[24px]">Logout</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container69 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-[33px] px-[24px] relative w-full">
        <Button5 />
        <Nav1 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-h-[249px] min-w-px relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[516px] relative size-full">
          <HorizontalBorder4 />
        </div>
      </div>
    </div>
  );
}

function AsideSideNavBarShell() {
  return (
    <div className="absolute bg-[#f6faf9] content-stretch flex flex-col h-[1125px] items-start justify-between left-0 overflow-clip top-[-64px] w-[256px]" data-name="Aside - SideNavBar Shell">
      <Container52 />
      <Margin4 />
    </div>
  );
}

export default function TemanBelanjaDashboard() {
  return (
    <div className="bg-[#f6faf9] content-stretch flex flex-col items-start pl-[256px] relative size-full" data-name="Teman Belanja Dashboard">
      <MainContentArea />
      <HeaderTopNavBarShell />
      <AsideSideNavBarShell />
    </div>
  );
}