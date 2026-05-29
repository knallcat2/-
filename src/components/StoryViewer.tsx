import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface StoryViewerProps {
  images?: string[];
  imageUrl?: string;
  onClose: () => void;
  title?: string;
  caption?: string; 
}

export default function StoryViewer({ images, imageUrl, onClose, title, caption }: StoryViewerProps) {
  const displayImages = images && images.length > 0 ? images : (imageUrl ? [imageUrl] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (displayImages.length === 0) return null;

  const currentImage = displayImages[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < displayImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsZoomed(false);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsZoomed(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center backdrop-blur-sm">
      {/* Top Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto">
        <div className="text-white font-semibold text-[14px] flex items-center gap-2">
          {title || ''}
          {displayImages.length > 1 && (
            <span className="text-white/60 text-[12px] bg-black/20 px-2 py-0.5 rounded-full">
              {currentIndex + 1} / {displayImages.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsZoomed(!isZoomed)} className="p-2 hidden md:block">
            {isZoomed ? <ZoomOut className="w-6 h-6 text-white" /> : <ZoomIn className="w-6 h-6 text-white" />}
          </button>
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-8 h-8 text-white hover:opacity-75 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div 
        className={`relative w-full h-full flex items-center justify-center ${isZoomed ? "overflow-auto touch-pan-x touch-pan-y" : "overflow-hidden"}`} 
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <div className={`relative flex items-center justify-center ${isZoomed ? "w-[200vw] min-w-max md:w-auto h-auto transition-transform" : "w-full max-w-[500px] aspect-[9/16] md:max-h-[90vh] md:rounded-lg overflow-hidden bg-black"}`}>
          <img 
            src={currentImage} 
            alt="Story/Highlight" 
            className={`${isZoomed ? "w-auto max-w-none h-auto max-h-none object-contain" : "max-w-full max-h-full object-contain"}`} 
          />
        </div>

        {/* Navigation Overlays */}
        {!isZoomed && displayImages.length > 1 && (
          <div className="absolute inset-x-0 inset-y-16 max-w-[500px] mx-auto flex z-10 pointer-events-none">
            <div 
              className="w-1/2 h-full cursor-pointer pointer-events-auto flex items-center justify-start pl-2"
              onClick={handlePrev}
            >
              {currentIndex > 0 && (
                <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-md">
                  <ChevronLeft className="w-6 h-6" />
                </div>
              )}
            </div>
            <div 
              className="w-1/2 h-full cursor-pointer pointer-events-auto flex items-center justify-end pr-2"
              onClick={handleNext}
            >
              {currentIndex < displayImages.length - 1 && (
                <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-md">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Caption Output */}
      {caption && !isZoomed && (
        <div className="absolute bottom-[40px] md:bottom-[80px] max-w-[500px] px-6 z-20 pointer-events-none w-full text-center">
           <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl text-white text-sm shadow-xl whitespace-pre-wrap text-left border border-white/10">
             {caption}
           </div>
        </div>
      )}
    </div>
  );
}
