import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Calculator, Divide, ArrowDown, TrendingUp, ShieldCheck, Layers, Brain } from 'lucide-react';

const Slide16_InternalLogic: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-10 text-center md:text-left"
        >
            <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs mb-4 border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-950/10">
                <Calculator size={12} /> A Nova Metodologia
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                AO INVÉS DE OLHAR PARA FORA (MERCADO), <br/>
                <span className="text-cyan-500">VOCÊ OLHA PARA DENTRO (SUAS NECESSIDADES).</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl border-l-4 border-cyan-500 pl-4">
                A lógica é simples:
            </p>
        </motion.div>

        {/* The 3 Steps Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            
            {/* Step 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl relative group hover:border-cyan-500/50 transition-colors"
            >
                <div className="text-cyan-500 font-black text-5xl opacity-10 absolute top-2 right-4">01</div>
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <TrendingUp size={18} className="text-cyan-500" /> Primeiro:
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    Você calcula quanto precisa ganhar por mês (vida + negócio).
                </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl relative group hover:border-cyan-500/50 transition-colors"
            >
                <div className="text-cyan-500 font-black text-5xl opacity-10 absolute top-2 right-4">02</div>
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <Divide size={18} className="text-cyan-500" /> Depois:
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    Você divide isso pelas horas que realmente consegue trabalhar.
                </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-cyan-950/20 border border-cyan-500/30 p-6 rounded-xl relative group"
            >
                <div className="text-cyan-500 font-black text-5xl opacity-10 absolute top-2 right-4">03</div>
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <ArrowDown size={18} className="text-cyan-400" /> Resultado:
                </h3>
                <p className="text-cyan-100 leading-relaxed">
                    Você descobre seu valor/hora mínimo — <strong className="text-white border-b-2 border-cyan-500">o chão que não pode quebrar.</strong>
                </p>
            </motion.div>

        </div>

        {/* Application & Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Application Text */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4"
            >
                <div className="flex items-center gap-2 text-white font-bold uppercase text-sm tracking-wide mb-2">
                    <Layers size={16} className="text-cyan-500"/> A Aplicação Prática
                </div>
                <p>
                    A partir daí, qualquer projeto vira conta simples: você multiplica as horas pelo seu valor/hora, adiciona custos extras, e aplica as margens (impostos, reserva, lucro) <strong className="text-white">por cima, não por dentro.</strong>
                </p>
            </motion.div>

            {/* Mindset Shift Box */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm"
            >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                    <Brain size={24} className="text-purple-400" />
                    <h3 className="text-white font-bold text-lg">O que muda na sua cabeça:</h3>
                </div>
                
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-300">
                        <ShieldCheck className="text-green-500 mt-1 shrink-0" size={18} />
                        <span>Você para de se sentir "cobrando caro".</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <ShieldCheck className="text-green-500 mt-1 shrink-0" size={18} />
                        <span>Você passa a sentir que está "cobrando o mínimo para não quebrar".</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                        <ShieldCheck className="text-green-500 mt-1 shrink-0" size={18} />
                        <span>Você ganha confiança para defender seu preço.</span>
                    </li>
                </ul>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide16_InternalLogic;