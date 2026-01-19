import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Scale, HelpCircle, CheckCircle2, XCircle, MousePointerClick, AlertTriangle } from 'lucide-react';

const Slide23_GoldenRuleAnchoring: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-950/10">
                <Scale size={12} /> 4.3 Regra de Ouro
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
                QUEM TEM UMA OPÇÃO,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">NÃO TEM NENHUMA.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Nunca, em hipótese alguma, ofereça apenas um preço. Isso encurrala o cliente em uma decisão binária perigosa.
            </p>
        </motion.div>

        {/* The Psychological Shift Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            
            {/* The Wrong Way (Binary) */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-red-950/10 border border-red-900/30 p-8 rounded-3xl relative flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity duration-500"
            >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-900/80 text-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Cenário de Risco
                </div>
                
                <h3 className="text-gray-400 font-bold uppercase text-sm mb-6 tracking-wider">Apenas 1 Opção</h3>
                
                <div className="bg-[#0f0f0f] border border-gray-800 p-6 rounded-xl w-full mb-6">
                    <p className="text-white font-serif italic text-lg">"Devo contratar este profissional?"</p>
                </div>

                <div className="flex gap-8 w-full justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-green-500/30 flex items-center justify-center text-green-500/50">
                            <CheckCircle2 size={24} />
                        </div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Sim</span>
                    </div>
                    <div className="w-px h-16 bg-gray-800"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                            <XCircle size={24} />
                        </div>
                        <span className="text-xs font-bold text-red-500 uppercase">Não</span>
                    </div>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-red-400 text-xs font-bold uppercase">
                    <AlertTriangle size={14} /> Alta chance de rejeição
                </div>
            </motion.div>

            {/* The Right Way (Choice) */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-yellow-950/10 border border-yellow-500/30 p-8 rounded-3xl relative flex flex-col items-center text-center shadow-[0_0_50px_rgba(234,179,8,0.05)]"
            >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Cenário Ideal
                </div>
                
                <h3 className="text-yellow-500 font-bold uppercase text-sm mb-6 tracking-wider">3 Opções (Ancoragem)</h3>
                
                <div className="bg-[#0f0f0f] border border-yellow-500/20 p-6 rounded-xl w-full mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                    <p className="text-white font-serif italic text-lg">"Qual destes pacotes devo escolher?"</p>
                </div>

                <div className="flex gap-4 w-full justify-center">
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 font-bold group-hover:border-yellow-500/50 transition-colors">A</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-14 h-14 rounded-xl border-2 border-yellow-500 bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold shadow-[0_0_20px_rgba(234,179,8,0.2)] scale-110">B</div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl border border-gray-700 bg-gray-800 flex items-center justify-center text-gray-400 font-bold group-hover:border-yellow-500/50 transition-colors">C</div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase">
                    <MousePointerClick size={14} /> O cliente sente que está no controle
                </div>
            </motion.div>

        </div>

        {/* Footer */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
        >
            <p className="text-gray-500 text-sm">
                Ao mudar a pergunta na cabeça dele, você elimina a opção de "não contratar ninguém".
            </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide23_GoldenRuleAnchoring;