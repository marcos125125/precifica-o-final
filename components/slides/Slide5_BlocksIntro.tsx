import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Slide5_BlocksIntro: React.FC<SlideProps> = ({ isActive }) => {
  const blocks = [1, 2, 3, 4];

  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        
        {/* Visual Graphic: 4 Blocks */}
        <div className="flex items-end gap-2 md:gap-4 mb-12 h-32">
          {blocks.map((block, index) => (
            <motion.div
              key={block}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${(index + 2) * 20}%`, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.2 + (index * 0.1) 
              }}
              className={`w-12 md:w-20 rounded-t-sm relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 ${index === 3 ? 'bg-[#ccff00]' : 'bg-gray-800'}`}></div>
              <div className="absolute bottom-4 w-full text-center font-black text-xl md:text-2xl z-10 text-brand-black opacity-50">
                0{block}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Typography */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
          >
            A Metodologia
          </motion.div>

          <h2 className="text-4xl md:text-6xl text-white font-black tracking-tighter leading-tight max-w-4xl mx-auto">
            A estrutura anti-spam que você vai aprender tem{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              4 blocos sequenciais.
            </span>
          </h2>
        </div>

        {/* Divider/Connector */}
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: 40 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="w-px bg-gray-700 mb-8"
        />

        {/* Secondary Copy */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="bg-gray-900/50 border border-gray-800 p-6 md:p-8 rounded-lg backdrop-blur-sm max-w-2xl"
        >
          <div className="flex items-start gap-4">
             <div className="bg-[#ccff00] p-2 rounded-full mt-1 shrink-0">
                <ArrowDown className="text-black w-5 h-5" />
             </div>
             <p className="text-gray-300 text-lg md:text-xl text-left font-medium leading-relaxed">
                Cada bloco derruba uma <span className="text-white font-bold underline decoration-[#ccff00] decoration-2 underline-offset-4">barreira psicológica específica</span> entre você e a resposta do cliente.
             </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide5_BlocksIntro;