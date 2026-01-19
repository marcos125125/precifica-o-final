import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { PenTool, Video, BarChart2, Check } from 'lucide-react';

const Slide17_Step2Niches: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-4">
            QUAL "PRESENTE" ENVIAR?
        </h2>
        <p className="text-gray-500 text-lg">Exemplos práticos adaptados ao seu serviço.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
        
        {/* Designers / Developers */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="group bg-pink-50 hover:bg-pink-100 transition-colors rounded-2xl p-8 border border-pink-100 hover:border-pink-200"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-200 rounded-lg text-pink-700"><PenTool size={24} /></div>
                <h3 className="font-bold text-xl text-pink-900">Designers & Devs</h3>
            </div>
            
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-pink-600 mt-1 shrink-0" />
                    <p className="text-pink-900 text-sm leading-relaxed">
                        "Desenhei como ficaria a primeira seção do seu site otimizada para conversão e coloquei em um link privado."
                    </p>
                </li>
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-pink-600 mt-1 shrink-0" />
                    <p className="text-pink-900 text-sm leading-relaxed">
                        "Criei um protótipo da landing page de [serviço] com as melhores práticas de UX."
                    </p>
                </li>
            </ul>
        </motion.div>

        {/* Consultants */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="group bg-indigo-50 hover:bg-indigo-100 transition-colors rounded-2xl p-8 border border-indigo-100 hover:border-indigo-200"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-200 rounded-lg text-indigo-700"><Video size={24} /></div>
                <h3 className="font-bold text-xl text-indigo-900">Consultores</h3>
            </div>
            
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-indigo-600 mt-1 shrink-0" />
                    <p className="text-indigo-900 text-sm leading-relaxed">
                        "Gravei um vídeo de 3 minutos mostrando as oportunidades de SEO que identifiquei."
                    </p>
                </li>
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-indigo-600 mt-1 shrink-0" />
                    <p className="text-indigo-900 text-sm leading-relaxed">
                        "Fiz uma auditoria rápida da presença digital da sua empresa e documentei em um PDF visual."
                    </p>
                </li>
            </ul>
        </motion.div>

        {/* Analysts */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="group bg-teal-50 hover:bg-teal-100 transition-colors rounded-2xl p-8 border border-teal-100 hover:border-teal-200"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-200 rounded-lg text-teal-700"><BarChart2 size={24} /></div>
                <h3 className="font-bold text-xl text-teal-900">Analistas</h3>
            </div>
            
            <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-teal-600 mt-1 shrink-0" />
                    <p className="text-teal-900 text-sm leading-relaxed">
                        "Rodei uma análise de performance do site e identifiquei os 5 gargalos que estão afetando o carregamento."
                    </p>
                </li>
                <li className="flex gap-3 items-start">
                    <Check size={16} className="text-teal-600 mt-1 shrink-0" />
                    <p className="text-teal-900 text-sm leading-relaxed">
                        "Mapeei as palavras-chave que seus concorrentes estão usando e você ainda não."
                    </p>
                </li>
            </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide17_Step2Niches;