import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function Section({ id, className, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
