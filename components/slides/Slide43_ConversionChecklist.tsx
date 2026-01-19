import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { CheckSquare, Clock, Zap, MessageCircle, ShieldCheck, Target, FileSignature, HelpCircle, Check } from 'lucide-react';

const Slide43_ConversionChecklist: React.FC<SlideProps> = ({ isActive }) => {
  const items = [
    { text: "Respondi em menos de 5 minutos?", icon: Clock },
    { text: "Entreguei o valor prometido imediatamente?", icon: Zap },
    { text: "Esperei o feedback antes de falar de preço?", icon: MessageCircle },
    { text: "Fiz perguntas consultivas para entender necessidades?", icon: HelpCircle },
    { text: "Apresentei solução específica (não genérica)?", icon: Target },
    { text: "Usei fechamento assumptivo (não tentativo)?", icon: CheckSquare },
    { text: "Antecipei objeções com FAQs/garantias?", icon: ShieldCheck },
    { text: "Facilitei o próximo passo (contrato/reunião)?", icon: FileSignature },
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Header & Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-100 bg-gray-50 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                <Target size={14} /> Gabarito Final
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[0.95]">
                CHECKLIST DE <span className="text-green-600">CONVERSÃO</span>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
        >
            <p className="text-gray-600 text-lg leading-relaxed">
                Antes de considerar um lead "perdido" ou "difícil", verifique se você seguiu estes 8 passos essenciais após a resposta positiva.
            </p>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-700 shrink-0">
                    <CheckSquare size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase mb-1">Como usar:</h4>
                    <p className="text-gray-500 text-sm">
                        Imprima ou tire um print desta tela. Marque um <span className="font-bold text-green-600">"X"</span> mental em cada item antes de enviar sua próxima proposta.
                    </p>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: The Checklist */}
      <div className="w-full md:w-7/12 bg-white flex items-center justify-center p-8 relative overflow-hidden bg-dot-pattern">
        
        <div className="w-full max-w-2xl grid grid-cols-1 gap-3 relative z-10">
            
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-md transition-all cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                            <item.icon size={20} />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm md:text-base">
                            {item.text}
                        </span>
                    </div>
                    
                    {/* Checkbox Visual */}
                    <div className="w-6 h-6 rounded border-2 border-gray-200 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500 transition-all">
                        <Check size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                    </div>
                </motion.div>
            ))}

        </div>

        {/* Decorative Background Blob */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none"></div>

      </div>
    </div>
  );
};

export default Slide43_ConversionChecklist;