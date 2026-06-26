import { Section } from '../layout/Section';
import { Layers, Server, Database, BrainCircuit, MonitorSmartphone, ArrowDown } from 'lucide-react';

export function TechnicalArchitecture() {
  const stack = [
    { title: "Frontend", tech: "React, Tailwind CSS, Vite", icon: <MonitorSmartphone /> },
    { title: "Backend API", tech: "Python, FastAPI", icon: <Server /> },
    { title: "AI Models", tech: "PyTorch, TensorFlow", icon: <BrainCircuit /> },
    { title: "Data Layer", tech: "PostgreSQL, Redis, Kafka", icon: <Database /> },
    { title: "Infrastructure", tech: "Docker, Kubernetes, LoRaWAN", icon: <Layers /> }
  ];

  return (
    <Section className="py-24 bg-gray-50 dark:bg-black/50 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Technical Architecture</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The enterprise software stack required to build this Intelligence Layer.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Simple Block Diagram */}
        <div className="flex flex-col items-center justify-center gap-2">
          {["IoT Sensors", "Cloud Data Lake", "ML Pipeline", "Digital Twin Engine", "Dashboard"].map((layer, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-full">
              <div className="w-full max-w-xs bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center font-bold shadow-sm">
                {layer}
              </div>
              {i < 4 && <ArrowDown className="text-gray-300 dark:text-gray-700 w-6 h-6" />}
            </div>
          ))}
        </div>

        {/* Tech Stack List */}
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
          {stack.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-600 dark:text-gray-400">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.tech}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}

export function FutureVision() {
  return (
    <Section className="py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">The Future Vision</h2>
        
        <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
          Imagine every indigenous cow in India having an AI Digital Twin. Thousands of cows, across thousands of goshalas, all connected to research centres, Bio-CNG plants, and carbon dashboards.
        </p>

        <div className="p-10 glass-card rounded-3xl border-accent/20 bg-accent/5">
          <h3 className="text-3xl font-bold text-accent italic leading-tight">
            "The future of cattle conservation is not only about monitoring animals. It is about building intelligent virtual ecosystems that help humans make better decisions while preserving animal welfare."
          </h3>
        </div>
      </div>
    </Section>
  );
}
