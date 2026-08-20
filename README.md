# Form Flow

gostaria de refazer essa tela de preenchimento de formulario, o que me encomanda é o cliente preenche o formulario e botao nao destrava, pois ele esqueceu de aceitar os termos de uso, minha ideia era dividir em duas etapas primeiro ele aceita os termos de uso ver o resumo do carrinho, mas sõ depois ele preenche os formularios deixa, o outro deixe o preenchimento de formularios mias bonito tambem, 

aqui eta meu css, 
/* ============================================================

   Paytour Design System — CSS Custom Properties (runtime tokens)

   Importar via: carregado em src/main.ts

   Fonte da verdade: paytour-ds-v1.html :root

   ============================================================ */




:root {

/* --- Paleta primária (marca) --- */

  --ds-v2-color-primary-10:  #F7F6FD;

  --ds-v2-color-primary-20:  #E6E3F8;

  --ds-v2-color-primary-30:  #D5D1F4;

  --ds-v2-color-primary-40:  #C4BFEF;

  --ds-v2-color-primary-50:  #B3ACEB;

  --ds-v2-color-primary-60:  #A29AE6;

  --ds-v2-color-primary-80:  #8075DD;

  --ds-v2-color-primary-100: #554E93;

  --ds-v2-color-primary-120: #443E76;




/* --- Neutros --- */

  --ds-v2-color-gray-10:  #FCFCFC;

  --ds-v2-color-gray-15:  #FAFAFA;

  --ds-v2-color-gray-20:  #F7F7F7;

  --ds-v2-color-gray-25:  #E9E9E9;

  --ds-v2-color-gray-30:  #D4D4D4;

  --ds-v2-color-gray-40:  #C4C4C4;

  --ds-v2-color-gray-50:  #9C9BA0;

  --ds-v2-color-gray-60:  #7F7F85;

  --ds-v2-color-gray-70:  #60676E;

  --ds-v2-color-gray-80:  #2A2933;

  --ds-v2-color-gray-100: #222129;

  --ds-v2-color-white:    #FFFFFF;

  --ds-v2-color-black:    #000000;




/* --- Gradientes de marca --- */

  --ds-v2-gradient-brand:        linear-gradient(135deg, var(--ds-v2-color-primary-80) 0%, var(--ds-v2-color-primary-120) 100%);

  --ds-v2-gradient-brand-subtle: linear-gradient(135deg, var(--ds-v2-color-primary-10) 0%, var(--ds-v2-color-primary-30) 100%);




/* --- Bordas --- */

  --ds-v2-border-subtle:       #EEEEEE;

  --ds-v2-border-brand-subtle: var(--ds-v2-color-primary-30);




/* --- Status (pesos crus) --- */

  --ds-v2-info-10:    #EEF8FE;

  --ds-v2-info-30:    #CDE8F8;

  --ds-v2-info-80:    #5FB6E4;

  --ds-v2-info-120:   #1F7DB4;

  --ds-v2-success-10: #F3FCF8;

  --ds-v2-success-20: #D1FAE5;

  --ds-v2-success-30: #C3F2DC;

  --ds-v2-success-80: #56B97A;

  --ds-v2-success-100: #065F46;

  --ds-v2-success-120: #287350;

  --ds-v2-warning-10: #FFF7F0;

  --ds-v2-warning-20: #FEF3C7;

  --ds-v2-warning-30: #FFD8B5;

  --ds-v2-warning-60: #D97706;

  --ds-v2-warning-80: #E7CE6A;

  --ds-v2-warning-100: #78350F;

  --ds-v2-warning-120: #884912;

  --ds-v2-danger-10:  #FEF3F3;

  --ds-v2-danger-20:  #FEE2E2;

  --ds-v2-danger-30:  #FBC3C3;

  --ds-v2-danger-50:  #F79294;

  --ds-v2-danger-80:  #F24A4C;

  --ds-v2-danger-100: #C23B3D;

  --ds-v2-danger-120: #812729;




/* --- Status (papéis semânticos) --- */

  --ds-v2-status-info-surface:    var(--ds-v2-info-10);

  --ds-v2-status-info-border:     var(--ds-v2-info-30);

  --ds-v2-status-info-content:    var(--ds-v2-info-120);

  --ds-v2-status-success-surface: var(--ds-v2-success-10);

  --ds-v2-status-success-border:  var(--ds-v2-success-30);

  --ds-v2-status-success-content: var(--ds-v2-success-120);

  --ds-v2-status-warning-surface: var(--ds-v2-warning-10);

  --ds-v2-status-warning-border:  var(--ds-v2-warning-30);

  --ds-v2-status-warning-content: var(--ds-v2-warning-120);

  --ds-v2-status-danger-surface:  var(--ds-v2-danger-10);

  --ds-v2-status-danger-border:   var(--ds-v2-danger-30);

  --ds-v2-status-danger-content:  var(--ds-v2-danger-120);




/* --- Surface --- */

  --ds-v2-surface-body:         var(--ds-v2-color-gray-20);

  --ds-v2-surface-default:      var(--ds-v2-color-white);

  --ds-v2-surface-raised:       var(--ds-v2-color-white);

  --ds-v2-surface-subtle:       var(--ds-v2-color-gray-10);

  --ds-v2-surface-brand:        var(--ds-v2-gradient-brand);

  --ds-v2-surface-brand-subtle: var(--ds-v2-color-primary-10);

  --ds-v2-surface-inverse:      var(--ds-v2-color-gray-100);

  --ds-v2-surface-disabled:     var(--ds-v2-color-gray-20);




/* --- Content --- */

  --ds-v2-content-primary:    var(--ds-v2-color-gray-100);

  --ds-v2-content-secondary:  var(--ds-v2-color-gray-80);

  --ds-v2-content-muted:      var(--ds-v2-color-gray-60);

  --ds-v2-content-subtle:     var(--ds-v2-color-gray-50);

  --ds-v2-content-brand:      var(--ds-v2-color-primary-100);

  --ds-v2-content-danger:     var(--ds-v2-danger-120);

  --ds-v2-content-on-brand:   var(--ds-v2-color-primary-10);

  --ds-v2-content-on-inverse: var(--ds-v2-color-gray-10);




/* --- Badges --- */

  --ds-v2-badge-pending-surface:   #FFF2E6;

  --ds-v2-badge-pending-content:   #8A5410;

  --ds-v2-badge-progress-surface:  #E8F6FD;

  --ds-v2-badge-progress-content:  #0E63A6;

  --ds-v2-badge-submitted-surface: #F0E9FF;

  --ds-v2-badge-submitted-content: #5B36C9;

  --ds-v2-badge-review-surface:    #FFF7D9;

  --ds-v2-badge-review-content:    #7E6410;

  --ds-v2-badge-success-surface:   #E3FBEF;

  --ds-v2-badge-success-content:   #1C7342;

  --ds-v2-badge-failed-surface:    #FDEBEB;

  --ds-v2-badge-failed-content:    #B82E2E;

  --ds-v2-badge-expired-surface:   #EEEEEE;

  --ds-v2-badge-expired-content:   #6A6A6A;




/* --- Charts (Chart.js é a lib oficial) --- */

/* Paleta SEMÂNTICA — preferencial. Escolha a cor pelo papel do dado, não pela cor. */

  --ds-v2-chart-accent:     var(--ds-v2-color-primary-80); /* série principal / valor em foco */

  --ds-v2-chart-comparison: var(--ds-v2-color-gray-50);    /* série secundária / período anterior */

  --ds-v2-chart-positive:   #56B97A;                 /* receita, ganho, meta atingida */

  --ds-v2-chart-negative:   #DB5A4E;                 /* perda, cancelamento, alerta */

  --ds-v2-chart-attention:  #E7CE6A;                 /* pendência, atenção */

  --ds-v2-chart-info:       #5FB6E4;                 /* informativo, projeção, histórico */

  --ds-v2-chart-neutral:    var(--ds-v2-color-gray-30);    /* base, restante, sem dado */




/* Paleta CATEGÓRICA — use só quando não há semântica (muitas fatias/séries: rosca, pizza). */

  --ds-v2-chart-c1: #5B6CD6;

  --ds-v2-chart-c2: #8E7BE0;

  --ds-v2-chart-c3: #5FB6E4;

  --ds-v2-chart-c4: #56B97A;

  --ds-v2-chart-c5: #A9D472;

  --ds-v2-chart-c6: #E7CE6A;

  --ds-v2-chart-c7: #DB5A4E;

  --ds-v2-chart-c8: #8C9098;




/* Legado — não usar em código novo */

  --ds-v2-chart-blue: #5E6EDB;

  --ds-v2-chart-blue-strong: #3F43C9;

  --ds-v2-chart-mint: #66D1BE;

  --ds-v2-chart-sky: #A8DFF0;

  --ds-v2-chart-lilac: #B7A3EC;

  --ds-v2-chart-pink: #D78BDA;

  --ds-v2-chart-coral: #F48C8B;

  --ds-v2-chart-peach: #F6AD9E;

  --ds-v2-chart-green: #BFE8C8;




/* --- Tipografia --- */

  --ds-v2-font-family-base: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;

  --ds-v2-font-family-mono: 'Geist Mono', 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;

  --ds-v2-font-size-body-compact: 0.8125rem;

  --ds-v2-font-size-body-emphasis: 0.9375rem;

  --ds-v2-font-size-page-title: 1.625rem;




/* --- Espaçamento (base 4px) --- */

  --ds-v2-space-0:  0;

  --ds-v2-space-1:  0.25rem;

  --ds-v2-gap-tight: 0.375rem;

  --ds-v2-space-2:  0.5rem;

  --ds-v2-gap-compact: 0.625rem;

  --ds-v2-filter-chip-padding-block: 0.3125rem;

  --ds-v2-space-3:  0.75rem;

  --ds-v2-space-4:  1rem;

  --ds-v2-space-5:  1.25rem;

  --ds-v2-space-6:  1.5rem;

  --ds-v2-space-8:  2rem;

  --ds-v2-space-10: 2.5rem;

  --ds-v2-space-12: 3rem;

  --ds-v2-space-16: 4rem;




/* --- Border radius --- */

  --ds-v2-radius-xs:   4px;

  --ds-v2-radius-sm:   6px;

  --ds-v2-radius-md:   8px;

  --ds-v2-radius-lg:   12px;

  --ds-v2-radius-xl:   16px;

  --ds-v2-radius-2xl:  24px;

  --ds-v2-radius-pill: 999px;

  --ds-v2-radius-full: 9999px;




/* --- Sombras --- */

  --ds-v2-shadow-xs:            0 1px 2px rgba(34, 33, 41, 0.05);

  --ds-v2-shadow-sm:            0 1px 3px rgba(34, 33, 41, 0.07);

  --ds-v2-shadow-md:            0 2px 6px rgba(34, 33, 41, 0.08);

  --ds-v2-shadow-focus:         0 0 0 3px rgba(128, 117, 221, 0.18);

  --ds-v2-shadow-focus-success: 0 0 0 3px rgba(40, 115, 80, 0.14);

  --ds-v2-shadow-focus-danger:  0 0 0 3px rgba(129, 39, 41, 0.14);




  --ds-v2-border-default: var(--ds-v2-color-gray-30);

  --ds-v2-border: 1px solid var(--ds-v2-border-default);




  --ds-v2-overlay-backdrop: rgba(0, 0, 0, 0.52);

}




