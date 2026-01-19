import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ChevronLeft, Phone, Video } from 'lucide-react';

const Slide29_ScriptsIphone2: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Context Panel */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white border-r border-gray-200 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                COLABORAÇÃO & <span className="text-blue-600">FECHAMENTO</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
                Transforme o "vou pensar" em parceria e o fechamento em um passo natural.
            </p>
        </motion.div>

        <div className="space-y-4">
            <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                <h4 className="font-bold text-purple-700 text-sm uppercase mb-1">Objeção 3: "Sócio/Esposa"</h4>
                <p className="text-purple-900/70 text-xs">Arme seu cliente com argumentos para vender por você.</p>
            </div>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h4 className="font-bold text-green-700 text-sm uppercase mb-1">Fechamento WhatsApp</h4>
                <p className="text-green-900/70 text-xs">Use a escassez suave e a presunção positiva. Nada de "E aí?".</p>
            </div>
        </div>
      </div>

      {/* iPhone Panel */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
            className="relative z-20 scale-[0.85] md:scale-95"
        >
             <div className="w-[360px] h-[720px] bg-black rounded-[3rem] p-3 shadow-2xl relative border-4 border-gray-800">
                <div className="w-full h-full bg-[#E5DDD5] rounded-[2.5rem] overflow-hidden flex flex-col relative">
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>

                    {/* Header */}
                    <div className="bg-[#075E54] h-20 flex items-end px-4 pb-3 justify-between text-white z-10 shrink-0">
                        <div className="flex items-center gap-2">
                            <ChevronLeft />
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs font-bold">CL</div>
                            <span className="font-bold text-sm">Cliente</span>
                        </div>
                        <div className="flex gap-4">
                            <Video size={20} />
                            <Phone size={20} />
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 pt-6 z-10">
                        
                        {/* Objection 3 */}
                        <div className="bg-white p-3 rounded-lg rounded-tl-none self-start shadow-sm max-w-[85%] text-sm text-gray-800">
                            Gostei, mas preciso ver com meu sócio antes de aprovar.
                            <span className="text-[10px] text-gray-400 block text-right mt-1">14:20</span>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none self-end shadow-sm max-w-[90%] ml-auto text-sm text-gray-800"
                        >
                            Claro, total sentido!
                            <br/><br/>
                            Mas me diz uma coisa: o que você acha que ele vai perguntar? Porque aí eu já te mando os argumentos prontos pra você não ficar na mão na hora de explicar.
                            <br/><br/>
                            O que você mais curtiu pra eu destacar pra ele?
                            <span className="text-[10px] text-gray-500 block text-right mt-1 flex justify-end gap-1">14:22 <span className="text-blue-500">✓✓</span></span>
                        </motion.div>

                        <div className="flex justify-center py-4">
                            <span className="bg-gray-200 text-gray-500 text-[10px] px-2 py-1 rounded-full uppercase font-bold">3 Dias Depois</span>
                        </div>

                        {/* Closing */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none self-end shadow-sm max-w-[90%] ml-auto text-sm text-gray-800"
                        >
                            Fulano, curti muito teu projeto. Como minha agenda tá meio apertada pra semana que vem, queria ver contigo se a gente já consegue deixar reservado esse slot pra você não ficar esperando.
                            <br/><br/>
                            O pacote Intermediário foi o que fez mais sentido mesmo, né?
                            <span className="text-[10px] text-gray-500 block text-right mt-1 flex justify-end gap-1">10:00 <span className="text-blue-500">✓✓</span></span>
                        </motion.div>

                    </div>

                    {/* Input */}
                    <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 z-10">
                        <div className="flex-1 bg-white h-9 rounded-full px-4 text-sm flex items-center text-gray-400">Mensagem</div>
                        <div className="w-9 h-9 bg-[#00897b] rounded-full flex items-center justify-center text-white"><span className="text-sm">🎤</span></div>
                    </div>

                </div>
             </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide29_ScriptsIphone2;