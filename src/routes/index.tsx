import { component$, useStylesScoped$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../styles/home.scss?inline';

import psi from '../assets/psi.png';
import pacient from '../assets/pacient.png';

import GoToWhatsappButton from "../components/goToWhatsappButton/goToWhatsappButton"
import RelatableIssueBox from '~/components/relatableIssueBox/relatableIssueBox';
import Benefit from '~/components/benefit/benefit';
import Depo from '~/components/depo/depo';
import Faq from '~/components/faq/faq';

export default component$(() => {
  useStylesScoped$(styles);
  
  // const statusFirst = useSignal(false);
  // const statusSecond = useSignal(false);
  // const statusThird = useSignal(false);
  // const statusFourth = useSignal(false);
  // const statusFifth = useSignal(false);
  
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
        <p>Se você sente que está sozinho, tomado por uma tristeza avassaladora e não consegue cumprir as tarefas diárias, deixa eu te contar uma coisa: você pode viver uma vida muito mais leve e cheia de amor próprio se der uma chance à terapia.</p>
        
        <div class="relatable-issues">
          <RelatableIssueBox icon="focus" text="Dificuldade para se concentrar e tomar decisões"/>
          <RelatableIssueBox icon="eat" text="Alterações no apetite"/>
          <RelatableIssueBox icon="brain" text="Mente agitada por pensamentos intrusivos"/>
          <RelatableIssueBox icon="guitar" text="Desprazer em atividades que costumavam ser agradáveis"/>
          <RelatableIssueBox icon="sad" text="Sentimentos de culpa e inutilidade"/>
          <RelatableIssueBox icon="sleep" text="Alterações no sono"/>
        </div>

        <h3>Você quer aprender a lidar com seu sofrimento psíquico?</h3>
        <GoToWhatsappButton text="Eu quero!" fontSize={1.5} outline={false} />
      </div>

      <div class="benefits">
        <h3>Sua vida não precisa ser uma batalha contra a sua mente.</h3>
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

        <h3 id="text-over-button">Vamos juntos recuperar seu bem-estar e a sua autoestima para viver uma vida plena!</h3>
      </div>

      <div class="about-me">
        <div class="left">
          <h3>Quem sou eu</h3>
          <h2>Psicólogo Rennan Rattes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec. Morbi tristique libero vel sapien consectetur, vitae porta erat finibus. Suspendisse magna purus, pulvinar congue urna tristique, sollicitudin lobortis enim.</p>
          <br/>
          <p>Ut sodales turpis tellus, ac facilisis leo molestie sed. Proin quis lorem a magna venenatis venenatis. Vivamus vitae ante nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nec neque vitae ipsum finibus aliquam. Donec molestie egestas urna, sed condimentum turpis. Fusce a vehicula mi. Mauris ut mattis ipsum, nec interdum tortor. Nulla sit amet massa a urna tincidunt aliquet ut quis enim.</p>
          <br />
          <p>Suspendisse potenti. Mauris in rutrum magna. Sed vehicula et diam a accumsan. Nam maximus sagittis orci eget vulputate. Suspendisse sed convallis ante, hendrerit semper dolor. Integer volutpat metus ac metus viverra, hendrerit ullamcorper dui fermentum. Suspendisse potenti.</p>
        </div>

        <div class="right">
          <div class="container">
            <img src={psi} alt=""/>
          </div>
        </div>
      </div>

      <div class="depos">
        <h2>Depoimentos</h2>

        <div class="depos-container">
          <Depo author="Jessica Silva" photo={pacient} text="Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida..."/>
          <Depo author="Jessica Silva" photo={pacient} text="Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida..."/>
          <Depo author="Jessica Silva" photo={pacient} text="Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida..."/>
        </div>
      </div>

      <div class="faq">
        <h2>Dúvidas frequentes</h2>

        <Faq question="O que esperar da 1ª sessão de terapia?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec."/>
        <Faq question="Quanto tempo dura uma sessão?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec."/>
        <Faq question="Qual é o valor do tratamento?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec."/>
        <Faq question="Preciso estar no Rio de Janeiro?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec."/>
        <Faq question="Você aceita plano de saúde?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec."/>

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
