import React, { useRef, useEffect } from 'react';
import { SlideProps } from '../../types';
import { motion } from 'framer-motion';
import { MessageSquare, Check, ChevronLeft, Video, Phone, MoreVertical, Signal, Wifi, Battery, Paperclip, FileText, ArrowDown } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'me' | 'them';
  time: string;
  text: string;
  type?: 'text' | 'file' | 'image';
  meta?: string;
}

interface DayConversation {
  date: string;
  messages: ChatMessage[];
}

const Slide44_FullConversation: React.FC<SlideProps> = ({ isActive }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top initially to read from start
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = 0; 
    }
  }, [isActive]);

  const conversation: DayConversation[] = [
    {
      date: "Segunda-feira",
      messages: [
        {
          id: 1,
          sender: "me",
          time: "09:30",
          text: "Oi Carolina! Tudo bem?\n\nEncontrei a Clínica Renovar no Google Maps procurando clínicas de estética em Curitiba. Adorei a estrutura do espaço nas fotos — dá pra ver que vocês investem na experiência do cliente.\n\nEntrei no site para conhecer os tratamentos e notei que ele não está responsivo para celular (o menu fica cortado e as fotos demoram para carregar). Isso pode estar custando agendamentos, já que 78% das buscas de \"clínica estética Curitiba\" vêm do mobile.\n\nTrabalho com desenvolvimento de sites para clínicas de saúde e estética, e identifiquei 3 oportunidades rápidas que poderiam aumentar seus agendamentos online."
        },
        {
          id: 2,
          sender: "them",
          time: "14:20",
          text: "Oi! Tudo sim, obrigada 😊\n\nQue legal! Não tinha reparado isso do celular não. A gente recebe bastante reclamação que o site é meio \"travado\" mas achava que era internet dos clientes rs"
        },
        {
          id: 3,
          sender: "me",
          time: "14:23",
          text: "Pois é! Isso é super comum. O problema é que sites antigos não foram feitos pensando em mobile, então no celular fica mesmo uma navegação ruim.\n\nOlha, tomei a liberdade de fazer algo pra você. Como trabalho especificamente com clínicas de estética, desenhei como ficaria a primeira dobra do site da Renovar otimizada para conversão.\n\nReorganizei as informações priorizando agendamento, coloquei botões de WhatsApp estratégicos e deixei tudo responsivo. Hospedei em um link privado pra você poder testar no celular — os botões funcionam e tudo.\n\nPosso te mandar o link pra você dar uma olhada? Sem compromisso, é só pra você ter uma ideia do potencial mesmo!"
        },
        {
          id: 4,
          sender: "them",
          time: "14:25",
          text: "Nossa, sério? Você fez isso? 😮\n\nPode mandar sim! Fiquei curiosa agora haha"
        },
        {
          id: 5,
          sender: "me",
          time: "14:26",
          text: "Segue o link!\n\nhttps://prototipos.seusite.com.br/renovar-demo\n\nDá uma olhada com calma e me fala o que achou. Os botões de WhatsApp funcionam, então você pode clicar pra testar a experiência completa. Testa no celular também pra ver a diferença!\n\nQualquer dúvida, estou por aqui 😊"
        },
        {
          id: 6,
          sender: "them",
          time: "14:45",
          text: "Caraca, que diferença! 😱\n\nFicou muito mais limpo e profissional. E no celular realmente funciona super bem. Até minha sócia aqui olhou e adorou.\n\nA gente tava pensando em reformar o site faz tempo mas nunca sabia por onde começar"
        },
        {
          id: 7,
          sender: "me",
          time: "14:47",
          text: "Que bom que gostou, Carolina! Fico muito feliz 😊\n\nEssa estrutura foi pensada especificamente pra resolver aqueles 3 pontos que comentei:\n\n✅ Responsividade - 100% funcional no mobile\n✅ Velocidade - Carregamento otimizado\n✅ Conversão - Botões estratégicos pra facilitar agendamento\n\nSe fizer sentido implementar o site completo com essa mesma qualidade (e até evoluir algumas coisas que ainda não coloquei no protótipo), posso fechar o projeto com vocês.\n\nQuer que eu prepare uma proposta formal ou prefere conversar antes sobre como seria o processo?"
        },
        {
          id: 8,
          sender: "them",
          time: "15:10",
          text: "Acho melhor a gente conversar antes. Até porque não sei nem quanto custa uma coisa dessas rs\n\nO que você precisaria saber pra montar uma proposta?"
        },
        {
          id: 9,
          sender: "me",
          time: "15:12",
          text: "Perfeito! Pra te passar um valor justo e uma proposta certinha pra realidade da Renovar, preciso entender melhor algumas coisas:\n\n1. Além do site institucional, vocês querem integrar agendamento online direto? (tipo um calendário onde o cliente escolhe horário)\n2. Vão precisar de área de blog pra conteúdo educativo? (isso ajuda muito no SEO)\n3. Quantos procedimentos/serviços vocês oferecem que precisam estar no site?\n4. Tem preferência de prazo de entrega?\n\nCom essas respostas consigo montar uma proposta sob medida 😊"
        },
        {
          id: 10,
          sender: "them",
          time: "15:20",
          text: "Deixa eu responder:\n\n1. Agendamento online seria o SONHO! Hoje a gente perde muito tempo com ligação pra marcar horário. Mas não sei se não ia ficar muito caro isso\n2. Blog acho legal sim, a gente tá sempre postando dica no Instagram, seria bom ter no site também\n3. São 12 procedimentos principais (limpeza de pele, peeling, preenchimento, etc)\n4. Prazo não sei bem... quanto tempo demora normalmente?"
        },
        {
          id: 11,
          sender: "me",
          time: "15:25",
          text: "Ótimo! Vou te explicar como funciona:\n\nSobre o agendamento online:\nNão fica caro não! Na verdade economiza MUITO tempo de vocês. Integro com Google Calendar ou sistema próprio. O cliente escolhe procedimento, data e horário disponível. Vocês só confirmam depois.\n\nSobre o prazo:\nPra um projeto completo como o de vocês, normalmente 20-25 dias úteis. Mas posso entregar em fases:\n\n🔹 Fase 1 (10 dias): Site responsivo funcionando\n🔹 Fase 2 (15 dias): Agendamento online integrado\n🔹 Fase 3 (20 dias): Blog e otimizações finais\n\nAssim vocês já vão tendo resultado enquanto finalizo tudo.\n\nFaz sentido?"
        },
        {
          id: 12,
          sender: "them",
          time: "15:35",
          text: "Faz sentido sim!\n\nE quanto ficaria tudo isso? Pode falar sem medo, a gente sabe que qualidade tem preço rs"
        },
        {
          id: 13,
          sender: "me",
          time: "15:38",
          text: "Então, vou estruturar direitinho pra você:\n\n📋 PROJETO COMPLETO:\n✅ Site institucional responsivo (7 páginas principais)\n✅ 12 páginas de procedimentos otimizadas\n✅ Sistema de agendamento online integrado\n✅ Área de blog com 5 artigos iniciais\n✅ Integração WhatsApp Business\n✅ SEO local otimizado desde o início\n✅ Treinamento pra equipe usar o sistema\n✅ 3 meses de suporte técnico incluso\n\n💰 Investimento: R$ 8.900\n(Posso parcelar em até 3x sem juros ou 6x com juros baixos)\n\nTá dentro do orçamento de vocês?"
        },
        {
          id: 14,
          sender: "them",
          time: "15:55",
          text: "Olha, o valor tá até dentro do que a gente imaginava. Mas vou precisar conversar com minha sócia antes de bater o martelo.\n\nVocê consegue segurar essa proposta até amanhã? A gente vai sentar hoje à noite pra decidir"
        },
        {
          id: 15,
          sender: "me",
          time: "15:57",
          text: "Claro que sim, Carolina! Super tranquilo 😊\n\nPra facilitar a conversa com sua sócia, vou te mandar um resumo executivo com:\n\n• O diagnóstico do site atual\n• As oportunidades identificadas (+ o impacto esperado)\n• O que está incluso no projeto\n• Forma de pagamento\n\nTe mando em PDF certinho pra vocês analisarem juntas. Tem alguma dúvida específica que posso esclarecer antes?"
        },
        {
          id: 16,
          sender: "them",
          time: "16:00",
          text: "Acho que não... só uma coisa: e depois que o site ficar pronto, se a gente quiser mudar algo, como funciona?\nPorque às vezes a gente muda preço de procedimento, lança promoção, essas coisas"
        },
        {
          id: 17,
          sender: "me",
          time: "16:02",
          text: "Ótima pergunta! Funciona assim:\n\nDurante os 3 meses de suporte (incluso):\n• Alterações de texto, preços, fotos: ILIMITADAS e sem custo\n• Vocês mesmas conseguem editar via painel (vou treinar a equipe)\n• Suporte técnico por WhatsApp de seg a sex\n\nDepois dos 3 meses:\n• Ofereço plano de manutenção mensal (R$ 390/mês)\n• Ou alterações avulsas sob demanda (a partir de R$ 150)\n\nMas na prática, depois do treinamento, vocês vão conseguir fazer 80% das alterações sozinhas pelo painel. É bem intuitivo!"
        },
        {
          id: 18,
          sender: "them",
          time: "16:08",
          text: "Perfeito! Isso me deixou bem mais tranquila.\n\nVou conversar com a Juliana (minha sócia) e amanhã te dou um retorno. Você trabalha com contrato e tudo certinho né?"
        },
        {
          id: 19,
          sender: "me",
          time: "16:10",
          text: "Sim! Trabalho tudo formal:\n\n• Contrato detalhando escopo, prazos e valores\n• Nota fiscal de serviço\n• Garantia de 90 dias contra bugs\n\nVou montar o contrato e o resumo executivo e te envio ainda hoje pra você olhar com calma. Assim amanhã, se vocês decidirem seguir, a gente já acelera o processo!\n\nQualquer dúvida que surgir, só me chamar. Estou à disposição 😊"
        },
        {
          id: 20,
          sender: "them",
          time: "16:12",
          text: "Perfeito! Obrigada pela atenção e pela paciência 🙏\nAmanhã converso com você!"
        },
        {
          id: 21,
          sender: "me",
          time: "16:30",
          text: "Segue o material que prometi! Qualquer coisa, estou por aqui 😊",
          type: "file",
          meta: "Proposta_Renovar_Site.pdf"
        }
      ]
    },
    {
      date: "Terça-feira",
      messages: [
        {
          id: 22,
          sender: "them",
          time: "10:45",
          text: "Bom dia!\n\nConversamos ontem à noite e decidimos fechar com você! Adoramos a proposta e principalmente a forma como você explicou tudo. Deu pra ver que entende do assunto.\n\nComo a gente faz pra começar?"
        },
        {
          id: 23,
          sender: "me",
          time: "10:48",
          text: "AHHH QUE NOTÍCIA BOA! 🎉\n\nMuito obrigado pela confiança, Carolina! Vocês vão ver que foi a melhor decisão. Vou me dedicar pra entregar algo que vai fazer diferença real no dia a dia da clínica.\n\nPróximos passos:\n1. Te envio o contrato agora pela manhã\n2. Vocês assinam e fazem o primeiro pagamento (entrada de 40% = R$ 3.560)\n3. Já agendo uma call de kickoff pra amanhã ou quinta pra alinhar detalhes e pegar materiais (logo, fotos, textos)\n4. Inicio o desenvolvimento imediatamente\n\nForma de pagamento:\n40% na assinatura (R$ 3.560)\n40% na entrega da Fase 1 (R$ 3.560)\n20% na entrega final (R$ 1.780)\n\nPode ser assim? Aceito PIX, transferência ou cartão (este com pequena taxa)"
        },
        {
          id: 24,
          sender: "them",
          time: "11:00",
          text: "Perfeito! Vamos de PIX mesmo que é mais rápido.\n\nPode mandar o contrato. A gente assina hoje e já faz o primeiro pagamento pra gente acelerar isso logo! 😊"
        },
        {
          id: 25,
          sender: "me",
          time: "11:05",
          text: "Maravilha! Vou enviar tudo agora.\n\n📎 Documentos que vou te mandar:\n• Contrato de Prestação de Serviços (PDF)\n• Briefing para preenchimento (Google Forms)\n• Checklist de materiais necessários\n• Cronograma detalhado do projeto\n\nAssim que confirmarem o pagamento, bloqueio vocês na minha agenda e a gente decola! 🚀\n\nBem-vindas ao time de clientes! Vocês vão amar o resultado 💙"
        },
        {
          id: 26,
          sender: "them",
          time: "14:30",
          text: "Pagamento feito! ✅\n\n[envia comprovante]\n\nContrato assinado e briefing preenchido também. Ansiosa pra ver isso sair do papel!",
          type: "image"
        },
        {
          id: 27,
          sender: "me",
          time: "14:35",
          text: "RECEBIDO! 🎉\n\nPagamento confirmado aqui. Vou emitir a NF e te envio até amanhã.\n\nAcabei de bloquear quinta-feira 14h pra nossa call de kickoff. Te mando o link do Google Meet amanhã.\n\nEnquanto isso, já vou:\n✅ Estudar o briefing\n✅ Preparar as primeiras telas\n✅ Estruturar a arquitetura do site\n\nNos falamos quinta! Prepara aí as fotos dos procedimentos que vamos precisar 📸\n\nObrigado novamente pela confiança! Vai ficar incrível 💙"
        }
      ]
    }
  ];

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col md:flex-row overflow-hidden font-sans">
      
      {/* Left Panel: Summary & Takeaways */}
      <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center border-r border-gray-200 bg-white relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
                <MessageSquare size={14} /> Estudo de Caso
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none mb-2">
                DO "OI" <br/>AO <span className="text-[#25D366]">PIX</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg">
                Conversa real: 2 dias de negociação.
            </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
        >
            <div className="bg-gray-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-gray-900 text-sm uppercase mb-4 flex items-center gap-2">
                    Pontos Chave da Conversa:
                </h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check size={16} className="text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">Entrega de valor antes do preço (O site no link privado).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check size={16} className="text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">Respostas rápidas e consultivas nas dúvidas técnicas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check size={16} className="text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">Resumo executivo para facilitar a venda interna aos sócios.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check size={16} className="text-green-600 mt-0.5" />
                        <span className="text-gray-600 text-sm">Fechamento assumptivo ("Vou mandar o contrato").</span>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-3 text-gray-400 text-sm animate-pulse">
                <ArrowDown size={16} />
                <span>Role a tela do celular para ler tudo</span>
            </div>
        </motion.div>
      </div>

      {/* Right Panel: iPhone Mockup */}
      <div className="w-full md:w-7/12 bg-gray-100 flex items-center justify-center p-4 md:p-8 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"></div>

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 scale-[0.85] md:scale-95 origin-center h-full max-h-[850px] flex flex-col justify-center"
        >
             <div className="w-[380px] h-[780px] bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-300 relative mx-auto">
                
                {/* Buttons */}
                <div className="absolute top-24 -left-[2px] w-[2px] h-6 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-52 -left-[2px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
                <div className="absolute top-36 -right-[2px] w-[2px] h-16 bg-gray-600 rounded-r-md"></div>

                {/* Screen Area */}
                <div className="w-full h-full bg-[#E5DDD5] rounded-[3rem] overflow-hidden flex flex-col relative">
                    
                    {/* Wallpaper Pattern */}
                    <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>

                    {/* Status Bar */}
                    <div className="h-12 bg-[#075E54] w-full flex justify-between items-end px-6 pb-3 z-20 text-white shrink-0">
                        <span className="text-[12px] font-semibold">14:35</span>
                        <div className="flex gap-1 items-center">
                            <Signal size={12} />
                            <Wifi size={12} />
                            <Battery size={14} />
                        </div>
                    </div>

                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between text-white z-20 shadow-md shrink-0">
                        <div className="flex items-center gap-2">
                            <ChevronLeft size={24} />
                            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs overflow-hidden">
                                <span className="text-xs">C</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base leading-tight">Carolina (Renovar)</span>
                                <span className="text-[11px] opacity-80 leading-tight">Online</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Video size={20} />
                            <Phone size={20} />
                            <MoreVertical size={20} />
                        </div>
                    </div>

                    {/* Chat Area - Scrollable */}
                    <div 
                        ref={scrollRef}
                        className="flex-1 p-4 overflow-y-auto relative z-10 flex flex-col pt-4 scroll-smooth"
                    >
                        {conversation.map((day, dIndex) => (
                            <React.Fragment key={dIndex}>
                                <div className="self-center bg-[#DCF8C6] shadow-sm px-3 py-1 rounded-lg mb-6 opacity-90 sticky top-0 z-10 text-[11px] text-gray-600 font-medium border border-gray-200">
                                    {day.date}
                                </div>

                                {day.messages.map((msg) => (
                                    <div 
                                        key={msg.id}
                                        className={`max-w-[85%] mb-3 p-3 rounded-xl shadow-sm relative ${
                                            msg.sender === 'me' 
                                            ? 'bg-[#dcf8c6] self-end rounded-tr-none' 
                                            : 'bg-white self-start rounded-tl-none'
                                        }`}
                                    >
                                        {msg.type === 'file' && (
                                            <div className="flex items-center gap-3 bg-black/5 p-2 rounded-lg mb-2">
                                                <div className="bg-red-500 text-white p-2 rounded">
                                                    <FileText size={16} />
                                                </div>
                                                <span className="text-xs font-medium truncate max-w-[150px] text-gray-700">{msg.meta}</span>
                                            </div>
                                        )}
                                        {msg.type === 'image' && (
                                            <div className="mb-2 rounded-lg overflow-hidden bg-gray-200 h-24 flex items-center justify-center text-gray-400 text-xs">
                                                [Comprovante.jpg]
                                            </div>
                                        )}

                                        <p className="text-[14px] text-gray-800 leading-relaxed whitespace-pre-wrap">
                                            {msg.text}
                                        </p>
                                        
                                        <div className={`flex items-center gap-1 mt-1 ${msg.sender === 'me' ? 'justify-end' : 'justify-end'}`}>
                                            <span className="text-[10px] text-gray-400">{msg.time}</span>
                                            {msg.sender === 'me' && (
                                                <span className="text-blue-500 text-[11px] font-bold">✓✓</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                        
                        <div className="h-4"></div>
                    </div>

                    {/* Input Area */}
                    <div className="min-h-[60px] bg-[#f0f0f0] flex items-center px-2 gap-2 z-20 pb-4 pt-2 shrink-0">
                        <div className="p-2"><span className="text-2xl text-gray-500">😊</span></div>
                        <div className="flex-1 h-10 bg-white rounded-full px-4 text-[15px] text-gray-400 flex items-center">Mensagem</div>
                        <div className="p-2.5 bg-[#00897b] rounded-full text-white shadow-sm">
                            <span className="text-sm font-bold">🎤</span>
                        </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-black/90 rounded-full z-30"></div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide44_FullConversation;