import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { AlertOctagon, UserMinus, ShieldAlert, ChevronLeft, Phone, Video } from 'lucide-react';

const Slide30_CrisisManagement: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Red Flags */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-r border-gray-800 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-4 border border-red-500/30 px-3 py-1 rounded-full bg-red-950/10">
                <ShieldAlert size={12} /> Gestão de Crise
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                O "NÃO" QUE <span className="text-red-600">LIBERTA</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
                Às vezes, a melhor negociação é a que não acontece. Aprenda a identificar e demitir clientes que dão prejuízo.
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
        >
            <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl flex items-start gap-3">
                <AlertOctagon className="text-red-500 shrink-0 mt-1" size={18} />
                <div>
                    <strong className="text-red-400 text-sm uppercase block mb-1">Red Flag 1</strong>
                    <p className="text-gray-300 text-sm">Pede desconto na primeira frase ("Faz por milão?").</p>
                </div>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl flex items-start gap-3">
                <AlertOctagon className="text-red-500 shrink-0 mt-1" size={18} />
                <div>
                    <strong className="text-red-400 text-sm uppercase block mb-1">Red Flag 2</strong>
                    <p className="text-gray-300 text-sm">Diz "é rapidinho, coisa simples" para desvalorizar.</p>
                </div>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl flex items-start gap-3">
                <AlertOctagon className="text-red-500 shrink-0 mt-1" size={18} />
                <div>
                    <strong className="text-red-400 text-sm uppercase block mb-1">Red Flag 3</strong>
                    <p className="text-gray-300 text-sm">Promete "divulgação" em troca de trabalho.</p>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: Firing Script */}
      <div className="w-full md:w-1/2 bg-[#111] flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

        <div className="max-w-sm w-full">
            <div className="text-center mb-6">
                <h3 className="text-white font-bold text-lg flex items-center justify-center gap-2">
                    <UserMinus size={20} className="text-red-500" /> Script de Demissão
                </h3>
                <p className="text-gray-500 text-xs mt-1">Copie, cole e sinta o alívio.</p>
            </div>

            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-black border-4 border-gray-800 rounded-3xl p-3 shadow-2xl relative"
            >
                {/* Fake WhatsApp Interface */}
                <div className="bg-[#0f1c24] rounded-2xl overflow-hidden h-[400px] flex flex-col">
                    <div className="bg-[#202c33] p-3 flex items-center gap-3 text-gray-300">
                        <ChevronLeft size={20} />
                        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                        <div className="flex-1 font-bold text-sm">Cliente Ruim</div>
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col justify-end bg-[#0b141a]">
                        <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none text-sm text-gray-200 shadow-sm leading-relaxed">
                            Oi [Nome], dei uma olhada aqui na minha agenda e no escopo que você precisa.
                            <br/><br/>
                            Sendo bem honesto, pro nível de atenção que esse projeto exige, eu não vou conseguir te atender agora com a qualidade que eu prezo.
                            <br/><br/>
                            Acho melhor você procurar um profissional que tenha disponibilidade imediata pra esse formato. Sucesso aí!
                            <div className="text-[10px] text-gray-400 text-right mt-1 flex justify-end gap-1">11:05 <span className="text-blue-400">✓✓</span></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slide30_CrisisManagement;