import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/landing/landing-page.component').then(m => m.LandingPageComponent),
      },
      {
        path: 'politica-privacidade',
        loadComponent: () =>
          import('./pages/politica-privacidade/politica-privacidade.component').then(
            m => m.PoliticaPrivacidadeComponent
          ),
      },
    ],
  },
];
