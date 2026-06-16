import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LANDING_FEATURES, PRICING, APP_SCOPE } from '../../../../shared/config/landing-content';
import { BRAND } from '../../../../shared/config/brand.config';
import { ScreenshotFrameComponent } from '../../../../shared/components/screenshot-frame/screenshot-frame.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, ScreenshotFrameComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly pricing = PRICING;
  readonly appScope = APP_SCOPE;
  readonly heroVideo = BRAND.heroVideo;
  readonly heroTitle = LANDING_FEATURES[0].titulo;
}
