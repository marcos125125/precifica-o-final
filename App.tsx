import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import ControlBar from './components/ControlBar';
import { AnimatePresence, motion, Reorder } from 'framer-motion';

// --- MÓDULO: PRECIFICAÇÃO (1 ao 24) ---
const Slide1 = lazy(() => import('./components/slides/Slide1_Cover'));
const Slide2 = lazy(() => import('./components/slides/Slide2_WhyLearn'));
const Slide3 = lazy(() => import('./components/slides/Slide3_TheSolution'));
const Slide4 = lazy(() => import('./components/slides/Slide4_TheFear'));
const Slide5 = lazy(() => import('./components/slides/Slide5_TheExercise'));
const Slide6 = lazy(() => import('./components/slides/Slide6_Survival'));
const Slide7 = lazy(() => import('./components/slides/Slide7_Paradox'));
const Slide8 = lazy(() => import('./components/slides/Slide8_TheProfiles'));
const Slide9 = lazy(() => import('./components/slides/Slide9_TheMath'));
const Slide10 = lazy(() => import('./components/slides/Slide10_TheTruth'));
const Slide11 = lazy(() => import('./components/slides/Slide11_Conclusion'));
const Slide12 = lazy(() => import('./components/slides/Slide12_PortfolioTruth'));
const Slide13 = lazy(() => import('./components/slides/Slide13_ValueShift'));
const Slide14 = lazy(() => import('./components/slides/Slide14_PricingCalc'));
const Slide15 = lazy(() => import('./components/slides/Slide15_Quote'));
const Slide16 = lazy(() => import('./components/slides/Slide16_InternalLogic'));
// Calculadoras (Variações do passo 17)
const Slide17 = lazy(() => import('./components/slides/Slide17_Calculator'));
const Slide17b = lazy(() => import('./components/slides/Slide18_CalculatorQuick'));
const Slide17c = lazy(() => import('./components/slides/Slide19_CalculatorWizard'));
// Sequência Final
const Slide18 = lazy(() => import('./components/slides/Slide18_Anchoring'));
const Slide19 = lazy(() => import('./components/slides/Slide19_ThreeOptions'));
const Slide20 = lazy(() => import('./components/slides/Slide20_PackagePremium'));
const Slide21 = lazy(() => import('./components/slides/Slide21_PackageTarget'));
const Slide22 = lazy(() => import('./components/slides/Slide22_PackageBasic'));
const Slide23 = lazy(() => import('./components/slides/Slide23_GoldenRuleAnchoring'));
const Slide24 = lazy(() => import('./components/slides/Slide24_Closing'));

// Loading component
const LoadingSlide = () => (
  <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center">
    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Carregando Módulo...</span>
  </div>
);

interface SlideItem {
  id: string;
  component: React.ReactNode;
  isDark?: boolean;
}

const App: React.FC = () => {
  const [slides, setSlides] = useState<SlideItem[]>([
    { id: '1', component: <Slide1 isActive={true} />, isDark: true },
    { id: '2', component: <Slide2 isActive={true} />, isDark: true },
    { id: '3', component: <Slide3 isActive={true} />, isDark: true },
    { id: '4', component: <Slide4 isActive={true} />, isDark: true },
    { id: '5', component: <Slide5 isActive={true} />, isDark: true },
    { id: '6', component: <Slide6 isActive={true} />, isDark: true },
    { id: '7', component: <Slide7 isActive={true} />, isDark: true },
    { id: '8', component: <Slide8 isActive={true} />, isDark: true },
    { id: '9', component: <Slide9 isActive={true} />, isDark: true },
    { id: '10', component: <Slide10 isActive={true} />, isDark: true },
    { id: '11', component: <Slide11 isActive={true} />, isDark: true },
    { id: '12', component: <Slide12 isActive={true} />, isDark: true },
    { id: '13', component: <Slide13 isActive={true} />, isDark: true },
    { id: '14', component: <Slide14 isActive={true} />, isDark: true },
    { id: '15', component: <Slide15 isActive={true} />, isDark: true },
    { id: '16', component: <Slide16 isActive={true} />, isDark: true },
    { id: '17', component: <Slide17 isActive={true} />, isDark: true },
    { id: '17b', component: <Slide17b isActive={true} />, isDark: true }, // Calculadora Rápida
    { id: '17c', component: <Slide17c isActive={true} />, isDark: true }, // Wizard
    { id: '18', component: <Slide18 isActive={true} />, isDark: true },
    { id: '19', component: <Slide19 isActive={true} />, isDark: true },
    { id: '20', component: <Slide20 isActive={true} />, isDark: true },
    { id: '21', component: <Slide21 isActive={true} />, isDark: true },
    { id: '22', component: <Slide22 isActive={true} />, isDark: true },
    { id: '23', component: <Slide23 isActive={true} />, isDark: true },
    { id: '24', component: <Slide24 isActive={true} />, isDark: true },
  ]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleGrid = useCallback(() => {
    setIsGridView(prev => !prev);
  }, []);

  const handleSlideClick = (index: number) => {
    setCurrentSlideIndex(index);
    setIsGridView(false);
  };

  useEffect(() => {
    if (isGridView) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') setIsGridView(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isGridView]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.length > 1 && (
        <ControlBar 
            currentSlide={currentSlideIndex} 
            totalSlides={slides.length} 
            onNext={nextSlide} 
            onPrev={prevSlide} 
            onToggleGrid={toggleGrid} 
            isGridView={isGridView}
            isDark={slides[currentSlideIndex]?.isDark}
        />
      )}

      <main className="w-full h-full relative">
        <Suspense fallback={<LoadingSlide />}>
          {isGridView ? (
             <div className="w-full h-full overflow-y-auto bg-gray-900 p-8 pt-24">
                <div className="max-w-[1600px] mx-auto">
                  <Reorder.Group 
                    axis="y" 
                    values={slides} 
                    onReorder={setSlides}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                  >
                    {slides.map((slide, index) => (
                      <Reorder.Item 
                        key={slide.id} 
                        value={slide}
                        className="relative aspect-video bg-white rounded-xl overflow-hidden shadow-lg cursor-grab active:cursor-grabbing hover:ring-4 hover:ring-orange-500 transition-all group"
                        onClick={() => handleSlideClick(index)}
                      >
                        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 origin-top-left scale-[0.2] pointer-events-none select-none bg-black">
                           <Suspense fallback={<div className="w-full h-full bg-gray-900 flex items-center justify-center">...</div>}>
                              {slide.component}
                           </Suspense>
                        </div>
                        <div className={`absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors ${currentSlideIndex === index ? 'ring-4 ring-orange-500 ring-inset' : ''}`}></div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded font-mono">{index + 1}</span>
                      </Reorder.Item>
                    ))}
                  </Reorder.Group>
                </div>
             </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={slides[currentSlideIndex].id} 
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {slides[currentSlideIndex].component}
              </motion.div>
            </AnimatePresence>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default App;