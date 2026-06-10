import { Component } from '@angular/core';
import { LANDING_EXTRAS, LANDING_FEATURES } from '../../../../shared/config/landing-content';
import { ScreenshotFrameComponent } from '../../../../shared/components/screenshot-frame/screenshot-frame.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ScreenshotFrameComponent, RevealOnScrollDirective],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  readonly features = LANDING_FEATURES;
  readonly extraGroups = LANDING_EXTRAS;
}
