import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Brain, ListTodo, Shield, Users, Timer, ArrowRight, CheckCircle2 } from 'lucide-react';

const Slide31_PsychologyAction: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden">
      
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full content-center">
        
        {/* Left: Psychology Deep Dive */}
        <div className="flex flex-col justify-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs mb-4 border border-purple-500/30 px-3 py-1 rounded-full bg-purple-950/10">
                    <Brain size={12} /> Mecanismos Psicológicos
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    POR QUE O CLIENTE <br/><span className="text-purple-500">TRAVA?</span>
                </h2>
            </motion.div>

            <div className="space-y-6">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4"
                >
                    <div className="bg-gray-800 p-3 rounded-xl h-fit"><Shield className="text-red-400" size={20}/></div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Aversão à Perda</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            O medo de gastar mal é 2x maior que o prazer de ganhar. 
                            <span className="block text-purple-400 mt-1 font-medium">Solução: Focar na Garantia e Suporte.</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4"
                >
                    <div className="bg-gray-800 p-3 rounded-xl h-fit"><Users className="text-blue-400" size={20}/></div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Prova Social</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ninguém quer ser a cobaia.
                            <span className="block text-purple-400 mt-1 font-medium">Solução: Cite exemplos de mercado ("Micro-Cases").</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                >
                    <div className="bg-gray-800 p-3 rounded-xl h-fit"><Timer className="text-yellow-400" size={20}/></div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Escassez Real</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A urgência deve ser estrutural, não mentirosa.
                            <span className="block text-purple-400 mt-1 font-medium">Solução: "Só consigo pegar 2 projetos por mês."</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Right: Action Plan Checklist */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-3xl relative shadow-2xl"
        >
            <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-6">
                <ListTodo className="text-green-500" size={32} />
                <div>
                    <h3 className="text-white font-black text-2xl uppercase tracking-tight">Plano de Ação</h3>
                    <p className="text-gray-500 text-sm">Implementação Imediata</p>
                </div>
            </div>

            <ul className="space-y-4">
                {[
                    "Refazer a Proposta com 3 Pacotes (R$ 1.5k, R$ 2.4k, R$ 4k).",
                    "Treinar no espelho a analogia do 'Funcionário 24h'.",
                    "Listar clientes atuais que dão prejuízo para demitir.",
                    "Repetir o Mantra: 'Sou a solução, não um boleto'."
                ].map((item, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                        className="flex items-start gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:border-green-500/30 transition-colors group"
                    >
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                    </motion.li>
                ))}
            </ul>

            <button className="w-full mt-8 bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                Concluir Masterclass <ArrowRight size={20} />
            </button>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide31_PsychologyAction;