/* ============================================================

   Dark mode overrides — apply via data-theme="dark" on <html>

   Somente tokens semânticos são invertidos; paleta raw mantém-se.

   ============================================================ */

[data-theme="dark"] {

/* Surface */

  --ds-v2-surface-body:         #17161E;

  --ds-v2-surface-default:      #222129;

  --ds-v2-surface-subtle:       #1D1C25;

  --ds-v2-surface-brand-subtle: rgba(128, 117, 221, 0.14);

  --ds-v2-surface-disabled:     #2A2933;




/* Content */

  --ds-v2-content-primary:    #F7F7F7;

  --ds-v2-content-secondary:  #D4D4D4;

  --ds-v2-content-muted:      #9C9BA0;

  --ds-v2-content-subtle:     #7F7F85;

  --ds-v2-content-brand:      var(--ds-v2-color-primary-60);

  --ds-v2-content-on-inverse: #222129;




/* Borders */

  --ds-v2-border-subtle:       rgba(255, 255, 255, 0.08);

  --ds-v2-border:              1px solid rgba(255, 255, 255, 0.10);

  --ds-v2-border-brand-subtle: rgba(128, 117, 221, 0.25);




/* Inverse (tooltip, sidebar) */

  --ds-v2-surface-inverse:    #111018;

  --ds-v2-content-on-inverse: #F0F0F0;




/* Status — ligeiramente mais saturados no escuro */

  --ds-v2-status-info-surface:    rgba(31, 125, 180, 0.12);

  --ds-v2-status-info-border:     rgba(31, 125, 180, 0.30);

  --ds-v2-status-info-content:    #5FB6E4;

  --ds-v2-status-success-surface: rgba(40, 115, 80, 0.12);

  --ds-v2-status-success-border:  rgba(40, 115, 80, 0.30);

  --ds-v2-status-success-content: #56B97A;

  --ds-v2-status-warning-surface: rgba(136, 73, 18, 0.12);

  --ds-v2-status-warning-border:  rgba(136, 73, 18, 0.30);

  --ds-v2-status-warning-content: #E7CE6A;

  --ds-v2-status-danger-surface:  rgba(129, 39, 41, 0.12);

  --ds-v2-status-danger-border:   rgba(129, 39, 41, 0.30);

  --ds-v2-status-danger-content:  #F24A4C;




/* Sombras (mais suaves no escuro) */

  --ds-v2-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.30);

  --ds-v2-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.35);

  --ds-v2-shadow-md: 0 2px 6px rgba(0, 0, 0, 0.40);




