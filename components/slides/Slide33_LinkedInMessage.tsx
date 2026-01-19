import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Instagram, MessageSquare, ArrowRight, Signal, Wifi, Battery, ChevronLeft, Video, Phone, Image as ImageIcon, Mic, Camera, Heart } from 'lucide-react';

const Slide33_LinkedInMessage: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-200 bg-gray-50 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-pink-200">
                <Instagram size={14} /> Exemplo Prático
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                MENSAGEM DE CONEXÃO <span className="text-pink-600">INSTAGRAM</span>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
        >
            <div className="bg-white border-l-4 border-pink-500 p-6 rounded-r-xl shadow-sm">
                <h4 className="font-bold text-pink-600 text-sm uppercase mb-2">O Cenário</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                    Você tentou contato no WhatsApp (Dia 1 e 3) e não teve resposta. Agora (Dia 7), você vai tentar uma abordagem leve pelo Instagram.
                </p>
            </div>

            <div className="flex items-center gap-4 text-gray-500 text-sm">
                <ArrowRight size={16} />
                <span>Não finja que não tentou antes. Seja transparente.</span>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup (Instagram Style) */}
      <div className="w-full md:w-7/12 bg-white flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 scale-[0.85] md:scale-90 origin-center"
        >
             <div className="w-[360px] h-[720px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-300 relative">
                
                {/* Buttons */}
                <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -right-[2px] w-[2px] h-16 bg-gray-600 rounded-r-md"></div>

                {/* Screen Area */}
                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden flex flex-col relative font-sans">
                    
                    {/* Status Bar */}
                    <div className="h-12 bg-white w-full flex justify-between items-end px-6 pb-3 z-20 text-black">
                        <span className="text-[12px] font-semibold">14:45</span>
                        <div className="flex gap-1 items-center">
                            <Signal size={12} />
                            <Wifi size={12} />
                            <Battery size={14} />
                        </div>
                    </div>

                    {/* Instagram Header */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 z-20">
                        <div className="flex items-center gap-3">
                            <ChevronLeft size={28} className="text-black" />
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                                    <div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white font-bold text-[10px]">CR</div>
                                </div>
                                <div>
                                    <span className="font-bold text-sm text-black block leading-none">carolina.renovar</span>
                                    <span className="text-[10px] text-gray-500 block leading-none mt-0.5">Carolina Renovar</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 text-black">
                            <Phone size={24} strokeWidth={1.5} />
                            <Video size={24} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-4 overflow-y-auto relative z-10 flex flex-col pt-6 bg-white">
                        
                        {/* Profile Context */}
                        <div className="flex flex-col items-center mb-10 mt-4">
                             <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100">
                                 <div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">CR</div>
                             </div>
                             <h3 className="font-bold text-black text-lg">Carolina Renovar</h3>
                             <p className="text-xs text-gray-500">Estética Renovar • 2.4k seguidores</p>
                             <button className="mt-4 bg-gray-100 text-black font-semibold text-xs py-1.5 px-4 rounded-lg">Ver perfil</button>
                        </div>

                        {/* Date Divider */}
                        <div className="self-center mb-4">
                            <span className="text-[10px] text-gray-400 font-medium">Hoje 14:45</span>
                        </div>

                        {/* Message Bubble (Instagram Style) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="self-end max-w-[85%]"
                        >
                            <div className="bg-[#efefef] p-4 rounded-3xl rounded-br-md text-black mb-1">
                                <p className="text-[14px] leading-relaxed whitespace-pre-line">
                                    Oi Carolina! 👋
                                    <br/><br/>
                                    Tentei te chamar no WhatsApp sobre aquela análise do site da Renovar, mas imagino que esteja bem corrida.
                                    <br/><br/>
                                    Vi que estamos conectados aqui no Instagram — te mandei uma solicitação. Se preferir, podemos conversar por aqui mesmo!
                                </p>
                            </div>
                            <div className="text-[10px] text-gray-400 text-right font-medium mr-1">Visto</div>
                        </motion.div>

                    </div>

                    {/* Input Area (Instagram Style) */}
                    <div className="min-h-[50px] bg-white flex items-center px-3 gap-3 z-20 pb-5 pt-2">
                        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                            <Camera size={20} fill="white" />
                        </div>
                        <div className="flex-1 h-10 bg-gray-100 rounded-full px-4 text-[14px] text-gray-400 flex items-center justify-between border border-gray-200">
                            <span>Mensagem...</span>
                            <ImageIcon size={20} className="text-gray-500" />
                        </div>
                        <Mic size={24} className="text-black shrink-0" />
                        <Heart size={24} className="text-black shrink-0" />
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

export default Slide33_LinkedInMessage;