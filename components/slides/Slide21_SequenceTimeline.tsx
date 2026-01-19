import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Clock, CornerDownRight, User, Send, CheckCircle, PauseCircle } from 'lucide-react';

const Slide21_SequenceTimeline: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl w-full z-10 flex flex-col items-center h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
        >
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <Clock size={14} /> O Fluxo Ideal
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none">
                A SEQUÊNCIA COMPLETA
            </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            
            {/* Step 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex flex-col items-center text-center relative group hover:shadow-lg transition-all"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Dia 01 - 09:00
                </div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 mt-2">
                    <Send size={24} />
                </div>
                <h3 className="font-black text-lg text-blue-900 leading-tight mb-2">Primeira Mensagem</h3>
                <p className="text-sm text-blue-700/70 font-medium">Bloco 1 (Contexto)<br/>+ Bloco 2 (Observação)</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl flex flex-col items-center text-center relative opacity-80 hover:opacity-100 transition-opacity"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Dia 01 - 18:00
                </div>
                <div className="w-12 h-12 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center mb-4 mt-2">
                    <PauseCircle size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-700 leading-tight mb-2">Pausa Estratégica</h3>
                <p className="text-sm text-gray-500 font-medium">Se visualizou mas não respondeu, aguarde.</p>
            </motion.div>

             {/* Step 3 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#ccff00]/20 border border-[#ccff00]/50 p-6 rounded-2xl flex flex-col items-center text-center relative group hover:shadow-lg transition-all"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-[#ccff00] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Dia 02 - 10:00
                </div>
                <div className="w-12 h-12 bg-[#ccff00] text-black rounded-full flex items-center justify-center mb-4 mt-2">
                    <CheckCircle size={24} />
                </div>
                <h3 className="font-black text-lg text-black leading-tight mb-2">Segunda Mensagem</h3>
                <p className="text-sm text-gray-700 font-medium">Bloco 3 (Oportunidade)<br/>+ Bloco 4 (Permissão)</p>
            </motion.div>

             {/* Step 4 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center relative group hover:shadow-lg transition-all"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Dia 04
                </div>
                <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mb-4 mt-2">
                    <CornerDownRight size={24} />
                </div>
                <h3 className="font-black text-lg text-white leading-tight mb-2">Follow-up Suave</h3>
                <p className="text-sm text-gray-400 font-medium">Apenas se não houve resposta anterior.</p>
            </motion.div>

        </div>

        {/* Script Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-4xl bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-8 relative"
        >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-gray-200">
                Script de Recuperação (Dia 04)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-500">
                    <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-2 block">Opção Direta</span>
                    <p className="text-gray-900 font-medium text-lg leading-snug">
                        "Carolina, vi que você deu uma olhada no protótipo! O que achou? Faz sentido para a Renovar?"
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-gray-300 font-black text-xs p-1">OU</div>
                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-gray-400">
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2 block">Opção Leve</span>
                        <p className="text-gray-900 font-medium text-lg leading-snug">
                            "E aí, conseguiu dar uma olhada? Qualquer dúvida, estou por aqui! 😉"
                        </p>
                    </div>
                </div>
            </div>
            
            <p className="text-center text-gray-400 text-xs mt-6 font-medium">
                ⚠️ Pare após este follow-up. Não insista mais para não virar spam.
            </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide21_SequenceTimeline;