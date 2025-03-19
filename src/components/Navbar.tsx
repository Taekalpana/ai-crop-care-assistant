
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // In a real app, this would trigger language changes throughout the app
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
              Home
            </a>
            <a href="#scanner" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Scanner
            </a>
            <div className="flex items-center space-x-2 ml-4">
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`text-xs px-2 py-1 rounded ${language === 'en' ? 'bg-primary text-white' : 'bg-secondary/50'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('es')}
                className={`text-xs px-2 py-1 rounded ${language === 'es' ? 'bg-primary text-white' : 'bg-secondary/50'}`}
              >
                ES
              </button>
              <button 
                onClick={() => handleLanguageChange('fr')}
                className={`text-xs px-2 py-1 rounded ${language === 'fr' ? 'bg-primary text-white' : 'bg-secondary/50'}`}
              >
                FR
              </button>
            </div>
          </nav>
          
          <div>
            <button 
              className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
