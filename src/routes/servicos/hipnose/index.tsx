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
          <h2>Aliada à terapia cognitivo comportamental, é uma ferramenta muito útil para ampliar a consciência e tratar transtornos diretamente nas suas origens.</h2>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>Já buscou ajuda e nada parece funcionar para você?</h3>
        </div>

        <div class='right'>
          <h4>A hipnoterapia é uma forma segura de alcançar mudanças duradouras em sua vida. Ela pode ajudá-lo a superar medos e fobias, reduzir o estresse e a ansiedade.<br/><br/>Acessando seu subconsciente, você pode desbloquear todo o seu potencial e alcançar os resultados positivos que deseja.</h4>
        </div>
      </div>

      <div class="steps">
        <h3>A hipnoterapia vai realmente me ajudar?</h3>
        <span id="line" />
        <h4>Esse tipo de terapia já se provou segura e eficaz. Entre em contato e tire as suas dúvidas diretamente comigo.</h4>

        <div class="steps-wrapper">
          <div class="step">Segurança</div>
          <div class="step">Empoderamento</div>
          <div class="step">Longo prazo</div>
          <div class="step">Eficácia</div>
          <div class="step" id="final">Transformação</div>
        </div>
      </div>

      <div class="question-section">
        <div class='left'>
          <h3>"É só um truque ou realmente funciona?"</h3>
        </div>

        <div class='right'>
          <h4>Existem muitos mitos ao redor da hipnoterapia que podem fazê-la parecer um truque ou até mesmo perigosa.<br/><br/>No entanto, a realidade é que se trata de uma forma de terapia baseada em evidências que ajudou inúmeras pessoas a alcançar mudanças de longo prazo em suas vidas.</h4>
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
