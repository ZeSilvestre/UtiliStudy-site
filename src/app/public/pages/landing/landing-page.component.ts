import { Component } from '@angular/core';
import { HeroComponent } from '../../../features/landing/components/hero/hero.component';
import { ProblemaComponent } from '../../../features/landing/components/problema/problema.component';
import { SolucaoComponent } from '../../../features/landing/components/solucao/solucao.component';
import { BeneficiosComponent } from '../../../features/landing/components/beneficios/beneficios.component';
import { DiferenciaisComponent } from '../../../features/landing/components/diferenciais/diferenciais.component';
import { GaleriaComponent } from '../../../features/landing/components/galeria/galeria.component';
import { CtaComponent } from '../../../features/landing/components/cta/cta.component';
import { FooterComponent } from '../../../features/landing/components/footer/footer.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    ProblemaComponent,
    SolucaoComponent,
    BeneficiosComponent,
    DiferenciaisComponent,
    GaleriaComponent,
    CtaComponent,
    FooterComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
