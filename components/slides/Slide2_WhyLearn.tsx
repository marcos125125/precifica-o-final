import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { AlertCircle, Flame } from 'lucide-react';

const Slide2_WhyLearn: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex items-center justify-center p-8 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      
      <div className="max-w-4xl w-full z-10 flex flex-col justify-center h-full">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
        >
            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 border border-orange-500/30 px-3 py-1 rounded-full bg-orange-950/10">
                <AlertCircle size={12} /> Contexto Atual
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
                Por que você precisa <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">aprender isso agora</span>
            </h2>
        </motion.div>

        {/* Copy Body */}
        <div className="space-y-8 border-l-2 border-gray-800 pl-6 md:pl-10 relative">
            {/* Gradient Line Glow */}
            <div className="absolute top-0 left-[-2px] w-[2px] h-1/3 bg-gradient-to-b from-orange-500 to-transparent"></div>

            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-xl md:text-2xl leading-relaxed"
            >
                Você conseguiu prospectar, aplicou a estrutura anti-spam, o cliente demonstrou interesse e agora chegou o momento mais tenso: <strong className="text-white">falar o preço.</strong>
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#0f0f0f] border-l-4 border-orange-600 p-6 rounded-r-xl italic text-gray-400 text-lg md:text-xl relative"
            >
                <div className="absolute -top-3 left-4 bg-orange-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Pensamento Interno</div>
                "Aquele frio na barriga bate. Você pensa: 'E se ele achar caro? E se ele me comparar com o concorrente que cobra R$500? E se eu perder a venda?'"
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
            >
                <h3 className="flex items-center gap-2 text-white font-black uppercase text-lg mb-3">
                    <Flame className="text-red-500 fill-red-500" size={20} />
                    A Realidade Brutal:
                </h3>
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                    A maioria dos profissionais perde vendas <span className="text-red-500 font-bold line-through decoration-red-500/50">não porque cobra caro</span>, mas porque não sabe comunicar valor e não tem confiança no próprio preço.
                </p>
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Slide2_WhyLearn;