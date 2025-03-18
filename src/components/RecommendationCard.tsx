
import { BadgeCheck, Droplet, Clock, Leaf } from 'lucide-react';
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
      className="glass-card rounded-xl p-6 hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 animate-scale-in"
      style={style}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{pesticide.name}</h3>
        <div 
          className={cn(
            "text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5",
            pesticide.isOrganic ? "bg-leaf/10 text-leaf" : "bg-blue-100 text-blue-700"
          )}
        >
          {pesticide.isOrganic ? (
            <>
              <Leaf className="h-3.5 w-3.5" />
              <span>Organic</span>
            </>
          ) : (
            <span>Synthetic</span>
          )}
        </div>
      </div>
      
      <div className="mb-5">
        <div className="flex items-center mb-2">
          <BadgeCheck className="h-4 w-4 text-leaf mr-2" />
          <span className="text-sm font-medium">
            {effectivenessPercentage}% Effectiveness
          </span>
        </div>
        <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-leaf-light to-leaf rounded-full"
            style={{ width: `${effectivenessPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-sm text-foreground/80 mb-5 leading-relaxed">
        {pesticide.description}
      </p>
      
      <div className="space-y-3 mb-5 bg-secondary/40 p-3 rounded-lg">
        <div className="flex items-start text-sm">
          <Droplet className="h-4 w-4 text-leaf mt-0.5 mr-2.5 flex-shrink-0" />
          <span className="text-foreground/80">
            {pesticide.applicationMethod}
          </span>
        </div>
        <div className="flex items-start text-sm">
          <Clock className="h-4 w-4 text-leaf mt-0.5 mr-2.5 flex-shrink-0" />
          <span className="text-foreground/80">
            Waiting period: {pesticide.waitingPeriod}
          </span>
        </div>
      </div>
      
      <button className="w-full bg-white hover:bg-secondary/70 text-foreground/90 rounded-lg py-3 text-sm font-medium transition-colors shadow-sm hover:shadow border border-border/30">
        View Details
      </button>
    </div>
  );
};

export default RecommendationCard;
