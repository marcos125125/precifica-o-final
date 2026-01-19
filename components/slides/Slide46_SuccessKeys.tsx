import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Trophy, Check, ArrowRight, Star, Heart } from 'lucide-react';

const Slide46_SuccessKeys: React.FC<SlideProps> = ({ isActive }) => {
  const points = [
    { text: "Entregou valor (protótipo) ANTES de pedir qualquer coisa.", bold: "Lei da Reciprocidade" },
    { text: "Não pressionou em momento algum (follow-up leve).", bold: "Zero Desespero" },
    { text: "Respondeu todas as dúvidas técnicas sem rodeios.", bold: "Autoridade" },
    { text: "Facilitou a tomada de decisão com resumo executivo.", bold: "Consultoria" },
    { text: "Manteve tom humano e acessível, nunca robótico.", bold: "Conexão" },
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-100 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
        >
             <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
                 <Trophy size={14} /> O Veredito
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-4">
                PONTOS-CHAVE DE <span className="text-green-600">SUCESSO</span>
             </h2>
             <p className="text-gray-500 text-lg">Por que essa venda aconteceu?</p>
        </motion.div>

        {/* List */}
        <div className="space-y-4 mb-12">
            {points.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
                >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Check size={20} strokeWidth={3} />
                    </div>
                    <p className="text-gray-700 text-lg">
                        <span className="font-bold text-black uppercase text-xs tracking-wider block mb-1">{item.bold}</span>
                        {item.text}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Result Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-12 bg-white opacity-10 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                        <Star size={32} className="text-yellow-300 fill-yellow-300" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl uppercase tracking-tight">Resultado Final</h3>
                        <p className="text-green-100 font-medium">Missão Cumprida</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="text-center">
                        <div className="text-xs text-green-200 uppercase font-bold tracking-wider mb-1">Cliente</div>
                        <div className="font-bold text-lg flex items-center gap-1"><Heart size={16} className="fill-white"/> Confiante</div>
                    </div>
                    <div className="w-px h-10 bg-green-400/50"></div>
                    <div className="text-center">
                        <div className="text-xs text-green-200 uppercase font-bold tracking-wider mb-1">Pagamento</div>
                        <div className="font-bold text-lg">Imediato</div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide46_SuccessKeys;