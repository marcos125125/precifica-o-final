import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { RefreshCw, Gift, Unlock } from 'lucide-react';

const Slide16_Step2Structure: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 w-full h-1/2 bg-blue-600 z-0"></div>
      
      <div className="max-w-6xl w-full z-10 flex flex-col h-full justify-center">
        
        <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-10 text-center"
        >
             <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                O QUE INCLUIR NA <span className="text-[#ccff00]">2ª MENSAGEM</span>
            </h2>
            <p className="text-blue-200 text-lg font-medium">Os 3 elementos obrigatórios da entrega de valor.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Element 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border-t-8 border-blue-400"
            >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                    <RefreshCw size={28} />
                </div>
                <h3 className="text-xl font-black text-center text-gray-900 mb-4">1. A Transição Natural</h3>
                <p className="text-gray-500 text-sm text-center mb-6 flex-1">
                    Conecte o contexto anterior com a nova ação sem parecer forçado.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                        "Como trabalho especificamente com [nicho deles], tomei a liberdade de criar algo para você..."
                    </p>
                </div>
            </motion.div>

            {/* Element 2 */}
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border-t-8 border-[#ccff00] transform md:-translate-y-4"
            >
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-[#ccff00] mb-6 mx-auto shadow-lg">
                    <Gift size={28} />
                </div>
                <h3 className="text-xl font-black text-center text-gray-900 mb-4">2. A Entrega de Valor</h3>
                <p className="text-gray-500 text-sm text-center mb-6 flex-1">
                    O "presente" que prova sua competência antes de qualquer contrato.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                        "Criei uma análise rápida... gravei um vídeo de 3 minutos... desenhei um protótipo..."
                    </p>
                </div>
            </motion.div>

            {/* Element 3 */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col h-full border-t-8 border-green-500"
            >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
                    <Unlock size={28} />
                </div>
                <h3 className="text-xl font-black text-center text-gray-900 mb-4">3. Pedido de Baixa Fricção</h3>
                <p className="text-gray-500 text-sm text-center mb-6 flex-1">
                    Torne impossível dizer "não". Remova o risco e o esforço.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                        "Posso te enviar o link para você dar uma olhada quando tiver um minuto?"
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide16_Step2Structure;