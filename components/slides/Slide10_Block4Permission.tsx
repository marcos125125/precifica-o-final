import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Key, AlertTriangle, CheckCircle, XCircle, Zap, Unlock } from 'lucide-react';

const Slide10_Block4Permission: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center relative overflow-hidden font-sans p-6 md:p-12">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>
      
      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Column: Theory */}
        <div className="flex flex-col justify-center">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#ccff00] shadow-sm">
                        <Key size={20} strokeWidth={3} />
                    </div>
                    <span className="text-black font-bold tracking-widest uppercase text-sm">Bloco 4</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4 leading-none">
                    PERMISSÃO
                </h2>
                <p className="text-xl font-medium text-gray-700 leading-tight">
                    Facilite o <span className="bg-[#ccff00] text-black px-1 rounded-sm font-bold">próximo passo</span> (O Pulo do Gato).
                </p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {/* O Problema */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
                >
                    <div className="flex items-center gap-2 text-red-700 font-bold uppercase text-xs tracking-widest mb-2">
                        <AlertTriangle size={14} /> O que você está resolvendo:
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Para alguém que não te conhece, comprometer 30 minutos em uma reunião é um custo alto. Pedidos que exigem muito esforço são <span className="font-bold">rejeitados automaticamente</span>.
                    </p>
                </motion.div>

                {/* Por que funciona */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-900 text-white p-6 rounded-lg shadow-lg"
                >
                     <div className="flex items-center gap-2 text-[#ccff00] font-bold uppercase text-xs tracking-widest mb-2">
                        <Zap size={14} /> Por que funciona:
                    </div>
                    <p className="text-gray-200 text-lg leading-snug">
                        O objetivo do primeiro contato não é vender — é <span className="text-[#ccff00] font-bold">iniciar uma conversa</span>. Quando você remove a barreira psicológica da decisão, fica mais fácil dizer "sim".
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Right Column: Practice */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.6 }}
             className="bg-white border border-gray-200 rounded-[2rem] shadow-2xl p-8 md:p-10 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#ccff00]"></div>

            <div className="mb-8">
                <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-2">
                    <span className="text-black text-3xl">🔓</span> Como aplicar:
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-gray-200 pl-4">
                    Peça para enviar algo de valor gratuito em vez de tentar empurrar uma venda direta no primeiro contato. <span className="font-bold text-black">Seu pedido deve ser micro, específico e sem risco.</span>
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 pb-2 mb-4">Exemplos Práticos</h4>

                {/* Example 1 */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <p className="text-green-900 font-medium text-lg leading-snug">
                        "Posso te enviar a análise para você dar uma olhada quando tiver um minuto?"
                    </p>
                </motion.div>

                {/* Example 2 */}
                <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                    <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                    <p className="text-green-900 font-medium text-lg leading-snug">
                        "Te mando aqui ou prefere por e-mail?"
                    </p>
                </motion.div>

                 {/* Example 3 (Bad) */}
                 <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100 opacity-80 hover:opacity-100 transition-opacity"
                >
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <p className="text-red-900 font-medium text-lg leading-snug line-through decoration-red-300 decoration-2">
                        "Podemos agendar uma call de 30 minutos?"
                    </p>
                </motion.div>
            </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide10_Block4Permission;