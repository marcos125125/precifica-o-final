import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { Zap, HelpCircle, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

type TaxType = 'informal' | 'mei' | 'simples';

const Slide18_CalculatorQuick: React.FC<SlideProps> = ({ isActive }) => {
  const [monthlyTarget, setMonthlyTarget] = useState<number>(3000);
  const [projectHours, setProjectHours] = useState<number>(20);
  const [taxType, setTaxType] = useState<TaxType>('informal');

  // --- LÓGICA SIMPLIFICADA (Heurísticas Seguras) ---
  // Assumimos 100h produtivas/mês (25h/semana) como padrão seguro para iniciantes
  const standardMonthlyHours = 100;
  
  // Adicionamos 20% de custos operacionais ocultos sobre o salário desejado
  const estimatedCostPerHour = (monthlyTarget * 1.2) / standardMonthlyHours;
  
  // Custo base do projeto
  const baseProjectCost = estimatedCostPerHour * projectHours;

  // Margens estimadas (Imposto + Reserva 10% + Lucro 20%)
  const getMargin = () => {
    switch(taxType) {
        case 'informal': return 0.30; // 0% tax + 10% res + 20% profit
        case 'mei': return 0.36;      // 6% tax + 10% res + 20% profit
        case 'simples': return 0.45;  // 15% tax + 10% res + 20% profit
        default: return 0.30;
    }
  };

  const marginDecimal = getMargin();
  const finalPrice = baseProjectCost / (1 - marginDecimal);

  const formatCurrency = (val: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl w-full z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
        >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                <Zap size={14} className="fill-white" /> Modo Rápido
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none mb-2">
                CALCULADORA <span className="text-blue-500">EXPRESS</span>
            </h2>
            <p className="text-gray-400">Descubra seu preço mínimo em 30 segundos.</p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111] border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
                {/* Input 1 */}
                <div>
                    <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                        Quanto você quer ganhar/mês?
                        <HelpCircle size={12} className="text-gray-600" />
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">R$</span>
                        <input 
                            type="number" 
                            value={monthlyTarget}
                            onChange={(e) => setMonthlyTarget(Number(e.target.value))}
                            className="w-full bg-gray-900 border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white font-bold text-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Input 2 */}
                <div>
                    <label className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                        Horas estimadas do projeto
                        <HelpCircle size={12} className="text-gray-600" />
                    </label>
                    <div className="relative">
                        <input 
                            type="number" 
                            value={projectHours}
                            onChange={(e) => setProjectHours(Number(e.target.value))}
                            className="w-full bg-gray-900 border border-gray-700 rounded-xl py-4 pl-4 pr-12 text-white font-bold text-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs uppercase">Horas</span>
                    </div>
                </div>

            </div>

            {/* Input 3: Radio */}
            <div className="mb-10">
                <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
                    Situação Fiscal (Impostos)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                        { id: 'informal', label: 'Informal / PF', sub: 'Sem nota fiscal' },
                        { id: 'mei', label: 'Sou MEI', sub: 'Imposto fixo (~6%)' },
                        { id: 'simples', label: 'Simples / Outros', sub: 'Emite nota (+15%)' },
                    ].map((opt) => (
                        <div 
                            key={opt.id}
                            onClick={() => setTaxType(opt.id as TaxType)}
                            className={`cursor-pointer p-3 rounded-xl border transition-all ${
                                taxType === opt.id 
                                ? 'bg-blue-600/10 border-blue-500 text-white' 
                                : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-600'
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${taxType === opt.id ? 'border-blue-500' : 'border-gray-600'}`}>
                                    {taxType === opt.id && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                                </div>
                                <span className="font-bold text-sm">{opt.label}</span>
                            </div>
                            <span className="text-xs opacity-60 ml-6 block">{opt.sub}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Result Area */}
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 text-blue-400 font-bold uppercase text-xs tracking-widest mb-1">
                        <CheckCircle2 size={14} /> Preço Mínimo Sugerido
                    </div>
                    <p className="text-blue-200/60 text-xs max-w-[200px] leading-tight">
                        Já inclui suas contas, lucro da empresa e reserva de segurança.
                    </p>
                </div>
                <div className="text-center md:text-right">
                    <motion.div 
                        key={finalPrice}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tighter"
                    >
                        {formatCurrency(finalPrice)}
                    </motion.div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                <p className="text-xs text-gray-600">
                    *Cálculo baseado em estimativa de 100h produtivas/mês.
                </p>
                <button className="flex items-center gap-2 text-blue-400 hover:text-white font-bold text-sm transition-colors group">
                    <Calculator size={16} />
                    Quero fazer o cálculo detalhado (Avançado)
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Slide18_CalculatorQuick;