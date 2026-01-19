import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Send, AlertOctagon, MessageSquare, Signal, Wifi, Battery, ChevronLeft, Video, Phone, MoreVertical, ExternalLink } from 'lucide-react';

const Slide36_Step4Delivery: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Strategy Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-100 bg-gray-50 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                Etapa 04 - Fase 1
            </span>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200">
                <Send size={14} /> Entrega de Valor
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                ENTREGA <span className="text-blue-600">IMEDIATA</span> DO PROMETIDO
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
        >
            <p className="text-gray-600 text-lg leading-relaxed">
                Quando o cliente disser "pode mandar", não espere. Envie o link e oriente o próximo passo simples.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <div className="flex items-center gap-2 text-red-700 font-bold uppercase text-xs tracking-widest mb-2">
                    <AlertOctagon size={14} /> Importante:
                </div>
                <p className="text-red-900 font-medium text-lg leading-snug">
                    Não venda ainda.
                </p>
                <p className="text-red-800/70 text-sm mt-2">
                    Deixe ele absorver o valor primeiro. Se você tentar agendar reunião agora, vai parecer que o "presente" era apenas uma isca (e era, mas não pode parecer).
                </p>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup */}
      <div className="w-full md:w-7/12 bg-white flex items-center justify-center p-8 relative bg-dot-pattern">
        
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 scale-[0.85] md:scale-90 origin-center"
        >
             <div className="w-[360px] h-[720px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-200 relative">
                
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
                        <span className="text-[12px] font-semibold">14:25</span>
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
                            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs overflow-hidden">
                                <span className="text-xs">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base leading-tight">Carolina (Renovar)</span>
                                <span className="text-[11px] opacity-80 leading-tight">Online</span>
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
                        
                        {/* Date Divider */}
                        <div className="self-center bg-[#DCF8C6] shadow-sm px-3 py-1 rounded-lg mb-6 opacity-90">
                            <span className="text-[11px] text-gray-600 font-medium">Hoje</span>
                        </div>

                        {/* Client Message (Context) */}
                        <div className="bg-white p-3 rounded-xl rounded-tl-none mb-4 self-start shadow-sm max-w-[80%]">
                            <p className="text-[15px] text-gray-800">Pode mandar sim! Tenho curiosidade de ver.</p>
                            <span className="text-[10px] text-gray-400 block text-right mt-1">14:24</span>
                        </div>

                        {/* The Script Message */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-[#dcf8c6] p-2 rounded-xl rounded-tr-none shadow-sm max-w-[95%] self-end relative"
                        >
                            <div className="p-2 pb-0">
                                <p className="text-[15px] text-gray-800 leading-relaxed whitespace-pre-line">
                                    Segue o link! 👇
                                </p>
                            </div>

                            {/* Link Preview Card */}
                            <div className="bg-[#e9f5e4] rounded-lg mt-2 overflow-hidden border border-black/5 mx-1 mb-2 cursor-pointer">
                                <div className="h-24 bg-gray-300 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        <ExternalLink size={24} />
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Preview" className="w-full h-full object-cover opacity-80" />
                                </div>
                                <div className="p-2">
                                    <h4 className="font-bold text-sm text-gray-800 leading-tight">Análise de Performance - Renovar</h4>
                                    <p className="text-xs text-gray-500 mt-0.5 truncate">app.seusite.com/analise-renovar</p>
                                </div>
                            </div>

                            <div className="px-2 pb-1">
                                <p className="text-[15px] text-gray-800 leading-relaxed whitespace-pre-line">
                                    Dá uma olhada com calma e me fala o que achou. Os botões funcionam, então você pode testar no celular também.
                                    <br/><br/>
                                    Qualquer dúvida, estou online agora!
                                </p>
                            </div>
                            
                            <div className="flex justify-end items-center gap-1 mt-1 pr-2 pb-1">
                                <span className="text-[11px] text-gray-400">14:25</span>
                                <div className="flex">
                                    <span className="text-blue-500 text-[11px] font-bold">✓✓</span>
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

export default Slide36_Step4Delivery;