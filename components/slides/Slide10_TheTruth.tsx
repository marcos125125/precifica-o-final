import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Ghost, ShieldCheck, XCircle } from 'lucide-react';

const Slide10_TheTruth: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      <div className="max-w-5xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: The Problem */}
        <div>
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                    A VERDADE <br/>
                    <span className="text-red-600">DESCONFORTÁVEL.</span>
                </h2>
                <div className="w-24 h-1 bg-gray-800 rounded-full mb-8"></div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <p className="text-gray-300 text-xl font-medium">
                    Preço baixo não atrai cliente bom. <br/>
                    <span className="text-white">Atrai cliente desesperado.</span>
                </p>

                <div className="bg-[#0f0f0f] border-l-4 border-red-600 p-6 rounded-r-xl">
                    <h3 className="text-red-500 font-bold uppercase text-sm mb-4 flex items-center gap-2">
                        <Ghost size={16} /> Perfil do Desesperado
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-400">
                            <XCircle size={16} className="text-red-800 mt-1 shrink-0" />
                            <span>Não tem clareza do que precisa.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-400">
                            <XCircle size={16} className="text-red-800 mt-1 shrink-0" />
                            <span>Muda de ideia constantemente.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-400">
                            <XCircle size={16} className="text-red-800 mt-1 shrink-0" />
                            <span>Confunde preço com valor.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-400">
                            <XCircle size={16} className="text-red-800 mt-1 shrink-0" />
                            <span>Não constrói portfólio relevante.</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>

        {/* Right Column: The Solution (Firing) */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 border border-gray-800 p-8 rounded-3xl relative"
        >
            <div className="absolute -top-4 -right-4 bg-orange-500 text-black p-3 rounded-full">
                <ShieldCheck size={32} />
            </div>

            <h3 className="text-2xl font-black text-white mb-6">
                "Demitir" o cliente barato é proteção.
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
                Isso não significa que você é arrogante ou não valoriza pequenos negócios. Significa que:
            </p>

            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Você está filtrando o respeito.</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Protegendo sua saúde mental.</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Criando espaço para clientes reais.</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200 font-medium">Posicionando-se como <span className="text-orange-400 font-bold">Especialista</span>.</span>
                </li>
            </ul>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide10_TheTruth;