export const siteConfig = {
  name: "Converte+",
  tagline: "Agência de Tráfego Pago e Branding",
  description: "Clientes chegando todos os dias sem depender de indicação. Estruturamos sua presença digital e executamos tráfego de alta conversão.",
  whatsappNumber: "5515998411520", // Official Converte+ WhatsApp Phone Number
  founders: [
    {
      name: "Gabriel Silva",
      role: "Co-fundador Converte+",
      description: "Planejamento e gestão de campanhas em Meta Ads e Google Ads; estratégias personalizadas para atrair clientes qualificados; otimização contínua baseada em métricas e testes; atendimento próximo e orientado a resultados.",
      image: "converte+foto-hero.webp",
      skills: ["Meta Ads", "Google Ads", "Web Analytics", "Funis de Venda"]
    },
    {
      name: "Isabela Costa",
      role: "Co-fundadora Converte+",
      description: "Especialista em copywriting e comunicação estratégica; consultoria de imagem e posicionamento de marca; gestão de tráfego pago focada em conversão; acompanhamento de dados e otimização contínua de campanhas.",
      image: "converte+isabela.webp",
      skills: ["Copywriting", "Branding", "Consultoria de Imagem", "Roteiros de Alta Conversão"]
    }
  ],
  icpQuestions: [
    {
      id: 'segment',
      title: 'Qual é o segmento principal do seu negócio?',
      subtitle: 'Selecione a opção que melhor descreve sua empresa',
      options: [
        { label: 'Serviços Prestados / B2B', value: 'Serviços Prestados / B2B' },
        { label: 'Comércio / Vendas Locais', value: 'Comércio / Vendas Locais' },
        { label: 'Infoprodutos / Educação', value: 'Infoprodutos / Educação' },
        { label: 'Outro Modelo de Negócio', value: 'Outro Modelo' }
      ]
    },
    {
      id: 'revenue',
      title: 'Qual é o seu faturamento mensal aproximado?',
      subtitle: 'Nos ajuda a direcionar a estratégia ideal para o seu momento',
      options: [
        { label: 'Até R$ 10 mil / mês', value: 'Até R$ 10k' },
        { label: 'Entre R$ 10 mil e R$ 30 mil', value: 'R$ 10k a R$ 30k' },
        { label: 'Entre R$ 30 mil e R$ 100 mil', value: 'R$ 30k a R$ 100k' },
        { label: 'Acima de R$ 100 mil / mês', value: 'Acima de R$ 100k' }
      ]
    },
    {
      id: 'budget',
      title: 'Quanto você pretende investir mensalmente em anúncios?',
      subtitle: 'Investimento direto nas plataformas (Meta Ads / Google Ads)',
      options: [
        { label: 'R$ 1.000 a R$ 2.500 / mês', value: 'R$ 1k a R$ 2.5k' },
        { label: 'R$ 2.500 a R$ 5.000 / mês', value: 'R$ 2.5k a R$ 5k' },
        { label: 'R$ 5.000 a R$ 10.000 / mês', value: 'R$ 5k a R$ 10k' },
        { label: 'Acima de R$ 10.000 / mês', value: 'Acima de R$ 10k' }
      ]
    },
    {
      id: 'source',
      title: 'Como vêm seus clientes atualmente?',
      subtitle: 'Identifica seu nível atual de dependência',
      options: [
        { label: '100% dependente de indicação (Boca a boca)', value: '100% Indicação' },
        { label: 'Redes sociais orgânicas (sem anúncios)', value: 'Orgânico' },
        { label: 'Já faço tráfego pago mas sem constância', value: 'Tráfego sem constância' },
        { label: 'Mix de canais sem previsibilidade clara', value: 'Mix sem controle' }
      ]
    },
    {
      id: 'serviceGoal',
      title: 'Qual é o seu principal objetivo nos próximos 90 dias?',
      subtitle: 'Alinha as expectativas de crescimento',
      options: [
        { label: 'Ter clientes chegando todos os dias no WhatsApp', value: 'Leads Diários no WhatsApp' },
        { label: 'Construir autoridade de marca e ser referência', value: 'Autoridade & Marca' },
        { label: 'Escalar vendas mantendo o custo controlado', value: 'Escalar Vendas' },
        { label: 'Estruturar o funil de conversão completo', value: 'Funil Completo' }
      ]
    }
  ],
  pillars: [
    {
      step: "01",
      title: "Base e presença",
      subtitle: "A base, antes do anúncio",
      description: "Antes de anunciar, a gente arruma sua presença na internet — perfil, bio, links, visual e conteúdo. Assim, cada real investido em anúncio volta em cliente, não em curtida.",
      features: [
        "Perfil e bio ajustados para conversão",
        "Visual e conteúdo alinhados à marca",
        "Links e canal direto para atendimento"
      ]
    },
    {
      step: "02",
      title: "Anúncios mirados em quem compra",
      subtitle: "Tráfego pago no alvo certo",
      description: "Anúncios que colocam sua marca na frente de quem tem mais chance de comprar. É o que transforma a indicação que vem de vez em quando em um número de contatos que você consegue prever todo mês.",
      features: [
        "Meta Ads & Google Ads configurados",
        "Segmentação por público comprador",
        "Fluxo direto para WhatsApp e site"
      ]
    },
    {
      step: "03",
      title: "Presença com autoridade",
      subtitle: "Sua marca virando referência",
      description: "Imagem alinhada à sua marca (do anúncio à sua presença em foto e vídeo), roteiros que prendem atenção e textos que convencem — para você virar referência, não só mais um.",
      features: [
        "Roteiros de vídeos que prendem a atenção",
        "Criativos estáticos e carrosséis com copy forte",
        "Comunicação clara sem enrolação"
      ]
    },
    {
      step: "04",
      title: "Escala com previsibilidade",
      subtitle: "Aceleração com inteligência",
      description: "Quando a base já traz cliente todo dia, a gente acelera com cabeça: amplia o público, encontra gente parecida com seus melhores clientes e ajusta o investimento.",
      features: [
        "Ampliação para públicos Lookalike",
        "Retargeting e novos canais de tráfego",
        "Ajuste fino do investimento em anúncio"
      ]
    }
  ],
  fitComparison: {
    forYou: [
      "Você já tem um bom produto/serviço e clientes satisfeitos",
      "Você quer parar de torcer por indicações e ter previsibilidade",
      "Você entende que tráfego exige técnica, base bem feita e 90 dias de consolidação",
      "Você valoriza atendimento próximo com equipe dedicada"
    ],
    notForYou: [
      "Você espera resultados mágicos em uma semana",
      "Você só quer alguém para postar 'conteúdo solto' sem estratégia",
      "Você não tem estrutura ou equipe para atender novos clientes no WhatsApp"
    ]
  },
  plans: [
    {
      id: "essencial",
      title: "Essencial",
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
            "Configuração inicial dos anúncios e da medição dos resultados"
          ]
        },
        {
          name: "Anúncios",
          items: [
            "Anúncios em 2 canais (ex.: Instagram/Facebook e Google)",
            "Criação de imagens e textos de anúncio"
          ]
        },
        {
          name: "Acompanhamento",
          items: [
            "Painel com os números do mês",
            "Acompanhamento direto via WhatsApp"
          ]
        }
      ],
      ctaText: "Começar pelo diagnóstico gratuito"
    },
    {
      id: "crescimento",
      title: "Crescimento",
      tagline: "Previsibilidade + autoridade de marca",
      idealFor: "Para você que quer previsibilidade e virar referência.",
      milestone: "Contatos previsíveis todo mês + marca forte.",
      popular: true,
      badgeText: "Mais Escolhido",
      categories: [
        {
          name: "Base e marca",
          items: [
            "Tudo do plano Essencial",
            "Ajuste da identidade visual e da forma de comunicar",
            "Direção de conteúdo, foto e vídeo"
          ]
        },
        {
          name: "Anúncios",
          items: [
            "Anúncios em até 4 canais",
            "Mais versões de imagens, textos e vídeos para testar",
            "Medição completa dos resultados, ponta a ponta"
          ]
        },
        {
          name: "Conversão",
          items: [
            "Páginas de venda extras conforme necessidade",
            "Organização dos contatos que chegam (CRM simples)"
          ]
        },
        {
          name: "Acompanhamento",
          items: [
            "Reuniões a cada 15 dias",
            "Responsável dedicado pela sua conta"
          ]
        }
      ],
      ctaText: "Começar pelo diagnóstico gratuito"
    },
    {
      id: "escala",
      title: "Escala",
      tagline: "Previsibilidade em escala",
      idealFor: "Para você que já tem demanda e quer escalar com segurança.",
      milestone: "Previsibilidade em escala, com previsão de resultados.",
      popular: false,
      badgeText: "Alta Escala",
      categories: [
        {
          name: "Base e marca completa",
          items: [
            "Tudo do plano Crescimento",
            "Posicionamento de marca de ponta a ponta",
            "Diretrizes de marca para todos os canais"
          ]
        },
        {
          name: "Anúncios em escala",
          items: [
            "Anúncios em vários canais sem limite",
            "Medição avançada e painéis sob medida"
          ]
        },
        {
          name: "Conversão e organização",
          items: [
            "Páginas de venda sem limite",
            "Organização dos contatos integrada às suas ferramentas",
            "Qualificação dos contatos antes de chegarem em você"
          ]
        },
        {
          name: "Estratégia",
          items: [
            "Previsão de quantos contatos e qual receita esperar",
            "Time dedicado de várias áreas",
            "Reuniões semanais com a liderança"
          ]
        }
      ],
      ctaText: "Começar pelo diagnóstico gratuito"
    }
  ],
  stats: [
    { number: "+R$ 10M", label: "Gerados em faturamento" },
    { number: "98.4%", label: "Retenção de clientes" },
    { number: "+50k", label: "Leads qualificados entregues" },
    { number: "24/7", label: "Monitoramento de campanhas" }
  ],
  faqs: [
    {
      question: "Em quanto tempo começo a ver contatos no meu WhatsApp?",
      answer: "O processo de ajuste de base e lançamento de campanhas leva até 7 dias úteis. A partir do momento em que os anúncios vão ao ar, os primeiros contatos já começam a chegar no mesmo dia."
    },
    {
      question: "As contas de anúncios e o site ficam no meu nome?",
      answer: "Sim! 100% de tudo o que criamos (contas de anúncios, acessos, domínios e gerenciadores) pertence à sua empresa. Transparência total."
    },
    {
      question: "Existe contrato de fidelidade longa com multa?",
      answer: "Não trabalhamos com contratos engessados de longo prazo. Recomendamos 90 dias para consolidação técnica e escala, mas nossa parceria se mantém pela geração de resultados contínuos."
    },
    {
      question: "Eu preciso aparecer em vídeos ou gravar conteúdos?",
      answer: "Não é obrigatório. Desenvolvemos estratégias com criativos estáticos, carrosséis de alta conversão e roteiros profissionais. Mas caso você queira gravar, nossa equipe dá toda a direção."
    },
    {
      question: "Como funciona o diagnóstico gratuito?",
      answer: "Clicando em qualquer botão de diagnóstico, você responde a 5 perguntas objetivas sobre o seu negócio. Nossa equipe analisa sua presença digital e entra em contato via WhatsApp com um plano prático."
    }
  ]
};
