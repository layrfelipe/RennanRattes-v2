import { component$, useStylesScoped$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../styles/home.scss?inline';

// import psi from '../assets/psi.png';
import psi from '../assets/psi.jpg';

import GoToWhatsappButton from "../components/goToWhatsappButton/goToWhatsappButton"
import RelatableIssueBox from '~/components/relatableIssueBox/relatableIssueBox';
import Benefit from '~/components/benefit/benefit';
import { Quotes } from '~/components/icons/quotes';
import Faq from '~/components/faq/faq'
import { Star } from '~/components/icons/star';

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="left">
          <h3>CRP: 05/54980 | +7000h de experiência clínica</h3>
          <h1>Psicólogo na Vila da Penha (Rio de Janeiro)</h1>
          <h2>Na terapia criamos estratégias para diminuir o ritmo de uma mente acelerada pela ansiedade e viver uma vida leve, feliz e cheia de amor próprio.</h2>
          <GoToWhatsappButton outline text="Marcar consulta" fontSize={1.5}/>
        </div>

        <div class="right"></div>
      </div>

      <div class="issues">
        <h2>Você tem passado por algum desses problemas?</h2>
        
        <div class="relatable-issues">
          <RelatableIssueBox icon="focus" text="Dificuldade para se concentrar e tomar decisões"/>
          <RelatableIssueBox icon="eat" text="Alterações no apetite"/>
          <RelatableIssueBox icon="brain" text="Mente agitada por pensamentos intrusivos"/>
          <RelatableIssueBox icon="guitar" text="Desprazer em atividades que costumavam ser agradáveis"/>
          <RelatableIssueBox icon="sad" text="Sentimentos de culpa e inutilidade"/>
          <RelatableIssueBox icon="sleep" text="Alterações no sono"/>
        </div>

        <p>Se você sente que está sozinho, tomado por uma tristeza avassaladora e não consegue cumprir as tarefas diárias, deixa eu te contar uma coisa: você pode viver uma vida muito mais leve e cheia de amor próprio se der uma chance à terapia.</p>

        <h3>Você quer aprender a lidar com seu sofrimento psíquico?</h3>
        <GoToWhatsappButton text="Eu quero!" fontSize={1.5} outline={false} />
      </div>

      <div class="benefits">
        <h2>Veja os principais benefícios da terapia:</h2>

        <div class="container">
          <div class="column" id="left">
            <Benefit text="Aumenta a autoconfiança" />
            <Benefit text="Desenvolve resiliência" />
            <Benefit text="Melhora as relações interpessoais" />
            <Benefit text="Ajuda a superar traumas" />
          </div>

          <div class="column" id="right">
            <Benefit text="Promove autoconhecimento" />
            <Benefit text="Melhora a saúde física" />
            <Benefit text="Aumenta a produtividade" />
            <Benefit text="Promove aprendizados de longo prazo" />
          </div>
        </div>

        <h3 id="text-over-button">Vamos juntos recuperar sua autoestima para viver uma vida plena!</h3>
      </div>

      <div class="about-me">
        <div class="left">
          <h3>Quem sou eu</h3>
          <h2>Psicólogo Rennan Rattes</h2>
          <p>Sou graduado em Psicologia pela Universidade Veiga de Almeida, no Rio de Janeiro. Escolhi dedicar minha vida à terapia clínica pois acredito que posso oferecer qualidade de vida e saúde mental para os meus clientes.</p>
          <br />
          <p>Não é minha missão fazer julgamentos, mas sim trazer reflexões que te ajudarão a encontrar repostas e motivação para agir melhor. Sei que não é fácil começar, mas fazer terapia comigo certamente será uma das melhores decisões da sua vida.</p>
          <br />
          <p id="last">Envie uma mensagem agora e tire todas as suas dúvidas antes de marcarmos uma sessão.</p>
          <GoToWhatsappButton text="Entrar em contato" outline={true} fontSize={1.5}/>
        </div>

        <div class="right">
          <div class="container">
            <img src={psi} alt=""/>
          </div>
        </div>
      </div>

      <div class="depos">
        <h2>Feedbacks</h2>

        <div class="depos-container">
          <div class="depo">
            <div class="header">
              <div class="description">
                  <h3>J.S., 32 anos</h3>
                  <div class="stars">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
              </div>
            </div>

            <div class="body">
                <Quotes/>
                <p>Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida...</p>
            </div>
          </div>

          <div class="depo">
            <div class="header">
              <div class="description">
                  <h3>M. F., 28 anos</h3>
                  <div class="stars">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
              </div>
            </div>

            <div class="body">
                <Quotes/>
                <p>Desde o início me senti confortável para falar dos meus conflitos internos, é um espaço que não me sinto julgada de maneira alguma.</p>
            </div>
          </div>

          <div class="depo">
            <div class="header">
              <div class="description">
                  <h3>A.P., 47 anos</h3>
                  <div class="stars">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
              </div>
            </div>

            <div class="body">
                <Quotes/>
                <p>Hoje me sinto muito mais confiante para lidar com as minhas questões emocionais. Obrigado por tudo que fez por mim, Rennan!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq">
        <h2>Dúvidas frequentes</h2>

        <Faq question="O que esperar da 1ª sessão de terapia?" answer="Uma sessão para nos conhecermos. Explicarei minha abordagem terapêutica, tirarei todas as suas dúvidas e ouvirei as demandas que fizeram você buscar ajuda profissional. Não espere que resolvamos todos os seus problemas logo de início, mas garanto que você se sentirá acolhido(a) o tempo todo."/>
        <Faq question="Quanto tempo dura uma sessão?" answer="50 minutos."/>
        <Faq question="Qual é o valor do tratamento?" answer="Por seguir um código de ética, não posso utilizar preços para divulgar meu trabalho. Por favor entre em contato para saber mais. Garanto que não se arrependerá."/>
        <Faq question="Preciso estar no Rio de Janeiro?" answer="Não necessariamente. Atendo presencialmente e online. Da maneira que você puder e se sentir mais confortável."/>
        <Faq question="Você aceita plano de saúde?" answer="Não, mas há a possibilidade de emitir recibos para solicitações de reembolso (que na maioria das vezes são aceitos)."/>

        <span id="add-margin"/>
        <GoToWhatsappButton text="Entrar em contato" outline={false} fontSize={1.5}/>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Início',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
