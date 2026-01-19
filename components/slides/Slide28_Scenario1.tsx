import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Eye, Clock, AlertCircle, Signal, Wifi, Battery, ChevronLeft, Video, Phone, MoreVertical, MessageSquare } from 'lucide-react';

const Slide28_Scenario1: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Scenario Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 bg-[#0a0a0a] relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                Scripts de Follow-Up por Cenário
            </span>
            <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-800/50">
                <Clock size={14} /> Cenário 01
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                VISUALIZOU A 1ª MENSAGEM <span className="text-blue-500">MAS NÃO RESPONDEU</span>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
        >
            <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <Eye className="text-gray-400 shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-sm leading-relaxed">
                    O cliente abriu, leu a abordagem inicial (Contexto + Observação), mas o dia a dia engoliu a atenção dele.
                </p>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-900/10 rounded-xl border border-blue-900/30">
                <AlertCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                <p className="text-blue-200/80 text-sm leading-relaxed">
                    <span className="font-bold text-blue-400">Objetivo:</span> Reativar sem cobrar. Assumir que é falta de tempo, não falta de interesse.
                </p>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup */}
      <div className="w-full md:w-7/12 bg-gray-800 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 scale-[0.85] md:scale-90 origin-center"
        >
             <div className="w-[360px] h-[720px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-700 relative">
                
                {/* Buttons */}
                <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -right-[2px] w-[2px] h-16 bg-gray-600 rounded-r-md"></div>

                {/* Screen Area */}
                <div className="w-full h-full bg-[#E5DDD5] rounded-[3rem] overflow-hidden flex flex-col relative">
                    
                    {/* Wallpaper Pattern */}
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>

                    {/* Status Bar */}
                    <div className="h-12 bg-[#075E54] w-full flex justify-between items-end px-6 pb-3 z-20 text-white">
                        <span className="text-[12px] font-semibold">14:29</span>
                        <div className="flex gap-1 items-center">
                            <Signal size={12} />
                            <Wifi size={12} />
                            <Battery size={14} />
                        </div>
                    </div>

                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between text-white z-20 shadow-md">
                        <div className="flex items-center gap-2">
                            <ChevronLeft size={24} />
                            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold text-xs overflow-hidden">
                                <span className="text-xs">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base leading-tight">Carolina (Renovar)</span>
                                <span className="text-[11px] opacity-80 leading-tight">Visto por último hoje às 09:12</span>
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
                        
                        {/* Previous Message Ghost */}
                        <div className="bg-white/60 p-3 rounded-xl rounded-tr-none mb-6 self-end max-w-[85%] opacity-50 blur-[0.5px]">
                            <div className="h-2.5 w-48 bg-gray-400/30 rounded mb-2"></div>
                            <div className="h-2.5 w-32 bg-gray-400/30 rounded"></div>
                        </div>

                        {/* Date Divider */}
                        <div className="self-center bg-[#DCF8C6] shadow-sm px-3 py-1 rounded-lg mb-6 opacity-90">
                            <span className="text-[11px] text-gray-600 font-medium">Hoje</span>
                        </div>

                        {/* The Script Message */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white p-4 rounded-xl rounded-tr-none shadow-sm max-w-[95%] self-end relative"
                        >
                            <p className="text-[15px] text-gray-800 leading-relaxed whitespace-pre-line">
                                Oi Carolina!
                                <br/><br/>
                                Imagino que a correria esteja grande por aí. Só queria confirmar: <span className="bg-blue-100 text-blue-800 font-bold px-1 rounded-sm">faz sentido</span> eu te enviar aquela análise que comentei sobre o site da Renovar?
                                <br/><br/>
                                Se não for o momento, sem problemas! Qualquer coisa, estou por aqui.
                            </p>
                            <div className="flex justify-end items-center gap-1 mt-1.5">
                                <span className="text-[11px] text-gray-400">14:30</span>
                                <div className="flex">
                                    <span className="text-gray-400 text-[11px] font-bold">✓</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Input Area */}
                    <div className="min-h-[60px] bg-[#f0f0f0] flex items-center px-2 gap-2 z-20 pb-4 pt-2">
                        <div className="p-2"><span className="text-2xl text-gray-500">😊</span></div>
                        <div className="flex-1 h-10 bg-white rounded-full px-4 text-[15px] text-gray-400 flex items-center">Mensagem</div>
                        <div className="p-2.5 bg-[#00897b] rounded-full text-white shadow-sm">
                            <span className="text-sm font-bold">🎤</span>
                        </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-black/90 rounded-full z-30"></div>
                </div>
            </div>
            
        </motion.div>

      </div>
    </div>
  );
};

export default Slide28_Scenario1;