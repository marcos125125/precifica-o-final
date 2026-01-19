import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight } from 'lucide-react';

const Slide1_Cover: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Fire Glow Effect at Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-gradient-to-t from-orange-600 via-red-600/30 to-transparent blur-[120px] pointer-events-none opacity-80"
      />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        
        {/* Icon */}
        <motion.div
            initial={{ scale: 0, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-10 relative"
        >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50"></div>
                <DollarSign className="text-orange-500 w-10 h-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" strokeWidth={3} />
                
                {/* Inner Glow */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
        </motion.div>

        {/* Tag */}
        <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-mono"
        >
            Masterclass Financeira
        </motion.h3>

        {/* Title */}
        <div className="mb-10">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white drop-shadow-2xl"
            >
                PRECIFICAÇÃO
            </motion.h1>
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-red-600 filter drop-shadow-sm mt-1"
            >
                & NEGOCIAÇÃO
            </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-12"
        >
            Como cobrar com <span className="text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4">segurança total</span> e garantir<br className="hidden md:block" />
            que o cliente perceba o valor real do seu trabalho.
        </motion.p>

        {/* Button */}
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px -5px rgba(234, 88, 12, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] border border-gray-800 rounded-full text-white font-bold text-xs md:text-sm tracking-widest uppercase hover:border-orange-500/50 hover:text-orange-50 transition-all duration-300 relative z-20"
        >
            Iniciar Aula
            <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Decorative Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 100, x: Math.random() * 100 - 50, opacity: 0 }}
                    animate={{ y: -100, opacity: [0, 0.5, 0] }}
                    transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: Math.random() * 2,
                        ease: "easeOut"
                    }}
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
                    style={{ left: `${40 + Math.random() * 20}%` }}
                />
             ))}
        </div>

      </div>
    </div>
  );
};

export default Slide1_Cover;