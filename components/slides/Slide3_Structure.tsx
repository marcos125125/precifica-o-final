import React from 'react';
import { Search, Eye, AlertCircle, Key } from 'lucide-react';
import { SlideProps } from '../../types';
import { motion, Variants } from 'framer-motion';

const Slide3_Structure: React.FC<SlideProps> = ({ isActive }) => {
  const steps = [
    { number: 1, label: "CONTEXTO", icon: Search, active: false, color: "text-blue-500", bg: "bg-blue-50" },
    { number: 2, label: "OBSERVAÇÃO", icon: Eye, active: false, color: "text-green-500", bg: "bg-green-50" },
    { number: 3, label: "OPORTUNIDADE", icon: AlertCircle, active: false, color: "text-red-500", bg: "bg-red-50" },
    { number: 4, label: "PERMISSÃO", icon: Key, active: true, color: "text-[#ccff00]", bg: "bg-black" },
  ];

  // Animações aceleradas
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger bem rápido
        delayChildren: 0.2 // Começa logo
      }
    }
  };

  const item: Variants = {
    hidden: { x: 30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 12 } }
  };

  return (
    <div className="w-full h-screen bg-dot-pattern flex items-center justify-center p-8 md:p-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-7xl items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start">
           <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest mb-6 inline-block"
           >
            Estratégia Anti-Spam
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-black mb-8"
          >
            A<br />
            ESTRUTURA<br />
            <span className="text-blue-600">ANTI-SPAM</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-gray-600 text-xl italic font-medium leading-relaxed max-w-md"
          >
            A estrutura anti-spam que você vai aprender tem 4 blocos sequenciais. Cada bloco derruba uma barreira psicológica específica entre você e a resposta do cliente.
          </motion.p>
        </div>

        {/* Right Column: Steps List */}
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number} 
              variants={item}
              whileHover={{ scale: 1.05, x: 10 }}
              className={`flex items-center gap-6 p-6 rounded-sm shadow-sm transition-colors duration-300 cursor-pointer ${step.active ? 'bg-black text-white shadow-xl' : 'bg-white text-black border border-gray-100 hover:border-blue-200'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${step.active ? 'bg-[#ccff00] text-black' : step.bg}`}>
                <step.icon className={`w-6 h-6 ${step.active ? 'text-black' : step.color}`} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-bold uppercase tracking-wider opacity-60`}>Passo {step.number}</span>
                <span className="text-xl md:text-2xl font-black uppercase tracking-tight">{step.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Slide3_Structure;