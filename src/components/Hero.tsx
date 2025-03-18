
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToScanner = () => {
    const element = document.getElementById('scanner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-leaf/10 blur-3xl top-1/4 -right-1/4 animate-pulse-subtle"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-leaf/5 blur-3xl bottom-1/4 -left-1/4 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-secondary rounded-full animate-fade-in">
            <span className="text-xs font-medium text-foreground/80">
              AI-Powered Plant Disease Detection
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up">
            Identify Plant Diseases & Get <span className="text-leaf">Treatment Recommendations</span>
          </h1>
          
          <p className="text-lg text-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Upload a photo of your plant and our AI will instantly identify diseases and suggest the most effective treatment options.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <button 
              onClick={scrollToScanner}
              className="w-full sm:w-auto bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all btn-animated"
            >
              Scan Your Plant
            </button>
            
            <button className="w-full sm:w-auto bg-secondary text-foreground/80 rounded-full px-8 py-3 font-medium hover:bg-secondary/70 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToScanner}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition-all"
          >
            <ArrowDown className="h-5 w-5 text-foreground/80" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
