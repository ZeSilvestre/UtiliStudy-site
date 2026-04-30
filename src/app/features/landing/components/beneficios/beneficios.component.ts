import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  templateUrl: './beneficios.component.html',
  styleUrl: './beneficios.component.scss',
})
export class BeneficiosComponent {
  readonly beneficios = [
    {
      titulo: 'Organização dos estudos',
      texto: 'Veja suas matérias e tarefas sem confusão.',
      imagem: '',
    },
    {
      titulo: 'Execução (foco)',
      texto: 'Saiba exatamente o que fazer em cada sessão.',
      imagem: '',
    },
    {
      titulo: 'Revisão inteligente',
      texto: 'Revise no momento certo para fixar mais.',
      imagem: '',
    },
    {
      titulo: 'Acompanhamento',
      texto: 'Enxergue sua evolução semana a semana.',
      imagem: '',
    },
  ];
}
