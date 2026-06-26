import { Section } from '../layout/Section';
import { ResearchCard } from '../ui/ResearchCard';
import { ShieldCheck, Scale, Heart, FileText, Globe, Bot, Cpu } from 'lucide-react';

export function ResearchOpportunities() {
  const opportunities = [
    { title: "AI Agents", icon: <Bot />, desc: "Virtual farm assistants that manage specific tasks." },
    { title: "Genomics Integration", icon: <FileText />, desc: "Merging DNA data with daily behavior to breed healthier cows." },
    { title: "Satellite Analytics", icon: <Globe />, desc: "Using space satellites to measure grass quality before cows graze." },
    { title: "Autonomous Vet", icon: <Cpu />, desc: "Robotics to deliver medicine safely without human stress." }
  ];

  return (
    <Section id="research" className="py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Future Research Opportunities</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          This foundation opens up PhD-level research possibilities for computer science and veterinary students.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {opportunities.map((opp, i) => (
          <ResearchCard key={i} title={opp.title} icon={opp.icon}>
            <p className="text-sm">{opp.desc}</p>
          </ResearchCard>
        ))}
      </div>
    </Section>
  );
}

export function Ethics() {
  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl border border-red-100 dark:border-red-900/30">
        <div className="flex items-center justify-center gap-4 mb-8 text-red-500">
          <ShieldCheck className="w-10 h-10" />
          <Scale className="w-10 h-10" />
          <Heart className="w-10 h-10" />
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Ethical Boundaries</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium text-gray-700 dark:text-gray-300">
          <ul className="space-y-4">
            <li className="flex gap-3"><span className="text-accent">•</span> AI assists humans; it does not replace them.</li>
            <li className="flex gap-3"><span className="text-accent">•</span> Veterinarians make the final medical decisions.</li>
          </ul>
          <ul className="space-y-4">
            <li className="flex gap-3"><span className="text-accent">•</span> Animal welfare is always the highest priority.</li>
            <li className="flex gap-3"><span className="text-accent">•</span> Simulations guide, but do not replace, clinical diagnosis.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
