import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { UserMinus, UserCheck, Microscope, Telescope, ArrowRight } from 'lucide-react';

const Slide8_TheProfiles: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
        >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                A Grande <span className="text-white underline decoration-blue-600 decoration-4 underline-offset-4">Diferença</span>
            </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12">
            
            {/* The Cheap Client */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-2xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                
                <div className="flex items-center justify-between mb-6">
                    <div className="bg-red-900/20 p-3 rounded-full text-red-500">
                        <Microscope size={28} />
                    </div>
                    <span className="text-red-500 font-bold text-sm uppercase tracking-widest">O Cliente de R$ 300</span>
                </div>

                <ul className="space-y-4 mb-6">
                    <li className="text-gray-400 flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Foca no <strong className="text-white">preço</strong> (custo), não no valor.</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Microgerencia cada detalhe trivial.</span>
                    </li>
                    <li className="text-gray-400 flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Te trata como "sobrinho do computador".</span>
                    </li>
                </ul>
            </motion.div>

            {/* The High Ticket Client */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-950/20 to-[#0a0a0a] border border-blue-500/30 p-8 rounded-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                {/* Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6">
                    <div className="bg-blue-900/20 p-3 rounded-full text-blue-400">
                        <Telescope size={28} />
                    </div>
                    <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">O Cliente de R$ 3.000+</span>
                </div>

                <ul className="space-y-4 mb-6">
                    <li className="text-gray-300 flex items-start gap-3">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>Visão de negócios madura e foca no <strong className="text-white">ROI</strong>.</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>Confia no especialista (você).</span>
                    </li>
                    <li className="text-gray-300 flex items-start gap-3">
                        <span className="text-blue-400 mt-1">✓</span>
                        <span>Exige estratégia, não refação de pixel.</span>
                    </li>
                </ul>
            </motion.div>

        </div>

        {/* Conclusion / Action */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-3xl mx-auto"
        >
            <div className="bg-gray-900 border border-gray-700 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-2xl">
                <div className="bg-white text-black p-3 rounded-full shrink-0">
                    <UserMinus size={24} />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-white font-bold text-lg uppercase mb-1">A Estratégia de Ouro</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Você precisa aprender a <span className="text-white font-bold underline decoration-red-500 decoration-2">"demitir"</span> o cliente de R$ 300,00. 
                        É o único jeito de liberar sua agenda mental e temporal para atender o cliente de R$ 3.000,00.
                    </p>
                </div>
                <div className="hidden md:block">
                    <ArrowRight className="text-gray-600" />
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide8_TheProfiles;