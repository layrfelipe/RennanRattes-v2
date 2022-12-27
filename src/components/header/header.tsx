import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import styles from './header.scss?inline';

import { Menu } from '../icons/menu';

export default component$(() => {
  useStylesScoped$(styles);
  const mobileOpen = useSignal(false);

  const QwikLinkStyles = {
    'margin': '0 2vw',
    'font': '700 1.25rem Open Sans',
    'color': 'white',
    'text-decoration': 'none',
  };

  const QwikLinkStylesMobile = {
    'font': '700 1.2rem Open Sans',
    'color': 'white',
    'text-decoration': 'none',
    'padding': '3vh'
  };

  return (
    <header class="header">
      <div class="header-main-content">
        <div class="logo">LOGO</div>

        <nav class="links">
          <Link href='/' style={QwikLinkStyles}>Início</Link>
          <Link href='/servicos' style={QwikLinkStyles}>Serviços</Link>
          <Link href='/blog' style={QwikLinkStyles}>Blog</Link>
        </nav>

        <a class="cta-on-header" href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Marcar consulta</a>

        <button id="burger-menu" onClick$={() => mobileOpen.value = !mobileOpen.value}><Menu /></button>
      </div>

      {mobileOpen.value &&
        <div class="mobile-expanded">
          <Link href='/' style={QwikLinkStylesMobile}>Início</Link>
          <Link href='/servicos' style={QwikLinkStylesMobile}>Serviços</Link>
          <Link href='/blog' style={QwikLinkStylesMobile}>Blog</Link>
        </div>
      }
    </header>
  );
});
