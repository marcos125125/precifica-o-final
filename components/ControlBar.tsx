import React from 'react';
import { ChevronLeft, ChevronRight, Grid, FileText, Monitor, Volume2, X } from 'lucide-react';

interface ControlBarProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleGrid: () => void;
  isGridView: boolean;
  isDark?: boolean;
}

const ControlBar: React.FC<ControlBarProps> = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onToggleGrid, 
  isGridView, 
  isDark = false 
}) => {
  // Styles based on background brightness
  const containerClass = "fixed top-6 right-6 z-50 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 transition-all duration-300";
  const textClass = "text-xs font-mono font-medium text-gray-500 mx-2";
  const btnClass = "p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed";
  const activeBtnClass = "p-1.5 bg-black text-white rounded-full transition-colors shadow-md";
  const limeBtnClass = "p-1.5 bg-[#ccff00] text-black rounded-full transition-colors";

  return (
    <div className={containerClass}>
      {!isGridView && (
        <>
          <button onClick={onPrev} disabled={currentSlide === 0} className={btnClass}>
            <ChevronLeft size={16} />
          </button>
          
          <span className={textClass}>
            {currentSlide + 1} / {totalSlides}
          </span>

          <button onClick={onNext} disabled={currentSlide === totalSlides - 1} className={btnClass}>
            <ChevronRight size={16} />
          </button>

          <div className="w-px h-4 bg-gray-200 mx-1"></div>
        </>
      )}

      <button 
        onClick={onToggleGrid} 
        className={isGridView ? activeBtnClass : btnClass}
        title={isGridView ? "Fechar Visão Geral" : "Ver Todos os Slides"}
      >
        {isGridView ? <X size={16} /> : <Grid size={16} />}
      </button>

      {!isGridView && (
        <>
          <button className={btnClass}>
            <FileText size={16} />
          </button>
          <button className={activeBtnClass}>
            <Monitor size={16} />
          </button>
          <button className={limeBtnClass}>
            <Volume2 size={16} />
          </button>
        </>
      )}
    </div>
  );
};

export default ControlBar;