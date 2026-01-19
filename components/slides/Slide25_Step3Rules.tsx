import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, RefreshCw, MessageSquareOff, Clock } from 'lucide-react';

const Slide25_Step3Rules: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -z-10"></div>
      
      <div className="max-w-7xl w-full z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
        >
             <div className="inline-flex items-center gap-2 bg-[#ccff00] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                 <RefreshCw size={14} /> Regra de Ouro
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                O QUE FAZER <span className="text-gray-600">&</span> NÃO FAZER
             </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* DON'TS */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-red-950/20 border border-red-900/30 p-8 rounded-3xl relative"
            >
                <div className="flex items-center gap-3 mb-8 border-b border-red-900/30 pb-4">
                    <XCircle className="text-red-500 w-8 h-8" />
                    <h3 className="text-2xl font-black text-red-500 uppercase tracking-wide">Não Faça</h3>
                </div>

                <ul className="space-y-6">
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-red-800 rounded-full mt-2 group-hover:bg-red-500 transition-colors"></div>
                        <span className="text-red-200/70 text-lg group-hover:text-red-200 transition-colors">Cobrar resposta no mesmo dia</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-red-800 rounded-full mt-2 group-hover:bg-red-500 transition-colors"></div>
                        <span className="text-red-200/70 text-lg group-hover:text-red-200 transition-colors">Enviar "Viu minha mensagem?" após 2 horas</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-red-800 rounded-full mt-2 group-hover:bg-red-500 transition-colors"></div>
                        <span className="text-red-200/70 text-lg group-hover:text-red-200 transition-colors">Mandar múltiplas mensagens seguidas</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-red-800 rounded-full mt-2 group-hover:bg-red-500 transition-colors"></div>
                        <span className="text-red-200/70 text-lg group-hover:text-red-200 transition-colors">Ficar online esperando resposta</span>
                    </li>
                </ul>
            </motion.div>

            {/* DOS */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#ccff00]/5 border border-[#ccff00]/20 p-8 rounded-3xl relative"
            >
                <div className="flex items-center gap-3 mb-8 border-b border-[#ccff00]/20 pb-4">
                    <CheckCircle className="text-[#ccff00] w-8 h-8" />
                    <h3 className="text-2xl font-black text-[#ccff00] uppercase tracking-wide">Faça</h3>
                </div>

                <ul className="space-y-6">
                    <li className="flex items-start gap-4 group">
                        <div className="bg-[#ccff00] p-1 rounded-full mt-1 shrink-0">
                            <Clock size={12} className="text-black" />
                        </div>
                        <span className="text-white text-lg font-medium">Aguarde <span className="text-[#ccff00]">48-72 horas</span> (2-3 dias) antes do primeiro follow-up</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full mt-2.5"></div>
                        <span className="text-gray-300 text-lg">Mantenha o tom leve e sem pressão</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full mt-2.5"></div>
                        <span className="text-gray-300 text-lg">Ofereça uma saída fácil para o "não"</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full mt-2.5"></div>
                        <span className="text-gray-300 text-lg">Use canais alternados de forma estratégica</span>
                    </li>
                </ul>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide25_Step3Rules;