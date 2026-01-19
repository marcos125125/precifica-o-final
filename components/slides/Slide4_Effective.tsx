import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';

const Slide4_Effective: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-dot-pattern flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-black flex flex-col items-center">
            <RevealText text="A ESTRUTURA DA" stagger={0.05} />
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-blue-600"
            >
                PROSPECÇÃO EFICAZ
            </motion.span>
        </div>
        
        <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl font-bold text-gray-800 mb-6"
        >
          Por que sua mensagem precisa seguir esta estrutura?
        </motion.h3>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Antes de criar qualquer abordagem, você precisa entender como funciona a psicologia de decisão do comprador moderno. Em 2026, existe uma <span className="font-black text-black">DUPLA BARREIRA</span> que sua mensagem precisa atravessar:
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16">
        
        {/* Card 1 */}
        <motion.div 
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 60 }}
            whileHover={{ y: -10, rotate: -2, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="bg-white p-8 border border-gray-100 shadow-lg rounded-sm flex items-start gap-6 cursor-pointer"
        >
          <div className="w-16 h-16 shrink-0 bg-blue-100 rounded-full flex items-center justify-center font-black text-3xl text-blue-600">
            1
          </div>
          <div>
            <h4 className="font-black text-lg uppercase tracking-wider mb-2">Filtros Tecnológicos</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sistemas anti-spam, algoritmos de priorização e bloqueio de automações frias.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
             initial={{ opacity: 0, x: 100, rotate: 5 }}
             animate={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ delay: 2.0, type: "spring", stiffness: 60 }}
             whileHover={{ y: -10, rotate: 2, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
             className="bg-white p-8 border border-gray-100 shadow-lg rounded-sm flex items-start gap-6 cursor-pointer"
        >
          <div className="w-16 h-16 shrink-0 bg-black rounded-full flex items-center justify-center font-black text-3xl text-white">
            2
          </div>
          <div>
            <h4 className="font-black text-lg uppercase tracking-wider mb-2">Filtros Cognitivos</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Atenção limitada do decisor e um viés natural imediato contra vendedores.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="max-w-3xl text-center border-t border-gray-200 pt-8"
      >
        <p className="text-gray-500 text-lg">
          Para superar essas barreiras sem ser invasivo, sua comunicação deve respeitar quatro princípios fundamentais, aplicados em sequência lógica.
        </p>
      </motion.div>

    </div>
  );
};

export default Slide4_Effective;