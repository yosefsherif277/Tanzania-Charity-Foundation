"use client";
import { motion } from "framer-motion";
import { FadeInProps } from "@/types/animation";
import { useEffect, useState } from "react";

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // أثناء SSR، نعرض المحتوى بدون أنيميشن
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={{
        overflow: "hidden", // يمنع الخروج عن الحدود
        contain: "layout", // يعزل العنصر
        willChange: "transform", // يحسن الأداء
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
