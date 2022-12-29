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
          <div class="headlines">
            <h1>Serviços</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h2>
          </div>


          <div class="service-container">
            <div class="image-container-left"></div>

            <div class="content-wrapper">
              <h2>Terapia individual</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h3>

              <div class="problems">
                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>
                </div>

                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>                  
                </div>
              </div>
            </div>
          </div>


          <div class="service-container">
            <div class="content-wrapper">
              <h2>Terapia para casal</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h3>

              <div class="problems">
                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>
                </div>

                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>                  
                </div>
              </div>
            </div>

            <div class="image-container-right"></div>
          </div>


          <div class="service-container">
            <div class="image-container-left"></div>

            <div class="content-wrapper">
              <h2>Hipnoterapia</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h3>

              <div class="problems">
                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>
                </div>

                <div class="col">
                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Ansiedade</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Depressão</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>TDAH</h4>
                  </div>

                  <div class="problem">
                    <div class="icon-square-container"></div>
                    <h4>Estresse</h4>
                  </div>                  
                </div>
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
