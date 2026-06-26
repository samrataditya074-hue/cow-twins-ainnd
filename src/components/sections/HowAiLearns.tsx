import { Section } from '../layout/Section';
import { ResearchCard } from '../ui/ResearchCard';
import { Brain, Camera, LineChart, ShieldAlert, Network, MessageSquare, Database } from 'lucide-react';

export function HowAiLearns() {
  const models = [
    {
      title: "Machine Learning",
      icon: <Database />,
      simple: "Finding basic rules in large numbers.",
      example: "If a cow eats 5kg less feed today, it might produce 2 liters less milk tomorrow."
    },
    {
      title: "Deep Learning",
      icon: <Brain />,
      simple: "Finding very complex, hidden rules like a human brain.",
      example: "Noticing that slightly less chewing + slightly higher temperature + walking less = early stage of a specific disease."
    },
    {
      title: "Computer Vision",
      icon: <Camera />,
      simple: "Teaching cameras to 'see' and understand.",
      example: "A camera scans the cow's muzzle (nose) to identify exactly which cow it is, just like a fingerprint scanner."
    },
    {
      title: "Time Series Forecasting",
      icon: <LineChart />,
      simple: "Predicting the future based on the past.",
      example: "Looking at the last 30 days of milk production to accurately predict how much milk will be produced next week."
    },
    {
      title: "Anomaly Detection",
      icon: <ShieldAlert />,
      simple: "Instantly finding things that look 'wrong' or unusual.",
      example: "If a cow suddenly walks 5 times more than usual at night, it triggers an instant alert for the manager."
    },
    {
      title: "Knowledge Graph",
      icon: <Network />,
      simple: "Connecting different facts together like a web.",
      example: "Connecting the cow to its mother's medical history, the current weather, and the farm's feed supplier to find the root cause of an illness."
    },
    {
      title: "Large Language Models",
      icon: <MessageSquare />,
      simple: "Talking to the AI in plain English.",
      example: "The farm manager can type: 'Which cows need a doctor today?' and the AI replies with a simple, clear list."
    }
  ];

  return (
    <Section className="py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How AI Learns</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The Digital Twin uses different types of Artificial Intelligence to understand the cow. Here is a simple explanation of how each type helps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {models.map((model, i) => (
          <ResearchCard key={i} title={model.title} icon={model.icon}>
            <div className="mt-4">
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Simple Meaning</div>
              <p className="mb-4 font-medium text-black dark:text-white">{model.simple}</p>
              
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Cow Example</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{model.example}</p>
            </div>
          </ResearchCard>
        ))}
      </div>
    </Section>
  );
}
