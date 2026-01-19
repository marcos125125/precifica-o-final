import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Anchor, Scale, Brain, AlertTriangle, HelpCircle } from 'lucide-react';

const Slide18_Anchoring: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Column: Text Content (Full Text Part 1) */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center border-r border-gray-900 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-950/10">
                <Anchor size={12} /> 4. Engenharia de Precificação
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                A TÉCNICA DA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ANCORAGEM</span>
            </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg text-gray-400 leading-relaxed"
        >
            <p>
                A estratégia central para quebrar a objeção de preço não é convencer o cliente de que R$ 1.500 é barato, mas sim <strong className="text-white">fazer R$ 1.500 parecer barato através da comparação relativa.</strong> Isso é alcançado através da técnica de Ancoragem de Preço.
            </p>

            <div className="bg-gray-900/50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                <h3 className="text-yellow-500 font-bold uppercase text-sm mb-3 flex items-center gap-2">
                    <Brain size={16}/> 4.1 A Psicologia da Comparação Relativa
                </h3>
                <p className="text-gray-300 text-base mb-4">
                    O cérebro humano tem dificuldade em avaliar valores absolutos. <span className="text-white font-bold">R$ 1.500 é caro ou barato? Depende.</span>
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2"><span className="text-red-500">●</span> Comparado a um pão na chapa, é caríssimo.</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">●</span> Comparado a um carro popular, é irrisório.</li>
                </ul>
            </div>

            <p>
                O papel do profissional é controlar essa comparação. <span className="text-white underline decoration-red-500 decoration-2 underline-offset-4">Se o preço é apresentado isoladamente, o cliente o compara com "zero" ou com o "sobrinho".</span>
            </p>
        </motion.div>
      </div>

      {/* Right Column: Visual Metaphor */}
      <div className="w-full md:w-1/2 bg-black flex flex-col items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0,rgba(0,0,0,0)_70%)] pointer-events-none" />

        {/* The Balance Scale Visual */}
        <div className="relative w-full max-w-md">
            
            {/* Scenario: Isolation */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-gray-800 p-8 rounded-2xl mb-8 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">Perigo</div>
                <div className="text-center mb-6">
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Cenário Isolado</p>
                    <div className="text-5xl font-black text-white">R$ 1.500</div>
                </div>
                
                <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-4">
                    <div className="text-center w-1/2 border-r border-gray-800 pr-4">
                        <span className="block mb-1">Cérebro compara com:</span>
                        <strong className="text-red-500 text-lg">R$ 0,00</strong>
                    </div>
                    <div className="text-center w-1/2 pl-4">
                        <span className="block mb-1">Resultado:</span>
                        <strong className="text-red-400 uppercase">Parece Caro</strong>
                    </div>
                </div>
            </motion.div>

            {/* Visual Icon */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-4 text-gray-600"
            >
                <HelpCircle size={32} />
                <p className="text-sm font-medium italic text-center max-w-[200px]">
                    "Sem referência, o cérebro escolhe a referência mais barata disponível."
                </p>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Slide18_Anchoring;