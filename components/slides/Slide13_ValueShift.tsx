import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, DollarSign, Target, ShieldCheck, Zap } from 'lucide-react';

const Slide13_ValueShift: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: The Concept */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 bg-green-900/20 text-green-400 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border border-green-800/30 mb-6">
                    <TrendingUp size={14} /> Virada de Chave
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                    NÃO VENDA HORAS.<br/>
                    <span className="text-green-500">VENDA RESULTADO.</span>
                </h2>
                <div className="w-24 h-1 bg-green-600 rounded-full mb-8"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <p className="text-gray-400 text-xl leading-relaxed">
                    O cliente não está comprando "um site de 5 páginas" ou "10 horas do seu tempo". Ele está comprando:
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                    {["Mais credibilidade pro negócio", "Mais leads entrando", "Mais vendas acontecendo", "Menos dor de cabeça"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-200 text-lg font-medium">
                            <ShieldCheck className="text-green-500 shrink-0" size={20} />
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Right: The Math/ROI */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
        >
            <div className="absolute top-0 right-0 p-32 bg-green-600 blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

            <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-2xl relative shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-green-500 text-black p-3 rounded-full shadow-lg font-bold">
                    <DollarSign size={32} strokeWidth={2.5} />
                </div>

                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">O Cálculo do Empresário</h3>

                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <span className="text-gray-300 text-lg">Faturamento Mensal</span>
                        <span className="text-white font-black text-2xl">R$ 50.000</span>
                    </div>
                    
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <span className="text-red-400 text-lg flex items-center gap-2">
                            <Zap size={18} /> Perda por site ruim
                        </span>
                        <span className="text-red-500 font-black text-2xl">- R$ 15.000</span>
                    </div>

                    <div className="bg-green-900/10 p-6 rounded-xl border border-green-500/20 text-center mt-4">
                        <p className="text-green-400 text-sm uppercase font-bold tracking-wider mb-2">Quanto vale resolver isso?</p>
                        <p className="text-3xl md:text-4xl text-white font-black">
                            R$ 1.500 <span className="text-gray-500 text-xl font-medium">é barato.</span>
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6 max-w-sm mx-auto">
                O preço não é sobre quanto você trabalhou. É sobre quanto problema você resolveu.
            </p>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide13_ValueShift;