import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Users, Crosshair, Signal, Wifi, Battery, ChevronLeft, Video, Phone, MoreVertical, MessageSquare } from 'lucide-react';

const Slide42_ObjectionCompetition: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 bg-[#111] relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                Fase 05 - Objeções
            </span>
            <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-purple-800/50">
                <Users size={14} /> Concorrência
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                "VOU VER COM <span className="text-purple-500">OUTROS</span> FORNECEDORES"
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
        >
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h4 className="font-bold text-white text-sm uppercase mb-3 flex items-center gap-2">
                    <Crosshair size={16} className="text-purple-500"/> A Estratégia
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Saia da posição de vendedor e assuma a de <span className="text-white font-bold">consultor</span>. Ajude o cliente a comparar "maçãs com maçãs", definindo os critérios técnicos da comparação.
                </p>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup */}
      <div className="w-full md:w-7/12 bg-[#0a0a0a] flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 scale-[0.85] md:scale-90 origin-center"
        >
             <div className="w-[360px] h-[720px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-800 relative">
                
                {/* Buttons */}
                <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-gray-700 rounded-l-md"></div>
                <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-gray-700 rounded-l-md"></div>
                <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-gray-700 rounded-l-md"></div>
                <div className="absolute top-36 -right-[2px] w-[2px] h-16 bg-gray-700 rounded-r-md"></div>

                {/* Screen Area */}
                <div className="w-full h-full bg-[#111b21] rounded-[3rem] overflow-hidden flex flex-col relative">
                    
                    {/* Wallpaper Pattern (Dark) */}
                    <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none invert"></div>

                    {/* Status Bar */}
                    <div className="h-12 bg-[#202c33] w-full flex justify-between items-end px-6 pb-3 z-20 text-gray-300">
                        <span className="text-[12px] font-semibold">17:45</span>
                        <div className="flex gap-1 items-center">
                            <Signal size={12} />
                            <Wifi size={12} />
                            <Battery size={14} />
                        </div>
                    </div>

                    {/* WhatsApp Header (Dark) */}
                    <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between text-gray-300 z-20 shadow-md">
                        <div className="flex items-center gap-2">
                            <ChevronLeft size={24} />
                            <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-gray-300 font-bold text-xs overflow-hidden">
                                <span className="text-xs">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base leading-tight text-white">Carolina (Renovar)</span>
                                <span className="text-[11px] opacity-60 leading-tight">Visto pela última vez seg...</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Video size={20} />
                            <Phone size={20} />
                            <MoreVertical size={20} />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-y-auto relative z-10 flex flex-col pt-6">
                        
                        {/* Objection */}
                        <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none mb-4 self-start shadow-sm max-w-[85%]">
                            <p className="text-[15px] text-white">Obrigada! Vou conversar com outros fornecedores também para comparar e te aviso.</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">17:42</span>
                        </div>

                        {/* Date Divider */}
                        <div className="self-center bg-[#202c33] shadow-sm px-3 py-1 rounded-lg mb-6 opacity-80 border border-gray-700">
                            <span className="text-[11px] text-gray-400 font-medium">Hoje</span>
                        </div>

                        {/* The Script Message */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-[#005c4b] p-4 rounded-xl rounded-tr-none shadow-sm max-w-[95%] self-end relative"
                        >
                            <p className="text-[15px] text-white leading-relaxed whitespace-pre-line">
                                Faz todo sentido! Recomendo mesmo comparar.
                                <br/><br/>
                                Só um ponto de atenção: quando for avaliar propostas, olhe não só o preço, mas também:
                                <br/>
                                - Se o site será <span className="font-bold">realmente responsivo</span> (não só "adaptado")
                                <br/>
                                - Se inclui <span className="font-bold">otimização de SEO</span> desde o início
                                <br/>
                                - Quanto tempo de <span className="font-bold">suporte pós-entrega</span>
                            </p>
                            <div className="flex justify-end items-center gap-1 mt-1.5">
                                <span className="text-[11px] text-gray-300/70">17:45</span>
                                <div className="flex">
                                    <span className="text-gray-400 text-[11px] font-bold">✓</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Input Area (Dark) */}
                    <div className="min-h-[60px] bg-[#202c33] flex items-center px-2 gap-2 z-20 pb-4 pt-2">
                        <div className="p-2"><span className="text-2xl text-gray-500">😊</span></div>
                        <div className="flex-1 h-10 bg-[#2a3942] rounded-full px-4 text-[15px] text-gray-400 flex items-center">Mensagem</div>
                        <div className="p-2.5 bg-[#00a884] rounded-full text-white shadow-sm">
                            <span className="text-sm font-bold">🎤</span>
                        </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-gray-500/50 rounded-full z-30"></div>
                </div>
            </div>
            
        </motion.div>

      </div>
    </div>
  );
};

export default Slide42_ObjectionCompetition;