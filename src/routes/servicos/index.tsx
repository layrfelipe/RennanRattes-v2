import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../styles/servicos.scss?inline';

import individual from '../../assets/individual.png';
import casal from '../../assets/casal.png';
import hipnose from '../../assets/hipnose.webp';

import Service from '~/components/service/service'

export default component$(() => {
  useStylesScoped$(styles);

  const individualIssues = ["Ansiedade", "Depressão", "Estresse", "TDAH", "Solidão", "Abuso de drogas"]
  const coupleIssues = ["Conflitos", "Vida sexual", "Falta de diálogo", "Traições", "Finanças", "Criação de filhos"]
  const hypnosisIssues = ["Fobias", "Vícios", "Depressão", "Transtornos alimentares", "Insônia", "Timidez"]
  
  return (
    <div class="container">
      <div class="content-wrapper">
        <div class="content">
          <div class="headlines">
            <h1>Serviços</h1>
            <h2>Você não precisa passar por tudo sozinho. Estou aqui para oferecer ajuda profissional para uma vida plena de saúde mental.</h2>
          </div>

          <Service image={individual} issues={individualIssues} title="Terapia individual" description="Seja o protagonista, assuma o controle e reflita sobre suas questões emocionais num ambiente livre de julgamentos e com sigilo garantido por lei." />

          <Service image={casal} inverted={true} issues={coupleIssues} title="Terapia para casal" description="Espaço para construção de uma comunicação mais reflexiva e assertiva para ambos, visando uma vida mais feliz e harmônica a dois." />

          <Service image={hipnose} issues={hypnosisIssues} title="Hipnoterapia" description="Aliada à terapia cognitivo comportamental, é uma ferramenta muito útil para ampliar a consciência e tratar transtornos diretamente nas suas origens." />

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
