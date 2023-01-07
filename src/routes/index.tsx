import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../styles/home.scss?inline';

import { ChevronDown } from '~/components/icons/chevronDown';
import { ChevronRight } from '~/components/icons/chevronRight';
import { Focus } from '~/components/icons/focus';
import { Brain } from '~/components/icons/brain';
import { Sad } from '~/components/icons/sad';
import { Eat } from '~/components/icons/eat';
import { Guitar } from '~/components/icons/guitar';
import { Sleep } from '~/components/icons/sleep';
import { Check } from '~/components/icons/check';
import { Quotes } from '~/components/icons/quotes';

import psi from '../assets/psi.png';
import pacient from '../assets/pacient.png';

import Button from "../components/button/button"

export default component$(() => {
  useStylesScoped$(styles);
  
  const statusFirst = useSignal(false);
  const statusSecond = useSignal(false);
  const statusThird = useSignal(false);
  const statusFourth = useSignal(false);
  const statusFifth = useSignal(false);
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="left">
          <h3>CRP: 05/54980 | +7000h de experiência clínica</h3>
          <h1>Psicólogo na Vila da Penha (Rio de Janeiro)</h1>
          <h2>Na terapia criamos estratégias para diminuir o ritmo de uma mente acelerada pela ansiedade e viver uma vida leve, feliz e cheia de amor próprio.</h2>
          <Button outline text="Marcar consulta" fontSize={1.5}/>
        </div>

        <div class="right"></div>
      </div>

      <div class="issues">
        <h2>Você tem passado por algum desses problemas?</h2>
        <p>Se você sente que está sozinho, tomado por uma tristeza avassaladora e não consegue cumprir as tarefas diárias, deixa eu te contar uma coisa: você pode viver uma vida muito mais leve e cheia de amor próprio se der uma chance à terapia.</p>
        
        <div class="relatable-issues">
          <div class="issue"><Focus /><h4>Dificuldade para se concentrar e tomar decisões</h4></div>
          <div class="issue"><Eat /><h4>Alterações no apetite</h4></div>
          <div class="issue"><Brain /><h4>Mente agitada por pensamentos intrusivos</h4></div>
          <div class="issue"><Guitar /><h4>Desprazer em atividades que costumavam ser agradáveis</h4></div>
          <div class="issue"><Sad /><h4>Sentimentos de culpa e inutilidade</h4></div>
          <div class="issue"><Sleep /><h4>Alterações no sono</h4></div>
        </div>

        <h3>Você quer aprender a lidar com seu sofrimento psíquico?</h3>
        <Button text="Eu quero!" fontSize={1.5} outline={false} />
      </div>

      <div class="benefits">
        <h3>Sua vida não precisa ser uma batalha contra a sua mente.</h3>
        <h2>Veja os principais benefícios da terapia:</h2>

        <div class="container">
          <div class="left">
            <div class="benefit">
              <Check />
              <p>Aumento da autoconfiança</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Desenvolve resiliência</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Melhora nas relações interpessoais</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Ajuda a superar traumas</p>
            </div>
          </div>

          <div class="right">
            <div class="benefit">
              <Check />
              <p>Promove autoconhecimento</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Melhora na saúde física</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Ganhos de produtividade</p>
            </div>

            <div class="benefit">
              <Check />
              <p>Aprendizado para a vida inteira</p>
            </div>
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
          <div class="depo">
            <div class="header">
              <div class="image-container">
                <img src={pacient} alt="" />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <p>*Comentário disponível nas avaliações do Google</p>
              </div>
            </div>

            <div class="body">
              <Quotes/>
              <p>Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida...</p>
            </div>
          </div>

          <div class="depo">
            <div class="header">
              <div class="image-container">
                <img src={pacient} alt="" />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <p>*Comentário disponível nas avaliações do Google</p>
              </div>
            </div>

            <div class="body">
              <Quotes/>
              <p>Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida...</p>
            </div>
          </div>

          <div class="depo">
            <div class="header">
              <div class="image-container">
                <img src={pacient} alt="" />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <p>*Comentário disponível nas avaliações do Google</p>
              </div>
            </div>

            <div class="body">
              <Quotes/>
              <p>Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida...</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq">
        <h2>Dúvidas frequentes</h2>

        <div class="wrapper" onClick$={() => statusFirst.value = !statusFirst.value}>
          <div class="question">
            {
              statusFirst.value && <span><ChevronDown /></span>
            }
            {
              !statusFirst.value && <span><ChevronRight /></span>
            }
            <h3 class="text">O que esperar da 1ª sessão de terapia?</h3>
          </div>

          {
            statusFirst.value && <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</p>
          }
        </div>

        <div class="wrapper" onClick$={() => statusSecond.value = !statusSecond.value}>
          <div class="question">
            {
              statusSecond.value && <span><ChevronDown /></span>
            }
            {
              !statusSecond.value && <span><ChevronRight /></span>
            }
            <h3 class="text">Quanto tempo dura uma sessão?</h3>
          </div>

          {
            statusSecond.value && <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</p>
          }
        </div>

        <div class="wrapper" onClick$={() => statusThird.value = !statusThird.value}>
          <div class="question">
            {
              statusThird.value && <span><ChevronDown /></span>
            }
            {
              !statusThird.value && <span><ChevronRight /></span>
            }
            <h3 class="text">Qual é o valor do tratamento?</h3>
          </div>

          {
            statusThird.value && <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</p>
          }
        </div>

        <div class="wrapper" onClick$={() => statusFourth.value = !statusFourth.value}>
          <div class="question">
            {
              statusFourth.value && <span><ChevronDown /></span>
            }
            {
              !statusFourth.value && <span><ChevronRight /></span>
            }
            <h3 class="text">Preciso estar no Rio de Janeiro?</h3>
          </div>

          {
            statusFourth.value && <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</p>
          }
        </div>

        <div class="wrapper" onClick$={() => statusFifth.value = !statusFifth.value} id="last-question">
          <div class="question">
            {
              statusFifth.value && <span><ChevronDown /></span>
            }
            {
              !statusFifth.value && <span><ChevronRight /></span>
            }
            <h3 class="text">Você aceita plano de saúde?</h3>
          </div>

          {
            statusFifth.value && <p id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</p>
          }
        </div>

        <Button text="Entrar em contato" outline={false} fontSize={1.5} />
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