/* Sombras de foco (alpha maior para visibilidade no fundo escuro) */

  --ds-v2-shadow-focus:         0 0 0 3px rgba(162, 154, 230, 0.35);

  --ds-v2-shadow-focus-success: 0 0 0 3px rgba(86, 185, 122, 0.28);

  --ds-v2-shadow-focus-danger:  0 0 0 3px rgba(242, 74, 76, 0.28);

}
// ============================================================

// Paytour Design System — Tokens de cor

// Fonte da verdade: paytour-ds-v1.html :root

// ============================================================




// --- Paleta primária (marca) ---

$ds-v2-color-primary-10:  #F7F6FD;

$ds-v2-color-primary-20:  #E6E3F8;

$ds-v2-color-primary-30:  #D5D1F4;

$ds-v2-color-primary-40:  #C4BFEF;

$ds-v2-color-primary-50:  #B3ACEB;

$ds-v2-color-primary-60:  #A29AE6;

$ds-v2-color-primary-80:  #8075DD;

$ds-v2-color-primary-100: #554E93;

$ds-v2-color-primary-120: #443E76;




// --- Paleta de status ---

$ds-v2-color-info-10:     #EEF8FE;

$ds-v2-color-info-30:     #CDE8F8;

$ds-v2-color-info-120:    #1F7DB4;




