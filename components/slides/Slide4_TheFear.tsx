import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Ghost, Wind } from 'lucide-react';

const Slide4_TheFear: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(50,50,50,0.1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-4xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header Tag */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 flex items-center gap-3"
        >
            <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest border border-gray-700">
                Parte 1
            </div>
            <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">Quebrando Suas Próprias Objeções</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-10"
        >
            O ELEFANTE NA SALA:<br/>
            <span className="text-gray-600">VOCÊ TEM MEDO DE COBRAR.</span>
        </motion.h2>

        {/* Storytelling Content */}
        <div className="space-y-8 border-l-2 border-gray-800 pl-6 md:pl-10">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed"
            >
                Olha, vamos começar do jeito mais sincero possível. Você provavelmente abriu esse material pensando:
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl relative"
            >
                <Ghost className="absolute -top-3 -left-3 text-gray-600 bg-[#050505] p-1 rounded-full w-8 h-8" />
                <p className="text-gray-400 italic text-lg md:text-xl font-serif">
                    "Como eu vou cobrar <span className="text-white font-bold">R$ 1.500</span> de alguém se tem gente fazendo por <span className="text-white font-bold">R$ 300</span>? <br/><br/>
                    Ou pior: <span className="text-red-500 font-bold">quem sou eu pra cobrar isso?</span>"
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-400 text-lg leading-relaxed"
            >
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">
                    <Wind size={14} /> Momento de Clareza
                </div>
                <p className="mb-4">
                    <strong className="text-white">Respira fundo.</strong> Isso é completamente normal. Todo mundo que tá começando passa por isso.
                </p>
                <p>
                    Mas a gente precisa resolver essa parada na sua cabeça antes de você sair vendendo por aí, porque <span className="text-white underline decoration-red-500/50 decoration-2 underline-offset-4">se você não acredita no seu preço, o cliente também não vai acreditar.</span>
                </p>
            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Slide4_TheFear;