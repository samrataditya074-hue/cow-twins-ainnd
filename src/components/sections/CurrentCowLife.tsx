import { Section } from '../layout/Section';
import { Activity, MapPin, Milk, Leaf, Stethoscope, Factory, Cloud } from 'lucide-react';

export function CurrentCowLife() {
  const currentSystems = [
    { icon: <Activity />, title: "Health" },
    { icon: <MapPin />, title: "GPS" },
    { icon: <Milk />, title: "Milk" },
    { icon: <Leaf />, title: "Feed" },
    { icon: <Stethoscope />, title: "Veterinary" },
    { icon: <Cloud />, title: "Dung" },
    { icon: <Factory />, title: "Bio-CNG" },
    { icon: <Cloud />, title: "Carbon" }
  ];

  return (
    <Section className="py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Current Cow Life</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Today, we collect a lot of data about a normal cow. But this information lives in separate boxes. 
          The veterinarian cannot easily see the Bio-CNG data, and the feed manager cannot easily see the carbon data.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 relative">
        {/* Disconnected boxes representation */}
        {currentSystems.map((sys, i) => (
          <div key={i} className="glass-card p-6 flex flex-col items-center justify-center text-center gap-3 rounded-2xl hover:scale-105 transition-transform">
            <div className="text-gray-500 dark:text-gray-400">
              {sys.icon}
            </div>
            <h4 className="font-semibold">{sys.title}</h4>
            <div className="text-xs text-red-500 bg-red-50 dark:bg-red-900/10 px-2 py-1 rounded-full border border-red-100 dark:border-red-900/20">
              Disconnected
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
