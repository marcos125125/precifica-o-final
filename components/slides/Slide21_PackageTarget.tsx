import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Target, Check, Rocket, Zap } from 'lucide-react';

const Slide21_PackageTarget: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Context & Psychology */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-950/10">
                    <Target size={12} /> Estruturação de Pacotes
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                    PACOTE 2: <br/>
                    <span className="text-blue-500">O ALVO</span>
                </h2>
                <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">"Intermediário / Growth"</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="bg-blue-950/10 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h3 className="text-blue-500 font-bold uppercase text-sm mb-2 flex items-center gap-2">
                        <Zap size={16} /> Função Psicológica
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                        O "Melhor Custo-Benefício". É onde queremos fechar a venda. Equilibrado e racional.
                    </p>
                </div>

                <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
                    <h3 className="text-gray-400 font-bold uppercase text-sm mb-2">Narrativa de Venda</h3>
                    <p className="text-white text-lg italic leading-relaxed font-serif">
                        "O ideal para empresas que querem crescer e captar clientes, com as ferramentas essenciais de conversão."
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Right Column: The Product Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative order-1 lg:order-2"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="bg-[#0f0f0f] border-2 border-blue-600 p-8 rounded-3xl relative shadow-[0_0_50px_rgba(37,99,235,0.2)] overflow-hidden group transform scale-105">
                
                {/* Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold uppercase text-[10px] tracking-widest px-4 py-1 rounded-b-lg shadow-lg">
                    Recomendado
                </div>

                <div className="flex justify-between items-start mb-8 relative z-10 mt-4">
                    <div>
                        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-1 block">Opção Estratégica</span>
                        <h3 className="text-3xl font-black text-white">Growth</h3>
                    </div>
                    <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg">
                        <Rocket size={24} />
                    </div>
                </div>

                <div className="mb-8 relative z-10">
                    <span className="text-gray-400 text-lg font-medium">Investimento</span>
                    <div className="text-6xl font-black text-white tracking-tighter">
                        R$ 2.400
                    </div>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                    {[
                        "Site Institucional Completo",
                        "Landing Page de Alta Conversão",
                        "SEO Básico (Otimização Google)",
                        "Botão de WhatsApp Flutuante",
                        "Otimização de Velocidade (PageSpeed)"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-white">
                            <div className="bg-blue-600 p-1 rounded-full text-white shrink-0">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg relative z-10">
                    Escolher o Ideal
                </button>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide21_PackageTarget;