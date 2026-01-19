import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { MessageCircle, Code, Briefcase, Clock, DollarSign, UserCheck } from 'lucide-react';

const Slide24_AnalogiesIntro: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Concept */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-950/10">
                <MessageCircle size={12} /> 5. Analogias Coloquiais
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                TRADUZINDO <br/>
                <span className="text-gray-600 line-through decoration-red-500">"TECH"</span> PARA <span className="text-blue-500">"BUSINESS"</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
                Linguagem técnica (HTML, CSS, Plugin) gera fricção e insegurança. O cliente não compra o que não entende. A solução é usar analogias do cotidiano.
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-xl"
        >
            <h3 className="text-blue-400 font-bold uppercase text-sm mb-2 flex items-center gap-2">
                <Briefcase size={16}/> 5.1 A Analogia do "Funcionário 24 Horas"
            </h3>
            <p className="text-gray-300 text-base leading-relaxed italic">
                "Um site não é um software; é um funcionário de vendas."
            </p>
        </motion.div>
      </div>

      {/* Right Column: The Analogy Visual */}
      <div className="w-full md:w-1/2 bg-[#0a0a0a] flex flex-col items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

        <div className="max-w-md w-full space-y-6">
            
            {/* Human Employee Card */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl opacity-60"
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-gray-800 p-2 rounded-full"><UserCheck size={20} className="text-gray-400"/></div>
                        <span className="text-gray-400 font-bold uppercase text-sm">Vendedor Humano</span>
                    </div>
                    <span className="text-red-500 font-bold text-sm">- R$ 2.500/mês</span>
                </div>
                <ul className="text-xs text-gray-500 space-y-2">
                    <li>• Trabalha 8h/dia</li>
                    <li>• Fica doente, tira férias</li>
                    <li>• Pede aumento</li>
                    <li>• Custo anual: R$ 30.000+</li>
                </ul>
            </motion.div>

            {/* The Website Card (The Hero) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/50 p-8 rounded-2xl relative shadow-2xl"
            >
                <div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">A Melhor Escolha</div>
                
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-full"><Code size={24} className="text-white"/></div>
                        <span className="text-blue-400 font-bold uppercase text-sm">Seu Site (Vendedor)</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">R$ 1.500 (Único)</span>
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-blue-500/20 mb-4">
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                        "Fulano, você pagaria menos de um salário mínimo, uma única vez, para um funcionário que trabalha 24h por dia, Natal e Ano Novo, sem pedir nada em troca?"
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-blue-200 font-medium">
                    <span className="flex items-center gap-1"><Clock size={12}/> 24/7/365</span>
                    <span className="flex items-center gap-1"><DollarSign size={12}/> Sem encargos</span>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide24_AnalogiesIntro;