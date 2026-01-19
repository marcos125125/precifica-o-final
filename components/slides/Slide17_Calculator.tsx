import React, { useState, useEffect } from 'react';
import { SlideProps } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, 
  AlertTriangle, RefreshCw,
  TrendingUp,
  Brain, Target, PieChart, ShieldCheck,
  Car, Plane, Home, Utensils, BarChart3, Layers,
  XCircle, CheckCircle
} from 'lucide-react';

interface InputGroupProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  sub?: string;
  max?: number;
  isActive?: boolean;
  onFocus?: () => void;
  placeholder?: string;
}

const Slide17_Calculator: React.FC<SlideProps> = ({ isActive }) => {
  const [step, setStep] = useState(0); 
  const [activeMarginField, setActiveMarginField] = useState<'tax' | 'reserve' | 'profit' | 'fee'>('tax');

  // --- STATE ---
  // Etapa 1: Valor Hora
  const [monthlyNeeds, setMonthlyNeeds] = useState<number>(5000); 
  const [businessCosts, setBusinessCosts] = useState<number>(500); 
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [hoursPerDay, setHoursPerDay] = useState<number>(5); // Horas produtivas reais
  const weeksPerMonth = 4.33;

  // Etapa 2: Projeto
  const [projectHours, setProjectHours] = useState<number>(20);
  const [variableCosts, setVariableCosts] = useState<number>(0);

  // Etapa 4: Margens (%)
  const [taxRate, setTaxRate] = useState<number>(6); 
  const [reserveRate, setReserveRate] = useState<number>(10);
  const [profitRate, setProfitRate] = useState<number>(20);
  const [feeRate, setFeeRate] = useState<number>(0);

  // Etapa 5: Simulação
  const [manualPrice, setManualPrice] = useState<number>(0);
  const [projectsCount, setProjectsCount] = useState<number>(1); // Novo estado para quantidade de projetos

  // --- CÁLCULOS BASE ---
  const monthlyHours = daysPerWeek * hoursPerDay * weeksPerMonth; 
  const monthlyTotalLiquid = monthlyNeeds + businessCosts; // Meta Mensal (Salário + Custos Fixos)
  const minHourlyRateLiquid = monthlyTotalLiquid / (monthlyHours || 1); 

  // Custo base do projeto (Só para pagar as contas proporcionais às horas trabalhadas)
  const projectBaseCost = (minHourlyRateLiquid * projectHours) + variableCosts; 

  const totalMarginRate = taxRate + reserveRate + profitRate + feeRate;
  const marginDecimal = totalMarginRate / 100;
  
  // Preço Ideal (Gross Up)
  const idealPrice = marginDecimal >= 1 ? 0 : projectBaseCost / (1 - marginDecimal);

  // Breakdown values para o Recibo
  const taxAmount = idealPrice * (taxRate/100);
  const reserveAmount = idealPrice * (reserveRate/100);
  const profitAmount = idealPrice * (profitRate/100);
  const feeAmount = idealPrice * (feeRate/100);
  
  // --- SIMULADOR MANUAL ---
  const manualTax = manualPrice * (taxRate/100);
  const manualFees = manualPrice * (feeRate/100);
  
  // Valor Líquido que entra no caixa por projeto (Descontando impostos, taxas e custos variáveis do projeto)
  const netIncomePerProject = manualPrice - manualTax - manualFees - variableCosts;
  
  // Lucro/Prejuízo POR PROJETO (Comparado com o custo das horas usadas)
  // Se positivo: O preço cobre as horas trabalhadas + margem de lucro
  const projectProfitability = netIncomePerProject - (minHourlyRateLiquid * projectHours); 
  
  // --- CÁLCULOS DE ESCALA (MENSAL) ---
  const totalMonthlyNetIncome = netIncomePerProject * projectsCount; // O que entra limpo no mês
  const monthlyBalance = totalMonthlyNetIncome - monthlyTotalLiquid; // Entrou - Meta Mensal
  const monthlyProgress = Math.min((totalMonthlyNetIncome / monthlyTotalLiquid) * 100, 100);
  const projectsNeeded = Math.ceil(monthlyTotalLiquid / (netIncomePerProject || 1));

  useEffect(() => {
    if (step === 5 && manualPrice === 0) {
        setManualPrice(Math.ceil(idealPrice));
    }
  }, [step, idealPrice, manualPrice]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  // --- RENDER COMPONENTS ---

  const renderIntro = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center h-full text-center p-8"
    >
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-green-500"></div>
          
          <div className="inline-flex items-center gap-2 bg-blue-900/20 text-blue-400 border border-blue-800/50 px-4 py-2 rounded-full uppercase text-xs font-bold tracking-widest mb-8">
            <Brain size={14} /> Método de Valor
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            O preço do seu trabalho <br/>
            é o preço da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">sua vida.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Você não está apenas cobrando por "horas". Você está cobrando pela parcela do seu carro, pela viagem no fim do ano e pela casa própria.<br/><br/>
            Se você cobrar errado, quem paga a conta desses sonhos é <strong>você</strong>, não o cliente.
          </p>
          
          <button onClick={() => setStep(1)} className="group bg-white text-black font-black uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Definir Minha Meta de Vida <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
      </div>
    </motion.div>
  );

  const renderStep1 = () => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 h-full max-w-7xl mx-auto w-full p-4 md:p-8">
      <div className="w-full md:w-5/12 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/50">1</span>
              Seu Custo de Vida Real
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Quanto custa a vida <span className="text-blue-500">que você quer ter?</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                  Não coloque aqui apenas o valor do aluguel e comida. Coloque o valor da sua <strong>dignidade e dos seus sonhos</strong>.
              </p>
              
              <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg"><Car size={16} className="text-blue-400"/> Carro Novo</div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg"><Home size={16} className="text-blue-400"/> Casa Própria</div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg"><Plane size={16} className="text-blue-400"/> Viagens</div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 p-2 rounded-lg"><Utensils size={16} className="text-blue-400"/> Comer Bem</div>
              </div>

              <p className="text-sm border-l-2 border-blue-500 pl-4">
                  Se você quer ganhar R$ 2.000, esqueça tudo isso. Mas se você quer essas coisas, digite o valor real abaixo. O cliente <strong>precisa</strong> pagar por isso.
              </p>
          </div>
      </div>

      <div className="w-full md:w-7/12 bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-center shadow-2xl">
          <div className="space-y-8">
              <InputGroup 
                label="Salário Mensal para Realizar Sonhos" 
                sub="Soma: Contas + Lazer + Investimentos + Sonhos"
                value={monthlyNeeds} 
                onChange={setMonthlyNeeds} 
                placeholder="Ex: 5000" 
              />
              <InputGroup 
                label="Custos Fixos Operacionais" 
                sub="Softwares, internet, energia, contador..."
                value={businessCosts} 
                onChange={setBusinessCosts} 
                placeholder="Ex: 500" 
              />
              
              <div className="grid grid-cols-2 gap-6">
                  <InputGroup label="Dias/Semana" value={daysPerWeek} onChange={setDaysPerWeek} max={7} sub="Trabalho focado" />
                  <InputGroup label="Horas Produtivas/Dia" value={hoursPerDay} onChange={setHoursPerDay} max={12} sub="Sem contar almoço/insta" />
              </div>

              <div className="bg-blue-900/10 border border-blue-500/20 p-6 rounded-2xl flex justify-between items-center">
                  <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Custo Mínimo da Hora</p>
                      <p className="text-blue-200/60 text-xs">Para manter esse estilo de vida.</p>
                  </div>
                  <span className="text-4xl font-black text-white">{formatCurrency(minHourlyRateLiquid)}</span>
              </div>
          </div>
          
          <div className="flex justify-end mt-8">
             <button onClick={() => setStep(2)} className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors">
                Próximo Passo <ChevronRight size={18} />
             </button>
          </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 h-full max-w-7xl mx-auto w-full p-4 md:p-8">
      <div className="w-full md:w-5/12 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3 text-purple-500 font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-8 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50">2</span>
              O Projeto Específico
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              O tempo invisível e os <span className="text-purple-500">custos escondidos.</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                  Agora vamos aplicar seu custo de vida neste projeto. 
              </p>
              <ul className="space-y-2 text-sm border-l-2 border-purple-500/30 pl-4 my-4">
                  <li>• Reuniões de alinhamento contam como hora.</li>
                  <li>• Tempo de pesquisa conta como hora.</li>
                  <li>• Alterações do cliente contam como hora.</li>
              </ul>
              <p>
                  Lembre-se: Cada hora que você trabalha "de graça" é uma hora a menos que você tem para curtir a casa ou o carro que você quer comprar.
              </p>
          </div>
      </div>

      <div className="w-full md:w-7/12 bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-center shadow-2xl">
          <div className="space-y-8">
              <InputGroup 
                label="Horas Estimadas de Execução" 
                sub="Inclua reuniões, pesquisa e margem para alterações."
                value={projectHours} 
                onChange={setProjectHours} 
              />
              <InputGroup 
                label="Custos Extras (Variáveis)" 
                sub="Hospedagem, plugins, banco de imagens, transporte..."
                value={variableCosts} 
                onChange={setVariableCosts} 
              />
              
              <div className="bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl">
                  <div className="flex justify-between items-end mb-4">
                      <p className="text-purple-400 text-xs font-bold uppercase tracking-wider">Custo Base do Projeto</p>
                      <span className="text-3xl font-black text-white">{formatCurrency(projectBaseCost)}</span>
                  </div>
                  
                  <div className="bg-purple-900/20 rounded-lg p-3 space-y-1 text-xs text-purple-200/80 font-mono border border-purple-500/10">
                      <div className="flex justify-between">
                          <span>Sua Hora ({formatCurrency(minHourlyRateLiquid)}) x {projectHours}h</span>
                          <span>{formatCurrency(minHourlyRateLiquid * projectHours)}</span>
                      </div>
                      {variableCosts > 0 && (
                          <div className="flex justify-between text-white">
                              <span>+ Custos Extras</span>
                              <span>{formatCurrency(variableCosts)}</span>
                          </div>
                      )}
                      <div className="h-px bg-purple-500/20 my-1"></div>
                      <div className="text-[10px] opacity-60 text-center">
                          Baseado no custo mensal de {formatCurrency(monthlyTotalLiquid)} ÷ {Math.round(monthlyHours)}h
                      </div>
                  </div>

                  <div className="h-px bg-purple-500/20 my-4"></div>
                  <p className="text-purple-200/60 text-xs flex items-center gap-2">
                      <AlertTriangle size={12} className="text-purple-500"/>
                      Isso é o MÍNIMO para não ter prejuízo. Se cobrar isso, você paga as contas daquelas horas, mas não cresce.
                  </p>
              </div>
          </div>

          <div className="flex justify-between mt-8">
              <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white font-bold px-6 py-4 flex items-center gap-2"><ChevronLeft size={18} /> Voltar</button>
              <button onClick={() => setStep(3)} className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors">
                Entender a Mágica <ChevronRight size={18} />
             </button>
          </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto w-full p-4 md:p-8">
        <div className="text-center mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 px-4 py-1 rounded-full uppercase text-xs font-bold tracking-widest mb-6">
                <AlertTriangle size={14} /> Momento Crítico de Aprendizado
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">A Matemática que Quebra Empresas</h2>
            <p className="text-gray-400 text-lg">
                Aqui é onde 90% dos profissionais perdem dinheiro sem saber. <br/>
                Existe uma diferença brutal entre <strong className="text-red-500">Markup (Somar)</strong> e <strong className="text-green-500">Gross Up (Dividir)</strong>.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><AlertTriangle size={100} /></div>
                <h3 className="text-red-500 font-black text-2xl mb-4 flex items-center gap-2"><XCircle/> O Jeito Errado (Markup)</h3>
                <p className="text-gray-300 mb-6 min-h-[60px]">
                    "Meu custo é R$ 1.000. Quero pagar 10% de imposto e lucrar 20%. Então vou somar 30%."
                </p>
                <div className="bg-black/40 p-6 rounded-xl font-mono text-sm space-y-2 border border-red-900/20">
                    <div className="flex justify-between text-gray-500"><span>Custo:</span> <span>1.000</span></div>
                    <div className="flex justify-between text-red-400"><span>+ 30% (300):</span> <span>1.300</span></div>
                    <div className="h-px bg-gray-700 my-2"></div>
                    <div className="flex justify-between text-white font-bold text-lg"><span>Preço Final:</span> <span>1.300</span></div>
                </div>
                <div className="mt-6 p-4 bg-red-900/20 rounded-xl border border-red-500/20">
                    <p className="text-red-200 text-sm font-bold mb-2">Onde está o erro?</p>
                    <p className="text-red-300/80 text-xs leading-relaxed">
                        Quando você emite a nota de R$ 1.300, o imposto e as taxas incidem sobre os <strong>1.300</strong>, não sobre os 1.000. 
                        <br/><br/>
                        30% de 1.300 = 390. <br/>
                        1.300 - 390 = <strong>910</strong>.
                        <br/><br/>
                        <span className="text-white font-bold bg-red-600 px-1">VOCÊ RECEBEU MENOS QUE SEU CUSTO (1.000).</span> PREJUÍZO.
                    </p>
                </div>
            </div>

            <div className="bg-green-950/10 border border-green-900/30 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={100} /></div>
                <h3 className="text-green-500 font-black text-2xl mb-4 flex items-center gap-2"><CheckCircle/> O Jeito Certo (Gross Up)</h3>
                <p className="text-gray-300 mb-6 min-h-[60px]">
                    "Vou usar a matemática inversa. Se quero que sobre 70% (100% - 30%), preciso dividir pelo fator inverso (0.7)."
                </p>
                <div className="bg-black/40 p-6 rounded-xl font-mono text-sm space-y-2 border border-green-900/20">
                    <div className="flex justify-between text-gray-500"><span>Custo:</span> <span>1.000</span></div>
                    <div className="flex justify-between text-green-400"><span>Conta:</span> <span>1.000 / 0.7</span></div>
                    <div className="h-px bg-gray-700 my-2"></div>
                    <div className="flex justify-between text-white font-bold text-lg"><span>Preço Final:</span> <span>1.428</span></div>
                </div>
                <div className="mt-6 p-4 bg-green-900/20 rounded-xl border border-green-500/20">
                    <p className="text-green-200 text-sm font-bold mb-2">A Prova Real:</p>
                    <p className="text-green-300/80 text-xs leading-relaxed">
                        Preço na nota: 1.428.<br/>
                        Descontos (30%): 428.<br/>
                        1.428 - 428 = <strong>1.000</strong>.
                        <br/><br/>
                        <span className="text-black font-bold bg-green-500 px-1">SOBROU EXATAMENTE SEU CUSTO.</span> CONTA FECHADA.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex justify-between w-full mt-8 pt-4 border-t border-gray-800">
            <button onClick={() => setStep(2)} className="text-gray-500 hover:text-white font-bold px-6 py-4 flex items-center gap-2"><ChevronLeft size={18} /> Voltar</button>
            <button onClick={() => setStep(4)} className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors">
                Entendi, vamos calcular <ChevronRight size={18} />
            </button>
        </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 h-full max-w-7xl mx-auto w-full p-4 md:p-8">
      <div className="w-full md:w-5/12 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3 text-orange-500 font-bold uppercase tracking-widest text-sm">
              <span className="w-8 h-8 rounded-full bg-orange-900/30 flex items-center justify-center border border-orange-500/50">4</span>
              Blindagem Financeira
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              O que você vai <span className="text-orange-500">adicionar</span> ao preço?
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                  Aqui é onde você garante que vai sobrar dinheiro para crescer.
              </p>
              <div className="space-y-3">
                  <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-red-500">
                      <strong className="text-white block text-sm uppercase mb-1">Impostos & Taxas</strong>
                      <span className="text-sm">O governo e a maquininha de cartão são seus sócios. Se você não cobrar isso do cliente, sai do seu bolso.</span>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-blue-500">
                      <strong className="text-white block text-sm uppercase mb-1">Reserva de Segurança</strong>
                      <span className="text-sm">Isso paga suas férias, ou te segura se você ficar doente.</span>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg border-l-4 border-green-500">
                      <strong className="text-white block text-sm uppercase mb-1">Lucro Real</strong>
                      <span className="text-sm">Isso é o que faz você trocar de carro e sair do aperto. É o crescimento patrimonial.</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="w-full md:w-7/12 bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-center shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <InputGroup 
                label="Imposto (MEI/Simples)" 
                sub="MEI ~0%, Simples ~6% a 15%"
                value={taxRate} 
                onChange={setTaxRate} 
                max={100} 
                isActive={activeMarginField === 'tax'} 
                onFocus={() => setActiveMarginField('tax')} 
              />
              <InputGroup 
                label="Taxas (Cartão/Plataforma)" 
                sub="Stripe, PayPal, Boleto..."
                value={feeRate} 
                onChange={setFeeRate} 
                max={100} 
                isActive={activeMarginField === 'fee'} 
                onFocus={() => setActiveMarginField('fee')} 
              />
              <InputGroup 
                label="Reserva de Segurança" 
                sub="Recomendado: 10% a 20%"
                value={reserveRate} 
                onChange={setReserveRate} 
                max={100} 
                isActive={activeMarginField === 'reserve'} 
                onFocus={() => setActiveMarginField('reserve')} 
              />
              <InputGroup 
                label="Lucro da Empresa" 
                sub="Seu crescimento real."
                value={profitRate} 
                onChange={setProfitRate} 
                max={100} 
                isActive={activeMarginField === 'profit'} 
                onFocus={() => setActiveMarginField('profit')} 
              />
          </div>

          {totalMarginRate >= 100 ? (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200 text-sm font-bold text-center animate-pulse">
                  <AlertTriangle className="inline mr-2"/>
                  A soma das margens não pode passar de 100%. O preço seria infinito.
              </div>
          ) : (
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Margem Total (Divisor)</p>
                  <p className="text-3xl font-black text-white">{totalMarginRate}%</p>
                  <p className="text-gray-500 text-xs mt-1">Fator de divisão: {(1 - marginDecimal).toFixed(2)}</p>
              </div>
          )}

          <div className="flex justify-between mt-8">
              <button onClick={() => setStep(3)} className="text-gray-500 hover:text-white font-bold px-6 py-4 flex items-center gap-2"><ChevronLeft size={18} /> Voltar</button>
              <button onClick={() => setStep(5)} disabled={totalMarginRate >= 100} className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Gerar Preço Final <Target size={18} />
             </button>
          </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="h-full w-full max-w-7xl mx-auto p-4 md:p-8 pb-24 overflow-y-auto">
      
      {/* 1. MAIN PRICE HEADER */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/30 px-4 py-1.5 rounded-full uppercase text-xs font-bold tracking-widest mb-6">
            <Target size={14} /> Cálculo Finalizado
        </div>
        <p className="text-gray-400 font-medium text-lg mb-2">
            Para cobrir seus custos de <strong className="text-white">{formatCurrency(projectBaseCost)}</strong> e garantir suas margens, você deve cobrar:
        </p>
        <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4"
        >
            {formatCurrency(idealPrice)}
        </motion.div>
        
        <div className="bg-[#111] border border-gray-800 rounded-xl p-4 max-w-2xl text-gray-400 text-sm leading-relaxed">
            <p>
                Este valor não é caro. É o valor <strong>justo</strong>. <br/>
                Ele garante que você paga suas contas pessoais (das horas trabalhadas), cobre os custos do projeto, paga o governo e ainda sobra dinheiro no caixa da empresa.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* 2. RECEIPT BREAKDOWN */}
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col h-full">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3 border-b border-gray-800 pb-4">
                  <div className="bg-gray-800 p-2 rounded-lg"><PieChart size={20} className="text-white"/></div>
                  Destino do dinheiro (Por Projeto)
              </h3>
              
              <div className="space-y-4 flex-1">
                  <div className="group">
                      <div className="flex justify-between items-center text-gray-300 font-medium mb-1">
                          <span>1. Custo Operacional (Você)</span>
                          <span className="text-white">{formatCurrency(projectBaseCost)}</span>
                      </div>
                      <p className="text-gray-600 text-xs">Paga seu salário mensal proporcional a este projeto.</p>
                  </div>
                  
                  <div className="w-full h-px bg-gray-800"></div>

                  <div className="space-y-3">
                      <div className="flex justify-between items-center text-green-500">
                          <span className="flex items-center gap-2">2. Lucro Líquido <span className="text-[10px] bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">{profitRate}%</span></span>
                          <span className="font-bold">+ {formatCurrency(profitAmount)}</span>
                      </div>
                      <div className="flex justify-between items-center text-blue-400">
                          <span className="flex items-center gap-2">3. Reserva de Caixa <span className="text-[10px] bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">{reserveRate}%</span></span>
                          <span className="font-bold">+ {formatCurrency(reserveAmount)}</span>
                      </div>
                      <div className="flex justify-between items-center text-red-400">
                          <span className="flex items-center gap-2">4. Impostos e Taxas <span className="text-[10px] bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">{taxRate + feeRate}%</span></span>
                          <span className="font-bold">+ {formatCurrency(taxAmount + feeAmount)}</span>
                      </div>
                  </div>

                  <div className="mt-auto pt-6 border-t-2 border-gray-700">
                      <div className="flex justify-between items-center text-white text-xl font-black">
                          <span>TOTAL DA NOTA</span>
                          <span>{formatCurrency(idealPrice)}</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* 3. FREEDOM SIMULATOR (UPDATED LOGIC) */}
          <div className="bg-gray-900 border border-gray-700 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="mb-8">
                  <h3 className="text-white font-bold text-xl flex items-center gap-3 mb-2">
                      <TrendingUp size={20} className="text-[#ccff00]"/> Simulador de Meta Mensal
                  </h3>
                  <p className="text-gray-400 text-sm">
                      O preço do projeto está certo. Mas quantos você precisa vender para viver?
                  </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                      <label className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3 block">Preço por Projeto</label>
                      <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">R$</span>
                          <input 
                            type="number" 
                            value={manualPrice} 
                            onChange={(e) => setManualPrice(Number(e.target.value))}
                            className="w-full bg-black border-2 border-gray-600 rounded-2xl py-4 pl-10 pr-4 text-center text-2xl font-black text-white focus:border-[#ccff00] outline-none transition-colors"
                          />
                      </div>
                  </div>
                  <div>
                      <label className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3 block">Projetos / Mês</label>
                      <div className="relative">
                          <input 
                            type="number" 
                            value={projectsCount} 
                            onChange={(e) => setProjectsCount(Math.max(1, Number(e.target.value)))}
                            className="w-full bg-black border-2 border-gray-600 rounded-2xl py-4 px-4 text-center text-2xl font-black text-white focus:border-[#ccff00] outline-none transition-colors"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-bold uppercase"><Layers size={14}/></span>
                      </div>
                  </div>
              </div>

              {/* Monthly Goal Visualization */}
              <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                      <span className="text-gray-400">Progresso da Meta Mensal</span>
                      <span className={monthlyBalance >= 0 ? "text-[#ccff00]" : "text-gray-400"}>
                          {Math.round(monthlyProgress)}%
                      </span>
                  </div>
                  <div className="w-full bg-black h-3 rounded-full overflow-hidden border border-gray-700">
                      <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${monthlyProgress}%` }}
                          className={`h-full ${monthlyBalance >= 0 ? 'bg-[#ccff00]' : 'bg-blue-600'}`}
                      />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono">
                      <span>Entrada Líquida: {formatCurrency(totalMonthlyNetIncome)}</span>
                      <span>Meta: {formatCurrency(monthlyTotalLiquid)}</span>
                  </div>
              </div>

              {/* Dynamic Feedback Box */}
              <div className={`p-6 rounded-2xl border transition-all ${projectProfitability >= 0 ? 'bg-gray-800/50 border-gray-700' : 'bg-red-900/20 border-red-500/30'}`}>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-3 mb-4">
                      {projectProfitability < 0 ? (
                          <div className="bg-red-500 text-white p-2 rounded-full"><AlertTriangle size={20}/></div>
                      ) : monthlyBalance >= 0 ? (
                          <div className="bg-[#ccff00] text-black p-2 rounded-full"><ShieldCheck size={20}/></div>
                      ) : (
                          <div className="bg-blue-500 text-white p-2 rounded-full"><BarChart3 size={20}/></div>
                      )}
                      
                      <div>
                          <p className={`font-black uppercase text-sm ${projectProfitability < 0 ? 'text-red-400' : 'text-white'}`}>
                              {projectProfitability < 0 ? 'Prejuízo no Projeto' : monthlyBalance >= 0 ? 'Liberdade Financeira' : 'Projeto Lucrativo (Escalar)'}
                          </p>
                          <p className="text-gray-400 text-xs mt-0.5">
                              {monthlyBalance >= 0 
                                ? "Você paga tudo e sobra caixa." 
                                : `Faltam ${formatCurrency(Math.abs(monthlyBalance))} para a meta.`}
                          </p>
                      </div>
                  </div>

                  {/* Impact Text - REALITY CHECK */}
                  <div className="text-sm leading-relaxed text-gray-300">
                      {projectProfitability < 0 ? (
                          <p>
                              <strong className="text-red-400">PARE.</strong> Você está pagando para trabalhar. A cada projeto fechado nesse valor, sua empresa perde dinheiro. Aumente o preço imediatamente.
                          </p>
                      ) : monthlyBalance >= 0 ? (
                          <p>
                              <strong className="text-[#ccff00]">Excelente!</strong> Com {projectsCount} projetos, você cobre seu salário de {formatCurrency(monthlyNeeds)}, paga os custos da empresa e ainda lucra. Você venceu o jogo da precificação.
                          </p>
                      ) : (
                          <p>
                              O preço do projeto está ótimo (tem lucro). Porém, o <strong>volume</strong> ainda não paga sua vida de {formatCurrency(monthlyNeeds)}.
                              <br/><br/>
                              Você precisa fechar <strong className="text-white">{projectsNeeded} projetos</strong> nesse valor para viver exclusivamente disso. Foco em vendas!
                          </p>
                      )}
                  </div>
              </div>
          </div>

      </div>

      <div className="flex justify-center gap-4 pt-8 pb-12">
         <button onClick={() => setStep(0)} className="text-gray-500 hover:text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors text-sm">
            <RefreshCw size={16} /> Reiniciar Mentoria
         </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full z-10 h-full flex flex-col">
        
        {/* Progress Bar (Only visible after intro) */}
        {step > 0 && (
            <div className="w-full h-2 bg-gray-900 shrink-0">
                <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600 to-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                />
            </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                >
                    {step === 0 && renderIntro()}
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderStep5()}
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

// Sub-components
const InputGroup: React.FC<InputGroupProps> = ({ label, value, onChange, sub, max, isActive, onFocus, placeholder }) => (
    <div 
        className={`bg-[#1a1a1a] p-5 rounded-2xl border transition-all group cursor-text relative overflow-hidden ${isActive ? 'border-blue-500 ring-1 ring-blue-500/50 bg-gray-900' : 'border-gray-800 hover:border-gray-700'}`}
        onClick={onFocus}
    >   
        {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>}
        
        <div className="flex flex-col mb-3">
            <label className={`text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>{label}</label>
            {sub && <span className="text-[10px] text-gray-600 mt-1">{sub}</span>}
        </div>
        <input 
            type="number" 
            value={value} 
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            onFocus={onFocus}
            max={max}
            placeholder={placeholder}
            className="w-full bg-transparent text-3xl font-bold text-white outline-none placeholder-gray-700"
        />
    </div>
);

export default Slide17_Calculator;