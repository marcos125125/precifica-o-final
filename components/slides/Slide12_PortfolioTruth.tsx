import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Briefcase, Camera } from 'lucide-react';

const Slide12_PortfolioTruth: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
        >
            <div className="inline-flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-xs mb-4 border border-gray-700 px-3 py-1 rounded-full">
                <Briefcase size={12} /> Estratégia de Carreira
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                A REAL SOBRE <br/>
                <span className="text-white decoration-orange-500 underline underline-offset-4">FAZER PORTFÓLIO</span>
            </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            
            {/* The Wrong Way */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0a0a0a] border border-red-900/30 p-8 rounded-2xl relative overflow-hidden group hover:border-red-800 transition-colors"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                
                <div className="flex items-center gap-3 mb-6">
                    <XCircle className="text-red-600" size={24} />
                    <h3 className="text-red-500 font-black text-xl uppercase tracking-widest">O Jeito Errado</h3>
                </div>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-400">
                        <span className="text-red-900 font-bold mt-1">✕</span>
                        <span>Cobrar <span className="text-red-500 line-through decoration-red-500/50">R$ 300</span> de todo mundo para "ganhar experiência".</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                        <span className="text-red-900 font-bold mt-1">✕</span>
                        <span>Virar escravo de clientes ruins que te indicam para outros clientes ruins.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-400">
                        <span className="text-red-900 font-bold mt-1">✕</span>
                        <span>Ficar preso nesse ciclo da miséria por 2 anos.</span>
                    </li>
                </ul>
            </motion.div>

            {/* The Right Way */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-950/20 to-[#0a0a0a] border border-blue-500/30 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-blue-600/20 rounded-full blur-[50px] pointer-events-none"></div>

                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="text-blue-500" size={24} />
                    <h3 className="text-blue-400 font-black text-xl uppercase tracking-widest">O Jeito Certo</h3>
                </div>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-500 font-bold mt-1">✓</span>
                        <span>Escolha 2 ou 3 projetos <strong className="text-white">estratégicos</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-500 font-bold mt-1">✓</span>
                        <span>Aplique a técnica da <strong>"Amostra Grátis"</strong> (redesign da 1ª dobra) que ensinamos.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-500 font-bold mt-1">✓</span>
                        <span>Ofereça condição especial temporária em troca de <strong className="text-white">Case Documentado</strong>.</span>
                    </li>
                </ul>
            </motion.div>

        </div>

        {/* The Golden Rule */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
        >
            <div className="inline-block bg-[#111] border border-orange-900/30 px-6 py-4 rounded-xl shadow-2xl relative">
                <p className="text-xl md:text-2xl text-gray-200 font-medium">
                    "Portfólio se faz com <span className="text-orange-500 font-bold underline decoration-orange-500/30">estratégia</span>, não com miséria."
                </p>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide12_PortfolioTruth;