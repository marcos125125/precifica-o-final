import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Brain, Briefcase, DoorOpen, Hourglass } from 'lucide-react';

const Slide26_Step3Logic: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
             <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">
                 <Brain size={14} /> Psicologia Comportamental
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none">
                A LÓGICA POR TRÁS<br/>DA <span className="text-blue-600">ESPERA (48-72h)</span>
             </h2>
             <p className="mt-4 text-gray-500 font-medium">Quando você espera 2-3 dias, três coisas acontecem:</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            {/* Logic 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all group"
            >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 transition-colors shadow-lg">
                    <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Autoridade</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Você não parece desesperado. O silêncio estratégico comunica que <span className="text-black font-bold">você tem outros clientes</span> e não está dependendo exclusivamente daquela resposta.
                </p>
            </motion.div>

            {/* Logic 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all group"
            >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-purple-600 transition-colors shadow-lg">
                    <Hourglass size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Processamento</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Dá tempo para o cérebro processar. O cliente pode estar genuinamente ocupado. Pressionar antes desse tempo gera <span className="text-black font-bold">irritação, não urgência</span>.
                </p>
            </motion.div>

            {/* Logic 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#ccff00] transition-all group"
            >
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-[#ccff00] group-hover:text-black transition-colors shadow-lg">
                    <DoorOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Porta Aberta</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Pressão gera rejeição; paciência gera oportunidade. Ao esperar, você mantém a interação leve e <span className="text-black font-bold">evita o bloqueio defensivo</span>.
                </p>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-gray-400 text-sm italic"
        >
            "O silêncio também é uma ferramenta de negociação."
        </motion.div>

      </div>
    </div>
  );
};

export default Slide26_Step3Logic;