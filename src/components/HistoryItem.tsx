
import { formatDistanceToNow } from 'date-fns';
import { ScanHistory } from '@/types';

interface HistoryItemProps {
  item: ScanHistory;
  style?: React.CSSProperties;
}

const HistoryItem = ({ item, style }: HistoryItemProps) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-md animate-scale-in"
      style={style}
    >
      <div className="aspect-w-16 aspect-h-9 bg-secondary">
        <img 
          src={item.imageUrl} 
          alt={item.plantName} 
          className="w-full h-full object-cover"
        />
        {item.isNewScan && (
          <div className="absolute top-2 right-2">
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              New Scan
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{item.plantName}</h3>
          <span className="text-xs text-foreground/60">
            {formatDistanceToNow(item.date, { addSuffix: true })}
          </span>
        </div>
        {item.disease && (
          <div className="text-sm text-foreground/80 mb-1">
            <span className="text-foreground/60">Disease:</span> {item.disease}
          </div>
        )}
        <button className="text-sm text-primary hover:text-primary/80 transition-colors mt-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
