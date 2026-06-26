import { useState } from 'react';
import { Section } from '../layout/Section';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/utils';

export function FuturePrediction() {
  const [timeframe, setTimeframe] = useState<"7D" | "30D" | "90D" | "1Y">("30D");

  // Mock data for simple visual forecasting
  const data = {
    "7D": [
      { name: 'Day 1', milk: 12, health: 95 },
      { name: 'Day 3', milk: 12.5, health: 96 },
      { name: 'Day 5', milk: 11.8, health: 94 },
      { name: 'Day 7', milk: 12.2, health: 95 },
    ],
    "30D": [
      { name: 'Week 1', milk: 12, health: 95 },
      { name: 'Week 2', milk: 11.5, health: 92 },
      { name: 'Week 3', milk: 10, health: 85 }, // Simulated dip
      { name: 'Week 4', milk: 12, health: 94 },
    ],
    "90D": [
      { name: 'Month 1', milk: 12, health: 95 },
      { name: 'Month 2', milk: 10, health: 88 },
      { name: 'Month 3', milk: 8, health: 80 }, // Dry period approaching
    ],
    "1Y": [
      { name: 'Q1', milk: 12, health: 95 },
      { name: 'Q2', milk: 9, health: 90 },
      { name: 'Q3', milk: 0, health: 95 }, // Dry period
      { name: 'Q4', milk: 14, health: 98 }, // After calving
    ]
  };

  const explanations = {
    "7D": "Short-term forecast: Predicting minor daily fluctuations based on immediate weather and current feed.",
    "30D": "Mid-term forecast: Spotting incoming health dips (like Week 3) before physical symptoms appear.",
    "90D": "Long-term forecast: Planning for natural biological cycles, like decreasing milk production as the dry period approaches.",
    "1Y": "Strategic forecast: Planning the entire year's finances, feed inventory, and expected Bio-CNG generation."
  };

  return (
    <Section className="py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Future Prediction</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The Digital Twin doesn't just show you what happened yesterday. It shows you what will happen tomorrow.
        </p>
      </div>

      <div className="max-w-5xl mx-auto glass-card p-6 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {(["7D", "30D", "90D", "1Y"] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all",
                timeframe === tf 
                  ? "bg-accent text-white shadow-lg" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data[timeframe]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorMilk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-800" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: 'white' }}
                itemStyle={{ color: 'white' }}
              />
              <Area type="monotone" dataKey="milk" name="Predicted Milk (L)" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMilk)" strokeWidth={3} />
              <Area type="monotone" dataKey="health" name="Predicted Health Score" stroke="#10b981" fillOpacity={1} fill="url(#colorHealth)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10 p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
          <h4 className="font-bold text-accent mb-2">What this forecast tells us:</h4>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {explanations[timeframe]}
          </p>
        </div>

      </div>
    </Section>
  );
}
