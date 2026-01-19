import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { EyeOff, MessageSquare, ArrowRight, Signal, Wifi, Battery, ChevronLeft, Video, Phone, MoreVertical } from 'lucide-react';

const Slide30_Scenario3: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Scenario Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 bg-[#111] relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                Scripts de Follow-Up por Cenário
            </span>
            <div className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-gray-700">
                <EyeOff size={14} /> Cenário 03
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                NÃO VISUALIZOU <span className="text-gray-500">NENHUMA MENSAGEM</span>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
        >
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="bg-gray-800 p-2 rounded-full text-gray-400 shrink-0">
                    <EyeOff size={16} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Sua mensagem caiu na "caixa de solicitação" ou foi enterrada no fluxo do dia.
                </p>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="bg-gray-800 p-2 rounded-full text-gray-400 shrink-0">
                    <ArrowRight size={16} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    <span className="font-bold text-white">Objetivo:</span> Fazer uma "última tentativa" entregando o ouro de vez. Se não virem agora, deixe ir.
                </p>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup */}
      <div className="w-full md:w-7/12 bg-[#0a0a0a] flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

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
                        <span className="text-[12px] font-semibold">18:45</span>
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
                        
                        {/* Previous Unseen Messages */}
                        <div className="bg-[#202c33] p-3 rounded-xl rounded-tr-none mb-4 self-end max-w-[85%] shadow-sm opacity-60">
                            <div className="h-2 w-32 bg-gray-600 rounded mb-1"></div>
                            <div className="h-2 w-24 bg-gray-600 rounded"></div>
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
                                Carolina, sei que seu dia deve estar corrido. Deixo aqui o <span className="text-[#34b7f1] underline cursor-pointer font-bold">link do protótipo</span> que criei para a Renovar caso tenha curiosidade de ver:
                                <br/><br/>
                                [Link do Protótipo/Vídeo]
                                <br/><br/>
                                Se não fizer sentido agora, tudo bem! Fico à disposição se precisar no futuro.
                            </p>
                            <div className="flex justify-end items-center gap-1 mt-1.5">
                                <span className="text-[11px] text-gray-300/70">18:45</span>
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

export default Slide30_Scenario3;