export const siteConfig = {
  name: "Converte+",
  tagline: "Agência de Tráfego Pago e Branding",
  description: "Clientes chegando todos os dias sem depender de indicação. Estruturamos sua presença digital e executamos tráfego de alta conversão.",
  whatsappNumber: "5515998411520", // Official Converte+ WhatsApp Phone Number
  
  // Faixa de Prova (Colada ao Hero)
  proofBadges: [
    { title: "Contas 100% no seu nome", subtitle: "Acessos e dados totalmente seus" },
    { title: "Sem contrato de fidelidade", subtitle: "Parceria mantida por resultado" },
    { title: "Poucos clientes por vez", subtitle: "Atendimento direto com fundadores" },
    { title: "Google & Meta Ads", subtitle: "Estratégia multicanal validada" }
  ],

  // 4 Pilares do Método Converte+ (Autoridade antes do tráfego)
  methodThesis: "A maioria das agências começa gastando seu dinheiro em anúncio. A gente arruma a base primeiro — posicionamento, comunicação e presença — porque anúncio em cima de base fraca queima verba. Quando o tráfego entra, ele encontra uma marca pronta para converter.",
  pillars: [
    {
      step: "01",
      title: "Base e presença",
      subtitle: "A base, antes do anúncio",
      description: "Arrumamos sua presença digital completa — perfil, bio, links, visual e páginas de contato. Assim, cada real investido volta em cliente, não em curtida.",
      bullets: [
        "Perfil e bio ajustados para conversão imediata",
        "Página de venda rápida focada em contato"
      ]
    },
    {
      step: "02",
      title: "Anúncios no alvo certo",
      subtitle: "Tráfego pago qualificado",
      description: "Colocamos sua marca na frente de quem tem alta intenção de compra. Transforma o 'boca a boca' casual em um fluxo constante de novos contatos.",
      bullets: [
        "Meta Ads & Google Ads configurados no alvo",
        "Direcionamento direto para WhatsApp e site"
      ]
    },
    {
      step: "03",
      title: "Presença com autoridade",
      subtitle: "Sua marca virando referência",
      description: "Comunicação estratégica, roteiros que prendem atenção e criativos profissionais que posicionam sua empresa como autoridade no seu setor.",
      bullets: [
        "Roteiros e criativos que prendem a atenção",
        "Ajuste visual e tom de voz que convencem"
      ]
    },
    {
      step: "04",
      title: "Escala com previsibilidade",
      subtitle: "Aceleração com inteligência",
      description: "Com a base validada, aceleramos o investimento com inteligência: novos públicos, retargeting e expansão de canais com segurança.",
      bullets: [
        "Ampliação de verba com controle de ROI",
        "Novos canais e públicos semelhantes"
      ]
    }
  ],

  // Para quem é / Para quem NÃO é
  fitComparison: {
    forYou: [
      "Você já tem um bom produto ou serviço e clientes satisfeitos",
      "Você quer parar de torcer por indicações e ter previsibilidade",
      "Você entende que tráfego exige base bem feita e 90 dias de consolidação",
      "Você valoriza atendimento próximo direto com os fundadores"
    ],
    notForYou: [
      "Você espera resultados mágicos da noite para o dia sem validação",
      "Você só quer alguém para postar conteúdo solto sem estratégia comercial",
      "Você não tem estrutura ou tempo para atender novos contatos no WhatsApp"
    ],
    notice: "Priorizamos qualidade e acompanhamento próximo com limite rígido de clientes por mês."
  },

  // Seção Diagnóstico (4 itens)
  diagnosticPoints: [
    {
      title: "5 perguntas, 20 minutos.",
      desc: "No WhatsApp ou em chamada rápida, exatamente como você preferir."
    },
    {
      title: "A gente analisa antes de falar com você.",
      desc: "Sua presença digital, seus concorrentes e de onde vêm seus clientes hoje."
    },
    {
      title: "Você recebe o mapa.",
      desc: "Onde está o gargalo, o que priorizar e uma estimativa do que dá para melhorar em 90 dias."
    },
    {
      title: "Quem atende é fundador.",
      desc: "Não é SDR, não é atendente, não é robô. Atendimento direto com quem executa."
    }
  ],

  // Cases de Sucesso (Substituindo contadores genéricos)
  cases: [
    {
      client: "Clínica & Bem-Estar",
      location: "São Paulo · SP",
      period: "Últimos 90 dias",
      before: "100% dependente de indicações de pacientes antigos, sem previsibilidade mensal.",
      result: "+142 novos agendamentos qualificados via WhatsApp com CAC reduzido em 38%.",
      quote: "Hoje sabemos exatamente quantos pacientes novos vão entrar na agenda a cada semana.",
      author: "Dra. Camila M."
    },
    {
      client: "Consultoria B2B",
      location: "Sorocaba · SP",
      period: "6 meses de projeto",
      before: "Investimento solto no Google Ads sem mensuração de ROI ponta a ponta.",
      result: "R$ 480k em propostas fechadas a partir de campanhas integradas com página de alta conversão.",
      quote: "A estrutura de autoridade antes do tráfego mudou o nível das reuniões de vendas.",
      author: "Ricardo V."
    }
  ],

  // Planos (Sem preço, alinhados ao método)
  plans: [
    {
      id: "base",
      title: "Base",
      tagline: "Os primeiros passos da previsibilidade",
      idealFor: "Para você que já vende, mas só por indicação.",
      milestone: "Os primeiros contatos chegando de forma previsível.",
      popular: false,
      badgeText: "Início Rápido",
      categories: [
        {
          name: "Base e presença",
          items: [
            "Organização da sua presença digital",
            "Página de venda focada em contato",
            "Configuração inicial dos anúncios e medição"
          ]
        },
        {
          name: "Anúncios",
          items: [
            "Anúncios em 2 canais (ex.: Meta Ads e Google Ads)",
            "Criação de imagens e textos de anúncio"
          ]
        },
        {
          name: "Acompanhamento",
          items: [
            "Painel mensal de resultados",
            "Acompanhamento direto via WhatsApp"
          ]
        }
      ]
    },
    {
      id: "autoridade",
      title: "Autoridade",
      tagline: "Previsibilidade + autoridade de marca",
      idealFor: "Para você que quer previsibilidade e virar referência.",
      milestone: "Contatos previsíveis todo mês + marca forte.",
      popular: true,
      badgeText: "Mais Escolhido",
      categories: [
        {
          name: "Base e marca",
          items: [
            "Tudo do plano Base",
            "Ajuste da identidade visual e comunicação",
            "Direção de conteúdo, foto e vídeo"
          ]
        },
        {
          name: "Anúncios",
          items: [
            "Anúncios em até 4 canais",
            "Mais versões de imagens, textos e vídeos para teste",
            "Medição completa de resultados ponta a ponta"
          ]
        },
        {
          name: "Conversão & Suporte",
          items: [
            "Páginas de venda extras conforme necessidade",
            "Organização dos contatos que chegam (CRM simples)",
            "Reuniões quinzenais com responsável dedicado"
          ]
        }
      ]
    },
    {
      id: "escala",
      title: "Escala",
      tagline: "Previsibilidade em escala com segurança",
      idealFor: "Para você que já tem demanda e quer acelerar com estrutura.",
      milestone: "Previsibilidade em escala com projeção de receita.",
      popular: false,
      badgeText: "Alta Escala",
      categories: [
        {
          name: "Posicionamento Completo",
          items: [
            "Tudo do plano Autoridade",
            "Posicionamento de marca de ponta a ponta",
            "Diretrizes de marca para todos os canais"
          ]
        },
        {
          name: "Anúncios sem limite",
          items: [
            "Anúncios em múltiplos canais sem limite",
            "Medição avançada e painéis sob medida"
          ]
        },
        {
          name: "Estratégia & Liderança",
          items: [
            "Páginas de venda e funis ilimitados",
            "Qualificação e filtro de leads antes do WhatsApp",
            "Reuniões semanais com os fundadores"
          ]
        }
      ]
    }
  ],

  // Fundadores (Quem conduz)
  founders: [
    {
      name: "Gabriel Silva",
      role: "Co-fundador & Estrategista de Tráfego",
      bio: "Cuido pessoalmente da arquitetura de tráfego, gestão de campanhas no Meta e Google Ads e acompanhamento de métricas para que cada investimento traga clientes qualificados com previsibilidade.",
      image: "converte+foto-hero.webp",
      specialties: ["Gestão de Meta Ads & Google Ads", "Web Analytics & Funis de Conversão"]
    },
    {
      name: "Isabela Costa",
      role: "Co-fundadora & Diretora de Branding",
      bio: "Estruturo o posicionamento visual, copywriting e roteiros estratégicos da sua marca para garantir que sua empresa transmita autoridade e converta os visitantes em compradores.",
      image: "converte+isabela.webp",
      specialties: ["Copywriting & Roteiros de Alta Conversão", "Branding & Consultoria de Imagem"]
    }
  ],

  // Seção Aprender (Recursos Gratuitos)
  learnResources: [
    {
      title: "Checklist de Base Digital",
      desc: "Guia prático em PDF com os 12 pontos essenciais antes de colocar R$ 1 em anúncios."
    },
    {
      title: "Newsletter Estratégica",
      desc: "Análises quinzenais de campanhas reais, testes e táticas de conversão direto no seu e-mail."
    },
    {
      title: "Bastidores no Instagram",
      desc: "Rotina de otimização de contas, análises de criativos e erros que você deve evitar."
    }
  ],

  // FAQs (Com as 3 novas perguntas obrigatórias do briefing)
  faqs: [
    {
      question: "Em quanto tempo eu vejo resultado?",
      answer: "O processo de estruturação da base e lançamento das primeiras campanhas leva até 7 dias úteis. A partir do momento em que os anúncios vão ao ar, os primeiros contatos já começam a chegar. Trabalhamos com uma janela de 90 dias para consolidar, testar públicos e criar uma rotina de previsibilidade estável."
    },
    {
      question: "Quanto preciso investir em anúncio, além do serviço?",
      answer: "A verba de anúncios é paga diretamente às plataformas (Meta e Google) e depende do seu momento. Recomendamos a partir de R$ 1.000 a R$ 2.500/mês para início, permitindo testar criativos e gerar volume suficiente de dados para otimização contínua."
    },
    {
      question: "Já tenho alguém cuidando do meu marketing. Faz sentido conversar?",
      answer: "Sim. Muitas empresas possuem equipe interna ou freelancer focado apenas em postagens orgânicas. A Converte+ atua especificamente na engenharia de tráfego pago, páginas de alta conversão e medição ponta a ponta, podendo complementar ou potencializar o trabalho existente."
    },
    {
      question: "As contas de anúncios e a página ficam no meu nome?",
      answer: "Sim! 100% de tudo o que criamos (gerenciadores de anúncios, contas, domínios e acessos) pertence à sua empresa. Transparência total e sem dependência forçada."
    },
    {
      question: "Existe contrato de fidelidade longa com multa?",
      answer: "Não trabalhamos com contratos engessados de longo prazo com multas abusivas. Recomendamos o ciclo de 90 dias para consolidação técnica, mas nossa parceria se mantém unicamente pela geração contínua de valor e clientes reais."
    },
    {
      question: "Como funciona o diagnóstico gratuito?",
      answer: "Clicando em 'Fazer diagnóstico grátis', você responde a 3 etapas simples sobre o seu momento. Nossa equipe de fundadores analisa sua presença digital e entra em contato via WhatsApp com um mapa prático dos seus principais gargalos e oportunidades."
    }
  ]
};
