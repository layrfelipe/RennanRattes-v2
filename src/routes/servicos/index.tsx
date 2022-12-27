import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

import styles from '../../styles/servicos.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const QwikLinkStyles = {
    'margin-top': '3vh',
    'text-decoration': 'none',
    'color': '#224851',
    'font': '600 1rem Open Sans',
    'border': '2px solid #224851',
    'padding': '1vh',
    'border-radius': '.5rem',

  };
  
  return (
    <div class="container">
      <div class="above-the-fold-content">
        <div class="content">
          <h1>Serviços</h1>

          <div class="services">
            <div class="service">
              <div class="image-container">
                {/* <img /> */}
              </div>

              <div class="text-wrapper">
                <h2>Terapia individual</h2>
                <p>Ressignifique padrões de pensamento num ambiente acolhedor e confidencial (sob sigilo ético-profissional)</p>
                <Link style={QwikLinkStyles} href="/servicos/individual">Saiba mais</Link>
              </div>
            </div>

            <div class="service">
              <div class="image-container">
                {/* <img /> */}
              </div>

              <div class="text-wrapper">
                <h2>Terapia para casais</h2>
                <p>Ressignifique padrões de pensamento num ambiente acolhedor e confidencial (sob sigilo ético-profissional)</p>
                <Link style={QwikLinkStyles} href="/servicos/casais">Saiba mais</Link>
              </div>
            </div>

            <div class="service">
              <div class="image-container">
                {/* <img /> */}
              </div>

              <div class="text-wrapper">
                <h2>Hipnoterapia</h2>
                <p>Ressignifique padrões de pensamento num ambiente acolhedor e confidencial (sob sigilo ético-profissional)</p>
                <Link style={QwikLinkStyles} href="/servicos/hipnose">Saiba mais</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Serviços',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
