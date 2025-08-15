"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function FollowBlob({ size, className }: { size: number; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - size / 2);
      y.set(e.clientY - size / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [size, x, y]);

  return (
    <motion.div
      aria-hidden
      className={`
        z-[9999] 
        pointer-events-none fixed inset-0
        rounded-full blur-xl
        ${className}
        mix-blend-screen
      `}
      style={{ width: size, height: size, x: sx, y: sy }}
    />
  );
}

export default function BlobsBackground() {
  return (
    <>
      <FollowBlob size={420} className="bg-[var(--follow-blobs-1)]" />
      <FollowBlob size={320} className="bg-[var(--follow-blobs-2)]" />
      <FollowBlob size={260} className="bg-[var(--follow-blobs-3)]" />
    </>
  );
}
