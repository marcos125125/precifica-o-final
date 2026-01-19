import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, Target } from 'lucide-react';

const Slide6_Survival: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full z-10 flex flex-col justify-center h-full">
        
        {/* Section Tag */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-4 border border-orange-500/30 px-3 py-1 rounded-full bg-orange-950/10">
                <ShieldAlert size={12} /> Mindset Financeiro
            </div>
        </motion.div>

        {/* Copy Flow */}
        <div className="space-y-12 relative border-l-2 border-gray-800 pl-8 md:pl-12">
            
            {/* Headline */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                    COBRAR BEM NÃO É <br/>
                    QUESTÃO DE MERCADO. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">É QUESTÃO PESSOAL.</span>
                </h2>
            </motion.div>

            {/* Paragraph 1 */}
            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium"
            >
                Por isso temos que quebrar primeiro algumas objeções suas. Você precisa entender que cobrar acima de <span className="text-white font-bold">R$ 1.500</span> em um projeto...
            </motion.p>

            {/* Highlight Box (The Twist) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-[#0f0f0f] border-l-4 border-orange-500 p-6 md:p-8 rounded-r-xl relative group"
            >
                <p className="text-white text-2xl md:text-3xl font-black uppercase italic tracking-tight">
                    "NÃO É QUESTÃO DE EGO <br/>
                    OU VALIA PROFISSIONAL."
                </p>
                <div className="mt-4 flex items-center gap-3 text-orange-400 font-bold text-lg">
                    <TrendingUp size={20} />
                    <span>É SOBREVIVÊNCIA.</span>
                </div>
            </motion.div>

            {/* Paragraph 2 (The Cost Reality) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
            >
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    Em um mercado brutal, quem aceita o "simples projetinho" de <span className="text-red-500 font-bold line-through decoration-red-500/50">R$ 300</span> ignora o próprio custo operacional e decreta a falência lenta.
                </p>
            </motion.div>

            {/* Final Statement */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="pt-4"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-orange-600 rounded-full"></div>
                    <p className="text-white text-xl md:text-2xl font-bold">
                        Quem dita a regra é <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-4">quem se posiciona</span>.
                    </p>
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide6_Survival;