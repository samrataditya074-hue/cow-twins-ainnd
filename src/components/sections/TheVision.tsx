import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { RefreshCw, Database } from 'lucide-react';

export function TheVision() {
  return (
    <Section className="py-24 bg-accent/5 dark:bg-accent/10 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Vision</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          We bring all this data together to create an <span className="font-bold text-black dark:text-white">AI Cow Digital Twin</span>. 
          For every real cow, there is one continuously evolving virtual cow that updates every single second using operational data.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        {/* Real Cow Side */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center bg-white dark:bg-black relative overflow-hidden mb-6 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=300" 
              alt="Real Cow" 
              className="object-cover w-full h-full opacity-80"
            />
          </div>
          <h3 className="text-2xl font-bold">One Real Cow</h3>
          <p className="text-gray-500">Generating physical data</p>
        </div>

        {/* Sync Mechanism */}
        <div className="flex flex-col items-center justify-center relative px-8 py-12 md:py-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-accent bg-white dark:bg-black rounded-full p-4 shadow-lg border border-gray-200 dark:border-gray-800 z-10"
          >
            <RefreshCw className="w-10 h-10" />
          </motion.div>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2 -z-0"></div>
          <p className="mt-4 text-sm font-semibold text-accent text-center">Updates every second</p>
        </div>

        {/* Virtual Cow Side */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full border-4 border-blue-400 flex items-center justify-center bg-blue-50 dark:bg-blue-950 relative overflow-hidden mb-6 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=300')] opacity-50 bg-cover bg-center blend-overlay mix-blend-luminosity"></div>
            <Database className="w-16 h-16 text-blue-600 dark:text-blue-400 z-10" />
          </div>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">One Virtual Cow</h3>
          <p className="text-gray-500">Continuously evolving AI</p>
        </div>
      </div>
    </Section>
  );
}
