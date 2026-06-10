import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LANDING_FEATURES, PRICING } from '../../../../shared/config/landing-content';
import { ScreenshotFrameComponent } from '../../../../shared/components/screenshot-frame/screenshot-frame.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ButtonModule, ScreenshotFrameComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly pricing = PRICING;
  readonly heroImage = LANDING_FEATURES[0].imagem;
  readonly heroTitle = LANDING_FEATURES[0].titulo;
}
