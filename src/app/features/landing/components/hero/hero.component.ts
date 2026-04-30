import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, TagModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly microsoftStoreUrl = 'https://apps.microsoft.com/';

  openStore(): void {
    window.open(this.microsoftStoreUrl, '_blank', 'noopener,noreferrer');
  }
}
