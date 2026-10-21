import { cn } from "@/lib/utils";

export function BrandLogo({
  slug,
  name,
  symbol,
  className,
}: {
  slug?: string;
  name?: string;
  symbol?: string;
  className?: string;
}) {
  const rawKey = slug || name || "";
  const key = rawKey
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  if (key.includes("vertiv")) {
    return (
      <div
        className={cn("flex items-center gap-2.5 font-bold tracking-wider text-slate-900", className)}
      >
        <svg
          viewBox="0 0 512 512"
          className="h-8 w-8 shrink-0"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M512 269.4c0 99.6-57.4 185.8-141.1 227.7L256.1 382.8l228.6-227.6H355.5l-99.4 99-.1-.1-99.4-99H27.3c42-83.3 128.8-140.4 228.8-140.4s186.6 57.2 228.6 140.5l.1-.1c18 35.5 27.2 74.7 27.2 114.3m-512 .3c0 99.5 57.4 185.7 141.1 227.6L256 383 27.3 155.2C9.3 190.7 0 229.9 0 269.7" />
        </svg>
        <div className="flex items-baseline">
          <span className="font-sans text-xl font-black tracking-[0.12em]">VERTIV</span>
          <span className="ml-0.5 text-[0.6rem] font-bold tracking-normal opacity-75">TM</span>
        </div>
      </div>
    );
  }

  if (key.includes("riello")) {
    return (
      <div className={cn("flex items-center gap-2 font-bold", className)}>
        <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-tr from-[#005BAC] to-[#E30613] p-1 text-white font-extrabold text-sm">
          R
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-black italic tracking-tight text-[#003B70]">riello</span>
          <span className="ml-1 text-xs font-bold text-muted-foreground uppercase">ups</span>
        </div>
      </div>
    );
  }

  if (key.includes("apc")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-tighter text-[#E31B23]">APC</span>
        <span className="mt-0.5 text-[0.55rem] font-bold text-[#009639] tracking-wider">
          by Schneider Electric
        </span>
      </div>
    );
  }

  if (key.includes("ablerex")) {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        <svg viewBox="0 0 40 40" className="h-7 w-7 text-[#005BAC]" fill="currentColor">
          <path d="M10 32 C12 18, 22 10, 26 10 C28 10, 20 22, 24 32 C26 32, 34 16, 30 8 C18 8, 8 22, 10 32 Z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-xl font-black italic tracking-tight text-[#1E2B4D]">Ablerex</span>
          <span className="text-[0.5rem] font-semibold text-muted-foreground italic">
            every moment counts
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("eaton")) {
    return (
      <div className={cn("flex flex-col items-center", className)}>
        <span className="text-2xl font-black tracking-tight text-[#005EB8]">EAT•N</span>
        <span className="text-[0.52rem] font-semibold text-muted-foreground">
          Powering Business Worldwide
        </span>
      </div>
    );
  }

  if (key.includes("eltek")) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#78BE20] text-white font-extrabold text-xs">
          ∞
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-wider text-[#1C1C1C]">ELTEK</span>
          <span className="text-[0.5rem] font-semibold text-muted-foreground">
            A Delta Group Company
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("cet") || key.includes("ce-t")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-wider text-[#E30613]">CE+T</span>
        <span className="mt-0.5 text-[0.6rem] font-black tracking-[0.25em] text-black">POWER</span>
      </div>
    );
  }

  if (key.includes("socomec")) {
    return (
      <div className={cn("flex flex-col leading-none", className)}>
        <div className="flex items-center gap-1">
          <span className="h-3.5 w-3.5 bg-[#FFBF00] inline-block rounded-xs" />
          <span className="text-xl font-black tracking-tight text-[#004B87]">socomec</span>
        </div>
        <span className="mt-1 text-[0.52rem] font-bold text-muted-foreground">
          Innovative Power Solutions
        </span>
      </div>
    );
  }

  if (key.includes("fiamm")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-wider text-[#E30613]">FIAMM</span>
        <span className="mt-1 text-[0.52rem] font-bold text-muted-foreground">
          Your World, Our Energy
        </span>
      </div>
    );
  }

  if (key.includes("yuasa")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <svg viewBox="0 0 50 30" className="h-6 w-10 text-[#E30613]" fill="currentColor">
          <path d="M5 25 L15 5 L20 5 L12 25 Z M18 25 L23 5 L27 5 L32 25 Z M30 25 L38 5 L45 5 L35 25 Z" />
        </svg>
        <span className="mt-1 text-lg font-black tracking-[0.16em] text-black">YUASA</span>
      </div>
    );
  }

  if (key.includes("csb")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-[0.55rem] font-bold tracking-widest text-[#E35205]">BATTERY</span>
        <span className="text-2xl font-black tracking-tight text-[#E35205]">CSB</span>
      </div>
    );
  }

  if (key.includes("enersys")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black italic tracking-tight text-[#231F20]">EnerSys</span>
        <div className="mt-0.5 h-0.5 w-16 bg-[#E30613]" />
        <span className="mt-0.5 text-[0.5rem] italic font-semibold text-muted-foreground">
          Power/Full Solutions
        </span>
      </div>
    );
  }

  if (key.includes("narada")) {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        <span className="text-xl font-black italic text-[#003A70]">MP</span>
        <span className="text-xl font-black italic tracking-wider text-[#E35205]">narada</span>
      </div>
    );
  }

  if (key.includes("rblti") || key.includes("rb-1")) {
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        <div className="flex items-center border border-[#003B70] px-1.5 py-0.5 text-lg font-black text-[#003B70]">
          RB
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="text-lg font-black text-[#E35205]">1</span>
          <span className="text-[0.55rem] font-bold text-black">LTI</span>
        </div>
      </div>
    );
  }

  if (key.includes("delta")) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <svg viewBox="0 0 100 100" className="h-7 w-7 text-[#0066B3] shrink-0" fill="currentColor">
          <path d="M50 15 L85 85 L15 85 Z M50 42 L32 75 L68 75 Z" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-wider text-[#0066B3]">DELTA</span>
          <span className="text-[0.52rem] font-bold text-muted-foreground tracking-widest uppercase">
            Power Solutions
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("hitachi")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-wider text-[#E60012]">HITACHI</span>
        <span className="mt-1 text-[0.52rem] font-bold tracking-wider text-[#1C1C1C]">
          Inspire the Next
        </span>
      </div>
    );
  }

  if (key.includes("amaron") || key.includes("quanta")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black italic tracking-wider text-[#00853F]">AMARON</span>
        <span className="mt-0.5 text-[0.62rem] font-extrabold tracking-[0.25em] text-[#1C1C1C] uppercase">
          QUANTA
        </span>
      </div>
    );
  }

  if (key.includes("exide")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-tight text-[#ED1C24]">EXIDE</span>
        <span className="mt-0.5 text-[0.55rem] font-black tracking-[0.2em] text-[#003B70] uppercase">
          POWERSAFE
        </span>
      </div>
    );
  }

  if (key.includes("rocket")) {
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#E30613] text-white font-black text-xs">
          🚀
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-wider text-[#E30613]">ROCKET</span>
          <span className="text-[0.5rem] font-bold text-muted-foreground uppercase">
            VRLA Industrial
          </span>
        </div>
      </div>
    );
  }

  if (key.includes("panasonic")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-xl font-black tracking-[0.14em] text-[#00438B]">Panasonic</span>
        <span className="mt-1 text-[0.52rem] font-semibold text-muted-foreground tracking-widest uppercase">
          Industrial Batteries
        </span>
      </div>
    );
  }

  if (key.includes("hbl")) {
    return (
      <div className={cn("flex flex-col items-center leading-none", className)}>
        <span className="text-2xl font-black tracking-tight text-[#003366]">HBL</span>
        <span className="mt-0.5 text-[0.52rem] font-bold tracking-wider text-[#D32F2F] uppercase">
          Power Systems
        </span>
      </div>
    );
  }

  if (key.includes("franklin")) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="flex h-6 w-6 items-center justify-center rounded bg-black text-white font-bold text-xs">
          ⚡
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black tracking-tight text-black">Franklin Electric</span>
          <span className="text-[0.55rem] font-bold text-[#E35205] tracking-wider uppercase">
            Grid Solutions
          </span>
        </div>
      </div>
    );
  }

  const displayText = name || slug || symbol || "BRAND";
  return (
    <span className={cn("font-display text-lg font-extrabold tracking-wider", className)}>
      {displayText.toUpperCase()}
    </span>
  );
}
