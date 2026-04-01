import svgPaths from "./svg-biq3uko5rw";
import imgSupermarketShelves from "figma:asset/fad708d032dd8731787f63bb70b7a668fcfefb50.png";
import imgProfessionalHeadshot from "figma:asset/e034d011c897165c2eb3f31f97150a298b10a246.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-[72.13px]">
        <p className="leading-[16px]">Shopping</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[5px] relative shrink-0 w-[3.083px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.08333 5">
        <g id="Container">
          <path d={svgPaths.p200a4600} fill="var(--fill-0, #3E4949)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[12px] tracking-[1.2px] uppercase w-[94.25px]">
        <p className="leading-[16px]">Groceries A</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-0 top-0" data-name="Nav">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[40px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[36px] tracking-[-0.9px] w-[195.02px]">
        <p className="leading-[40px]">Groceries A</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[68px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[16px] w-[423.52px]">
        <p className="leading-[24px]">Weekly restocking for the main pantry and office kitchen.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[92px] relative shrink-0 w-[423.52px]" data-name="Container">
      <Nav />
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.pad10a80} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] text-center w-[62.05px]">
        <p className="leading-[24px]">Edit List</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2d8e4cc0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[68.39px]">
        <p className="leading-[24px]">Add Item</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#006565] content-stretch flex gap-[8px] items-center px-[24px] py-[10px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function BreadcrumbHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Breadcrumb & Header">
      <Container />
      <Container5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[-0.6px] uppercase w-[41.34px]">
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[-0.6px] uppercase w-[73.48px]">
        <p className="leading-[16px]">Item Details</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative">
        <Container11 />
        <Margin />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[-0.6px] uppercase w-[22.23px]">
        <p className="leading-[16px]">Qty</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[-0.6px] uppercase w-[31.88px]">
        <p className="leading-[16px]">Price</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[80.01px] items-center relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[48px] relative">
        <Container12 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(240,244,243,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Container10 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[7.015px] relative shrink-0 w-[9.508px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50833 7.01458">
        <g id="Container">
          <path d={svgPaths.p25f8ca80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#006565] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[24px]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[179.06px]">
        <p className="leading-[24px]">Whole Grain Sourdough</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[158.81px]">
        <p className="leading-[16px]">SKU: BAK-029 • Bakery Dept</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[179.06px]" data-name="Container">
      <Heading3 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container18 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[1.167px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 1.16667">
        <g id="Container">
          <path d={svgPaths.p3ab8d800} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[8.66px]">
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e5e9e8] content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <Button2 />
      <Container22 />
      <Button3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] text-right w-[78.95px]">
        <p className="leading-[24px]">Rp 45.000</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] text-right w-[69.28px]">
        <p className="leading-[15px]">Rp 22.500/unit</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.5">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="var(--fill-0, #BDC9C8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative shrink-0" data-name="Button">
      <Container27 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container24 />
      <Button4 />
    </div>
  );
}

function ItemRow() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Item Row 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container16 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[179.75px]">
        <p className="leading-[24px]">Premium Arabica Beans</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[140.16px]">
        <p className="leading-[16px]">SKU: CF-992 • Beverages</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[179.75px]" data-name="Container">
      <Heading4 />
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#dfe3e2] relative rounded-[6px] shrink-0 size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[1.167px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 1.16667">
        <g id="Container">
          <path d={svgPaths.p3ab8d800} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[5.86px]">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container34 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e5e9e8] content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <Button5 />
      <Container33 />
      <Button6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[96px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[32px] justify-center leading-[0] relative shrink-0 text-[#35618f] text-[12px] text-right w-[91px]">
        <p className="[text-decoration-skip-ink:none] decoration-[rgba(53,97,143,0.3)] decoration-solid leading-[16px] mb-0 underline">Cek harga lewat</p>
        <p className="[text-decoration-skip-ink:none] decoration-[rgba(53,97,143,0.3)] decoration-solid leading-[16px] underline">Google</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.5">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="var(--fill-0, #BDC9C8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative shrink-0" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container35 />
      <Button7 />
    </div>
  );
}

function ItemRow2NoPrice() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Item Row 2 (No Price)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Container28 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[16px] w-[157.95px]">
        <p className="leading-[24px]">Organic Almond Milk</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[103.53px]">
        <p className="leading-[16px]">SKU: DY-112 • Dairy</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[157.95px]" data-name="Container">
      <Heading5 />
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#dfe3e2] rounded-[6px] shrink-0 size-[24px]" data-name="Background" />
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[1.167px] relative shrink-0 w-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 1.16667">
        <g id="Container">
          <path d={svgPaths.p3ab8d800} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start px-[12px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[9.09px]">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #181C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e5e9e8] content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0" data-name="Background">
      <Button8 />
      <Container42 />
      <Button9 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] text-right w-[85.59px]">
        <p className="leading-[24px]">Rp 105.000</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[10px] text-right w-[69.72px]">
        <p className="leading-[15px]">Rp 35.000/unit</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.5">
        <g id="Container">
          <path d={svgPaths.p1af14480} fill="var(--fill-0, #BDC9C8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative shrink-0" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container44 />
      <Button10 />
    </div>
  );
}

