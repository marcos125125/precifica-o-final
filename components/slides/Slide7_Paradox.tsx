import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { TrendingDown, Activity, AlertTriangle } from 'lucide-react';

const Slide7_Paradox: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(20,20,20,1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border border-gray-700 mb-6">
                    <Activity size={14} className="text-orange-500"/> Lei de Mercado 3.1
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                    O PARADOXO DA<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">EXIGÊNCIA INVERSA.</span>
                </h2>
                <div className="w-24 h-1 bg-gray-800 rounded-full mb-8"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <p className="text-gray-400 text-xl leading-relaxed">
                    Existe uma correlação inversa documentada: <strong className="text-white">quanto menos o cliente paga, mais ele exige.</strong>
                </p>
                
                <div className="bg-[#0f0f0f] border-l-4 border-red-500 p-6 rounded-r-xl">
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest mb-2">
                        <AlertTriangle size={14} /> O Motivo
                    </div>
                    <p className="text-gray-300 text-lg leading-snug">
                        Para quem tem pouca liquidez, R$ 500,00 é uma fortuna. Isso gera <span className="text-white font-bold">ansiedade</span> e uma necessidade incontrolável de controle (microgerenciamento).
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Visual Graph */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 h-[400px] flex flex-col justify-end shadow-2xl"
        >
            {/* Grid Lines */}
            <div className="absolute inset-0 p-8 grid grid-cols-4 grid-rows-4 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="border-t border-gray-800/50 w-full h-full"></div>
                ))}
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 text-red-500 font-bold text-xs uppercase tracking-widest rotate-90 origin-left translate-y-12">
                Nível de Incômodo
            </div>
            <div className="absolute bottom-4 right-4 text-green-500 font-bold text-xs uppercase tracking-widest">
                Valor Pago (R$)
            </div>

            {/* The Curve */}
            <svg className="absolute inset-0 w-full h-full p-8 overflow-visible" preserveAspectRatio="none">
                <motion.path
                    d="M 0,50 Q 100,300 400,350"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Points */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute top-[15%] left-[5%] bg-red-900/80 border border-red-500 text-red-200 text-xs p-2 rounded backdrop-blur-md"
            >
                <span className="font-bold block">R$ 300 - R$ 600</span>
                Caos & Ansiedade
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 }}
                className="absolute bottom-[10%] right-[5%] bg-green-900/80 border border-green-500 text-green-200 text-xs p-2 rounded backdrop-blur-md"
            >
                <span className="font-bold block">R$ 2.400+</span>
                Confiança & Estratégia
            </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide7_Paradox;