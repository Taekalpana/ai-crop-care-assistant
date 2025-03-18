
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
            <span className="text-xl font-medium">PlantScan</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#scanner" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Scanner
            </a>
            <a href="#history" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              History
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
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
