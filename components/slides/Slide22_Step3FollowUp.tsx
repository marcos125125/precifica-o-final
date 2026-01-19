import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { RefreshCw, AlertTriangle, XCircle, CheckCircle, Clock } from 'lucide-react';

const Slide22_Step3FollowUp: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Context & Problem */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-r border-gray-100 relative z-10 bg-dot-pattern">
        
        {/* Step Indicator */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 left-10 md:left-16 text-[12rem] font-black text-gray-100 opacity-50 select-none -z-10 leading-none"
        >
            3
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
            Etapa 03
          </div>
          <div className="h-px w-10 bg-black"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-6 leading-none"
        >
          O FOLLOW-UP <br/>
          <span className="text-blue-600">INTELIGENTE</span>
        </motion.h2>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
        >
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border-l-4 border-gray-400 mb-6">
                <div className="bg-white p-2 rounded-full shadow-sm text-gray-600 shrink-0">
                    <Clock size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">A Realidade</h4>
                    <p className="text-gray-600 leading-relaxed">
                        A maioria das vendas não acontece no primeiro contato. <span className="font-bold text-black">80% dos leads</span> precisam de 5 a 7 interações antes de tomar uma decisão.
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                <div className="bg-white p-2 rounded-full shadow-sm text-red-600 shrink-0">
                    <AlertTriangle size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-red-900 text-sm uppercase tracking-wide mb-1">O Problema</h4>
                    <p className="text-red-800/80 leading-relaxed">
                        A maioria desiste no primeiro silêncio ou faz follow-up <span className="font-bold">desesperado</span>, queimando a oportunidade instantaneamente.
                    </p>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Right Column: The Golden Rule (Dos and Don'ts) */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
        
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-200"
        >
            <div className="bg-black p-6 text-center">
                <h3 className="text-[#ccff00] font-black text-xl tracking-widest uppercase flex items-center justify-center gap-2">
                    <RefreshCw size={20} /> A Regra de Ouro
                </h3>
            </div>

            <div className="p-8">
                {/* Don'ts */}
                <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest mb-4">
                        <XCircle size={16} /> Não Faça (O Desesperado)
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-500 text-sm line-through decoration-red-300">
                            Cobrar resposta no mesmo dia
                        </li>
                        <li className="flex items-center gap-3 text-gray-500 text-sm line-through decoration-red-300">
                            "Viu minha mensagem?" após 2 horas
                        </li>
                        <li className="flex items-center gap-3 text-gray-500 text-sm line-through decoration-red-300">
                            Ficar online esperando resposta
                        </li>
                    </ul>
                </div>

                <div className="w-full h-px bg-gray-100 mb-8"></div>

                {/* Dos */}
                <div>
                    <h4 className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest mb-4">
                        <CheckCircle size={16} /> Faça (O Estratégico)
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-800 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                            Aguarde 48-72h (2-3 dias) antes do primeiro follow-up
                        </li>
                        <li className="flex items-start gap-3 text-gray-800 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                            Mantenha o tom leve e sem pressão
                        </li>
                        <li className="flex items-start gap-3 text-gray-800 text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                            Ofereça uma saída fácil para o "não"
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide22_Step3FollowUp;