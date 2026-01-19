import React from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { User, MapPin, Search, AlertCircle, Check, X } from 'lucide-react';

const Slide13_Step1Details: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-50 flex flex-col md:justify-center p-4 md:p-8 relative overflow-y-auto font-sans">
      
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col">
        
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-2 uppercase">
                O que incluir nesta <span className="text-blue-600">primeira mensagem</span>:
            </h2>
        </div>

        {/* Grid - Adjusted for Full Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* 1. Use o Nome */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><User size={20} /></div>
                    <h3 className="font-black text-lg text-gray-900">1. Use o nome da pessoa (sempre!)</h3>
                </div>
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                    Mensagens personalizadas têm <span className="bg-blue-50 text-blue-800 px-1 font-bold">3x mais taxa de resposta</span>.
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 p-2 rounded border border-green-100">
                        <Check size={14} className="shrink-0" /> Exemplo: "Oi Maria,"
                    </div>
                    <div className="flex items-center gap-2 text-red-700 bg-red-50 p-2 rounded border border-red-100 opacity-80">
                         <span className="font-bold text-xs uppercase mr-1">Não use:</span> "Olá,"
                    </div>
                </div>
            </motion.div>

             {/* 2. Origem */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-md transition-shadow"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><MapPin size={20} /></div>
                    <h3 className="font-black text-lg text-gray-900">2. Explique a origem do contato</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                    Isso prova que você não está usando lista comprada.
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                        "Encontrei sua empresa pesquisando por [nicho específico] no [Google Maps/Instagram/LinkedIn]"
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                        "Vi seu anúncio sobre [produto/serviço] no [plataforma]"
                    </div>
                </div>
            </motion.div>

            {/* 3. Observação */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Search size={20} /></div>
                    <h3 className="font-black text-lg text-gray-900">3. Demonstre observação genuína</h3>
                </div>
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                    Valide o trabalho deles com um elogio específico (não genérico).
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-green-700 bg-green-50 p-2 rounded border border-green-100">
                        <Check size={14} className="shrink-0 mt-0.5" /> 
                        <div>
                            <span className="font-bold">Correto:</span> "Adorei a forma como você organiza o feed no Instagram, o padrão de cores cria uma identidade forte"
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-red-700 bg-red-50 p-2 rounded border border-red-100 opacity-80">
                        <X size={14} className="shrink-0" /> 
                        <span className="line-through decoration-red-300">"Adorei seu Instagram"</span>
                    </div>
                </div>
            </motion.div>

            {/* 4. Oportunidade */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><AlertCircle size={20} /></div>
                    <h3 className="font-black text-lg text-gray-900">4. Identifique uma oportunidade (sutil)</h3>
                </div>
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                    Não critique diretamente, aponte uma "oportunidade de melhoria".
                </p>
                <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                        "Notei que o site não está otimizado para mobile, 73% dos acessos hoje vêm do celular"
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                        "Vi que o link da bio está quebrado, pode estar perdendo conversões"
                    </div>
                    <div className="flex items-start gap-2 text-gray-800 bg-gray-50 p-2 rounded border border-gray-100">
                        <Check size={14} className="text-green-600 shrink-0 mt-0.5" /> 
                        "Percebi que vocês não aparecem nas primeiras posições do Google para [termo relevante]"
                    </div>
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Slide13_Step1Details;