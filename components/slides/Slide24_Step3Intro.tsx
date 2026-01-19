import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Zap, MessageCircle } from 'lucide-react';

const Slide24_Step3Intro: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Title & Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-100 relative z-10 bg-dot-pattern">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="bg-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">
            Etapa 03
          </div>
          <div className="h-px w-10 bg-blue-600"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-6 leading-[0.95]"
        >
          O FOLLOW-UP <br/>
          <span className="text-blue-600">INTELIGENTE</span>
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-medium text-gray-500 max-w-sm leading-tight"
        >
            (Acompanhamento Estratégico)
        </motion.p>
      </div>

      {/* Right Column: The 3 Pillars */}
      <div className="w-full md:w-7/12 bg-gray-50 flex flex-col justify-center p-8 md:p-16 relative">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

        <div className="space-y-6 relative z-10">
            
            {/* Reality */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-gray-800 flex items-start gap-4"
            >
                <div className="bg-gray-100 p-3 rounded-full shrink-0 text-gray-600">
                    <Clock size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm mb-1">A Realidade</h4>
                    <p className="text-gray-600 leading-snug">
                        A maioria das vendas não acontece no primeiro contato. <span className="font-bold text-black">80% dos leads</span> precisam de 5 a 7 interações antes de tomar uma decisão.
                    </p>
                </div>
            </motion.div>

            {/* Problem */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-red-50 p-6 rounded-2xl shadow-sm border-l-4 border-red-500 flex items-start gap-4"
            >
                <div className="bg-red-100 p-3 rounded-full shrink-0 text-red-600">
                    <AlertTriangle size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-red-900 uppercase tracking-wider text-sm mb-1">O Problema</h4>
                    <p className="text-red-800/80 leading-snug">
                        A maioria desiste no primeiro silêncio ou faz follow-up <span className="font-bold">desesperado</span>, queimando a oportunidade instantaneamente.
                    </p>
                </div>
            </motion.div>

            {/* Solution */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="bg-blue-50 p-6 rounded-2xl shadow-sm border-l-4 border-blue-600 flex items-start gap-4"
            >
                <div className="bg-blue-100 p-3 rounded-full shrink-0 text-blue-600">
                    <Zap size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-blue-900 uppercase tracking-wider text-sm mb-1">A Solução</h4>
                    <p className="text-blue-800 leading-snug">
                        Ter uma cadência de acompanhamento <span className="font-bold">estratégica e não invasiva</span> que mantém a porta aberta sem gerar pressão.
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide24_Step3Intro;