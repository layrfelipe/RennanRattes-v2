import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../styles/servicos.scss?inline';

import individual from '../../assets/individual.png';
import casal from '../../assets/casal.png';
import hipnose from '../../assets/hipnose.webp';

import Service from '~/components/service/service'

export default component$(() => {
  useStylesScoped$(styles);

  const individualIssues = ["Ansiedade", "Depressão", "Estresse", "TDAH", "Solidão"]
  const coupleIssues = ["Brigas frequentes", "Problemas sexuais", "Falta de diálogo", "Traições", "Vida financeira"]
  const hypnosisIssues = ["Fobias", "Vícios", "Depressão", "Transtornos alimentares", "Insônia", "Timidez"]
  
  return (
    <div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="headlines">
            <h1>Serviços</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum.</h2>
          </div>

          <Service image={individual} issues={individualIssues} title="Terapia individual" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum." />

          <Service image={casal} inverted={true} issues={coupleIssues} title="Terapia para casal" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum." />

          <Service image={hipnose} issues={hypnosisIssues} title="Hipnoterapia" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum." />

          <div class="final-page-cta">
            <p>Tem dúvidas? Fale comigo agora</p>
            <span id="line" />
            <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20estou%20precisando%20de%20ajuda%20psicológica" target="_blank" rel="noreferrer">Entrar em contato</a>
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
