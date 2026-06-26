import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { WhyDigitalTwin } from './components/sections/WhyDigitalTwin';
import { CurrentCowLife } from './components/sections/CurrentCowLife';
import { TheVision } from './components/sections/TheVision';
import { InformationArchitecture } from './components/sections/InformationArchitecture';
import { DataFlow } from './components/sections/DataFlow';
import { HowAiLearns } from './components/sections/HowAiLearns';
import { DigitalTwinBrain } from './components/sections/DigitalTwinBrain';
import { SimulationLab } from './components/sections/SimulationLab';
import { FuturePrediction } from './components/sections/FuturePrediction';
import { ComparisonTable } from './components/sections/ComparisonTable';
import { ResearchOpportunities, Ethics } from './components/sections/ResearchOpportunities';
import { TechnicalArchitecture, FutureVision } from './components/sections/TechnicalArchitecture';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <WhyDigitalTwin />
        <CurrentCowLife />
        <TheVision />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none -z-10" />
          <InformationArchitecture />
          <DataFlow />
          <HowAiLearns />
        </div>

        <DigitalTwinBrain />
        <SimulationLab />
        <FuturePrediction />
        
        <ComparisonTable />
        <ResearchOpportunities />
        <Ethics />
        
        <TechnicalArchitecture />
        <FutureVision />
      </main>



    </div>
  );
}

export default App;
