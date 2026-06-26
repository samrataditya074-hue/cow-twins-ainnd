import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  expandable?: boolean;
}

export function ResearchCard({ title, icon, children, className, expandable = false }: ResearchCardProps) {
  const [isExpanded, setIsExpanded] = useState(!expandable);

  return (
    <motion.div 
      layout
      className={cn("research-card group", className)}
    >
      <div 
        className={cn("flex items-center justify-between", expandable && "cursor-pointer")}
        onClick={() => expandable && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          {icon && (
            <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        </div>
        {expandable && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <ChevronDown />
          </motion.div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={cn("text-gray-600 dark:text-gray-400 leading-relaxed", title ? "pt-6" : "")}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
