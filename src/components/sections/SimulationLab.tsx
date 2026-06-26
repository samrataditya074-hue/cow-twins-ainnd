import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/Section';
import { Play, TrendingUp, ThermometerSun, Stethoscope, CloudRain } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SimulationLab() {
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulated, setSimulated] = useState(false);

  const scenarios = [
    {
      icon: <TrendingUp />,
      title: "Increase protein feed by 15%",
      outcomes: [
        { label: "Milk Yield", value: "+12%", positive: true },
        { label: "Dung Volume", value: "+5%", positive: true },
        { label: "Bio-CNG", value: "+8%", positive: true },
        { label: "Cost", value: "+15%", positive: false },
        { label: "Carbon Reduction", value: "-2%", positive: false }
      ]
    },
    {
      icon: <ThermometerSun />,
      title: "What happens during a heat wave (40°C+)?",
      outcomes: [
        { label: "Milk Yield", value: "-25%", positive: false },
        { label: "Water Intake", value: "+40%", positive: false },
        { label: "Activity", value: "-30%", positive: false },
        { label: "Digestion", value: "Slower", positive: false }
      ]
    },
    {
      icon: <Stethoscope />,
      title: "Disease probability reaches 80%",
      outcomes: [
        { label: "Alert Sent", value: "Instant", positive: true },
        { label: "Vet Scheduled", value: "Yes", positive: true },
        { label: "Milk Quarantined", value: "Yes", positive: true },
        { label: "Treatment Plan", value: "Generated", positive: true }
      ]
    },
    {
      icon: <CloudRain />,
      title: "Rainfall reduces grazing for 5 days",
      outcomes: [
        { label: "Stored Feed Needed", value: "+20%", positive: false },
        { label: "Indoor Stress", value: "+15%", positive: false },
        { label: "Bio-CNG Impact", value: "Minimal", positive: true }
      ]
    }
  ];

  const handleSimulate = (index: number) => {
    setActiveScenario(index);
    setSimulated(false);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulated(true);
    }, 1500);
  };

  return (
    <Section id="simulation" className="py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simulation Laboratory</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The real power of a Digital Twin is answering "What If?" questions safely in the computer before trying them in real life.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Scenario Selectors */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-4">Choose a 'What If' Scenario:</h3>
          {scenarios.map((scenario, i) => (
            <button
              key={i}
              onClick={() => handleSimulate(i)}
              className={cn(
                "text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4",
                activeScenario === i 
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-lg" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              <div className="opacity-80">{scenario.icon}</div>
              <span className="font-semibold">{scenario.title}</span>
            </button>
          ))}
        </div>

        {/* Simulation Viewer */}
        <div className="md:col-span-7">
          <div className="glass-card p-8 rounded-3xl h-full flex flex-col items-center justify-center min-h-[400px] border border-gray-200 dark:border-gray-800 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSimulating && !simulated && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-400 flex flex-col items-center gap-4"
                >
                  <Play className="w-12 h-12 opacity-20" />
                  <p>Click a scenario to run AI simulation</p>
                </motion.div>
              )}

              {isSimulating && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full mb-6"
                  />
                  <p className="text-xl font-bold text-accent animate-pulse">Running Neural Simulation...</p>
                  <p className="text-sm text-gray-500 mt-2">Calculating variables across millions of data points</p>
                </motion.div>
              )}

              {simulated && !isSimulating && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="w-full"
                >
                  <div className="mb-8 text-center border-b border-gray-200 dark:border-gray-800 pb-6">
                    <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Simulated Outcome for</h4>
                    <h3 className="text-2xl font-bold">{scenarios[activeScenario].title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {scenarios[activeScenario].outcomes.map((outcome, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="bg-gray-50 dark:bg-black/50 p-4 rounded-xl flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-600 dark:text-gray-400">{outcome.label}</span>
                        <span className={cn(
                          "font-bold text-lg",
                          outcome.positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                        )}>
                          {outcome.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </Section>
  );
}
