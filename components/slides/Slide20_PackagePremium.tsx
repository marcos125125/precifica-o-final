import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Crown, Check, Zap, Star } from 'lucide-react';

const Slide20_PackagePremium: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-yellow-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Context & Psychology */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-950/10">
                    <Crown size={12} /> Estruturação de Pacotes
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                    PACOTE 1: <br/>
                    <span className="text-yellow-500">A ÂNCORA SUPERIOR</span>
                </h2>
                <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">"Premium / Authority"</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <div className="bg-yellow-950/10 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <h3 className="text-yellow-500 font-bold uppercase text-sm mb-2 flex items-center gap-2">
                        <Zap size={16} /> Função Psicológica
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                        Estabelecer status e mostrar o máximo potencial. Faz o preço intermediário parecer acessível.
                    </p>
                </div>

                <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
                    <h3 className="text-gray-400 font-bold uppercase text-sm mb-2">Narrativa de Venda</h3>
                    <p className="text-white text-lg italic leading-relaxed font-serif">
                        "Esta é a solução completa para quem quer dominar o mercado local, com toda a infraestrutura de automação e conteúdo pronta."
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
            <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-yellow-500/50 p-8 rounded-3xl relative shadow-2xl overflow-hidden group">
                
                {/* Shine Effect */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-500/10 to-transparent opacity-50 pointer-events-none"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                        <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-1 block">Opção Elite</span>
                        <h3 className="text-3xl font-black text-white">Authority</h3>
                    </div>
                    <div className="bg-yellow-500 text-black p-2 rounded-lg shadow-lg">
                        <Crown size={24} fill="black" />
                    </div>
                </div>

                <div className="mb-8 relative z-10">
                    <span className="text-gray-400 text-lg font-medium">A partir de</span>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                        R$ 4.000<span className="text-2xl text-yellow-500">+</span>
                    </div>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                    {[
                        "Site completo & Blog integrado",
                        "SEO avançado (Ranqueamento)",
                        "Configuração de Pixel & CRM",
                        "Copywriting persuasiva inclusa",
                        "3 meses de suporte VIP"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="bg-yellow-500/20 p-1 rounded-full text-yellow-500 shrink-0">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] relative z-10">
                    Quero Dominar o Mercado
                </button>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide20_PackagePremium;