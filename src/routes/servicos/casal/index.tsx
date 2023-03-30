import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../../styles/casal.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="content">
          <h1>Terapia para casal</h1>
          <h2>Espaço para construção de uma comunicação mais reflexiva e assertiva para ambos, visando uma vida mais feliz e harmônica a dois.</h2>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>A comunicação está difícil? Não sabem mais o que fazer?</h3>
        </div>

        <div class='right'>
          <h4>A terapia de casal é o que vocês precisam. Reconstrua a parceria dos primeiros dias, estabeleça uma comunicação mais saudável. Nunca é tarde para cuidar de si e do seu amor.</h4>
        </div>
      </div>

      <div class="steps">
        <h3>Se vocês ainda têm fé na relação...</h3>
        <span id="line" />
        <h4>A terapia de casal pode fortalecer o vínculo, redescobrir o amor e construir um futuro brilhante.</h4>

        <div class="steps-wrapper">
          <div class="step">Comunicação</div>
          <div class="step">Intimidade</div>
          <div class="step">Empatia</div>
          <div class="step">Compromisso</div>
          <div class="step" id="final">Renovação</div>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Presos na rotina? Sentindo-se estagnados?</h3>
        </div>

        <div class='right'>
          <h4>Fiquem tranquilos, isso é mais comum do que provavelmente pensam. Nas nossas sessões, criaremos estratégias para quebrar velhos hábitos e reacender a paixão. Volte a sentir "borboletas na barriga" com o seu amor.</h4>
          <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20estou%20precisando%20de%20ajuda%20psicológica" target="_blank" rel="noreferrer">Entrar em contato</a>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Terapia para casal',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
