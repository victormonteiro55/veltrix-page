const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="vpGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(212 100% 60%)" />
          <stop offset="1" stopColor="hsl(195 100% 70%)" />
        </linearGradient>
      </defs>
      <path d="M4 6 L14 32 L20 20 L14 6 Z" fill="url(#vpGrad)" />
      <path d="M22 6 L36 6 L30 20 L24 20 L24 32 L18 20 L22 6 Z" fill="url(#vpGrad)" opacity="0.95" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="font-display text-lg font-bold tracking-wide text-gradient">VELTRIX</span>
      <span className="text-[10px] tracking-[0.3em] text-muted-foreground">— PAGE —</span>
    </div>
  </div>
);

export default Logo;
