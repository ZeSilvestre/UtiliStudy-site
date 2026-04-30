import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-problema',
  standalone: true,
  imports: [CardModule, TagModule],
  templateUrl: './problema.component.html',
  styleUrl: './problema.component.scss',
})
export class ProblemaComponent {}
