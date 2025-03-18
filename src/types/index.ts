
export interface Disease {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  symptoms: string[];
  severity: 'low' | 'medium' | 'high';
  confidence: number;
}

export interface Pesticide {
  id: string;
  name: string;
  effectiveness: number;
  description: string;
  applicationMethod: string;
  isOrganic: boolean;
  waitingPeriod: string;
}

export interface ScanResult {
  id: string;
  timestamp: Date;
  imageUrl: string;
  diseases: Disease[];
  pesticides: Pesticide[];
}

export interface ScanHistory {
  id: string;
  date: Date;
  plantName: string;
  disease?: string;
  imageUrl: string;
}
