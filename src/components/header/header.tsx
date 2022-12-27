import { component$, useSignal, useStylesScoped$, useTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import styles from './header.scss?inline';

import { Menu } from '../icons/menu';

export default component$(() => {
  useStylesScoped$(styles);
  const mobileOpen = useSignal(false);

  const loc = useLocation();

  useTask$(({ track }) => {
    track(() => loc.pathname);
    if (mobileOpen) mobileOpen.value = false
  });

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
    'padding': '3vh',
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'border': '1px solid #224851'
  }

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
