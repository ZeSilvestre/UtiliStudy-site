import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  readonly microsoftStoreUrl = 'https://apps.microsoft.com/';

  openStore(): void {
    window.open(this.microsoftStoreUrl, '_blank', 'noopener,noreferrer');
  }
}
