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
          <h4>Como terapeuta, eu sei exatamente como é fácil negligenciar o autocuidado em meio ao caos da vida cotidiana.<br/><br/>Mas cuidar de nós mesmos é crucial para a nossa saúde mental. Dê um passo para trás, invista no seu bem estar. Quando foi a última vez que você foi a sua prioridade?</h4>
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
          <h4>Eu entendo que a princípio pode ser assustador, mas também pode ser o início de uma jornada incrível em direção ao seu crescimento e cura.<br/><br/>À medida que você avança no processo de autoconhecimento, novos caminhos podem surgir e você pode descobrir habilidades que nem sabia que existiam.</h4>
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
