import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle, FileX, ImageOff, MonitorX } from 'lucide-react';

const Slide19_HostingMistakes: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#1a0505] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>

      <div className="max-w-5xl w-full z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
        >
             <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-900/50 rounded-full px-4 py-1.5 text-red-500 font-bold uppercase tracking-widest text-xs mb-6">
                 <AlertTriangle size={14} /> O Erro Comum
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
                ONDE <span className="text-red-500">NÃO</span> HOSPEDAR<br/>SUA AMOSTRA
             </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mistake 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-red-950/20 border border-red-900/30 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-red-950/30 transition-colors"
            >
                <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <FileX size={32} />
                </div>
                <h3 className="text-xl font-bold text-red-200 mb-3">PDF Estático</h3>
                <p className="text-red-300/60 text-sm leading-relaxed">
                    Pesado para baixar no 4G, difícil de ler no celular sem dar zoom e completamente sem interatividade.
                </p>
            </motion.div>

            {/* Mistake 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-red-950/20 border border-red-900/30 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-red-950/30 transition-colors"
            >
                <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <ImageOff size={32} />
                </div>
                <h3 className="text-xl font-bold text-red-200 mb-3">Imagem do Figma</h3>
                <p className="text-red-300/60 text-sm leading-relaxed">
                    O cliente não consegue clicar nos botões. Parece apenas um "desenho", não uma solução real funcionando.
                </p>
            </motion.div>

             {/* Mistake 3 */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-red-950/20 border border-red-900/30 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-red-950/30 transition-colors"
            >
                <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <MonitorX size={32} />
                </div>
                <h3 className="text-xl font-bold text-red-200 mb-3">Print de Tela</h3>
                <p className="text-red-300/60 text-sm leading-relaxed">
                    Transmite amadorismo. "Ele tirou um print e me mandou". Perde a sensação de exclusividade e esforço.
                </p>
            </motion.div>

        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
        >
             <p className="text-gray-400 font-medium text-lg">
                <span className="text-red-500 font-bold">O problema:</span> Todos esses formatos geram atrito ou exigem imaginação do cliente.
             </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide19_HostingMistakes;