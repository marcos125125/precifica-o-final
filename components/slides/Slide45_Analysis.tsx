import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Search, Eye, AlertCircle, Key, Clock, Zap, CheckCircle2, FileText, Activity } from 'lucide-react';

const Slide45_Analysis: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0f172a] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,41,59,0.5)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full content-center">
        
        {/* Left Column: The Blocks Applied */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-3 py-1 text-slate-300 font-bold uppercase tracking-widest text-xs mb-4">
                    <Activity size={14} /> Raio-X Tático
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-2">
                    ANÁLISE DA <span className="text-blue-400">CONVERSA</span>
                </h2>
                <p className="text-slate-400 text-lg">Onde a metodologia foi aplicada:</p>
            </motion.div>

            <div className="space-y-4">
                {/* Context */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl"
                >
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0"><Search size={20} /></div>
                    <div>
                        <h4 className="font-bold text-blue-400 text-sm uppercase">Bloco 1: Contexto</h4>
                        <p className="text-slate-300 text-sm leading-snug">Origem do contato (Google Maps) + Validação do negócio.</p>
                    </div>
                </motion.div>

                {/* Observation */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4 p-4 bg-green-900/20 border border-green-500/30 rounded-xl"
                >
                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400 shrink-0"><Eye size={20} /></div>
                    <div>
                        <h4 className="font-bold text-green-400 text-sm uppercase">Bloco 2: Observação</h4>
                        <p className="text-slate-300 text-sm leading-snug">Identificação do problema específico (Site não responsivo).</p>
                    </div>
                </motion.div>

                {/* Opportunity */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-4 p-4 bg-red-900/20 border border-red-500/30 rounded-xl"
                >
                    <div className="bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0"><AlertCircle size={20} /></div>
                    <div>
                        <h4 className="font-bold text-red-400 text-sm uppercase">Bloco 3: Oportunidade</h4>
                        <p className="text-slate-300 text-sm leading-snug">Entrega antecipada de valor (Link do protótipo funcional).</p>
                    </div>
                </motion.div>

                {/* Permission */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-4 p-4 bg-[#ccff00]/10 border border-[#ccff00]/30 rounded-xl"
                >
                    <div className="bg-[#ccff00]/20 p-2 rounded-lg text-[#ccff00] shrink-0"><Key size={20} /></div>
                    <div>
                        <h4 className="font-bold text-[#ccff00] text-sm uppercase">Bloco 4: Permissão</h4>
                        <p className="text-slate-300 text-sm leading-snug">Pedido de baixa fricção ("Posso te mandar o link?").</p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Right Column: Techniques & Stats */}
        <div className="flex flex-col justify-center">
            
            {/* Techniques Grid */}
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap size={18} className="text-yellow-400" /> Aceleradores de Conversão
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                    "Resposta imediata (sempre em min)",
                    "Perguntas consultivas",
                    "Transparência total em valores",
                    "Entrega faseada (reduz risco)",
                    "Material profissional (PDF/Contrato)",
                    "Facilitação do 'Sim'"
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50"
                    >
                        <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                        {item}
                    </motion.div>
                ))}
            </div>

            {/* Time Stats */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden"
            >
                <div className="flex items-center justify-between mb-2 relative z-10">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Tempo Total do Ciclo</span>
                    <Clock size={16} className="text-slate-400" />
                </div>
                <div className="flex items-baseline gap-2 relative z-10">
                    <span className="text-4xl font-black text-white">29 Horas</span>
                    <span className="text-sm text-slate-400">do "Oi" ao Pagamento</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-4 relative z-10">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Tempo de negociação ativa: ~2h
                    </div>
                </div>

                {/* Decorative BG */}
                <div className="absolute right-0 bottom-0 opacity-10">
                    <Clock size={100} />
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide45_Analysis;