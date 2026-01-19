import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Share2, MessageCircle, Instagram, Mail, MousePointer, GitCommit } from 'lucide-react';

const Slide32_ChannelsStrategy: React.FC<SlideProps> = ({ isActive }) => {
  const timeline = [
    { day: "Dia 1", channel: "WhatsApp / Direct", icon: MessageCircle, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
    { day: "Dia 3", channel: "Follow-up Suave", icon: MessageCircle, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
    { day: "Dia 7", channel: "Conexão Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/30" },
    { day: "Dia 10", channel: "E-mail", icon: Mail, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
    { day: "Dia 15", channel: "Interação em Post", icon: MousePointer, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  ];

  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.15)_0,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10">
        
        {/* Header */}
        <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mb-16"
        >
             <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-800/50 rounded-full px-4 py-1.5 text-blue-400 font-bold uppercase tracking-widest text-xs mb-6">
                 <Share2 size={14} /> Social Selling
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-4">
                ESTRATÉGIA DE <span className="text-blue-500">CANAIS ALTERNADOS</span>
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Se o lead não respondeu em um canal, cerque-o de forma não invasiva usando outros pontos de contato.
             </p>
        </motion.div>

        {/* Timeline Visual */}
        <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 hidden md:block rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.15) }}
                        className={`relative bg-gray-900 border ${item.border} p-6 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300`}
                    >
                        {/* Dot on Line (Desktop) */}
                        <div className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${item.bg.replace('/10', '')} z-0`}></div>
                        
                        <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center ${item.color} mb-4 relative z-10 shadow-lg`}>
                            <item.icon size={24} />
                        </div>
                        
                        <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs font-mono text-gray-400 mb-2">
                            {item.day}
                        </div>
                        
                        <h3 className={`font-bold text-base ${item.color}`}>
                            {item.channel}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Footer Note */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center border-t border-gray-800 pt-8"
        >
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <GitCommit size={16} />
                <span>O objetivo não é ser chato, é ser <span className="text-white font-bold">onipresente</span>.</span>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide32_ChannelsStrategy;