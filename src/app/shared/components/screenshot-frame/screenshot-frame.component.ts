import { Component, Input } from '@angular/core';
import { SCREENSHOT_CROP } from '../../config/brand.config';

@Component({
  selector: 'app-screenshot-frame',
  standalone: true,
  templateUrl: './screenshot-frame.component.html',
  styleUrl: './screenshot-frame.component.scss',
})
export class ScreenshotFrameComponent {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
  @Input() eager = false;

  readonly crop = SCREENSHOT_CROP;
}
