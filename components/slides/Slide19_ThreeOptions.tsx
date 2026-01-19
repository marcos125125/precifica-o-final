import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingDown, ShieldCheck, Star } from 'lucide-react';

const Slide19_ThreeOptions: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#111] to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header Text (Part 2) */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 max-w-4xl mx-auto"
        >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-6">
                A Solução: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Três Opções</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                A solução é apresentar sempre três opções.
            </p>
        </motion.div>

        {/* The Three Cards Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-end">
            
            {/* Option 1: The Anchor */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl relative order-1 md:order-3 opacity-50 hover:opacity-100 transition-opacity"
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                    1ª Opção (Mais Cara)
                </div>
                <div className="text-center mt-4 mb-4">
                    <h3 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">Âncora Superior</h3>
                    <div className="text-4xl font-black text-white">R$ 4.000</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl text-xs text-gray-400 leading-relaxed border border-gray-800">
                    "Ela redefine a régua de preço do cliente. Quando o cliente vê R$ 4.000,00, o susto inicial passa."
                </div>
            </motion.div>

            {/* Option 2: The Target (Reasonable) */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl relative order-2 md:order-2 opacity-80 hover:opacity-100 transition-opacity transform md:-translate-y-4"
            >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-blue-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                    2ª Opção (O Alvo)
                </div>
                <div className="text-center mt-4 mb-4">
                    <h3 className="text-blue-500 uppercase text-xs font-bold tracking-widest mb-2">Razoável</h3>
                    <div className="text-5xl font-black text-white">R$ 2.400</div>
                </div>
                <div className="bg-blue-950/20 p-4 rounded-xl text-xs text-blue-200/70 leading-relaxed border border-blue-900/30">
                    "Ao ver a segunda opção de R$ 2.400,00, ela parece razoável."
                </div>
            </motion.div>

            {/* Option 3: The Safe (Original Price) */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-green-950/20 border border-green-500 p-8 rounded-2xl relative order-3 md:order-1 shadow-[0_0_50px_rgba(34,197,94,0.1)] transform md:-translate-y-8"
            >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap flex items-center gap-2 shadow-lg">
                    <Star size={12} fill="black" /> 3ª Opção (O Seu Preço)
                </div>
                <div className="text-center mt-6 mb-6">
                    <h3 className="text-green-400 uppercase text-xs font-bold tracking-widest mb-2">Segurança / Pechincha</h3>
                    <div className="text-6xl font-black text-white">R$ 1.500</div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl text-sm text-green-100/90 leading-relaxed border border-green-500/30">
                    "A terceira opção, de R$ 1.500,00, passa a ser percebida como uma <strong className="text-white underline decoration-green-500">'pechincha'</strong> ou uma opção de segurança."
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide19_ThreeOptions;