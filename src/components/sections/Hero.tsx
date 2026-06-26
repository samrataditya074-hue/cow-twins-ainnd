import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Activity } from 'lucide-react';
import { Section } from '../layout/Section';

export function Hero() {
  return (
    <Section className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative overflow-hidden">
      {/* Background abstract decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-4xl mx-auto z-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white"
        >
          AI Digital Twin
          <span className="block text-gradient mt-2">
            Building the Virtual Intelligence Layer for Future Goshalas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
        >
          A research proposal for creating continuously evolving virtual representations of indigenous cattle using AI, IoT, and predictive analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#vision"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
          >
            Start Research Journey <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Real Cow -> Virtual Cow Visualization */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 md:mt-32 w-full max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 glass rounded-3xl relative">
          
          <div className="flex-1 text-center">
            <div className="w-32 h-32 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl border border-slate-200 dark:border-slate-700">
              <Activity className="w-12 h-12 text-slate-700 dark:text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Real Physical Cow</h3>
            <p className="text-slate-500 dark:text-slate-400">Lives, breathes, grazes</p>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center relative h-32">
            <svg width="100%" height="40" className="absolute top-1/2 -translate-y-1/2">
              <path
                d="M 0,20 Q 50,20 100,20 T 200,20"
                fill="none"
                stroke="currentColor"
                className="text-slate-300 dark:text-slate-700 stroke-2"
                strokeDasharray="4 4"
              />
              <motion.circle
                cx="0"
                cy="20"
                r="4"
                className="fill-accent"
                animate={{ cx: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="0"
                cy="20"
                r="4"
                className="fill-accent"
                animate={{ cx: ["0%", "100%"] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            <div className="absolute -top-6 text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              Real-time Data Sync
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="w-32 h-32 mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-blue-200 dark:border-blue-800">
              <BrainCircuit className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Virtual AI Cow</h3>
            <p className="text-slate-500 dark:text-slate-400">Learns, predicts, simulates</p>
          </div>

        </div>
        
        <p className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          This proposal does NOT replace the existing Cow Care India architecture. Instead, it introduces a future AI research direction for decision support and predictive analytics.
        </p>
      </motion.div>
    </Section>
  );
}
