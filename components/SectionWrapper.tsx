"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Props {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`max-w-6xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