$ds-v2-color-success-10:  #F3FCF8;

$ds-v2-color-success-30:  #C3F2DC;

$ds-v2-color-success-50:  #93E8C0;

$ds-v2-color-success-80:  #4BD896;

$ds-v2-color-success-100: #3CAD78;

$ds-v2-color-success-120: #287350;




$ds-v2-color-warning-10:  #FFF7F0;

$ds-v2-color-warning-30:  #FFD8B5;

$ds-v2-color-warning-50:  #FFB87A;

$ds-v2-color-warning-80:  #FF8922;

$ds-v2-color-warning-100: #CC6E1B;

$ds-v2-color-warning-120: #884912;




$ds-v2-color-danger-10:   #FEF3F3;

$ds-v2-color-danger-30:   #FBC3C3;

$ds-v2-color-danger-50:   #F79294;

$ds-v2-color-danger-80:   #F24A4C;

$ds-v2-color-danger-100:  #C23B3D;

$ds-v2-color-danger-120:  #812729;




// --- Neutros ---

$ds-v2-color-gray-10:     #FCFCFC;

$ds-v2-color-gray-20:     #F7F7F7;

$ds-v2-color-gray-30:     #D4D4D4;

$ds-v2-color-gray-40:     #C4C4C4;

$ds-v2-color-gray-50:     #9C9BA0;

$ds-v2-color-gray-60:     #7F7F85;

$ds-v2-color-gray-70:     #60676E;

$ds-v2-color-gray-80:     #2A2933;

