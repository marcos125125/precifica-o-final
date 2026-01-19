import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Gem, XCircle, CheckCircle, Smartphone, Globe, Video, ArrowRight } from 'lucide-react';

const Slide19_GoldNote: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.1)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />
      <div className="absolute top-0 right-0 p-32 bg-[#ccff00] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

      {/* Left Column: The "What" (Dos and Don'ts) */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-900 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
        >
             <Gem className="text-[#ccff00]" size={24} />
             <span className="text-[#ccff00] font-bold tracking-widest uppercase text-sm">Nota de Ouro</span>
        </motion.div>

        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-10"
        >
            ONDE HOSPEDAR<br/> SUA "AMOSTRA GRÁTIS"
        </motion.h2>

        <div className="space-y-8">
            {/* The Wrong Way */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-red-950/30 border border-red-900/50 p-6 rounded-2xl"
            >
                <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest mb-4">
                    <XCircle size={16} /> Não envie:
                </div>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-red-200/60 line-through decoration-red-500/50">
                        <span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span> PDF estático
                    </li>
                    <li className="flex items-center gap-3 text-red-200/60 line-through decoration-red-500/50">
                         <span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span> Imagem simples do Figma
                    </li>
                    <li className="flex items-center gap-3 text-red-200/60 line-through decoration-red-500/50">
                         <span className="w-1.5 h-1.5 bg-red-900 rounded-full"></span> Print de tela
                    </li>
                </ul>
            </motion.div>

            {/* The Right Way */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#ccff00]/10 border border-[#ccff00]/30 p-6 rounded-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ccff00]"></div>
                <div className="flex items-center gap-2 text-[#ccff00] font-bold uppercase text-xs tracking-widest mb-4">
                    <CheckCircle size={16} /> Envie (Experiência Real):
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white">
                        <Globe size={18} className="text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">Link para protótipo funcional hospedado no seu domínio</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                        <Smartphone size={18} className="text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">Página HTML real que funciona no celular</span>
                    </li>
                    <li className="flex items-start gap-3 text-white">
                        <Video size={18} className="text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">Vídeo Loom navegando pela solução</span>
                    </li>
                </ul>
            </motion.div>
        </div>
      </div>

      {/* Right Column: The "Why" */}
      <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center relative z-10 bg-white/5 backdrop-blur-sm">
        
        <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-black text-white mb-8 flex items-center gap-3"
        >
            POR QUE ISSO FUNCIONA MELHOR?
            <ArrowRight className="text-gray-600" />
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Reason 1 */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
                <div className="text-blue-500 font-bold mb-2">01. Profissionalismo</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Você não está prometendo, você <span className="text-white font-bold">já entregou</span> algo funcional. Isso elimina dúvidas sobre sua capacidade técnica.
                </p>
            </motion.div>

            {/* Reason 2 */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
                <div className="text-green-500 font-bold mb-2">02. Interatividade</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    O cliente pode clicar, rolar e <span className="text-white font-bold">sentir a experiência</span>. O envolvimento sensorial aumenta o desejo de compra.
                </p>
            </motion.div>

             {/* Reason 3 */}
             <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
                <div className="text-purple-500 font-bold mb-2">03. Tangibilidade</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Eles veem o "antes e depois" de forma concreta. Não precisam imaginar o resultado, ele está ali na frente deles.
                </p>
            </motion.div>

             {/* Reason 4 */}
             <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
                <div className="text-[#ccff00] font-bold mb-2">04. Percepção de Valor</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    "Se ele fez isso de graça e sem eu pedir, imagina o nível do trabalho completo e pago."
                </p>
            </motion.div>

             {/* Reason 5 */}
             <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="col-span-1 md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors flex items-center justify-between"
            >
                <div>
                    <div className="text-white font-bold mb-1">05. Redução de Atrito</div>
                    <p className="text-gray-400 text-sm">Não exige esforço cognitivo do cliente para entender.</p>
                </div>
                <div className="bg-[#ccff00] p-2 rounded-full text-black">
                    <CheckCircle size={20} />
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide19_GoldNote;