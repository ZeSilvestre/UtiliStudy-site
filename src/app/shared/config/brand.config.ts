export const BRAND = {
  /** Ícone U+livros — header, footer e UI */
  icon: 'assets/images/branding/icon-utilistudy.png',
  /** Logo completa (ícone + texto) */
  logo: 'assets/images/branding/logo-utilistudy.png',
  /** Favicon otimizado para aba do navegador (menos margem) */
  favicon: 'assets/images/branding/favicon.png',
  /** Tamanho padrão do ícone na UI (header / footer) */
  iconSizeRem: 4.25,
} as const;

/** Recorte leve nas bordas das screenshots (zoom sutil). */
export const SCREENSHOT_CROP = {
  scale: 1.03,
} as const;
