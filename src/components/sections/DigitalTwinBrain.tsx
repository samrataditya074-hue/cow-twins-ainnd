import { Section } from '../layout/Section';
import { Brain, Lightbulb, Zap, Database, Search, GitCompare, RefreshCw } from 'lucide-react';

export function DigitalTwinBrain() {
  const engines = [
    { name: "Memory Engine", icon: <Database />, desc: "Remembers every detail from birth." },
    { name: "Learning Engine", icon: <RefreshCw />, desc: "Studies daily habits to understand 'normal' behavior." },
    { name: "Knowledge Engine", icon: <Search />, desc: "Knows veterinary science and biology rules." },
    { name: "Prediction Engine", icon: <Zap />, desc: "Looks ahead to guess what will happen next week." },
    { name: "Simulation Engine", icon: <GitCompare />, desc: "Tests 'What If' ideas safely in the computer." },
    { name: "Reasoning Engine", icon: <Brain />, desc: "Connects the dots to find the real root cause of a problem." },
    { name: "Recommendation Engine", icon: <Lightbulb />, desc: "Suggests the best and safest action to humans." }
  ];

  return (
    <Section className="py-24 bg-gray-50 dark:bg-black/50 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Inside the Digital Twin Brain</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The brain is made of different "Engines" that work together to understand the cow and help managers make decisions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {engines.map((engine, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex flex-col hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              {engine.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{engine.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {engine.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
