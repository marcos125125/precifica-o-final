import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const Slide24_Closing: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
        >
            <div className="absolute inset-0 bg-orange-500 blur-[50px] opacity-20 rounded-full"></div>
            <Trophy size={64} className="text-orange-500 relative z-10" strokeWidth={1.5} />
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6"
        >
            O JOGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">MUDOU.</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
        >
            Você não é mais um custo na planilha do cliente. <br/>
            Você é um <strong className="text-white">investimento estratégico</strong>.
        </motion.p>

        {/* Recap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col items-center"
            >
                <CheckCircle2 className="text-green-500 mb-3" size={24} />
                <span className="text-gray-300 font-bold">Mentalidade Blindada</span>
                <span className="text-gray-500 text-xs mt-1">Medo substituído por técnica.</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col items-center"
            >
                <CheckCircle2 className="text-blue-500 mb-3" size={24} />
                <span className="text-gray-300 font-bold">Preço Estratégico</span>
                <span className="text-gray-500 text-xs mt-1">Cálculo real, não "chute".</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-[#111] border border-gray-800 p-6 rounded-2xl flex flex-col items-center"
            >
                <CheckCircle2 className="text-yellow-500 mb-3" size={24} />
                <span className="text-gray-300 font-bold">Negociação FBI</span>
                <span className="text-gray-500 text-xs mt-1">Ancoragem e controle.</span>
            </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
        >
            <button className="group bg-white text-black font-black text-lg px-10 py-5 rounded-full flex items-center gap-3 hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Aplicar Nova Tabela Agora
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-600 text-xs mt-4 uppercase tracking-widest font-bold">Fim da Masterclass</p>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide24_Closing;