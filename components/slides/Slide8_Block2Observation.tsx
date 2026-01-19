import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Eye, AlertTriangle, CheckCircle, XCircle, Zap } from 'lucide-react';

const Slide8_Block2Observation: React.FC<SlideProps> = ({ isActive }) => {
  return (
     <div className="w-full h-screen bg-white flex items-center justify-center relative overflow-hidden font-sans p-6 md:p-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Theory (Problem & Why) */}
        <div className="flex flex-col justify-center">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                        <Eye size={20} strokeWidth={3} />
                    </div>
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Bloco 2</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none">
                    OBSERVAÇÃO
                </h2>
                <p className="text-xl font-medium text-gray-700 leading-tight">
                    Mostre que esta mensagem foi feita <span className="bg-green-100 text-green-900 px-1 rounded-sm font-bold">para esta pessoa</span>.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {/* O Problema */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
                >
                    <div className="flex items-center gap-2 text-red-700 font-bold uppercase text-xs tracking-widest mb-2">
                        <AlertTriangle size={14} /> O que você está resolvendo:
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        <span className="font-bold">64% dos decisores</span> ignoram mensagens genéricas. Nosso cérebro desenvolveu "cegueira" para comunicação em massa.
                    </p>
                </motion.div>

                {/* Por que funciona */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-900 text-white p-6 rounded-lg shadow-lg"
                >
                     <div className="flex items-center gap-2 text-[#ccff00] font-bold uppercase text-xs tracking-widest mb-2">
                        <Zap size={14} /> Por que funciona:
                    </div>
                    <p className="text-gray-200 text-lg leading-snug">
                        Você se diferencia de 99% dos concorrentes e ativa o princípio da reciprocidade, a pessoa sente que deve retribuir o esforço que você fez.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Right Column: Practice (How to & Examples) */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6 }}
             className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-8 md:p-10 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>

            <div className="mb-8">
                <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-2">
                    <span className="text-green-500 text-3xl">🔎</span> Como aplicar:
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-4">
                    Demonstre que você dedicou tempo para pesquisar especificamente sobre aquela pessoa ou empresa. <span className="font-bold text-black">Mencione algo único e recente.</span>
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 mb-4">Exemplos Práticos</h4>

                {/* Example 1 */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <p className="text-green-900 font-medium text-lg leading-snug">
                        "Notei que vocês expandiram para [nova cidade], parabéns pela conquista!"
                    </p>
                </motion.div>

                {/* Example 2 */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <p className="text-green-900 font-medium text-lg leading-snug">
                        "Vi seu último post sobre [tema] e concordo que [insight específico]..."
                    </p>
                </motion.div>

                 {/* Example 3 (Bad) */}
                 <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100 opacity-80 hover:opacity-100 transition-opacity"
                >
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <p className="text-red-900 font-medium text-lg leading-snug line-through decoration-red-300 decoration-2">
                        "Vi que sua empresa trabalha com [setor genérico]..."
                    </p>
                </motion.div>
            </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide8_Block2Observation;