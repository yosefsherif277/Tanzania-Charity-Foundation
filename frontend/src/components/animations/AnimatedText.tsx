"use client";
import { motion } from "framer-motion";
import { AnimatedTextProps } from "@/types/animation";
import { useEffect, useState } from "react";

export function AnimatedText({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // أثناء SSR، نعرض النص بشكل عادي
  if (!isMounted) {
    return <div className={className}>{text}</div>;
  }

  return (
    <motion.div
      style={{
        overflow: "hidden", // يمنع الخروج عن الحدود
        contain: "layout", // يعزل العنصر
        willChange: "transform", // يحسن الأداء
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}
