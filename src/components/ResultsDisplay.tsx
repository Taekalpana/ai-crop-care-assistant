
import { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { Disease, Pesticide } from '@/types';
import { getAnimationDelay } from '@/utils/animations';
import RecommendationCard from './RecommendationCard';

interface ResultsDisplayProps {
  diseases: Disease[];
  pesticides: Pesticide[];
  isVisible: boolean;
}

const ResultsDisplay = ({ diseases, pesticides, isVisible }: ResultsDisplayProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    if (isVisible && !mounted) {
      setMounted(true);
    }
  }, [isVisible, mounted]);
  
  if (!isVisible) return null;
  
  const mainDisease = diseases[0];
  const severityColor = 
    mainDisease.severity === 'high' ? 'text-red-500' :
    mainDisease.severity === 'medium' ? 'text-amber-500' : 'text-green-500';
  
  const severityBg = 
    mainDisease.severity === 'high' ? 'bg-red-50' :
    mainDisease.severity === 'medium' ? 'bg-amber-50' : 'bg-green-50';
  
  const confidencePercentage = Math.round(mainDisease.confidence * 100);
  
  return (
    <section id="results" className="section-padding px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Diagnosis Results
            </h2>
            <p className="text-foreground/70">
              Our AI has analyzed your plant image and identified the following
            </p>
          </div>
          
          <div className="result-container mb-12 animate-scale-in">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-leaf" />
              <h3 className="text-xl font-medium">Disease Detected</h3>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-foreground/90 mb-1">
                    {mainDisease.name}
                  </h4>
                  <p className="text-sm text-foreground/60 italic mb-2">
                    {mainDisease.scientificName}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${severityBg} ${severityColor}`}>
                      {mainDisease.severity.charAt(0).toUpperCase() + mainDisease.severity.slice(1)} Severity
                    </div>
                    <div className="text-xs font-medium px-2 py-1 rounded-full bg-secondary">
                      {confidencePercentage}% Confidence
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4">
                  {mainDisease.description}
                </p>
              </div>
              
              <div className="md:w-1/3 bg-secondary rounded-lg p-4">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>Common Symptoms</span>
                </h4>
                <ul className="space-y-2">
                  {mainDisease.symptoms.map((symptom, index) => (
                    <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-leaf mt-1">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg text-sm">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-500" />
                <span className="text-blue-700">Looking for more detailed information?</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="mb-8 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Recommended Treatments
            </h2>
            <p className="text-foreground/70">
              Based on the diagnosis, here are the most effective treatments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pesticides.map((pesticide, index) => (
              <RecommendationCard 
                key={pesticide.id}
                pesticide={pesticide}
                style={{ animationDelay: getAnimationDelay(index, 150) }}
              />
            ))}
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
            <button className="bg-secondary text-foreground/80 rounded-full px-8 py-3 font-medium hover:bg-secondary/70 transition-all">
              View All Treatment Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDisplay;
