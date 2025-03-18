import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UploadSection from '@/components/UploadSection';
import ResultsDisplay from '@/components/ResultsDisplay';
import HistoryItem from '@/components/HistoryItem';
import { Disease, Pesticide, ScanHistory } from '@/types';
import { getAnimationDelay } from '@/utils/animations';

const Index = () => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [pesticides, setPesticides] = useState<Pesticide[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [historyItems, setHistoryItems] = useState<ScanHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  const handleResultsReady = (results: { diseases: Disease[], pesticides: Pesticide[] }) => {
    setDiseases(results.diseases);
    setPesticides(results.pesticides);
    setShowResults(true);
    
    const newHistoryItem: ScanHistory = {
      id: `scan-${Date.now()}`,
      date: new Date(),
      plantName: results.diseases[0]?.name ? `Plant with ${results.diseases[0].name}` : "Unknown Plant",
      disease: results.diseases[0]?.name,
      imageUrl: document.querySelector('.image-container img')?.getAttribute('src') || '',
      isNewScan: true
    };
    
    setHistoryItems(prev => [newHistoryItem, ...prev]);
    setShowHistory(true);
    
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
      
      {showHistory && (
        <section id="history" className="section-padding px-6 bg-secondary/20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Your Scan History
                </h2>
                <p className="text-foreground/70">
                  Keep track of all your previous plant scans and diagnoses
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {historyItems.map((item: ScanHistory, index: number) => (
                  <HistoryItem 
                    key={item.id} 
                    item={item}
                    style={{ animationDelay: getAnimationDelay(index, 150) }}
                  />
                ))}
                
                <div 
                  className="glass-card rounded-xl p-8 flex flex-col items-center justify-center border-2 border-dashed border-border/50 text-center animate-scale-in"
                  style={{ animationDelay: getAnimationDelay(historyItems.length, 150) }}
                  onClick={() => {
                    document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </div>
                  <h3 className="font-medium mb-2">Scan a New Plant</h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    Upload a new photo to diagnose your plant
                  </p>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    Start Scanning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
