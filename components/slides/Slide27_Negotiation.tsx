import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Users, Copy, Tag, MessageSquare } from 'lucide-react';

const Slide27_Negotiation: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      
      <div className="max-w-5xl w-full z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
        >
            <div className="inline-flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-xs mb-4 border border-gray-700 px-3 py-1 rounded-full">
                <Users size={12} /> Playbook de Negociação
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                EMPATIA TÁTICA (FBI)
            </h2>
            <p className="text-gray-500 mt-2">Como desarmar objeções sem combate.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Technique 1: Mirroring */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#111] border border-gray-800 p-8 rounded-3xl relative"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-900/20 p-2 rounded-lg text-blue-500"><Copy size={24} /></div>
                    <h3 className="text-white font-bold text-xl uppercase">7.1 Espelhamento</h3>
                </div>

                <div className="space-y-4">
                    <div className="bg-red-900/10 border border-red-900/20 p-4 rounded-xl">
                        <p className="text-xs text-red-400 font-bold uppercase mb-1">Cliente</p>
                        <p className="text-gray-300">"Nossa, R$ 1.500 tá muito caro pra mim agora."</p>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="h-4 w-px bg-gray-700"></div>
                    </div>

                    <div className="bg-blue-900/10 border border-blue-900/20 p-4 rounded-xl">
                        <p className="text-xs text-blue-400 font-bold uppercase mb-1">Você (Espelhando)</p>
                        <p className="text-white font-medium">"Muito caro agora?" <span className="text-gray-500 text-xs font-normal">(Pausa e Silêncio)</span></p>
                    </div>

                    <div className="bg-green-900/10 p-4 rounded-xl text-xs text-green-300 leading-relaxed mt-4">
                        <strong className="block mb-1 text-green-400">Efeito Mágico:</strong>
                        O cliente explica: "É, porque esse mês tive a reforma...". A objeção não era o preço, era o fluxo de caixa.
                    </div>
                </div>
            </motion.div>

            {/* Technique 2: Labeling */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-gray-800 p-8 rounded-3xl relative"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-900/20 p-2 rounded-lg text-purple-500"><Tag size={24} /></div>
                    <h3 className="text-white font-bold text-xl uppercase">7.2 Rotulagem</h3>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
                        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Cenário</p>
                        <p className="text-gray-300">Cliente hesitando, calado, com cara de dúvida.</p>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="h-4 w-px bg-gray-700"></div>
                    </div>

                    <div className="bg-purple-900/10 border border-purple-900/20 p-4 rounded-xl">
                        <p className="text-xs text-purple-400 font-bold uppercase mb-1">Você (Rotulando)</p>
                        <p className="text-white font-medium">"Parece que você tá com receio de investir e não ter o retorno que espera, né?"</p>
                    </div>

                    <div className="bg-green-900/10 p-4 rounded-xl text-xs text-green-300 leading-relaxed mt-4">
                        <strong className="block mb-1 text-green-400">Efeito Mágico:</strong>
                        O cliente se sente compreendido. A defesa baixa, a lógica volta a funcionar e ele diz "É isso mesmo!".
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide27_Negotiation;