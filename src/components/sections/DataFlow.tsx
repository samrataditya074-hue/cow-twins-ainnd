import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/Section';
import { Activity, Cloud, BrainCircuit, ActivitySquare, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export function DataFlow() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, title: "Real Cow", icon: <Activity className="w-8 h-8" />, desc: "The physical animal at the center of the loop. Generates health, movement, and biological data continuously.", x: "50%", y: "20%" },
    { id: 2, title: "IoT Sensors", icon: <ActivitySquare className="w-8 h-8" />, desc: "Smart collars, AI cameras, and milking machines collect the raw physical data without disturbing the cow.", x: "85%", y: "50%" },
    { id: 3, title: "Cloud Platform", icon: <Cloud className="w-8 h-8" />, desc: "Securely stores and organizes the massive amount of incoming data from thousands of cows.", x: "50%", y: "85%" },
    { id: 4, title: "AI Digital Twin", icon: <BrainCircuit className="w-8 h-8" />, desc: "The virtual brain. Analyzes the cloud data to update the virtual cow and predict future health or production issues.", x: "15%", y: "50%" },
  ];

  return (
    <Section className="py-24 bg-gray-50 dark:bg-black/50 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Cow in the Loop</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          How data flows continuously. The physical cow is always at the center of the intelligence cycle. Click on any node to learn more.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative h-[600px] flex items-center justify-center">
        
        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Main Loop Circle */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="200"
            fill="none"
            stroke="url(#flow-gradient)"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="origin-center hidden md:block"
          />

          {/* Flowing dots representing data */}
          <motion.circle r="6" fill="#3b82f6" className="hidden md:block">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 400 120 A 200 200 0 1 1 399.9 120" />
          </motion.circle>
          <motion.circle r="6" fill="#3b82f6" className="hidden md:block">
            <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 400 120 A 200 200 0 1 1 399.9 120" />
          </motion.circle>
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div 
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <button
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              className={cn(
                "relative z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full glass transition-all duration-300 hover:scale-110",
                activeNode === node.id ? "border-accent shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-white dark:bg-black" : "border-gray-200 dark:border-gray-800"
              )}
            >
              <div className={activeNode === node.id ? "text-accent" : "text-gray-600 dark:text-gray-400"}>
                {node.icon}
              </div>
              <span className="mt-2 text-sm font-semibold whitespace-nowrap text-center px-2">{node.title}</span>
            </button>
          </div>
        ))}

        {/* Central Action Node (Back to Cow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="text-xs font-bold text-accent mb-2 tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full backdrop-blur-md">
            AI Action Loop
          </div>
          <AlertCircle className="w-6 h-6 text-accent animate-pulse" />
        </div>

        {/* Info Panel for Active Node */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full max-w-lg mt-8 z-20"
            >
              <div className="glass-card p-6 rounded-2xl text-center border-accent/30 shadow-2xl">
                <h4 className="text-xl font-bold mb-2 text-accent">
                  {nodes.find(n => n.id === activeNode)?.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {nodes.find(n => n.id === activeNode)?.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Section>
  );
}
