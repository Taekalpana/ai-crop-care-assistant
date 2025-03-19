
import { Camera, Check, RotateCw } from 'lucide-react';

const PhotoGuide = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              How to Take the Perfect Plant Photo
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Follow these simple steps to get the most accurate diagnosis from GreenVita
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary/10 rounded-lg p-6 text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                  alt="Closeup shot of plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Closeup View
                </div>
              </div>
              <h3 className="font-medium mb-2">Get Close</h3>
              <p className="text-sm text-foreground/70">
                Take a closeup photo of the affected area. Make sure it's clearly visible and in focus.
              </p>
            </div>
            
            <div className="bg-secondary/10 rounded-lg p-6 text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                  alt="Well-lit plant photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Good Lighting
                </div>
              </div>
              <h3 className="font-medium mb-2">Use Good Lighting</h3>
              <p className="text-sm text-foreground/70">
                Natural daylight works best. Avoid shadows and direct sunlight that can cause glare.
              </p>
            </div>
            
            <div className="bg-secondary/10 rounded-lg p-6 text-center">
              <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                  alt="Multiple angle shots"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs py-1 px-2">
                  Multiple Angles
                </div>
              </div>
              <h3 className="font-medium mb-2">Different Angles</h3>
              <p className="text-sm text-foreground/70">
                Take several photos from different angles to ensure the best diagnosis.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-4 text-center">Simple Scanning Process</h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-5 w-5 text-leaf" />
                </div>
                <h4 className="font-medium mb-1 text-sm">Step 1</h4>
                <p className="text-xs text-foreground/70">
                  Take or upload a clear photo of your plant
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-3">
                  <RotateCw className="h-5 w-5 text-leaf" />
                </div>
                <h4 className="font-medium mb-1 text-sm">Step 2</h4>
                <p className="text-xs text-foreground/70">
                  GreenVita AI analyzes your photo
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-3">
                  <Check className="h-5 w-5 text-leaf" />
                </div>
                <h4 className="font-medium mb-1 text-sm">Step 3</h4>
                <p className="text-xs text-foreground/70">
                  Get disease identification results
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-leaf">
                    <path d="M8 16a2 2 0 0 0 2-2" />
                    <path d="M8 2a4 4 0 0 1 4 4" />
                    <path d="M6 18h8" />
                    <path d="M3 20h18" />
                    <path d="M16 12a2 2 0 0 0-2-2" />
                    <path d="M14 8V6" />
                    <path d="M12 10v4c0 1.1.9 2 2 2" />
                  </svg>
                </div>
                <h4 className="font-medium mb-1 text-sm">Step 4</h4>
                <p className="text-xs text-foreground/70">
                  Receive pesticide recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGuide;
