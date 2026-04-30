import { Component } from '@angular/core';

@Component({
  selector: 'app-diferenciais',
  standalone: true,
  templateUrl: './diferenciais.component.html',
  styleUrl: './diferenciais.component.scss',
})
export class DiferenciaisComponent {
  readonly itens = [
    'Dashboard com widgets customizáveis',
    'Personalização de temas',
    'Sons ambientes personalizados',
    'Sistema visual em árvore de progresso',
  ];
}
