import { Section } from '../layout/Section';
import { ResearchCard } from '../ui/ResearchCard';
import { Plane, Factory, Heart, Building, Sparkles } from 'lucide-react';

export function WhyDigitalTwin() {
  const examples = [
    { icon: <Plane />, title: "Aircraft", desc: "Predicts engine failure before it happens in the sky." },
    { icon: <Factory />, title: "Factory", desc: "Simulates assembly lines to maximize production speed." },
    { icon: <Heart />, title: "Human Heart", desc: "Tests new medicines on a virtual heart before a real patient." },
    { icon: <Building />, title: "Smart City", desc: "Manages traffic and energy based on real-time data." },
  ];

  return (
    <Section id="vision" className="bg-gray-50 dark:bg-black/50 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Digital Twin?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          A Digital Twin is a living, virtual copy of a physical object. It learns from real-world data to predict the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {examples.map((ex, i) => (
          <ResearchCard key={i} title={ex.title} icon={ex.icon}>
            <p className="text-sm">{ex.desc}</p>
          </ResearchCard>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-accent/10">
          <Sparkles className="w-32 h-32" />
        </div>
        <h3 className="text-3xl font-bold mb-4 relative z-10">
          The Grand Question
        </h3>
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
          "If Digital Twins can simulate complex aircraft, massive factories, and entire cities... <span className="text-black dark:text-white font-bold">can we create one for every indigenous cow?</span>"
        </p>
      </div>
    </Section>
  );
}
