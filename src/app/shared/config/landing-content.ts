export const PRICING = {
  monthlyPrice: '14,99',
  trialDays: 3,
  currency: 'R$',
} as const;

export const APP_SCOPE = {
  title: 'App de organização — sem banco de questões',
  summary:
    'O UtiliStudy não inclui questões, simulados prontos, apostilas nem material didático. Ele serve para planejar sua rotina, cronometrar estudos e registrar manualmente o progresso que você já obteve em PDFs, sites, cadernos ou outras plataformas.',
  points: [
    'Sem banco de questões integrado',
    'Relatórios alimentados por dados que você insere',
    'Foco em planejamento, cronograma e métricas da sua rotina',
  ],
} as const;

export interface LandingFeature {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  destaque?: boolean;
  compactMedia?: boolean;
}

export interface LandingExtraGroup {
  label: string;
  items: string[];
}

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
      'Monte seu painel com widgets de métricas, calendário, conquistas, flashcards e mais — no layout que faz sentido para você.',
    imagem: 'assets/screenshots/01-dashboard.png',
    destaque: true,
  },
  {
    id: 2,
    titulo: 'Do seu jeito: escolha a cor que quiser',
    descricao:
      'Temas claros, escuros e combinações de cores personalizadas para estudar com conforto visual.',
    imagem: 'assets/screenshots/02-personalizacao-cores.png',
  },
  {
    id: 3,
    titulo: 'Relatório de estudos',
    descricao:
      'Visualize tempo líquido, pausas e distribuição por matéria em gráficos — diário, mensal, anual ou por período.',
    imagem: 'assets/screenshots/03-relatorio-estudos.png',
  },
  {
    id: 4,
    titulo: 'Registro de questões resolvidas',
    descricao:
      'Anote manualmente quantas questões você fez em sites, PDFs ou cadernos externos. O app só organiza seus números — não oferece questões para resolver.',
    imagem: 'assets/screenshots/04-relatorio-questoes-grafico.png',
  },
  {
    id: 5,
    titulo: 'Registro de provas e simulados',
    descricao:
      'Guarde resultados de provas e simulados que você fez fora do app. Compare aproveitamento e mantenha o histórico por banca ou edital.',
    imagem: 'assets/screenshots/06-relatorio-provas.png',
  },
  {
    id: 6,
    titulo: 'Flashcards',
    descricao:
      'Crie seus próprios cartões por matéria e revise no ritmo da sua preparação.',
    imagem: 'assets/screenshots/07-flashcards.png',
  },
  {
    id: 7,
    titulo: 'Cronograma semanal',
    descricao:
      'Planeje manhã, tarde e noite da semana, replique semanas anteriores e ajuste conforme sua rotina.',
    imagem: 'assets/screenshots/08-cronograma-semanal.png',
  },
  {
    id: 8,
    titulo: 'Lembretes de revisão',
    descricao:
      'Veja revisões pendentes com prioridade automática, para não deixar conteúdo acumular.',
    imagem: 'assets/screenshots/09-lembretes-revisao.png',
  },
  {
    id: 9,
    titulo: 'Conquistas',
    descricao:
      'Desbloqueie badges por constância, metas e maratonas de estudo.',
    imagem: 'assets/screenshots/10-conquistas.png',
  },
  {
    id: 10,
    titulo: 'Dificuldade percebida',
    descricao:
      'Cruze tempo de estudo, questões anotadas e taxa de acerto para ver onde reforçar — sempre com dados que você registrou.',
    imagem: 'assets/screenshots/11-dificuldade-percebida.png',
  },
  {
    id: 11,
    titulo: 'Fotos motivacionais',
    descricao:
      'Guarde imagens, frases e referências visuais que te impulsionam na preparação.',
    imagem: 'assets/screenshots/12-fotos.png',
  },
  {
    id: 12,
    titulo: 'Sons ambientes customizáveis',
    descricao:
      'Chuva, natureza, piano, trânsito e outros ambientes para focar — com controle de volume.',
    imagem: 'assets/screenshots/13-sons-ambientes.png',
    compactMedia: true,
  },
];
