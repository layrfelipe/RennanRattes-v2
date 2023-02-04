import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../../styles/hipnose.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="content">
          <h1>Hipnoterapia</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat.</h2>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
        </div>

        <div class='right'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.<br /><br />Morbi tristique libero vel sapien consectetur, vitae porta erat finibus. Suspendisse magna purus, pulvinar congue urna tristique, sollicitudin lobortis enim.</h4>
        </div>
      </div>

      <div class="steps">
        <h3>Etapas da terapia</h3>
        <span id="line" />
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat.</h4>

        <div class="steps-wrapper">
          <div class="step">Lorem</div>
          <div class="step">Ipsum</div>
          <div class="step">Dolor</div>
          <div class="step">Sit amet</div>
          <div class="step" id="final">Imperdiet</div>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
        </div>

        <div class='right'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.<br /><br />Morbi tristique libero vel sapien consectetur, vitae porta erat finibus. Suspendisse magna purus, pulvinar congue urna tristique, sollicitudin lobortis enim.</h4>
          <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20estou%20precisando%20de%20ajuda%20psicológica" target="_blank" rel="noreferrer">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Hipnoterapia',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
