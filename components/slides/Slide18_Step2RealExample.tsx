import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Wifi, Battery, Signal, ChevronLeft, Video, Phone, MoreVertical, AlertTriangle, Gift } from 'lucide-react';

const Slide18_Step2RealExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#ccff00]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Information */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="inline-block bg-[#ccff00] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    Etapa 02: O Pulo do Gato
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-none mb-4">
                    A ENTREGA<br/>DE VALOR
                </h2>
                <p className="text-gray-500 font-medium text-xl border-l-4 border-[#ccff00] pl-4">
                    O exemplo prático da <br/>
                    <span className="text-gray-800 font-bold">Reciprocidade em ação.</span>
                </p>
            </motion.div>

            {/* Breakdown */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-8"
            >
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">1</span>
                    <span><strong>Transição:</strong> "Tomei a liberdade..." (Justificativa)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-black text-[#ccff00] flex items-center justify-center font-bold text-xs">2</span>
                    <span><strong>Presente:</strong> Protótipo real e visual.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">3</span>
                    <span><strong>Permissão:</strong> "Posso mandar o link?" (Sem risco).</span>
                </div>
            </motion.div>

            {/* Psychology Note */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm"
            >
                <div className="flex items-center gap-2 text-blue-700 font-bold uppercase text-xs tracking-wider mb-2">
                    <Gift size={16} /> Psicologia da Venda
                </div>
                <p className="text-blue-900 font-medium text-lg leading-relaxed">
                    Note que não pedimos uma reunião. Pedimos apenas permissão para entregar o presente. É impossível dizer "não" a isso.
                </p>
            </motion.div>
        </div>

        {/* Right Column: iPhone Mockup */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 20 }}
                className="relative z-20 scale-[0.9] md:scale-100 origin-center lg:origin-right"
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
                            <span className="text-[12px] font-semibold">14:20</span>
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
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-base leading-tight">Carolina</span>
                                    <span className="text-[11px] opacity-80 leading-tight">Estética Renovar</span>
                                </div>
                            </div>
                            <div className="flex gap-5">
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

                            {/* Message Bubble */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white p-4 rounded-xl rounded-tr-none shadow-sm max-w-[95%] self-end relative"
                            >
                                <p className="text-[14px] text-gray-800 leading-relaxed whitespace-pre-line">
                                    Carolina, <span className="font-bold">tomei a liberdade de fazer algo para você.</span>
                                    <br/><br/>
                                    Como trabalho especificamente com clínicas de estética, <span className="font-bold">desenhei como ficaria a primeira dobra do site da Renovar otimizada para agendamentos.</span> Coloquei botões de WhatsApp estratégicos, reorganizei as informações para conversão e deixei responsivo para mobile.
                                    <br/><br/>
                                    Hospedei em um link privado para você poder testar no celular — os botões funcionam e tudo. 🚀
                                    <br/><br/>
                                    <span className="font-bold">Posso te mandar o link para você dar uma olhada?</span> Sem compromisso, é só para você ter uma ideia do potencial.
                                </p>
                                <div className="flex justify-end items-center gap-1 mt-1.5">
                                    <span className="text-[11px] text-gray-400">14:22</span>
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
    </div>
  );
};

export default Slide18_Step2RealExample;