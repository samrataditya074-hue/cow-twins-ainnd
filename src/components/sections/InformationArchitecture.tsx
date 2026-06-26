import { Section } from '../layout/Section';
import { ResearchCard } from '../ui/ResearchCard';
import { Leaf, Milk, Stethoscope, Cloud, Info } from 'lucide-react';

export function InformationArchitecture() {
  const cards = [
    {
      title: "Identity & History",
      icon: <Info />,
      data: "Breed, Age, Weight, Pedigree",
      why: "To establish a baseline for the specific animal.",
      ai: "AI uses this to know if the cow's growth is normal for its specific breed.",
      example: "A Gir cow has different expected milk patterns than a Sahiwal cow."
    },
    {
      title: "Health & Vitals",
      icon: <Stethoscope />,
      data: "Vaccination Timeline, Disease History, Body Temperature",
      why: "To track the long-term medical journey of the cow.",
      ai: "AI finds hidden patterns. If temperature rises slowly over 3 days, it predicts an incoming fever.",
      example: "Predicting a tick-borne disease 48 hours before the cow stops eating."
    },
    {
      title: "Daily Production",
      icon: <Milk />,
      data: "Milk Production, Dung Output",
      why: "To measure the daily output and health status.",
      ai: "AI checks if today's milk is lower than the historical average for this specific cow.",
      example: "If milk drops by 2 liters but health is fine, AI might suggest checking the water supply."
    },
    {
      title: "Diet & Behavior",
      icon: <Leaf />,
      data: "Feed Consumption, Walking, Resting, Rumination",
      why: "Behavior is the biggest indicator of animal happiness.",
      ai: "AI uses collar sensors to count how many times the cow chews its food (rumination).",
      example: "If a cow stands in the corner and stops chewing, AI immediately sends an alert for digestion problems."
    },
    {
      title: "Environment & Sustainability",
      icon: <Cloud />,
      data: "Methane Output, Bio-CNG Contribution, Weather",
      why: "To measure the cow's impact on the farm's green energy loop.",
      ai: "AI calculates how much methane this specific cow produces based on its diet, and how much biogas it will generate.",
      example: "Predicting that changing the feed will reduce methane by 10% and increase biogas quality."
    }
  ];

  return (
    <Section className="py-24" id="architecture">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What Information Builds a Digital Twin?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          To build an accurate virtual copy, we need to collect specific physical data. Click to see how AI uses this information.
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {cards.map((card, i) => (
          <ResearchCard key={i} title={card.title} icon={card.icon} expandable={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-black dark:text-white mb-1">What Data?</h4>
                <p className="mb-4">{card.data}</p>
                
                <h4 className="font-bold text-black dark:text-white mb-1">Why Collected?</h4>
                <p>{card.why}</p>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-1">How AI Uses It?</h4>
                <p className="mb-4 text-accent/90">{card.ai}</p>
                
                <h4 className="font-bold text-black dark:text-white mb-1">Example</h4>
                <p className="italic text-gray-500">{card.example}</p>
              </div>
            </div>
          </ResearchCard>
        ))}
      </div>
    </Section>
  );
}
