import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, TrendingUp, AlertOctagon } from 'lucide-react';

const Slide9_TheMath: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl w-full z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
        >
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-gray-300 font-bold uppercase tracking-widest text-xs mb-4">
                <TrendingUp size={14} className="text-green-500" /> Matemática da Lucratividade
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                MESMA RECEITA. <span className="text-orange-500">VIDAS OPOSTAS.</span>
            </h2>
        </motion.div>

        {/* Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Scenario A (The Trap) */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0a0a0a] border border-red-900/30 p-8 rounded-2xl relative overflow-hidden flex flex-col"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
                
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-1">Cenário A</h3>
                        <div className="text-3xl font-black text-white">10 Clientes</div>
                        <div className="text-gray-500 text-sm">x R$ 400,00</div>
                    </div>
                    <div className="text-right">
                        <div className="text-gray-400 text-xs uppercase font-bold">Faturamento</div>
                        <div className="text-2xl font-black text-white">R$ 4.000</div>
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="bg-red-950/20 p-4 rounded-lg border border-red-900/20">
                        <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase mb-2">
                            <Clock size={14} /> Tempo Total
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full mb-1">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-full bg-red-600 rounded-full"
                            ></motion.div>
                        </div>
                        <p className="text-white font-bold text-lg">200 Horas / mês</p>
                        <p className="text-gray-500 text-xs">Sem vida social.</p>
                    </div>

                    <div className="bg-red-950/20 p-4 rounded-lg border border-red-900/20">
                        <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase mb-2">
                            <Zap size={14} /> Nível de Estresse
                        </div>
                        <p className="text-white font-bold text-lg">MÁXIMO</p>
                        <p className="text-gray-500 text-xs">Retrabalho constante (+40%)</p>
                    </div>
                </div>
            </motion.div>

            {/* Scenario B (The Goal) */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-green-950/20 to-[#0a0a0a] border border-green-500/30 p-8 rounded-2xl relative overflow-hidden flex flex-col"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-1">Cenário B</h3>
                        <div className="text-3xl font-black text-white">2 Clientes</div>
                        <div className="text-gray-500 text-sm">x R$ 2.000,00</div>
                    </div>
                    <div className="text-right">
                        <div className="text-gray-400 text-xs uppercase font-bold">Faturamento</div>
                        <div className="text-2xl font-black text-white">R$ 4.000</div>
                    </div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="bg-green-950/20 p-4 rounded-lg border border-green-900/20">
                        <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase mb-2">
                            <Clock size={14} /> Tempo Total
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full mb-1">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "15%" }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="h-full bg-green-500 rounded-full"
                            ></motion.div>
                        </div>
                        <p className="text-white font-bold text-lg">30 Horas / mês</p>
                        <p className="text-green-400/80 text-xs font-bold">85% menos tempo investido.</p>
                    </div>

                    <div className="bg-green-950/20 p-4 rounded-lg border border-green-900/20">
                        <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase mb-2">
                            <Zap size={14} /> Nível de Estresse
                        </div>
                        <p className="text-white font-bold text-lg">CONTROLADO</p>
                        <p className="text-gray-500 text-xs">Foco estratégico e qualidade.</p>
                    </div>
                </div>
            </motion.div>

        </div>

        {/* Conclusion */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center"
        >
            <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 p-4 rounded-xl">
                <AlertOctagon className="text-orange-500" />
                <p className="text-gray-300 text-lg">
                    Não é sobre trabalhar mais. É sobre escolher <span className="text-white font-bold underline decoration-orange-500 decoration-2">qual jogo você quer jogar</span>.
                </p>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide9_TheMath;