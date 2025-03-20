
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Leaf, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value as any);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-leaf animate-float" />
            <span className="text-xl font-medium">GreenVita</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t('home')}
            </a>
            <a href="#scanner" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {t('scanner')}
            </a>
            <div className="flex items-center space-x-2 ml-4">
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-[130px] h-8">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <SelectValue placeholder="Language" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                  <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                  <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
                  <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </nav>
          
          <div>
            <button 
              className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              {t('getStarted')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
