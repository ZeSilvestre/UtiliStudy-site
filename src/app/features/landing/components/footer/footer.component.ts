import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND } from '../../../../shared/config/brand.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly brand = BRAND;
}
