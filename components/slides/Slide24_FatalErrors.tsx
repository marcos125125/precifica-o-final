import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { AlertOctagon, X, Check, ArrowRight } from 'lucide-react';

const Slide24_FatalErrors: React.FC<SlideProps> = ({ isActive }) => {
  const items = [
    { 
        wrong: "Pedir reunião na primeira mensagem", 
        right: "Construa valor primeiro, reunião vem depois" 
    },
    { 
        wrong: "Enviar portfólio genérico", 
        right: "Crie algo específico para aquele lead" 
    },
    { 
        wrong: "Pressionar por resposta rápida", 
        right: "Dê tempo para a pessoa processar" 
    },
    { 
        wrong: "Falar de preço antes de demonstrar valor", 
        right: "Preço só entra quando o cliente pedir" 
    },
    { 
        wrong: "Usar a mesma mensagem para todos", 
        right: "Personalize sempre, mesmo que demore mais" 
    },
  ];

  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden relative">
      
      {/* Background Effect */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10">
        
        {/* Header */}
        <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-10"
        >
             <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 text-red-500 font-bold uppercase tracking-widest text-xs mb-4">
                 <AlertOctagon size={14} /> Atenção Máxima
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                ERROS FATAIS <span className="text-gray-600">VS</span> <span className="text-[#ccff00]">ACERTOS</span>
            </h2>
        </motion.div>

        {/* List */}
        <div className="flex flex-col gap-3">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
                >
                    {/* Wrong Side */}
                    <div className="flex items-center gap-3 text-red-400">
                        <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 border border-red-900/50 group-hover:bg-red-500 group-hover:text-white transition-colors">
                            <X size={16} strokeWidth={3} />
                        </div>
                        <span className="font-medium text-sm md:text-base leading-tight decoration-red-500/30 decoration-2 group-hover:line-through transition-all">{item.wrong}</span>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex justify-center text-gray-600">
                        <ArrowRight size={20} />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3 text-green-400">
                        <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center shrink-0 border border-green-900/50 group-hover:bg-[#ccff00] group-hover:text-black transition-colors">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <span className="font-bold text-white text-sm md:text-base leading-tight">{item.right}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Footer */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
        >
            <p className="text-gray-500 text-sm">
                Evitar esses 5 erros já coloca você na frente de <span className="text-white font-bold">90% do mercado</span>.
            </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide24_FatalErrors;