"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function FollowBlob({ size, className }: { size: number; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

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
      className={`pointer-events-none fixed -z-10 rounded-full blur-3xl mix-blend-screen ${className}`}
      style={{ width: size, height: size, x: springX, y: springY }}
    />
  );
}

export default function BlobsBackground() {
  return (
    <>
      <FollowBlob size={400} className="bg-[color:var(--follow-blobs-1)]" />
      <FollowBlob size={300} className="bg-[color:var(--follow-blobs-2)]" />
      <FollowBlob size={240} className="bg-[color:var(--follow-blobs-3)]" />
    </>
  );
}
