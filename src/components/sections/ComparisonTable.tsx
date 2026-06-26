import { Section } from '../layout/Section';
import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const comparisons = [
    { traditional: "Stores data.", twin: "Understands data." },
    { traditional: "Shows a dashboard.", twin: "Runs simulations." },
    { traditional: "Shows history.", twin: "Predicts the future." },
    { traditional: "Reports problems.", twin: "Suggests exact actions." },
    { traditional: "Reactive (waits for failure).", twin: "Predictive (prevents failure)." }
  ];

  return (
    <Section className="py-24 bg-gray-50 dark:bg-black/50 border-y border-border-color">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Digital Twin vs Traditional Monitoring</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Why this research is a massive leap forward for animal welfare and farm management.
        </p>
      </div>

      <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 glass-card">
        <div className="grid grid-cols-2 bg-gray-100 dark:bg-gray-800/50 p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="text-xl font-bold text-center text-gray-500">Traditional IT System</div>
          <div className="text-xl font-bold text-center text-accent">AI Digital Twin</div>
        </div>

        <div className="flex flex-col">
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-2 p-6 border-b border-gray-100 dark:border-gray-800/50 last:border-0 hover:bg-white/50 dark:hover:bg-black/20 transition-colors">
              <div className="flex items-center justify-center gap-3 text-center text-gray-500">
                <X className="w-5 h-5 text-red-400 opacity-50" />
                <span className="font-medium text-lg">{row.traditional}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-center text-black dark:text-white">
                <Check className="w-6 h-6 text-green-500" />
                <span className="font-bold text-xl">{row.twin}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
