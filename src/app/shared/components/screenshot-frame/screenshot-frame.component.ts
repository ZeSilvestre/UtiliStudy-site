import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  viewChild,
} from '@angular/core';
import { SCREENSHOT_CROP } from '../../config/brand.config';

@Component({
  selector: 'app-screenshot-frame',
  standalone: true,
  templateUrl: './screenshot-frame.component.html',
  styleUrl: './screenshot-frame.component.scss',
})
export class ScreenshotFrameComponent implements AfterViewInit {
  @Input() src?: string;
  @Input() video?: string;
  @Input({ required: true }) alt!: string;
  @Input() eager = false;

  readonly crop = SCREENSHOT_CROP;
  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('mediaVideo');

  ngAfterViewInit(): void {
    this.playVideo();
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    if (!document.hidden) {
      this.playVideo();
    }
  }

  private playVideo(): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }

    el.muted = true;
    void el.play().catch(() => undefined);
  }
}
