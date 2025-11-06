"use client";
import { motion } from "framer-motion";
import { SlideInProps } from "@/types/animation";
import { useEffect, useState } from "react";

export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: SlideInProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  // أثناء SSR، نعرض المحتوى بدون أنيميشن
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: directions[direction].x,
        y: directions[direction].y,
      }}
      style={{
        overflow: "hidden", // يمنع الخروج عن الحدود
        contain: "layout", // يعزل العنصر
        willChange: "transform", // يحسن الأداء
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
