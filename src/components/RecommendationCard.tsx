
import { BadgeCheck, Droplet, Clock } from 'lucide-react';
import { Pesticide } from '@/types';
import { cn } from '@/lib/utils';

interface RecommendationCardProps {
  pesticide: Pesticide;
  style?: React.CSSProperties;
}

const RecommendationCard = ({ pesticide, style }: RecommendationCardProps) => {
  const effectivenessPercentage = Math.round(pesticide.effectiveness * 100);
  
  return (
    <div 
      className="glass-card rounded-xl p-6 hover:shadow-md transition-all animate-scale-in"
      style={style}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium">{pesticide.name}</h3>
        <div 
          className={cn(
            "text-xs font-medium px-3 py-1 rounded-full",
            pesticide.isOrganic ? "bg-leaf/10 text-leaf" : "bg-blue-100 text-blue-700"
          )}
        >
          {pesticide.isOrganic ? "Organic" : "Synthetic"}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <BadgeCheck className="h-4 w-4 text-leaf mr-2" />
          <span className="text-sm font-medium">
            {effectivenessPercentage}% Effectiveness
          </span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-leaf rounded-full"
            style={{ width: `${effectivenessPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-sm text-foreground/80 mb-4">
        {pesticide.description}
      </p>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-start text-sm">
          <Droplet className="h-4 w-4 text-foreground/70 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-foreground/80">
            {pesticide.applicationMethod}
          </span>
        </div>
        <div className="flex items-start text-sm">
          <Clock className="h-4 w-4 text-foreground/70 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-foreground/80">
            Waiting period: {pesticide.waitingPeriod}
          </span>
        </div>
      </div>
      
      <button className="w-full bg-secondary hover:bg-secondary/70 text-foreground/80 rounded-lg py-2 text-sm font-medium transition-colors">
        View Details
      </button>
    </div>
  );
};

export default RecommendationCard;
