
import { formatDistanceToNow } from 'date-fns';
import { ScanHistory } from '@/types';
import { Leaf } from 'lucide-react';

interface HistoryItemProps {
  item: ScanHistory;
  style?: React.CSSProperties;
}

const HistoryItem = ({ item, style }: HistoryItemProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px] duration-300 animate-scale-in"
      style={style}
    >
      <div className="aspect-w-16 aspect-h-9 bg-secondary relative">
        <img 
          src={item.imageUrl} 
          alt={item.plantName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {item.isNewScan && (
          <div className="absolute top-3 right-3">
            <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
              New Scan
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">{item.plantName}</h3>
          <span className="text-xs bg-secondary/60 px-2 py-1 rounded-full text-foreground/60">
            {formatDistanceToNow(item.date, { addSuffix: true })}
          </span>
        </div>
        {item.disease && (
          <div className="flex items-center gap-2 text-sm text-foreground/80 mb-3 py-2 px-3 bg-secondary/40 rounded-lg">
            <Leaf className="h-4 w-4 text-leaf" />
            <span>{item.disease}</span>
          </div>
        )}
        <button className="w-full mt-2 text-sm bg-secondary hover:bg-secondary/70 transition-colors rounded-lg py-2.5 font-medium text-foreground/90 flex justify-center items-center">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
