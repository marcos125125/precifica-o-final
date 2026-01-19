import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, ChevronRight, ChevronLeft, 
  DollarSign, Clock, Briefcase, Percent, CheckCircle, RefreshCw
} from 'lucide-react';

interface InputBlockProps {
    label: string;
    sub?: string;
    value: number;
    onChange: (val: number) => void;
}

const Slide19_CalculatorWizard: React.FC<SlideProps> = ({ isActive }) => {
  const [step, setStep] = useState(1);
  
  // State
  const [monthlyNeeds, setMonthlyNeeds] = useState(3000);
  const [businessCosts, setBusinessCosts] = useState(500);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(5);
  const [projectHours, setProjectHours] = useState(20);
  const [variableCosts, setVariableCosts] = useState(0);
  const [taxRate, setTaxRate] = useState(6);
  const [profitMargin, setProfitMargin] = useState(20);
  const [reserveMargin, setReserveMargin] = useState(10);

  // Calculations
  const weeksPerMonth = 4.33;
  const monthlyHours = daysPerWeek * hoursPerDay * weeksPerMonth;
  const monthlyTotal = monthlyNeeds + businessCosts;
  const hourlyRate = monthlyTotal / (monthlyHours || 1);
  const projectBaseCost = (hourlyRate * projectHours) + variableCosts;
  
  const totalMargin = taxRate + profitMargin + reserveMargin;
  const marginDecimal = totalMargin / 100;
  const finalPrice = marginDecimal >= 1 ? 0 : projectBaseCost / (1 - marginDecimal);

  const formatCurrency = (val: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      <div className="max-w-3xl w-full z-10 flex flex-col h-full md:h-auto justify-center">
        
        {/* Header & Progress */}
        <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3">
                        <Calculator className="text-[#ccff00]" />
                        Cálculo de Precisão
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">Passo {step} de {totalSteps}</p>
                </div>
                {step < totalSteps && (
                    <div className="text-[#ccff00] font-bold font-mono text-xl">
                        {formatCurrency(finalPrice)}
                    </div>
                )}
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-[#ccff00]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>

        {/* Wizard Content */}
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl min-h-[400px] flex flex-col relative overflow-hidden">
            
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div 
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6 text-blue-400">
                            <DollarSign size={24} />
                            <h3 className="text-xl font-bold text-white">Custos Mensais</h3>
                        </div>
                        <div className="space-y-6">
                            <InputBlock 
                                label="Custo de Vida (Salário)" 
                                sub="Quanto você precisa tirar limpo pra viver?"
                                value={monthlyNeeds} 
                                onChange={setMonthlyNeeds} 
                            />
                            <InputBlock 
                                label="Custos da Empresa" 
                                sub="Internet, software, contador, MEI..."
                                value={businessCosts} 
                                onChange={setBusinessCosts} 
                            />
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div 
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6 text-green-400">
                            <Clock size={24} />
                            <h3 className="text-xl font-bold text-white">Sua Capacidade</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Dias por semana</label>
                                <div className="flex gap-2">
                                    {[3, 4, 5, 6, 7].map(d => (
                                        <button 
                                            key={d}
                                            onClick={() => setDaysPerWeek(d)}
                                            className={`flex-1 py-3 rounded-lg font-bold transition-all ${daysPerWeek === d ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-500 hover:bg-gray-700'}`}
                                        >
                                            {d}d
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <InputBlock 
                                label="Horas Produtivas / Dia" 
                                sub="Seja realista. Ninguém produz 8h cheias."
                                value={hoursPerDay} 
                                onChange={setHoursPerDay} 
                            />
                            <div className="bg-gray-800/50 p-4 rounded-lg flex justify-between items-center text-sm">
                                <span className="text-gray-400">Suas horas mensais disponíveis:</span>
                                <span className="text-white font-bold text-lg">{Math.round(monthlyHours)}h</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div 
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6 text-purple-400">
                            <Briefcase size={24} />
                            <h3 className="text-xl font-bold text-white">Sobre o Projeto</h3>
                        </div>
                        <div className="space-y-6">
                            <InputBlock 
                                label="Horas Estimadas" 
                                sub="Reunião + Execução + Alterações"
                                value={projectHours} 
                                onChange={setProjectHours} 
                            />
                            <InputBlock 
                                label="Custos Extras (Variáveis)" 
                                sub="Plugins, imagens, transporte, freela..."
                                value={variableCosts} 
                                onChange={setVariableCosts} 
                            />
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div 
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 mb-6 text-orange-400">
                            <Percent size={24} />
                            <h3 className="text-xl font-bold text-white">Margens Inteligentes</h3>
                        </div>
                        <div className="space-y-6">
                            <InputBlock 
                                label="Impostos (%)" 
                                sub="MEI: ~6%. Simples: ~15%."
                                value={taxRate} 
                                onChange={setTaxRate} 
                            />
                            <InputBlock 
                                label="Lucro da Empresa (%)" 
                                sub="Para crescer e reinvestir."
                                value={profitMargin} 
                                onChange={setProfitMargin} 
                            />
                            <InputBlock 
                                label="Reserva de Emergência (%)" 
                                sub="Seu colchão de segurança."
                                value={reserveMargin} 
                                onChange={setReserveMargin} 
                            />
                            {totalMargin >= 100 && (
                                <p className="text-red-500 text-xs font-bold">A soma não pode passar de 100%!</p>
                            )}
                        </div>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div 
                        key="step5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 flex flex-col justify-center text-center"
                    >
                        <div className="mb-2 text-[#ccff00] flex justify-center">
                            <CheckCircle size={48} />
                        </div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">Preço Final Recomendado</h3>
                        
                        <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-8">
                            {formatCurrency(finalPrice)}
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-4 text-left space-y-2 max-w-sm mx-auto w-full">
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>Custo Base (Horas):</span>
                                <span>{formatCurrency(projectBaseCost)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>Margens e Impostos:</span>
                                <span>{formatCurrency(finalPrice - projectBaseCost)}</span>
                            </div>
                            <div className="w-full h-px bg-gray-700 my-2"></div>
                            <div className="flex justify-between text-white font-bold">
                                <span>Total:</span>
                                <span>{formatCurrency(finalPrice)}</span>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button 
                                onClick={() => setStep(1)}
                                className="text-gray-500 hover:text-white flex items-center gap-2 text-sm transition-colors"
                            >
                                <RefreshCw size={14} /> Recalcular
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex justify-between items-center border-t border-gray-800 pt-6">
                {step > 1 ? (
                    <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold">
                        <ChevronLeft size={18} /> Voltar
                    </button>
                ) : (
                    <div></div>
                )}

                {step < totalSteps && (
                    <button 
                        onClick={nextStep} 
                        className="flex items-center gap-2 bg-[#ccff00] hover:bg-[#b3e600] text-black px-6 py-3 rounded-xl font-bold transition-colors"
                    >
                        Próximo <ChevronRight size={18} />
                    </button>
                )}
            </div>

        </div>

      </div>
    </div>
  );
};

const InputBlock: React.FC<InputBlockProps> = ({ label, sub, value, onChange }) => (
    <div>
        <label className="flex justify-between items-end mb-2">
            <span className="text-gray-300 font-bold">{label}</span>
            <span className="text-gray-600 text-xs text-right hidden md:block">{sub}</span>
        </label>
        <input 
            type="number" 
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white font-bold focus:border-[#ccff00] focus:outline-none transition-colors"
        />
        <span className="text-gray-600 text-xs mt-1 md:hidden block">{sub}</span>
    </div>
);

export default Slide19_CalculatorWizard;