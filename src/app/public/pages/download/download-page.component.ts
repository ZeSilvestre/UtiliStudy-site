import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DOWNLOAD_CONFIG } from '../../../shared/config/download.config';

@Component({
  selector: 'app-download-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent {
  readonly config = DOWNLOAD_CONFIG;

  get downloadAvailable(): boolean {
    return !!this.config.windowsX64Url?.trim();
  }

  onDownload(): void {
    if (!this.downloadAvailable) {
      return;
    }

    window.open(this.config.windowsX64Url, '_blank', 'noopener,noreferrer');
  }
}
