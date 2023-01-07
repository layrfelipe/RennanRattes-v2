import { component$, useSignal, useStylesScoped$, useTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import styles from './header.scss?inline';

import { Menu } from '../icons/menu';

import Logo from "../logo/logo"
import Button from "../button/button"

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
    'text-decoration': 'none',
  };

  const QwikLinkStylesMobile = {
    'font-weight': '700',
    'font-size': '1.25rem',
    'text-decoration': 'none',
    'padding': '4vh',
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'border-bottom': '2px solid white',
  }

  return (
    <header class="header">
      <div class="header-main-content">
        <Logo size={3.5}/>

        <nav class="links">
          <Link href='/' style={QwikLinkStyles}><span>Início</span></Link>
          <Link href='/servicos' style={QwikLinkStyles}><span>Serviços</span></Link>
          <Link href='/blog' style={QwikLinkStyles}><span>Blog</span></Link>
        </nav>

        <Button outline text="Marcar consulta" fontSize={1}/>

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
