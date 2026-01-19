import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Zap } from 'lucide-react';

const Slide11_FlowIntro: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center text-center">
        
        {/* Icon / Badge */}
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
        >
            <MessageSquare className="text-white w-10 h-10" strokeWidth={2} />
        </motion.div>

        {/* Main Title */}
        <div className="mb-6">
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4"
            >
                Como transformar a teoria em conversa
            </motion.h3>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-7xl text-white font-black tracking-tighter leading-none"
            >
                O FLUXO DA CONVERSA:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#ccff00]">APLICANDO A ESTRUTURA ANTI-SPAM</span>
            </motion.h1>
        </div>

        {/* Divider */}
        <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-32 h-1 bg-gray-800 rounded-full mb-10"
        />

        {/* Subtitle / Description */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed"
        >
            Agora que você conhece os 4 blocos fundamentais (Contexto, Observação, Oportunidade, Permissão), vamos aplicá-los em um <span className="text-white font-bold">roteiro passo a passo</span> do primeiro contato até a entrega de valor.
        </motion.p>

        {/* Bottom CTA visual */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
        >
            <Zap className="text-[#ccff00] w-5 h-5" />
            <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Próximo: Etapa 1</span>
            <ArrowRight className="text-white w-5 h-5 ml-2" />
        </motion.div>

      </div>
    </div>
  );
};

export default Slide11_FlowIntro;