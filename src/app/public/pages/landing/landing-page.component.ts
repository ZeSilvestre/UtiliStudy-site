import { Component } from '@angular/core';
import { HeroComponent } from '../../../features/landing/components/hero/hero.component';
import { PricingComponent } from '../../../features/landing/components/pricing/pricing.component';
import { GaleriaComponent } from '../../../features/landing/components/galeria/galeria.component';
import { CtaComponent } from '../../../features/landing/components/cta/cta.component';
import { FooterComponent } from '../../../features/landing/components/footer/footer.component';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroComponent,
    PricingComponent,
    GaleriaComponent,
    CtaComponent,
    FooterComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
