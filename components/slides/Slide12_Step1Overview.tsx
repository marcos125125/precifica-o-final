import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Search, Eye, Target, ArrowDown } from 'lucide-react';

const Slide12_Step1Overview: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: The "What" */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-r border-gray-100 relative z-10">
        
        {/* Step Indicator */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 left-10 md:left-16 text-[12rem] font-black text-gray-200 opacity-60 select-none -z-10 leading-none"
        >
            1
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="bg-black text-white px-4 py-2 text-base font-bold uppercase tracking-widest rounded-sm">
            Etapa 01
          </div>
          <div className="h-px w-10 bg-black"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none"
        >
          CONTEXTO<br/>
          <span className="text-blue-500">+</span><br/>
          OBSERVAÇÃO
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-500 font-medium mb-10 max-w-md uppercase tracking-wide"
        >
          (A Abordagem Inicial)
        </motion.p>

        {/* Goal Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg shadow-sm"
        >
            <div className="flex items-center gap-2 mb-4">
                <Target className="text-blue-600 w-6 h-6" />
                <span className="font-bold text-blue-900 text-base uppercase tracking-widest">Objetivo Principal</span>
            </div>
            <p className="text-blue-900 text-2xl font-bold leading-relaxed">
                Conseguir a atenção e estabelecer <span className="underline decoration-blue-300 decoration-4 underline-offset-2">legitimidade</span> em uma única mensagem.
            </p>
        </motion.div>

      </div>

      {/* Right Column: Visual Connection */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-2">
            
            {/* Block 1 Visualization */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="w-80 bg-white p-8 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center text-center"
            >
                <h3 className="font-black text-2xl text-gray-900 mb-2">CONTEXTO</h3>
                <p className="text-gray-500 text-sm font-medium">Conexão lógica e imediata.</p>
            </motion.div>

            {/* Arrow Connector */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
                className="z-20 py-2"
            >
                <ArrowDown size={32} className="text-gray-400" />
            </motion.div>

            {/* Block 2 Visualization */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="w-80 bg-white p-8 rounded-2xl shadow-xl border border-green-100 flex flex-col items-center text-center"
            >
                <h3 className="font-black text-2xl text-gray-900 mb-2">OBSERVAÇÃO</h3>
                <p className="text-gray-500 text-sm font-medium">Personalização real.</p>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide12_Step1Overview;