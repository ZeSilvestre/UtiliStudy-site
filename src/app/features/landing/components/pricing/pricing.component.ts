import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PRICING } from '../../../../shared/config/landing-content';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly pricing = PRICING;

  readonly includes = [
    'Dashboard com widgets personalizáveis',
    'Relatórios de estudo, questões e provas',
    'Cronograma semanal e sugestões inteligentes',
    'Flashcards, conquistas e sons ambientes',
    'Temas e cores à sua escolha',
    'Backup na nuvem com Google Drive',
  ];

  readonly steps = [
    { num: '1', titulo: 'Baixe o app', texto: 'Instale o UtiliStudy no Windows em poucos cliques.' },
    { num: '2', titulo: 'Entre com Google', texto: 'Login rápido e seguro — sua conta pronta na hora.' },
    { num: '3', titulo: 'Teste por 3 dias', texto: 'Use todas as funcionalidades sem pagar nada.' },
    { num: '4', titulo: 'Assine se quiser', texto: 'Renovação mensal via Mercado Pago, só se fizer sentido para você.' },
  ];
}
