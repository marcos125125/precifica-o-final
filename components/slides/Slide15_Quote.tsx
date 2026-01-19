import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Slide15_Quote: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      <div className="max-w-6xl w-full z-10 flex flex-col items-center text-center">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-gray-700"
        >
            <Quote size={48} className="fill-gray-800" />
        </motion.div>

        <div className="space-y-6">
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-400 font-medium uppercase tracking-widest"
            >
                O erro mais comum de quem está começando é tentar
            </motion.p>

            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none"
            >
                “ACHAR UM PREÇO”
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-4xl text-gray-500 font-bold"
            >
                olhando o mercado.
            </motion.p>
        </div>

        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-red-600 my-10 rounded-full"
        ></motion.div>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl"
        >
            <span className="text-gray-300">Isso gera</span> <span className="text-white font-bold underline decoration-red-600 decoration-4 underline-offset-8">medo, comparação e trava.</span>
        </motion.p>

      </div>
    </div>
  );
};

export default Slide15_Quote;