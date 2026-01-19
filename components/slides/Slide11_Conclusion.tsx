import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Hourglass, Target, Battery } from 'lucide-react';

const Slide11_Conclusion: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans text-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-4xl w-full z-10 flex flex-col items-center">
        
        {/* Visual Icon */}
        <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8 p-6 bg-gray-900 rounded-full border border-gray-800"
        >
            <Hourglass size={48} className="text-orange-500" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-8"
        >
            SUA AGENDA É FINITA.<br/>
            SEU TEMPO É FINITO.<br/>
            <span className="text-gray-600">SUA ENERGIA É FINITA.</span>
        </motion.h2>

        {/* The Comparison Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl max-w-3xl w-full mb-12"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-gray-500">
                    <p className="text-sm uppercase tracking-widest font-bold mb-2">A Pergunta Errada</p>
                    <p className="text-lg line-through decoration-red-500/50">"Como consigo mais clientes pagando R$ 300?"</p>
                </div>
                
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 hidden md:block"></div>
                    <div className="md:pl-8 text-white">
                        <p className="text-xs uppercase tracking-widest font-bold mb-2 text-orange-500 flex items-center gap-2 justify-center md:justify-start">
                            <Target size={14} /> A Pergunta Certa
                        </p>
                        <p className="text-xl font-bold leading-relaxed">
                            "Como me posiciono para atrair clientes que entendem e pagam pelo valor que entrego?"
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Final CTA/Statement */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-4"
        >
            <p className="text-gray-400 text-lg">
                Use seus recursos escassos com sabedoria.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide11_Conclusion;