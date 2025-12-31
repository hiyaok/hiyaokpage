export default function AnimatedFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[5]">
      {/* Top subtle glow line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulseLine" />

      {/* Bottom subtle glow line */}
      <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-pulseLine" />

      {/* Left rail */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulseLine" />

      {/* Right rail */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulseLine" />

      {/* Corner glows */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}
