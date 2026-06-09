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
  readonly githubReleasesUrl = 'https://github.com/ZeSilvestre/UtiliStudy/releases/latest';

  openStore(): void {
    window.open(this.microsoftStoreUrl, '_blank', 'noopener,noreferrer');
  }

  openGithubReleases(): void {
    window.open(this.githubReleasesUrl, '_blank', 'noopener,noreferrer');
  }
}
