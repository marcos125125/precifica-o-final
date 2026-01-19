import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { HelpCircle, Eye, AlertTriangle, XCircle, TrendingDown, BookOpen } from 'lucide-react';

const Slide14_PricingCalc: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-4xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Intro Label */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
        >
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-950/20">
                <BookOpen size={12} /> Introdução Educativa
            </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-10 max-w-3xl"
        >
            Descubra quanto precisa valer sua hora para seu mês fechar e transforme isso em preço de projeto <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">sem achismo.</span>
        </motion.h1>

        {/* The Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 relative overflow-hidden group hover:border-gray-700 transition-colors shadow-2xl"
        >
            {/* Header of Card */}
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-6">
                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 shrink-0 border border-red-900/30">
                    <XCircle size={24} />
                </div>
                <div>
                    <span className="text-red-500 font-bold uppercase text-[10px] tracking-widest block mb-1">O Erro Clássico</span>
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-none">Por que a maioria dos iniciantes cobra errado?</h2>
                </div>
            </div>

            {/* Content of Card */}
            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="mb-2 font-medium text-gray-300">A Grande Armadilha:</p>
                    <p>
                        Tentar adivinhar o preço olhando o mercado. Você vê alguém cobrando <span className="text-white font-bold bg-white/10 px-1 rounded">R$ 500</span> por um site e pensa: <span className="italic text-gray-500">"sou iniciante, vou cobrar R$ 300 para conseguir clientes".</span>
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-red-950/10 p-5 rounded-xl border border-red-900/20 relative"
                >
                    <div className="absolute top-4 left-4">
                        <AlertTriangle size={18} className="text-red-500" />
                    </div>
                    <div className="pl-8">
                        <p className="text-red-200/90 text-base">
                            <strong className="text-red-400 block mb-1 uppercase text-xs tracking-wider">O Problema Real</strong>
                            Você não sabe se aquele R$ 500 cobre os custos da pessoa. Você não sabe se ela está lucrando ou se sabotando. <strong>Você só sabe que ela cobra R$ 500.</strong>
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex gap-4 items-start"
                >
                    <TrendingDown className="text-orange-500 shrink-0 mt-1" size={24} />
                    <div>
                        <p className="text-gray-300 font-bold mb-1">Resultado?</p>
                        <p className="text-base mb-3">
                            Você trabalha muito, recebe pouco, e no fim do mês o dinheiro não fecha.
                        </p>
                        <p className="text-white font-medium text-lg border-l-2 border-orange-500 pl-4">
                            Pior: você se sente culpado por <span className="text-orange-400">"não conseguir viver do seu trabalho"</span>, quando na verdade o problema é que o preço estava errado desde o início.
                        </p>
                    </div>
                </motion.div>

            </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide14_PricingCalc;