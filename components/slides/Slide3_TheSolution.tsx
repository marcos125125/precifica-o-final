import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Slide3_TheSolution: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.1)_0,rgba(0,0,0,0)_50%)] pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col h-full justify-center">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12 md:mb-16"
        >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                ESTE MÓDULO VAI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">RESOLVER ISSO.</span>
            </h2>
        </motion.div>

        {/* Copy Points */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-4xl mx-auto w-full">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6 group"
            >
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-xl">1</span>
                </div>
                <div className="pt-2">
                    <p className="text-xl md:text-3xl text-gray-300 font-medium leading-tight group-hover:text-white transition-colors">
                        Vamos construir sua <span className="text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4">precificação do zero</span>.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-6 group"
            >
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-xl">2</span>
                </div>
                <div className="pt-2">
                    <p className="text-xl md:text-3xl text-gray-300 font-medium leading-tight group-hover:text-white transition-colors">
                        Criar uma estratégia de ancoragem que faz seus preços parecerem <span className="text-white font-bold">investimento (não gasto)</span>.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-6 group"
            >
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <span className="font-bold text-xl">3</span>
                </div>
                <div className="pt-2">
                    <p className="text-xl md:text-3xl text-gray-300 font-medium leading-tight group-hover:text-white transition-colors">
                        E preparar você para quebrar objeções <span className="text-white font-bold">sem abaixar a cabeça ou o preço</span>.
                    </p>
                </div>
            </motion.div>

        </div>

        {/* Footer */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex justify-center"
        >
            <div className="flex items-center gap-3 text-orange-500/50 uppercase tracking-[0.2em] text-xs font-bold">
                <span>Próxima Etapa</span>
                <ArrowRight size={16} />
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide3_TheSolution;