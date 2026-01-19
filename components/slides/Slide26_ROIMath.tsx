import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Calculator, Utensils, Smile, Repeat, ArrowRight } from 'lucide-react';

const Slide26_ROIMath: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 z-10"
      >
        <div className="inline-flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest text-xs mb-4 border border-green-500/30 px-3 py-1 rounded-full bg-green-950/10">
            <Calculator size={12} /> 6. Matemática da Padaria
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            DE "CUSTO" PARA <span className="text-green-500">"INVESTIMENTO"</span>
        </h2>
        <p className="text-gray-400 mt-2">Prove matematicamente que o site se paga.</p>
      </motion.div>

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cenário 1: Padaria */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col"
        >
            <div className="flex items-center gap-2 text-orange-400 font-bold uppercase text-xs tracking-widest mb-4">
                <Utensils size={14} /> Ticket Baixo
            </div>
            <h3 className="text-2xl font-black text-white mb-2">A Pizzaria</h3>
            
            <div className="space-y-3 mb-6 bg-gray-900 p-4 rounded-xl text-sm">
                <div className="flex justify-between text-gray-400"><span>Lucro/Pedido:</span> <span className="text-white font-bold">R$ 40</span></div>
                <div className="flex justify-between text-gray-400"><span>Site:</span> <span className="text-white font-bold">R$ 1.600</span></div>
            </div>

            <div className="mt-auto">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    "João, se o site vender <strong className="text-white">1 pizza a mais por dia</strong>, em 40 dias ele tá pago. O resto do ano é lucro."
                </p>
                <div className="bg-orange-900/20 text-orange-400 text-center font-bold py-2 rounded-lg text-sm border border-orange-500/20">
                    Break-even: 40 Pizzas
                </div>
            </div>
        </motion.div>

        {/* Cenário 2: Dentista */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col transform md:-translate-y-4 shadow-2xl border-t-4 border-t-blue-500"
        >
            <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">
                <Smile size={14} /> Ticket Alto
            </div>
            <h3 className="text-2xl font-black text-white mb-2">O Dentista</h3>
            
            <div className="space-y-3 mb-6 bg-gray-900 p-4 rounded-xl text-sm">
                <div className="flex justify-between text-gray-400"><span>Valor Implante:</span> <span className="text-white font-bold">R$ 2.500</span></div>
                <div className="flex justify-between text-gray-400"><span>Site:</span> <span className="text-white font-bold">R$ 2.500</span></div>
            </div>

            <div className="mt-auto">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    "Doutora, <strong className="text-white">um único paciente</strong> de implante que venha pelo Google já paga todo o projeto. É uma máquina de multiplicar dinheiro."
                </p>
                <div className="bg-blue-900/20 text-blue-400 text-center font-bold py-2 rounded-lg text-sm border border-blue-500/20">
                    Break-even: 1 Paciente
                </div>
            </div>
        </motion.div>

        {/* Cenário 3: LTV */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col"
        >
            <div className="flex items-center gap-2 text-purple-400 font-bold uppercase text-xs tracking-widest mb-4">
                <Repeat size={14} /> Recorrência (LTV)
            </div>
            <h3 className="text-2xl font-black text-white mb-2">A Academia</h3>
            
            <div className="space-y-3 mb-6 bg-gray-900 p-4 rounded-xl text-sm">
                <div className="flex justify-between text-gray-400"><span>Mensalidade:</span> <span className="text-white font-bold">R$ 200</span></div>
                <div className="flex justify-between text-gray-400"><span>Média (10 meses):</span> <span className="text-purple-400 font-bold">R$ 2.000</span></div>
            </div>

            <div className="mt-auto">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    "Cada clique não vale R$ 200, vale R$ 2.000. O site de R$ 2.000 só precisa trazer <strong className="text-white">1 aluno novo</strong> para sair de graça."
                </p>
                <div className="bg-purple-900/20 text-purple-400 text-center font-bold py-2 rounded-lg text-sm border border-purple-500/20">
                    Break-even: 1 Aluno
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide26_ROIMath;