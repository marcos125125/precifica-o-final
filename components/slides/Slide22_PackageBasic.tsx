import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, Zap, Anchor } from 'lucide-react';

const Slide22_PackageBasic: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-green-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Context & Psychology */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest text-xs mb-4 border border-green-500/30 px-3 py-1 rounded-full bg-green-950/10">
                    <Anchor size={12} /> Estruturação de Pacotes
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                    PACOTE 3: <br/>
                    <span className="text-green-600">A ÂNCORA INFERIOR</span>
                </h2>
                <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">"Básico / Essential"</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="bg-green-950/10 border-l-4 border-green-600 p-6 rounded-r-xl">
                    <h3 className="text-green-600 font-bold uppercase text-sm mb-2 flex items-center gap-2">
                        <ShieldCheck size={16} /> Função Psicológica
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                        A "Rede de Segurança". Elimina a objeção "não tenho dinheiro". Se o cliente achar o intermediário caro, ele cai aqui, não no concorrente.
                    </p>
                </div>

                <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
                    <h3 className="text-gray-400 font-bold uppercase text-sm mb-2">Narrativa de Venda</h3>
                    <p className="text-white text-lg italic leading-relaxed font-serif">
                        "O essencial para quem está começando e precisa de presença profissional na web, sem as ferramentas avançadas de marketing."
                    </p>
                </div>
            </motion.div>
        </div>

        {/* Right Column: The Product Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-500/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-3xl relative shadow-xl overflow-hidden group">
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                        <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-1 block">Opção de Entrada</span>
                        <h3 className="text-3xl font-black text-white">Essential</h3>
                    </div>
                    <div className="bg-gray-800 text-green-500 p-2 rounded-lg">
                        <ShieldCheck size={24} />
                    </div>
                </div>

                <div className="mb-8 relative z-10">
                    <span className="text-gray-400 text-lg font-medium">Apenas</span>
                    <div className="text-5xl font-black text-white tracking-tighter">
                        R$ 1.500
                    </div>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                    {[
                        "Site One-page (Página Única)",
                        "Ou até 5 páginas simples",
                        "Design padrão profissional",
                        "Sem integrações complexas",
                        "Presença digital garantida"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-400">
                            <div className="bg-gray-800 p-1 rounded-full text-green-600 shrink-0">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all relative z-10">
                    Começar com Segurança
                </button>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide22_PackageBasic;