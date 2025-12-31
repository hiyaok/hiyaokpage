"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9998] h-[3px] w-full origin-left bg-gradient-to-r from-zinc-200/30 via-zinc-200/70 to-zinc-200/30"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
