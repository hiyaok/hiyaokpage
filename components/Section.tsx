"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  desc,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-xs tracking-wide text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span>{eyebrow}</span>
        </div>

        <h2 className="mt-6 text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
          {desc}
        </p>

        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
