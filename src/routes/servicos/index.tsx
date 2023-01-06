import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';

import styles from '../../styles/servicos.scss?inline';

import individual from '../../assets/individual.png';
import casal from '../../assets/casal.png';
import hipnose from '../../assets/hipnose.webp';

export default component$(() => {
  useStylesScoped$(styles);

  const QwikLinkStyles = {
    'text-decoration': 'none',
    'color': '$green',
    'font': '600 1.25rem Open Sans',
    'background': '#cecece',
    'border': '3px solid $green',
    'padding': '1vh 5vh',
    'border-radius': '.5rem',
    'margin-top': '5vh',
  };
  
  return (
    <div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="headlines">
            <h1>Serviços</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h2>
          </div>

          <div class="service-container">
            <div class="image-container-left">
              <img src={individual} alt=""/>
            </div>

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

              <Link href='/servicos/individual' style={QwikLinkStyles}>Saiba mais</Link>
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

              <Link href='/servicos/casal' style={QwikLinkStyles}> Saiba mais</Link>
            </div>

            <div class="image-container-right">
              <img src={casal} alt=""/>
            </div>
          </div>

          <div class="service-container">
            <div class="image-container-left">
              <img src={hipnose} alt=""/>
            </div>

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

              <Link href='/servicos/hipnose' style={QwikLinkStyles}> Saiba mais</Link>
            </div>
          </div>

          <div class="final-page-cta">
            <h3>Tem dúvidas? Fale comigo agora</h3>
            <span id="line" />
            <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Entrar em contato</a>
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
