
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UploadSection from '@/components/UploadSection';
import ResultsDisplay from '@/components/ResultsDisplay';
import PhotoGuide from '@/components/PhotoGuide';
import { Disease, Pesticide } from '@/types';

const Index = () => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [pesticides, setPesticides] = useState<Pesticide[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const handleResultsReady = (results: { diseases: Disease[], pesticides: Pesticide[] }) => {
    setDiseases(results.diseases);
    setPesticides(results.pesticides);
    setShowResults(true);
    
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <UploadSection onResultsReady={handleResultsReady} />
      
      <ResultsDisplay 
        diseases={diseases}
        pesticides={pesticides}
        isVisible={showResults}
      />
      
      <PhotoGuide />
    </div>
  );
};

export default Index;
