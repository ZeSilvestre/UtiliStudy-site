import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PRICING } from '../../../../shared/config/landing-content';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  readonly trialDays = PRICING.trialDays;
  readonly monthlyPrice = PRICING.monthlyPrice;
}
