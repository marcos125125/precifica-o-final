import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import ControlBar from './components/ControlBar';
import { AnimatePresence, motion, Reorder } from 'framer-motion';

// Lazy Load slides
const Slide1_Cover = lazy(() => import('./components/slides/Slide1_Cover'));
const Slide2_WhyLearn = lazy(() => import('./components/slides/Slide2_WhyLearn'));
const Slide3_TheSolution = lazy(() => import('./components/slides/Slide3_TheSolution'));
const Slide4_TheFear = lazy(() => import('./components/slides/Slide4_TheFear'));
const Slide5_TheExercise = lazy(() => import('./components/slides/Slide5_TheExercise'));
const Slide6_Survival = lazy(() => import('./components/slides/Slide6_Survival'));
const Slide7_Paradox = lazy(() => import('./components/slides/Slide7_Paradox'));
const Slide8_TheProfiles = lazy(() => import('./components/slides/Slide8_TheProfiles'));
const Slide9_TheMath = lazy(() => import('./components/slides/Slide9_TheMath'));
const Slide10_TheTruth = lazy(() => import('./components/slides/Slide10_TheTruth'));
const Slide11_Conclusion = lazy(() => import('./components/slides/Slide11_Conclusion'));
const Slide12_PortfolioTruth = lazy(() => import('./components/slides/Slide12_PortfolioTruth'));
const Slide13_ValueShift = lazy(() => import('./components/slides/Slide13_ValueShift'));
const Slide14_PricingCalc = lazy(() => import('./components/slides/Slide14_PricingCalc'));
const Slide15_Quote = lazy(() => import('./components/slides/Slide15_Quote'));
const Slide16_InternalLogic = lazy(() => import('./components/slides/Slide16_InternalLogic'));
const Slide17_Calculator = lazy(() => import('./components/slides/Slide17_Calculator'));
const Slide18_Anchoring = lazy(() => import('./components/slides/Slide18_Anchoring'));
const Slide19_ThreeOptions = lazy(() => import('./components/slides/Slide19_ThreeOptions'));
const Slide20_PackagePremium = lazy(() => import('./components/slides/Slide20_PackagePremium'));
const Slide21_PackageTarget = lazy(() => import('./components/slides/Slide21_PackageTarget'));
const Slide22_PackageBasic = lazy(() => import('./components/slides/Slide22_PackageBasic'));
const Slide23_GoldenRuleAnchoring = lazy(() => import('./components/slides/Slide23_GoldenRuleAnchoring'));
const Slide24_Closing = lazy(() => import('./components/slides/Slide24_Closing'));

// Loading component for Suspense fallback
const LoadingSlide = () => (
  <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center">
    <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Carregando Masterclass...</span>
  </div>
);

// Define slide structure
interface SlideItem {
  id: string;
  component: React.ReactNode;
  isDark?: boolean;
}

const App: React.FC = () => {
  // Initialize slides
  const [slides, setSlides] = useState<SlideItem[]>([
    { id: 'slide1', component: <Slide1_Cover isActive={true} />, isDark: true },
    { id: 'slide2', component: <Slide2_WhyLearn isActive={true} />, isDark: true },
    { id: 'slide3', component: <Slide3_TheSolution isActive={true} />, isDark: true },
    { id: 'slide4', component: <Slide4_TheFear isActive={true} />, isDark: true },
    { id: 'slide5', component: <Slide5_TheExercise isActive={true} />, isDark: true },
    { id: 'slide6', component: <Slide6_Survival isActive={true} />, isDark: true },
    { id: 'slide7', component: <Slide7_Paradox isActive={true} />, isDark: true },
    { id: 'slide8', component: <Slide8_TheProfiles isActive={true} />, isDark: true },
    { id: 'slide9', component: <Slide9_TheMath isActive={true} />, isDark: true },
    { id: 'slide10', component: <Slide10_TheTruth isActive={true} />, isDark: true },
    { id: 'slide11', component: <Slide11_Conclusion isActive={true} />, isDark: true },
    { id: 'slide12', component: <Slide12_PortfolioTruth isActive={true} />, isDark: true },
    { id: 'slide13', component: <Slide13_ValueShift isActive={true} />, isDark: true },
    { id: 'slide14', component: <Slide14_PricingCalc isActive={true} />, isDark: true },
    { id: 'slide15', component: <Slide15_Quote isActive={true} />, isDark: true },
    { id: 'slide16', component: <Slide16_InternalLogic isActive={true} />, isDark: true },
    { id: 'slide17', component: <Slide17_Calculator isActive={true} />, isDark: true },
    { id: 'slide18', component: <Slide18_Anchoring isActive={true} />, isDark: true },
    { id: 'slide19', component: <Slide19_ThreeOptions isActive={true} />, isDark: true },
    { id: 'slide20', component: <Slide20_PackagePremium isActive={true} />, isDark: true },
    { id: 'slide21', component: <Slide21_PackageTarget isActive={true} />, isDark: true },
    { id: 'slide22', component: <Slide22_PackageBasic isActive={true} />, isDark: true },
    { id: 'slide23', component: <Slide23_GoldenRuleAnchoring isActive={true} />, isDark: true },
    { id: 'slide24', component: <Slide24_Closing isActive={true} />, isDark: true },
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

  // Keyboard navigation
  useEffect(() => {
    if (isGridView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setIsGridView(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isGridView]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Control Bar - Only show if we add more slides later */}
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

      {/* Main Content Area */}
      <main className="w-full h-full relative">
        <Suspense fallback={<LoadingSlide />}>
          {/* GRID VIEW MODE */}
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
                        className="relative aspect-video bg-white rounded-xl overflow-hidden shadow-lg cursor-grab active:cursor-grabbing hover:ring-4 hover:ring-blue-500 transition-all group"
                        onClick={() => handleSlideClick(index)}
                      >
                        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 origin-top-left scale-[0.2] pointer-events-none select-none">
                           <Suspense fallback={<div className="w-full h-full bg-gray-100 flex items-center justify-center">...</div>}>
                              {slide.component}
                           </Suspense>
                        </div>
                        <div className={`absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors ${currentSlideIndex === index ? 'ring-4 ring-orange-500 ring-inset' : ''}`}></div>
                      </Reorder.Item>
                    ))}
                  </Reorder.Group>
                </div>
             </div>
          ) : (
            /* SINGLE SLIDE MODE */
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