function ItemRow1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Item Row 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[15.99px] py-[16px] relative w-full">
          <Container37 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <ItemRow />
        <ItemRow2NoPrice />
        <ItemRow1 />
      </div>
    </div>
  );
}

function ListCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="List Card">
      <OverlayHorizontalBorder />
      <Container15 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#006565] content-stretch flex h-[48px] items-center justify-center relative rounded-[9999px] shrink-0 w-[41.67px]" data-name="Background">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[12px] tracking-[1.2px] uppercase w-[174.08px]">
        <p className="leading-[16px]">Estimated Investment</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[56px] leading-[0] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[36px] justify-center left-0 text-[#181c1c] text-[30px] top-[17.5px] w-[172.59px]">
        <p className="leading-[36px]">{`Rp 150.000 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-[172.6px] text-[#3e4949] text-[14px] top-[23.5px] w-[63.58px]">
        <p className="leading-[20px]">+ pending</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center left-0 text-[#3e4949] text-[14px] top-[45.5px] w-[39.69px]">
        <p className="leading-[20px]">prices</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[174.08px]" data-name="Container">
      <Container51 />
      <Heading2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Background4 />
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p12df5c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[15.35px] pr-[15.34px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[85.75px]">
        <p className="leading-[24px] mb-0">Beli Secara</p>
        <p className="leading-[24px]">Online</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(160.381deg, rgb(0, 101, 101) 0%, rgb(0, 128, 128) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center justify-center px-[40px] py-[16px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function SummaryCtaSection() {
  return (
    <div className="bg-[rgba(0,101,101,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Summary & CTA Section">
      <div aria-hidden="true" className="absolute border-[#006565] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[36px] pr-[32px] py-[32px] relative w-full">
          <Container48 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function ListSectionMainArea() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="List Section (Main Area)">
      <ListCard />
      <SummaryCtaSection />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-full">
        <p className="leading-[28px]">List Metadata</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[51.83px]">
          <p className="leading-[20px]">Created</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[14px] w-[86.33px]">
          <p className="leading-[20px]">Oct 24, 2023</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[59.69px]">
          <p className="leading-[20px]">Category</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#a0cafe] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[4px] relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#285582] text-[10px] tracking-[0.5px] uppercase w-[76.19px]">
          <p className="leading-[15px]">Operational</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] relative w-full">
          <Container57 />
          <Background5 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[14px] w-[74.39px]">
          <p className="leading-[20px]">Completion</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#dfe3e2] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-[96px]" data-name="Background">
      <div className="absolute bg-[#006565] inset-[0_66.67%_0_0]" data-name="Background" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[12px] w-[26.61px]">
        <p className="leading-[16px]">33%</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Background6 />
        <Container60 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
    </div>
  );
}

function ShoppingStatistics() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[16px] shrink-0 w-full" data-name="Shopping Statistics">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Heading6 />
        <Container54 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #944200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#181c1c] text-[18px] w-[104.88px]">
        <p className="leading-[28px]">Quick Guide</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Heading7 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,128,128,0.2)] content-stretch flex items-center justify-center left-0 pb-[3px] pt-[2px] rounded-[9999px] size-[20px] top-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#008080] text-[10px] text-center w-[4.19px]">
        <p className="leading-[15px]">1</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[32px] pr-[28.77px] top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[195.23px]">
        <p className="mb-0">
          <span className="leading-[19.5px]">{`Fill in the `}</span>
          <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[19.5px] text-[#181c1c]">item name</span>
          <span className="leading-[19.5px]">{` clearly to help`}</span>
        </p>
        <p className="leading-[19.5px]">matching.</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Item">
      <Overlay />
      <Container63 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(0,128,128,0.2)] content-stretch flex items-center justify-center left-0 pb-[3px] pt-[2px] rounded-[9999px] size-[20px] top-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#008080] text-[10px] text-center w-[6.19px]">
        <p className="leading-[15px]">2</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[32px] pr-[11.86px] top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[212.14px]">
        <p className="mb-0">
          <span className="leading-[19.5px]">{`Adjust `}</span>
          <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[19.5px] text-[#181c1c]">quantities</span>
          <span className="leading-[19.5px]">{` using the +/- buttons`}</span>
        </p>
        <p className="leading-[19.5px]">for precision.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Item">
      <Overlay1 />
      <Container64 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(0,128,128,0.2)] content-stretch flex items-center justify-center left-0 pb-[3px] pt-[2px] rounded-[9999px] size-[20px] top-0" data-name="Overlay">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#008080] text-[10px] text-center w-[6.5px]">
        <p className="leading-[15px]">3</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[32px] pr-[9.53px] top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[39px] justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] w-[214.47px]">
        <p className="mb-0">
          <span className="leading-[19.5px]">{`Input `}</span>
          <span className="font-['Public_Sans:Bold',sans-serif] font-bold leading-[19.5px] text-[#181c1c]">price</span>
          <span className="leading-[19.5px]">{` if known, or use the Google`}</span>
        </p>
        <p className="leading-[19.5px]">shortcut to check market rates.</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Item">
      <Overlay2 />
      <Container65 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function UserFlowGuide() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="User Flow Guide">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Container61 />
        <List />
      </div>
    </div>
  );
}

function SupermarketShelves() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Supermarket shelves">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[158.33%] left-0 max-w-none top-[-29.17%] w-full" src={imgSupermarketShelves} />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Market Update</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[16px] mb-0">Coffee prices are expected to rise next week.</p>
        <p className="leading-[16px]">Consider bulk buying.</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(24,28,28,0.8)] inset-0 items-start justify-end p-[24px] to-[rgba(24,28,28,0)]" data-name="Background">
      <Heading8 />
      <Container66 />
    </div>
  );
}

function RecentStoreTrends() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Recent Store Trends">
      <SupermarketShelves />
      <Background7 />
    </div>
  );
}

function SidebarDetailsPanel() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Sidebar / Details Panel">
      <ShoppingStatistics />
      <UserFlowGuide />
      <RecentStoreTrends />
    </div>
  );
}

function BentoGridLayoutForContent() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_719px] relative shrink-0 w-full" data-name="Bento Grid Layout for Content">
      <ListSectionMainArea />
      <SidebarDetailsPanel />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[96px] px-[32px] relative w-full">
        <BreadcrumbHeader />
        <BentoGridLayoutForContent />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(110,121,121,0.6)] w-full">
        <p className="leading-[normal]">Search inventory or lists...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f4f3] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[40px] pr-[16px] py-[10px] relative w-full">
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #6E7979)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[448px] min-h-px min-w-px relative" data-name="Container">
      <Input />
      <Container70 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[256.16px] relative w-full">
          <Container68 />
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
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #475569)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
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

function Container72() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-center relative shrink-0" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#008080] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
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

function Background8() {
  return (
    <div className="bg-[#dfe3e2] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <ProfessionalHeadshot />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container72 />
      <Button12 />
      <Background8 />
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,250,249,0.7)] content-stretch flex h-[64px] items-center justify-between left-[256px] px-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[1024px]" data-name="Header - TopNavBar">
      <Container67 />
      <Container71 />
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

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3e4949] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Precision Curator</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[32px] relative w-full">
        <Heading />
        <Container76 />
      </div>
    </div>
  );
}

function Container77() {
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

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[80.86px]">
        <p className="leading-[24px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p3faf9100} fill="var(--fill-0, #006565)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#006565] text-[16px] w-[72.27px]">
          <p className="leading-[24px]">Shopping</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f0f4f3] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#006565] border-r-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[20px] py-[12px] relative w-full">
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
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

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[70.16px]">
        <p className="leading-[24px]">Inventory</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container81 />
          <Container82 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
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

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-[58.98px]">
        <p className="leading-[24px]">Finance</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Container83 />
          <Container84 />
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[12px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container86() {
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

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[68.39px]">
        <p className="leading-[24px]">Add Item</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#006565] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center justify-center px-[16px] py-[12px] relative w-full">
          <Container86 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
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

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[54.38px]">
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Container88 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
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

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#64748b] text-[14px] w-[45.64px]">
        <p className="leading-[20px]">Logout</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative w-full">
          <Container90 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(189,201,200,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Button13 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute bg-[#f6faf9] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 top-0 w-[256px]" data-name="Aside - SideNavBar">
      <Container75 />
      <Nav1 />
      <Container85 />
    </div>
  );
}

function Container92() {
  return (
    <div className="relative shrink-0 size-[18.701px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7011 18.7011">
        <g id="Container">
          <path d={svgPaths.pb702a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFloatingQuickAddFabForHomeMainListViewsAsPerInstructions() {
  return (
    <div className="absolute bg-[#006565] bottom-[32px] content-stretch flex items-center justify-center right-[32px] rounded-[9999px] size-[56px]" data-name="Button - Floating Quick Add (FAB) - For Home/Main List Views as per instructions">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-[56px]" data-name="Button - Floating Quick Add (FAB) - For Home/Main List Views as per instructions:shadow" />
      <Container92 />
    </div>
  );
}

export default function DetailedShoppingList() {
  return (
    <div className="bg-[#f6faf9] content-stretch flex flex-col items-start pb-[37px] pl-[256px] relative size-full" data-name="Detailed Shopping List">
      <MainContent />
      <HeaderTopNavBar />
      <AsideSideNavBar />
      <ButtonFloatingQuickAddFabForHomeMainListViewsAsPerInstructions />
    </div>
  );
}