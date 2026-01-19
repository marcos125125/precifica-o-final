import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { CheckSquare, AlertTriangle } from 'lucide-react';

const Slide5_TheExercise: React.FC<SlideProps> = ({ isActive }) => {
  const beliefs = [
    "Eu tô começando, não posso cobrar caro",
    "Tem gente fazendo mais barato, vou perder o cliente",
    "Esse valor é muito alto pro Brasil",
    "O cliente não tem condição de pagar",
    "Eu não sou tão bom assim ainda",
    "Vou cobrar barato pra fazer portfólio"
  ];

  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 bg-[#0a0a0a] relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
        >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                POR QUE VOCÊ ACHA QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">NÃO PODE COBRAR BEM?</span>
            </h2>
            <div className="w-20 h-2 bg-orange-600 rounded-full mb-8"></div>
            
            <p className="text-gray-400 text-xl leading-relaxed">
                Vamos fazer um exercício rápido.
                <br/><br/>
                Marca aí mentalmente qual dessas frases já passou pela sua cabeça:
            </p>
        </motion.div>
      </div>

      {/* Right Column: The Checklist */}
      <div className="w-full md:w-7/12 bg-[#050505] flex flex-col justify-center p-8 md:p-16 relative">
        {/* Background Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-orange-900/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="space-y-4 max-w-xl mx-auto w-full relative z-10">
            
            {beliefs.map((belief, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="group flex items-center gap-4 p-4 bg-[#0f0f0f] border border-gray-800 rounded-xl hover:border-orange-500/50 hover:bg-[#151515] transition-all cursor-pointer"
                >
                    <div className="w-6 h-6 rounded border-2 border-gray-600 flex items-center justify-center shrink-0 group-hover:border-orange-500 group-hover:bg-orange-500/20 transition-colors">
                        <div className="w-3 h-3 bg-orange-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">
                        "{belief}"
                    </span>
                </motion.div>
            ))}

        </div>

        {/* Footer Consequence */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 max-w-xl mx-auto w-full"
        >
            <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-400 text-sm md:text-base">
                    Se você marcou pelo menos uma, <span className="text-white font-bold">bem-vindo ao clube.</span>
                    <br/>
                    Agora a gente vai desmontar cada uma dessas crenças porque elas estão te impedindo de crescer de verdade.
                </p>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide5_TheExercise;