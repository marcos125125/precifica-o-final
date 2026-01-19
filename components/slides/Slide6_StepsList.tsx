import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Search, Eye, AlertCircle, Key, Layers, ArrowRight, CheckSquare, MoreHorizontal, Bell, Battery, Wifi } from 'lucide-react';

const Slide6_StepsList: React.FC<SlideProps> = ({ isActive }) => {
  const steps = [
    { number: 1, label: "CONTEXTO", desc: "A razão do contato", icon: Search, color: "text-blue-500", bg: "bg-blue-100" },
    { number: 2, label: "OBSERVAÇÃO", desc: "A personalização", icon: Eye, color: "text-green-500", bg: "bg-green-100" },
    { number: 3, label: "OPORTUNIDADE", desc: "O gancho de valor", icon: AlertCircle, color: "text-red-500", bg: "bg-red-100" },
    { number: 4, label: "PERMISSÃO", desc: "A chamada para ação", icon: Key, color: "text-[#ccff00]", bg: "bg-black" },
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Theory & Context */}
      <div className="w-full md:w-5/12 p-8 md:p-12 lg:p-14 flex flex-col justify-center border-r border-gray-100 relative bg-dot-pattern z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
            <Layers size={24} strokeWidth={2} />
          </div>
          <span className="text-black font-bold tracking-widest uppercase text-sm">Metodologia</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-6 leading-none"
        >
          OS 4 BLOCOS <br/><span className="text-blue-600">SEQUENCIAIS</span>
        </motion.h2>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 border-l-8 border-black p-6 rounded-r-lg mb-auto shadow-sm"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            A ordem altera o produto. Tentar vender (Bloco 3) antes de criar contexto (Bloco 1) gera <span className="font-bold text-red-600">bloqueio imediato</span>. Cada etapa tem uma função psicológica única.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
           className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-3"
        >
            <span className="text-gray-400 font-mono text-xs uppercase">Próximo Passo</span>
            <ArrowRight size={14} className="text-gray-400" />
            <span className="font-bold text-black uppercase tracking-wider text-sm">Detalhamento Prático</span>
        </motion.div>
      </div>

      {/* Right Column: The iPhone Showcase */}
      <div className="w-full md:w-7/12 bg-gray-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* iPhone Container */}
        <motion.div
             initial={{ y: 100, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, type: "spring", damping: 20 }}
             className="relative z-20"
        >
            {/* iPhone Body */}
            <div className="w-[340px] h-[680px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-900 relative">
                
                {/* Hardware Buttons */}
                <div className="absolute top-28 -left-[2px] w-[2px] h-8 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-44 -left-[2px] w-[2px] h-14 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-60 -left-[2px] w-[2px] h-14 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-44 -right-[2px] w-[2px] h-20 bg-gray-600 rounded-r-md"></div>

                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative border-[6px] border-black">
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 flex justify-center items-center">
                        <div className="w-16 h-16 rounded-full bg-black/20 blur-xl absolute -z-10"></div>
                    </div>

                    {/* Status Bar */}
                    <div className="h-12 w-full flex justify-between items-center px-6 pt-2 select-none">
                         <span className="text-black font-semibold text-sm pl-2">9:41</span>
                         <div className="flex gap-1.5 pr-2 items-center">
                            <Wifi size={14} className="text-black" />
                            <div className="w-6 h-3 bg-black rounded-[2px] relative ml-1">
                                <div className="absolute inset-0 border border-white/30 rounded-[2px]"></div>
                                <div className="absolute top-0.5 right-0.5 bottom-0.5 left-0.5 bg-white rounded-[1px]"></div>
                            </div>
                         </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 pt-2 pb-6">
                        <div className="flex justify-between items-center mb-4">
                             <div className="text-blue-500 font-medium text-sm flex items-center gap-1">
                                <ArrowRight size={14} className="rotate-180" /> Notas
                             </div>
                             <MoreHorizontal className="text-blue-500" />
                        </div>
                        <h1 className="text-3xl font-black text-black tracking-tight leading-none">
                            Checklist<br/>Anti-Spam
                        </h1>
                        <p className="text-gray-400 text-xs font-medium mt-2 uppercase tracking-widest">Metodologia 2026</p>
                    </div>

                    {/* Checklist Items */}
                    <div className="flex-1 px-4 overflow-y-auto pb-8">
                        <div className="flex flex-col gap-3">
                            {steps.map((step, index) => (
                                <motion.div 
                                    key={step.number}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + (index * 0.15), type: "spring" }}
                                    className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 border border-gray-100 shadow-sm"
                                >
                                    {/* Checkbox visual */}
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${index === 3 ? 'border-black bg-black' : 'border-gray-300'}`}>
                                        {index === 3 && <div className="w-2 h-2 bg-[#ccff00] rounded-full"></div>}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className={`text-[10px] font-bold px-1.5 rounded ${step.bg} ${step.color.replace('text-', 'text-opacity-100 text-')}`}>
                                                0{step.number}
                                            </span>
                                            <h4 className="font-bold text-base text-gray-900">{step.label}</h4>
                                        </div>
                                        <p className="text-gray-500 text-xs leading-tight">{step.desc}</p>
                                    </div>

                                    <step.icon size={18} className={`${step.color} opacity-80`} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Note */}
                        <motion.div 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 1.8 }}
                             className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100"
                        >
                            <p className="text-yellow-700 text-xs font-medium leading-relaxed flex gap-2">
                                <Bell size={14} className="shrink-0 mt-0.5" />
                                <span>Lembrete: Siga a ordem exata. Pular etapas quebra a confiança.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide6_StepsList;