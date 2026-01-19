import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Gift, Clock, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';

const Slide15_Step2Overview: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Intro */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-r border-gray-100 relative z-10">
        
        {/* Step Indicator */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-10 left-10 md:left-16 text-[12rem] font-black text-gray-200 opacity-100 select-none -z-10 leading-none"
        >
            2
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="bg-black text-white px-4 py-2 text-base font-bold uppercase tracking-widest rounded-sm">
            Etapa 02
          </div>
          <div className="h-px w-10 bg-black"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none"
        >
          OPORTUNIDADE<br/>
          <span className="text-blue-600">+</span><br/>
          PERMISSÃO
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-500 font-medium mb-10 max-w-md uppercase tracking-wide"
        >
          (A Oferta de Valor)
        </motion.p>

        {/* Goal Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[#ccff00] p-8 rounded-lg shadow-sm border-2 border-black relative"
        >
             <div className="absolute -top-4 -right-4 bg-black text-white p-3 rounded-full">
                <Gift size={24} />
             </div>
            <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-black text-base uppercase tracking-widest">Objetivo Principal</span>
            </div>
            <p className="text-black text-2xl font-bold leading-relaxed">
                Entregar <span className="underline decoration-black decoration-4 underline-offset-2">valor concreto</span> antes de pedir qualquer compromisso.
            </p>
        </motion.div>

      </div>

      {/* Right Column: Timing Logic */}
      <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center p-8 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative z-10"
        >
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <Clock className="text-blue-600" />
                Quando enviar a 2ª mensagem?
            </h3>

            <div className="space-y-6">
                
                {/* Scenario 1 */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500"
                >
                    <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
                        <MessageCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Se o cliente respondeu</h4>
                        <p className="text-gray-600 text-sm mt-1">Continue a conversa naturalmente.</p>
                    </div>
                </motion.div>

                {/* Scenario 2 */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-yellow-500"
                >
                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 shrink-0">
                        <CheckCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Se visualizou mas não respondeu</h4>
                        <p className="text-gray-600 text-sm mt-1">Aguarde <span className="font-bold text-black">24-48h</span> e envie o "presente".</p>
                    </div>
                </motion.div>

                {/* Scenario 3 */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-gray-400"
                >
                    <div className="bg-gray-200 p-2 rounded-full text-gray-600 shrink-0">
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Se não visualizou</h4>
                        <p className="text-gray-600 text-sm mt-1">Aguarde <span className="font-bold text-black">3-5 dias</span> e reforce com outro ângulo.</p>
                    </div>
                </motion.div>

            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide15_Step2Overview;