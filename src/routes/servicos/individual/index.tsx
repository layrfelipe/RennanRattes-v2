import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../../styles/individual.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="content">
          <h1>Terapia individual</h1>
          <h2>Seja o protagonista, assuma o controle e reflita sobre suas questões emocionais num ambiente livre de julgamentos e com sigilo garantido por lei.</h2>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Reflita: quando foi seu último gesto de autocuidado?</h3>
        </div>

        <div class='right'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.<br /><br />Morbi tristique libero vel sapien consectetur, vitae porta erat finibus. Suspendisse magna purus, pulvinar congue urna tristique, sollicitudin lobortis enim.</h4>
        </div>
      </div>

      <div class="steps">
        <h3>Por que fazer terapia?</h3>
        <span id="line" />
        <h4>Analisar nossas próprias angústias é um ato de coragem, mas também é o primeiro passo para uma escalada na direção do crescimento pessoal.</h4>

        <div class="steps-wrapper">
          <p class="step">Autoconfiança</p>
          <p class="step">Inteligência emocional</p>
          <p class="step">Relações saudáveis</p>
          <p class="step">Liberdade</p>
          <p class="step" id="final">Vida plena</p>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Dê o primeiro passo, você não vai se arrepender.</h3>
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
  title: 'Terapia individual',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