$ds-v2-color-gray-100:    #222129;




$ds-v2-color-white: #FFFFFF;

$ds-v2-color-black: #000000;




// --- Charts ---

$ds-v2-chart-blue:        #5E6EDB;

$ds-v2-chart-blue-strong: #3F43C9;

$ds-v2-chart-mint:        #66D1BE;

$ds-v2-chart-sky:         #A8DFF0;

$ds-v2-chart-lilac:       #B7A3EC;

$ds-v2-chart-pink:        #D78BDA;

$ds-v2-chart-coral:       #F48C8B;

$ds-v2-chart-peach:       #F6AD9E;

$ds-v2-chart-green:       #BFE8C8;




// paleta categórica para gráficos (8 cores)

$ds-v2-chart-c1: #5B6CD6;

$ds-v2-chart-c2: #8E7BE0;

$ds-v2-chart-c3: #5FB6E4;

$ds-v2-chart-c4: #56B97A;

$ds-v2-chart-c5: #A9D472;

$ds-v2-chart-c6: #E7CE6A;

$ds-v2-chart-c7: #DB5A4E;

$ds-v2-chart-c8: #8C9098;




// --- Badges ---

$ds-v2-badge-pending-surface:   #FFF2E6;

$ds-v2-badge-pending-content:   #8A5410;

$ds-v2-badge-progress-surface:  #E8F6FD;

$ds-v2-badge-progress-content:  #0E63A6;

$ds-v2-badge-submitted-surface: #F0E9FF;

$ds-v2-badge-submitted-content: #5B36C9;

$ds-v2-badge-review-surface:    #FFF7D9;

$ds-v2-badge-review-content:    #7E6410;

$ds-v2-badge-success-surface:   #E3FBEF;

$ds-v2-badge-success-content:   #1C7342;

$ds-v2-badge-failed-surface:    #FDEBEB;

$ds-v2-badge-failed-content:    #B82E2E;

$ds-v2-badge-expired-surface:   #EEEEEE;

$ds-v2-badge-expired-content:   #6A6A6A;




// --- Aliases semânticos de status (surface / border / content) ---

$ds-v2-color-info-surface:     $ds-v2-color-info-10;

$ds-v2-color-info-border:      $ds-v2-color-info-30;

$ds-v2-color-info-content:     $ds-v2-color-info-120;




$ds-v2-color-success-surface:  $ds-v2-color-success-10;

$ds-v2-color-success-border:   $ds-v2-color-success-30;

$ds-v2-color-success-content:  $ds-v2-color-success-120;




$ds-v2-color-warning-surface:  $ds-v2-color-warning-10;

$ds-v2-color-warning-border:   $ds-v2-color-warning-30;

$ds-v2-color-warning-content:  $ds-v2-color-warning-120;




$ds-v2-color-danger-surface:   $ds-v2-color-danger-10;

$ds-v2-color-danger-border:    $ds-v2-color-danger-30;

$ds-v2-color-danger-content:   $ds-v2-color-danger-120;




// --- Alias de cinza extra (gray-15 e gray-25) ---

$ds-v2-color-gray-15:          #F2F2F2;

$ds-v2-color-gray-25:          #E0E0E0;




// --- Gradientes da marca ---

