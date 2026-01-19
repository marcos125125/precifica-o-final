import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Brain, Briefcase, DoorOpen, Hourglass } from 'lucide-react';

const Slide23_Step3Logic: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
             <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-4 py-1.5 text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">
                 <Brain size={14} /> Psicologia Comportamental
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                A LÓGICA POR TRÁS<br/>DA <span className="text-blue-500">ESPERA (48-72h)</span>
             </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Logic 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900 border border-gray-800 p-8 rounded-2xl relative group hover:border-blue-500/50 transition-colors"
            >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 transition-colors shadow-lg">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">1. Autoridade</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Você não parece desesperado. O silêncio estratégico comunica que <span className="text-white font-bold">você tem outros clientes</span> e não está dependendo exclusivamente daquela resposta.
                </p>
            </motion.div>

            {/* Logic 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-900 border border-gray-800 p-8 rounded-2xl relative group hover:border-purple-500/50 transition-colors"
            >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-purple-600 transition-colors shadow-lg">
                    <Hourglass size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2. Processamento</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Dá tempo para o cérebro processar. O cliente pode estar genuinamente ocupado. Pressionar antes desse tempo gera <span className="text-white font-bold">irritação, não urgência</span>.
                </p>
            </motion.div>

            {/* Logic 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-900 border border-gray-800 p-8 rounded-2xl relative group hover:border-[#ccff00]/50 transition-colors"
            >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-[#ccff00] group-hover:text-black transition-colors shadow-lg">
                    <DoorOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3. Porta Aberta</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Pressão gera rejeição; paciência gera oportunidade. Ao esperar, você mantém a interação leve e <span className="text-white font-bold">evita o bloqueio defensivo</span>.
                </p>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-gray-500 text-sm italic"
        >
            "O silêncio também é uma ferramenta de negociação."
        </motion.div>

      </div>
    </div>
  );
};

export default Slide23_Step3Logic;