import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Home, Instagram, Store, Smartphone, AlertTriangle } from 'lucide-react';

const Slide25_RentVsOwn: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-yellow-500"></div>

      <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 h-full content-center">
        
        {/* 5.2 Aluguel vs Casa Própria */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-purple-500/30 transition-colors"
        >
            <div className="absolute top-0 right-0 p-32 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-900/20 p-2 rounded-lg text-purple-500"><Home size={24} /></div>
                <h3 className="text-white font-bold text-xl uppercase tracking-tight">5.2 Aluguel vs. Casa Própria</h3>
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-900 p-4 rounded-xl border border-gray-800 opacity-60">
                    <div className="flex items-center gap-2 text-pink-500 font-bold text-xs uppercase mb-2">
                        <Instagram size={14} /> Terreno Alugado
                    </div>
                    <p className="text-gray-500 text-xs">Se o algoritmo mudar ou bloquearem sua conta, sua loja fecha.</p>
                </div>
                <div className="flex-1 bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase mb-2">
                        <Home size={14} /> Escritura Digital
                    </div>
                    <p className="text-gray-300 text-xs">Sua casa própria. Ninguém te tira de lá. Construa no seu terreno.</p>
                </div>
            </div>

            <p className="text-gray-400 italic text-sm leading-relaxed border-l-2 border-purple-500 pl-4">
                "Você vai construir seu império no quintal dos outros ou no seu?"
            </p>
        </motion.div>

        {/* 5.3 Loja Física vs Digital */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#111] border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-yellow-500/30 transition-colors"
        >
            <div className="absolute top-0 right-0 p-32 bg-yellow-600/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-900/20 p-2 rounded-lg text-yellow-500"><Store size={24} /></div>
                <h3 className="text-white font-bold text-xl uppercase tracking-tight">5.3 Física vs. Digital</h3>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 mb-6 relative">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">Custo de Oportunidade</div>
                <div className="flex items-start gap-4">
                    <Smartphone className="text-gray-500 shrink-0 mt-1" size={20} />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        "Você gastou R$ 50 mil na fachada física para quem passa na rua. O site é sua fachada para quem está no celular. Sem site, é como deixar a vitrine quebrada e a luz apagada."
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 text-yellow-500 font-medium text-sm">
                <AlertTriangle size={16} />
                <span>R$ 1.500 é a "pintura e iluminação" digital.</span>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide25_RentVsOwn;