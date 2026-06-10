import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DOWNLOAD_CONFIG } from '../../../shared/config/download.config';
import { BRAND } from '../../../shared/config/brand.config';

@Component({
  selector: 'app-download-page',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent {
  readonly config = DOWNLOAD_CONFIG;
  readonly brand = BRAND;

  get downloadAvailable(): boolean {
    return !!this.config.windowsX64Url?.trim();
  }

  onDownload(): void {
    if (!this.downloadAvailable) {
      return;
    }

    const link = document.createElement('a');
    link.href = this.config.windowsX64Url;
    link.download = 'UtiliStudy-Setup.exe';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
