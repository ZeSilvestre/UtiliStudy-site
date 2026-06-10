export const PRICING = {
  monthlyPrice: '14,99',
  trialDays: 3,
  currency: 'R$',
} as const;

export interface LandingFeature {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  destaque?: boolean;
  /** Imagem menor — ideal para widgets/popups do app */
  compactMedia?: boolean;
}

export interface LandingExtraGroup {
  label: string;
  items: string[];
}

/** Recursos do app ainda não destacados na galeria de screenshots */
export const LANDING_EXTRAS: LandingExtraGroup[] = [
  {
    label: 'Planejamento',
    items: [
      'Matérias e assuntos com cores próprias',
      'Cronograma semanal com replicação de semanas',
      'Entrada manual de sessões de estudo',
    ],
  },
  {
    label: 'Organização',
    items: [
      'Lista de tarefas integrada ao dia a dia',
      'Dashboard com widgets arrastáveis',
      'Frases motivacionais personalizáveis',
    ],
  },
  {
    label: 'Foco e ambiente',
    items: [
      'Timer flutuante sempre à mão',
      'Sons ambientes com volume individual',
      'Temas visuais e paleta de cores do app',
    ],
  },
  {
    label: 'Conta e dados',
    items: [
      'Login com Google em um clique',
      'Backup e restauração no Google Drive',
      'Transferência segura entre dispositivos',
    ],
  },
];

export const LANDING_FEATURES: LandingFeature[] = [
  {
    id: 1,
    titulo: 'Dashboard personalizável',
    descricao:
      'Monte seu painel com widgets de métricas, calendário, conquistas, flashcards e muito mais — tudo no layout que faz sentido para você.',
    imagem: 'assets/screenshots/01-dashboard.png',
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Do seu jeito: escolha a cor que quiser',
    descricao:
      'Temas claros, escuros e combinações de cores personalizadas para estudar com conforto visual e identidade própria.',
    imagem: 'assets/screenshots/02-personalizacao-cores.png',
  },
  {
    id: 3,
    titulo: 'Relatório de estudos',
    descricao:
      'Visualize tempo líquido, pausas e distribuição por matéria em gráficos claros — diário, mensal, anual ou por período.',
    imagem: 'assets/screenshots/03-relatorio-estudos.png',
  },
  {
    id: 4,
    titulo: 'Relatório de questões — visão geral',
    descricao:
      'Acompanhe total de questões, acertos e aproveitamento geral com gráficos por matéria para identificar onde evoluir.',
    imagem: 'assets/screenshots/04-relatorio-questoes-grafico.png',
  },
  {
    id: 5,
    titulo: 'Relatório de provas',
    descricao:
      'Registre simulados e provas reais, compare aproveitamento e mantenha o histórico organizado por banca e edital.',
    imagem: 'assets/screenshots/06-relatorio-provas.png',
  },
  {
    id: 6,
    titulo: 'Flashcards',
    descricao:
      'Crie cartões por matéria, revise com um clique e mantenha a retenção ativa no dia a dia da preparação.',
    imagem: 'assets/screenshots/07-flashcards.png',
  },
  {
    id: 7,
    titulo: 'Cronograma semanal',
    descricao:
      'Planeje manhã, tarde e noite da semana inteira, replique semanas anteriores e ajuste conforme sua rotina.',
    imagem: 'assets/screenshots/08-cronograma-semanal.png',
  },
  {
    id: 8,
    titulo: 'Sugestões inteligentes',
    descricao:
      'Receba lembretes de revisões pendentes com prioridade automática, para não deixar conteúdo acumular.',
    imagem: 'assets/screenshots/09-sugestoes-inteligentes.png',
  },
  {
    id: 9,
    titulo: 'Conquistas',
    descricao:
      'Desbloqueie badges por constância, metas e maratonas de estudo — gamificação que mantém a motivação alta.',
    imagem: 'assets/screenshots/10-conquistas.png',
  },
  {
    id: 10,
    titulo: 'Dificuldade percebida',
    descricao:
      'Cruze tempo de estudo, questões resolvidas e taxa de acerto para enxergar onde você está forte ou precisa reforçar.',
    imagem: 'assets/screenshots/11-dificuldade-percebida.png',
  },
  {
    id: 11,
    titulo: 'Fotos motivacionais',
    descricao:
      'Guarde imagens, frases e referências visuais que te impulsionam durante a jornada de estudos.',
    imagem: 'assets/screenshots/12-fotos.png',
  },
  {
    id: 12,
    titulo: 'Sons ambientes customizáveis',
    descricao:
      'Chuva, natureza, piano, trânsito e dezenas de ambientes para focar — controle volume e combinações.',
    imagem: 'assets/screenshots/13-sons-ambientes.png',
    compactMedia: true,
  },
];
