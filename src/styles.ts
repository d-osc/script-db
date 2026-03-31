let stylesInitialized = false;

export const initStyles = () => {
  if (stylesInitialized) {
    return;
  }

  stylesInitialized = true;

  const style = document.createElement('style');
  style.id = 'app-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap');

    :root {
      --bg-top: #fbf5ec;
      --bg-bottom: #efe7da;
      --surface: rgba(255, 255, 255, 0.72);
      --surface-strong: rgba(255, 253, 249, 0.88);
      --ink: #162235;
      --muted: #5d6a7b;
      --brand: #11344f;
      --brand-strong: #0b2234;
      --accent: #c86a3c;
      --line: rgba(17, 52, 79, 0.14);
      --shadow: 0 24px 60px rgba(17, 52, 79, 0.12);
      --shadow-soft: 0 14px 30px rgba(17, 52, 79, 0.08);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: var(--ink);
      background:
        radial-gradient(circle at top left, rgba(200, 106, 60, 0.18), transparent 32%),
        radial-gradient(circle at top right, rgba(17, 52, 79, 0.14), transparent 28%),
        linear-gradient(180deg, var(--bg-top) 0%, #f4ede2 48%, var(--bg-bottom) 100%);
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image: linear-gradient(rgba(17, 52, 79, 0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(17, 52, 79, 0.025) 1px, transparent 1px);
      background-size: 42px 42px;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.75), transparent 90%);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button,
    input,
    textarea,
    select {
      font: inherit;
    }

    pre,
    code {
      font-family: 'IBM Plex Mono', Consolas, monospace;
    }

    ::selection {
      background: rgba(200, 106, 60, 0.2);
    }

    #app {
      min-height: 100vh;
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .container {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(18px);
      background: rgba(251, 245, 236, 0.78);
      border-bottom: 1px solid var(--line);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 0;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: var(--brand-strong);
    }

    .logo-mark {
      width: 40px;
      height: 40px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--brand), #2c668f);
      color: #fff;
      box-shadow: 0 12px 26px rgba(17, 52, 79, 0.18);
    }

    .logo-text {
      font-size: 1.08rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 12px;
      list-style: none;
      flex-wrap: wrap;
    }

    .nav-link,
    .nav-link-active {
      display: inline-flex;
      align-items: center;
      padding: 10px 14px;
      border-radius: 999px;
      color: var(--muted);
      font-size: 0.96rem;
      transition: all 0.18s ease;
    }

    .nav-link:hover {
      color: var(--brand);
      background: rgba(17, 52, 79, 0.06);
    }

    .nav-link-active {
      color: var(--brand-strong);
      background: rgba(17, 52, 79, 0.1);
      box-shadow: inset 0 0 0 1px rgba(17, 52, 79, 0.08);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-button,
    .button-primary,
    .button-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 18px;
      border-radius: 999px;
      font-weight: 600;
      transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
      border: 1px solid transparent;
    }

    .button-primary {
      color: #fff;
      background: linear-gradient(135deg, var(--brand), #265c83);
      box-shadow: 0 16px 28px rgba(17, 52, 79, 0.18);
    }

    .nav-button,
    .button-secondary {
      color: var(--brand-strong);
      background: rgba(255, 255, 255, 0.62);
      border-color: var(--line);
      box-shadow: var(--shadow-soft);
    }

    .nav-button:hover,
    .button-primary:hover,
    .button-secondary:hover {
      transform: translateY(-1px);
    }

    .nav-button:hover,
    .button-secondary:hover {
      background: rgba(255, 255, 255, 0.88);
      border-color: rgba(17, 52, 79, 0.22);
    }

    .main-content {
      flex: 1;
      padding: 32px 0 48px;
    }

    .page {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .page-hero {
      position: relative;
      overflow: hidden;
      padding: 32px;
      border-radius: 36px;
      background: linear-gradient(135deg, var(--surface-strong), rgba(255, 250, 244, 0.74));
      border: 1px solid rgba(17, 52, 79, 0.12);
      box-shadow: var(--shadow);
    }

    .page-hero::after {
      content: '';
      position: absolute;
      right: -120px;
      bottom: -160px;
      width: 360px;
      height: 360px;
      background: radial-gradient(circle, rgba(200, 106, 60, 0.2), transparent 62%);
      pointer-events: none;
    }

    .badge-row {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(17, 52, 79, 0.08);
      color: var(--brand-strong);
      font-size: 0.84rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .hero-eyebrow,
    .section-label {
      color: var(--accent);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .hero-eyebrow {
      position: relative;
      z-index: 1;
      margin-bottom: 14px;
    }

    .hero-title,
    .page-h1 {
      color: var(--brand-strong);
      line-height: 0.94;
      letter-spacing: -0.05em;
    }

    .hero-title {
      position: relative;
      z-index: 1;
      max-width: 12ch;
      margin-bottom: 18px;
      font-size: clamp(2.6rem, 7vw, 4.8rem);
    }

    .page-h1 {
      font-size: clamp(2.2rem, 6vw, 3.5rem);
      margin-bottom: 12px;
    }

    .subtitle,
    .page-lead,
    .page-p {
      color: var(--muted);
      line-height: 1.78;
    }

    .subtitle,
    .page-lead {
      max-width: 68ch;
      font-size: clamp(1.08rem, 2vw, 1.25rem);
    }

    .subtitle {
      position: relative;
      z-index: 1;
    }

    .hero-actions {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin: 28px 0 32px;
    }

    .stat-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .stat-card,
    .feature,
    .card,
    .step-card,
    .footer-grid {
      border: 1px solid rgba(17, 52, 79, 0.1);
      box-shadow: var(--shadow-soft);
    }

    .stat-card {
      padding: 18px 20px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.74);
    }

    .stat-value {
      display: block;
      margin-bottom: 6px;
      color: var(--brand-strong);
      font-size: 1.45rem;
      font-weight: 700;
    }

    .stat-label {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .page-h2 {
      color: var(--brand-strong);
      font-size: clamp(1.6rem, 3vw, 2.35rem);
      letter-spacing: -0.04em;
    }

    .page-h3,
    .feature-h3,
    .card-title,
    .footer-heading {
      color: var(--brand-strong);
      letter-spacing: -0.02em;
    }

    .page-h3,
    .feature-h3,
    .card-title {
      font-size: 1.12rem;
    }

    .page-ul {
      display: grid;
      gap: 10px;
      padding-left: 1.25rem;
      color: var(--muted);
    }

    .page-li {
      line-height: 1.7;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .feature,
    .card,
    .step-card {
      padding: 24px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.72);
      transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .feature:hover,
    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 32px rgba(17, 52, 79, 0.12);
    }

    .feature-h3,
    .card-title {
      margin-bottom: 10px;
    }

    .split-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
      align-items: start;
    }

    .page-pre {
      overflow: auto;
      padding: 18px 20px;
      border-radius: 20px;
      background: #152334;
      color: #eff4f8;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 16px 30px rgba(11, 34, 52, 0.18);
    }

    .page-code {
      display: block;
      white-space: pre;
      font-size: 0.92rem;
      line-height: 1.7;
      background: transparent;
      color: inherit;
    }

    :not(pre) > .page-code {
      display: inline;
      padding: 0.1rem 0.4rem;
      border-radius: 8px;
      background: rgba(17, 52, 79, 0.08);
      color: var(--brand-strong);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .tab,
    .tab-active {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 11px 16px;
      border-radius: 999px;
      border: 1px solid var(--line);
      cursor: pointer;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.62);
      color: var(--muted);
      transition: all 0.18s ease;
    }

    .tab:hover {
      color: var(--brand-strong);
      background: rgba(255, 255, 255, 0.88);
    }

    .tab-active {
      color: #fff;
      background: var(--brand);
      border-color: var(--brand);
      box-shadow: 0 10px 20px rgba(17, 52, 79, 0.14);
    }

    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .step-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 14px;
    }

    .step-card {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .step-number {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: rgba(17, 52, 79, 0.1);
      color: var(--brand-strong);
      font-weight: 700;
    }

    .note {
      padding: 16px 18px;
      border-radius: 18px;
      background: rgba(43, 122, 103, 0.1);
      border: 1px solid rgba(43, 122, 103, 0.16);
      color: #21463b;
    }

    .inline-link,
    .footer-links a {
      color: var(--brand);
      text-decoration: underline;
      text-decoration-color: rgba(17, 52, 79, 0.22);
      text-underline-offset: 0.18em;
    }

    .inline-link:hover,
    .footer-links a:hover {
      color: var(--accent);
      text-decoration-color: rgba(200, 106, 60, 0.35);
    }

    .footer {
      margin-top: auto;
      padding: 20px 0 36px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr;
      gap: 20px;
      padding: 28px 30px;
      border-radius: 28px;
      background: rgba(255, 255, 255, 0.68);
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--muted);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: var(--muted);
    }

    .footer-heading {
      margin-bottom: 6px;
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .footer-small {
      margin-top: 16px;
      text-align: center;
      color: var(--muted);
      font-size: 0.92rem;
    }

    @media (max-width: 1080px) {
      .features,
      .step-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .stat-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 820px) {
      .nav {
        flex-wrap: wrap;
      }

      .nav-links {
        order: 3;
        width: 100%;
      }

      .nav-actions {
        margin-left: auto;
      }

      .split-grid,
      .stat-grid,
      .features,
      .step-grid,
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .page-hero {
        padding: 24px;
      }
    }

    @media (max-width: 640px) {
      .container,
      .page {
        width: min(100% - 24px, 1180px);
      }

      .nav {
        padding: 14px 0;
      }

      .logo-mark {
        width: 36px;
        height: 36px;
      }

      .hero-title,
      .page-h1 {
        font-size: clamp(2rem, 12vw, 3rem);
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .button-primary,
      .button-secondary,
      .nav-button,
      .tab,
      .tab-active {
        width: 100%;
      }

      .main-content {
        padding-top: 24px;
      }
    }
  `;

  document.head.appendChild(style);
};

// Re-export styles from separate file to avoid circular dependency
export { styles } from './styleNames';
