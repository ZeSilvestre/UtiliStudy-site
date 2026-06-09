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
  readonly githubReleasesUrl = 'https://github.com/ZeSilvestre/UtiliStudy/releases/latest';

  openStore(): void {
    window.open(this.microsoftStoreUrl, '_blank', 'noopener,noreferrer');
  }

  openGithubReleases(): void {
    window.open(this.githubReleasesUrl, '_blank', 'noopener,noreferrer');
  }
}
