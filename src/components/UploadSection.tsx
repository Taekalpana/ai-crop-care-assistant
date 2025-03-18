
import { useState, useRef } from 'react';
import { Upload, Camera, Image, X } from 'lucide-react';
import { getMockResults } from '@/utils/animations';

interface UploadSectionProps {
  onResultsReady: (results: any) => void;
}

const UploadSection = ({ onResultsReady }: UploadSectionProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setUploading(true);
    
    // Create a URL for the file
    const imageUrl = URL.createObjectURL(file);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadedImage(imageUrl);
      setUploading(false);
    }, 1000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const resetUpload = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const results = getMockResults();
      onResultsReady(results);
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <section id="scanner" className="section-padding px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Upload a Photo of Your Plant
            </h2>
            <p className="text-foreground/70">
              Take a clear photo of the affected area of your plant for the most accurate diagnosis
            </p>
          </div>
          
          {!uploadedImage ? (
            <div 
              className={`upload-zone animate-fade-up ${dragActive ? 'border-primary bg-primary/5' : ''}`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <input 
                ref={fileInputRef}
                type="file" 
                className="hidden"
                accept="image/*"
                onChange={handleChange}
              />
              
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="text-lg font-medium mb-2">Drag and drop your image here</h3>
                <p className="text-sm text-foreground/70 mb-4">Or click to browse your files</p>
                
                <div className="flex gap-4">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerFileInput();
                    }}
                  >
                    <Image className="h-4 w-4" />
                    <span>Browse Files</span>
                  </button>
                  
                  <button 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      // In a real app, this would trigger the device camera
                    }}
                  >
                    <Camera className="h-4 w-4" />
                    <span>Take Photo</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-scale-in">
              <div className="relative overflow-hidden rounded-xl shadow-lg image-container">
                <img 
                  src={uploadedImage} 
                  alt="Uploaded plant" 
                  className="w-full h-auto object-cover"
                />
                
                <button 
                  onClick={resetUpload}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex justify-center mt-6">
                <button 
                  onClick={analyzeImage}
                  disabled={analyzing}
                  className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium shadow-md hover:shadow-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {analyzing ? 
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Image...
                    </span> : 
                    'Analyze Image'
                  }
                </button>
              </div>
            </div>
          )}
          
          {uploading && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <svg className="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm">Uploading image...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