$ds-v2-gradient-brand:        linear-gradient(135deg, #{$ds-v2-color-primary-80} 0%, #{$ds-v2-color-primary-120} 100%);

$ds-v2-gradient-brand-subtle: linear-gradient(135deg, #{$ds-v2-color-primary-10} 0%, #{$ds-v2-color-primary-30} 100%);

// ============================================================

// Paytour Design System — Tokens de espaçamento e raio

// Fonte da verdade: paytour-ds-v1.html :root (base 4px)

// ============================================================




// --- Espaçamento ---

$ds-v2-space-0:   0;

$ds-v2-space-1:   0.25rem;   // 4px

$ds-v2-gap-tight: 0.375rem;  // 6px

$ds-v2-space-2:   0.5rem;    // 8px

$ds-v2-gap-compact: 0.625rem; // 10px

$ds-v2-filter-chip-padding-block: 0.3125rem; // 5px

$ds-v2-space-3:   0.75rem;   // 12px

$ds-v2-space-4:   1rem;      // 16px

$ds-v2-space-5:   1.25rem;   // 20px

$ds-v2-space-6:   1.5rem;    // 24px

$ds-v2-space-8:   2rem;      // 32px

$ds-v2-space-10:  2.5rem;    // 40px

$ds-v2-space-12:  3rem;      // 48px

$ds-v2-space-16:  4rem;      // 64px




// --- Border radius ---

$ds-v2-radius-xs:   4px;

$ds-v2-radius-sm:   6px;

$ds-v2-radius-md:   8px;

$ds-v2-radius-lg:   12px;

$ds-v2-radius-xl:   16px;

$ds-v2-radius-2xl:  24px;

$ds-v2-radius-pill: 999px;

$ds-v2-radius-full: 9999px;




// --- Sombras ---

$ds-v2-shadow-xs:             0 1px 2px rgba(34, 33, 41, 0.05);

$ds-v2-shadow-sm:             0 1px 3px rgba(34, 33, 41, 0.07);

$ds-v2-shadow-md:             0 2px 6px rgba(34, 33, 41, 0.08);

$ds-v2-shadow-focus:          var(--ds-v2-shadow-focus);

$ds-v2-shadow-focus-success:  var(--ds-v2-shadow-focus-success);

$ds-v2-shadow-focus-danger:   var(--ds-v2-shadow-focus-danger);
// ============================================================

// Paytour Design System — Tokens tipográficos

// Fonte da verdade: paytour-ds-v1.html :root

// ============================================================




$ds-v2-font-family-base: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;

$ds-v2-font-family-mono: 'Geist Mono', 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;




// --- Escala de tamanhos (conforme Figma) ---

$ds-v2-font-size-micro:    0.625rem;   // 10px

$ds-v2-font-size-caption:  0.75rem;    // 12px

$ds-v2-font-size-body-compact: 0.8125rem; // 13px

$ds-v2-font-size-body-xs:       0.875rem;  // 14px (base de componente)

$ds-v2-font-size-body-emphasis: 0.9375rem; // 15px

$ds-v2-font-size-body-sm:       1rem;      // 16px

$ds-v2-font-size-body-md:  1.125rem;   // 18px

$ds-v2-font-size-body-lg:  1.25rem;    // 20px

$ds-v2-font-size-eyebrow:  1rem;       // 16px (Geist Mono, uppercase)

$ds-v2-font-size-page-title: 1.625rem;  // 26px

$ds-v2-font-size-h4:       1.5rem;     // 24px

$ds-v2-font-size-h3:       2rem;       // 32px

$ds-v2-font-size-h2:       3rem;       // 48px

$ds-v2-font-size-h1:       3.5rem;     // 56px




// aliases utilitários (compatibilidade com frontendV2)

$ds-v2-font-size-xs:       $ds-v2-font-size-caption;

$ds-v2-font-size-sm:       $ds-v2-font-size-body-xs;

$ds-v2-font-size-body:     $ds-v2-font-size-body-xs;

$ds-v2-font-size-subtitle: $ds-v2-font-size-body-sm;




// --- Letter-spacing para títulos ---

$ds-v2-heading-h1-ls: -1.12px;

$ds-v2-heading-h2-ls: -0.96px;

$ds-v2-heading-h3-ls: -0.64px;

$ds-v2-heading-h4-ls: -0.48px;

$ds-v2-page-title-ls: -0.4px;




// --- Pesos ---

$ds-v2-font-weight-regular:  400;

$ds-v2-font-weight-medium:   500;

$ds-v2-font-weight-semibold: 600;

$ds-v2-font-weight-bold:     700;




// aliases

$ds-v2-fw-regular:  $ds-v2-font-weight-regular;

$ds-v2-fw-medium:   $ds-v2-font-weight-medium;

$ds-v2-fw-semibold: $ds-v2-font-weight-semibold;

$ds-v2-fw-bold:     $ds-v2-font-weight-bold;




// --- Line heights ---

$ds-v2-line-height-heading: 1.4;

$ds-v2-line-height-base:    1.5;




// alias

$ds-v2-lh-heading: $ds-v2-line-height-heading;

$ds-v2-lh-base:    $ds-v2-line-height-base;

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://form-progress-magic.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c6efa1c9-4980-4a2e-a364-eb611f264be4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
