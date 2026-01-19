import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

const Slide35_Step4Intro: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Intro Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 bg-[#111] relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
                    Etapa 04
                </div>
                <div className="h-px w-10 bg-green-600"></div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-[0.95]">
                CONVERTENDO<br/>
                <span className="text-green-500">O "SIM" EM VENDA</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6 border-l-4 border-green-900 pl-4">
                O cliente respondeu positivamente ("Pode mandar", "Tenho interesse"). E agora?
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-900/10 border border-green-500/20 p-6 rounded-2xl"
        >
            <div className="flex items-center gap-2 text-green-400 font-bold uppercase text-xs tracking-widest mb-2">
                <DollarSign size={14} /> O Objetivo
            </div>
            <p className="text-green-100 text-lg font-medium">
                Transformar o interesse inicial em <span className="text-white underline decoration-green-500 decoration-2">compromisso comercial</span> sem parecer agressivo.
            </p>
        </motion.div>
      </div>

      {/* Right Panel: The Principle (Speed) */}
      <div className="w-full md:w-7/12 bg-[#0a0a0a] flex flex-col justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

        <div className="relative z-10">
            <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white text-2xl font-black mb-10 flex items-center gap-3"
            >
                <Zap className="text-yellow-400 fill-yellow-400" />
                O PRINCÍPIO DO MICROENGAJAMENTO
            </motion.h3>

            {/* Stat Visualization */}
            <div className="space-y-8">
                
                {/* 5 Minutes */}
                <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2 text-green-400">
                        <span className="flex items-center gap-2"><Clock size={14}/> Em até 5 minutos</span>
                        <span>Chance de Conversão: Alta</span>
                    </div>
                    <div className="h-16 bg-gradient-to-r from-green-900 to-green-500 rounded-lg flex items-center px-4 shadow-[0_0_30px_rgba(34,197,94,0.3)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
                        <span className="text-white font-black text-3xl z-10">21x MAIOR</span>
                    </div>
                </motion.div>

                {/* 30 Minutes */}
                <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "20%", opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                    className="relative opacity-50"
                >
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest mb-2 text-gray-500">
                        <span className="flex items-center gap-2"><Clock size={14}/> Após 30 minutos</span>
                        <span>Chance de Conversão: Baixa</span>
                    </div>
                    <div className="h-16 bg-gray-800 rounded-lg flex items-center px-4">
                        <span className="text-gray-400 font-bold text-xl">1x</span>
                    </div>
                </motion.div>

            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-12 flex items-start gap-3 text-gray-400 text-sm"
            >
                <AlertTriangle className="text-yellow-500 shrink-0" size={18} />
                <p>
                    Velocidade é crucial nesta fase. Quando o cliente levanta a mão ("Pode mandar"), você precisa entregar o valor <span className="text-white font-bold">imediatamente</span> enquanto a atenção dele está alta.
                </p>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide35_Step4Intro;