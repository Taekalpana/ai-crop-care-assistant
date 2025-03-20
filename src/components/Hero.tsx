
import { ArrowDown, Sparkles, Leaf } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToScanner = () => {
    const element = document.getElementById('scanner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-leaf/10 blur-3xl top-1/4 -right-1/4 animate-pulse-subtle"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-leaf/5 blur-3xl bottom-1/4 -left-1/4 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Plant image at the start */}
      <div className="absolute top-0 left-0 w-full h-64 md:h-80 overflow-hidden z-0">
        <img 
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
          alt="Beautiful healthy plants" 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-leaf" />
            <span className="text-sm font-medium text-foreground/80">
              {t('plantDisease')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up font-playfair">
            {t('identifyDisease')} <br className="hidden md:block" />
            <span className="text-leaf">{t('pesticideRecommendation')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: '100ms' }}>
            {t('uploadDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <button 
              onClick={scrollToScanner}
              className="w-full sm:w-auto bg-primary text-primary-foreground rounded-full px-8 py-4 font-medium shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all btn-animated flex items-center justify-center gap-2"
            >
              <Leaf className="h-5 w-5" />
              <span className="text-base">{t('scanYourPlant')}</span>
            </button>
            
            <button className="w-full sm:w-auto bg-white/80 backdrop-blur text-foreground/80 rounded-full px-8 py-4 font-medium hover:bg-white/90 transition-all shadow-sm hover:shadow-md">
              <span className="text-base">{t('learnMore')}</span>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToScanner}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md hover:shadow-lg transition-all"
          >
            <ArrowDown className="h-5 w-5 text-foreground/80" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
