import React from 'react';
import { Zap } from 'lucide-react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';

const Slide2_Sales: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-dot-pattern flex items-center justify-center p-8 md:p-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
        
        {/* Left Column: Typography */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start relative pl-8 border-l-2 border-transparent"
        >
          {/* Tag */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-6 inline-block"
          >
            Capítulo 01
          </motion.div>

          <div className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-black mb-2">
            <RevealText text="VENDA" delay={0.2} />
            <span className="text-gray-400 block">SEM PARECER</span>
            <RevealText text="VENDEDOR." delay={0.8} />
          </div>

          {/* Blue underline accent */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            className="h-2 bg-blue-600 mt-6 mb-8"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-500 italic font-medium text-lg border-l-4 border-gray-200 pl-4"
          >
            "O segredo para não ser ignorado é substituir a interrupção chata por uma conexão estratégica."
          </motion.p>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6 text-black">
            PRECISAMOS SEGUIR UMA <br />
            <motion.span 
                className="text-blue-600 inline-block"
                animate={{ color: ['#2563eb', '#1d4ed8', '#2563eb'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                ESTRUTURA
            </motion.span><br />
            ANTI-SPAM.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
            Ninguém gosta de receber um "textão" de vendas não solicitado. Para que sua mensagem seja lida, ela precisa romper as defesas naturais do cérebro.
          </p>

          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            className="bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-black flex items-start gap-4 shadow-sm cursor-pointer transition-all"
          >
            <div className="mt-1">
              <Zap className="text-blue-600 w-8 h-8" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg md:text-xl uppercase leading-tight">
                Abandone a abordagem de volume e foque em conversão estratégica.
              </h3>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide2_Sales;