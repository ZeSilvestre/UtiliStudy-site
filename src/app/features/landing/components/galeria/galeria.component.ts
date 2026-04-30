import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  readonly prints = [
    {
      titulo: 'Organize tudo',
      descricao: 'Espaço reservado para imagem da tela de organização.',
      imagem: '',
    },
    {
      titulo: 'Estude com foco',
      descricao: 'Espaço reservado para imagem do modo de foco.',
      imagem: '',
    },
    {
      titulo: 'Veja seu progresso',
      descricao: 'Espaço reservado para imagem de evolução e métricas.',
      imagem: '',
    },
    {
      titulo: 'Seu painel, suas regras',
      descricao: 'Espaço reservado para imagem de personalização.',
      imagem: '',
    },
  ];

  readonly printsLoop = [...this.prints, ...this.prints];
}
