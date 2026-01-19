import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Gem, CheckCircle, Smartphone, Globe, Video, ArrowRight, Zap } from 'lucide-react';

const Slide20_HostingSolutions: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050a0a] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-64 bg-[#ccff00] blur-[200px] opacity-10 rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: The "Dos" */}
        <div className="w-full md:w-5/12">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-2 mb-4">
                    <Gem className="text-[#ccff00]" size={24} />
                    <span className="text-[#ccff00] font-bold tracking-widest uppercase text-sm">Nota de Ouro</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
                    O QUE <span className="text-[#ccff00]">ENVIAR</span><br/>(A Solução)
                </h2>
            </motion.div>

            <div className="space-y-4">
                <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-xl"
                >
                    <Globe className="text-[#ccff00]" />
                    <span className="text-white font-bold">Link funcional (seu domínio)</span>
                </motion.div>
                 <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 p-4 bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-xl"
                >
                    <Smartphone className="text-[#ccff00]" />
                    <span className="text-white font-bold">Página no framer responsiva</span>
                </motion.div>
                 <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4 p-4 bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-xl"
                >
                    <Video className="text-[#ccff00]" />
                    <span className="text-white font-bold">Vídeo Loom navegando</span>
                </motion.div>
            </div>
        </div>

        {/* Right: The Psychology (Why) */}
        <div className="w-full md:w-7/12">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-900 rounded-3xl p-8 border border-gray-800 relative"
            >
                <div className="absolute -top-3 left-8 bg-[#ccff00] text-black text-xs font-black uppercase px-3 py-1 rounded-sm">
                    Psicologia da Venda
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 mt-2">Por que isso funciona melhor?</h3>

                <div className="grid grid-cols-1 gap-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center shrink-0 text-blue-400 font-bold">1</div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Profissionalismo</h4>
                            <p className="text-gray-400 text-sm leading-snug">Você já entrega algo funcional. Elimina a dúvida: "será que ele sabe fazer?".</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center shrink-0 text-purple-400 font-bold">2</div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Interatividade & Tangibilidade</h4>
                            <p className="text-gray-400 text-sm leading-snug">O cliente pode clicar e sentir a experiência. Eles veem o "antes/depois" concreto, sem precisar imaginar.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="flex gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center shrink-0 text-green-400 font-bold">3</div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Percepção de Valor</h4>
                            <p className="text-gray-400 text-sm leading-snug">"Se ele fez isso de graça, imagina o trabalho pago". Reduz drasticamente o atrito mental.</p>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Slide20_HostingSolutions;