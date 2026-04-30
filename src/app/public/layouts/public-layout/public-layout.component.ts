import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {
  readonly microsoftStoreUrl = 'https://apps.microsoft.com/';

  openStore(): void {
    window.open(this.microsoftStoreUrl, '_blank', 'noopener,noreferrer');
  }
}
