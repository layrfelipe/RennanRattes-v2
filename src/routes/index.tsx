// import { component$, useStore, useStylesScoped$, $ } from '@builder.io/qwik';
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../styles/home.scss?inline';

// import { ChevronDown } from '~/components/icons/chevronDown';
// import { ChevronRight } from '~/components/icons/chevronRight';
// import { Focus } from '~/components/icons/focus';
// import { Brain } from '~/components/icons/brain';
// import { Sad } from '~/components/icons/sad';
// import { Eat } from '~/components/icons/eat';
// import { Guitar } from '~/components/icons/guitar';
// import { Sleep } from '~/components/icons/sleep';
// import { Check } from '~/components/icons/check';
// import { Quotes } from '~/components/icons/quotes';

export default component$(() => {
  useStylesScoped$(styles);
  
  // const statusFirst = useStore({ value: false });
  // const handleFirst = $(() => {
  //   statusFirst.value = !statusFirst.value;
  // });

  // const statusSecond = useStore({ value: false });
  // const handleSecond = $(() => {
  //   statusSecond.value = !statusSecond.value;
  // });

  // const statusThird = useStore({ value: false });
  // const handleThird = $(() => {
  //   statusThird.value = !statusThird.value;
  // });

  // const statusFourth = useStore({ value: false });
  // const handleFourth = $(() => {
  //   statusFourth.value = !statusFourth.value;
  // });

  // const statusFifth = useStore({ value: false });
  // const handleFifth = $(() => {
  //   statusFifth.value = !statusFifth.value;
  // });
  
  return (
    <div class="container">
      <div class="above-the-fold-content">
        {/* <div class="left">
          <h3>Rennan Rattes | Psicólogo - CRP: 05/54980 | +7000h de experiência clínica</h3>
          <h1>Psicólogo na Vila da Penha (Rio de Janeiro)</h1>
          <h2>Na terapia criamos estratégias para diminuir o ritmo de uma mente acelerada pela ansiedade e viver uma vida leve, feliz e cheia de amor próprio.</h2>
          <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Marcar consulta</a>
        </div>

        <div class="right">
          <div class="container">
            <img src={desenho}/>
          </div>
        </div> */}
      </div>

      {/* <div class="issues">
        <h1>Você tem passado por algum desses problemas?</h1>
        <h4>Se você sente que está sozinho, tomado por uma tristeza avassaladora e não consegue cumprir as tarefas diárias, deixa eu te contar uma coisa: você pode viver uma vida muito mais leve e cheia de amor próprio se der uma chance à terapia.</h4>
        
        <div class="relatable-issues">
          <div class="issue"><Focus /><h2>Dificuldade para se concentrar e tomar decisões</h2></div>
          <div class="issue"><Eat /><h2>Alterações no apetite</h2></div>
          <div class="issue"><Brain /><h2>Mente agitada por pensamentos intrusivos</h2></div>
          <div class="issue"><Guitar /><h2>Desprazer em atividades que costumavam ser agradáveis</h2></div>
          <div class="issue"><Sad /><h2>Sentimentos de culpa e inutilidade</h2></div>
          <div class="issue"><Sleep /><h2>Alterações no sono</h2></div>
        </div>

        <h3>Você quer aprender a lidar com seu sofrimento psíquico?</h3>
        <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Eu quero!</a>
      </div> */}


      {/* <div class="benefits">
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

          <span id="line"/>

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
      </div> */}

      {/* <div class="about-me">
        <div class="left">
          <h4>Quem sou eu</h4>
          <h3>Psicólogo Rennan Rattes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec. Morbi tristique libero vel sapien consectetur, vitae porta erat finibus. Suspendisse magna purus, pulvinar congue urna tristique, sollicitudin lobortis enim.</p>
          <br/>
          <p>Ut sodales turpis tellus, ac facilisis leo molestie sed. Proin quis lorem a magna venenatis venenatis. Vivamus vitae ante nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nec neque vitae ipsum finibus aliquam. Donec molestie egestas urna, sed condimentum turpis. Fusce a vehicula mi. Mauris ut mattis ipsum, nec interdum tortor. Nulla sit amet massa a urna tincidunt aliquet ut quis enim.</p>
          <br />
          <p>Suspendisse potenti. Mauris in rutrum magna. Sed vehicula et diam a accumsan. Nam maximus sagittis orci eget vulputate. Suspendisse sed convallis ante, hendrerit semper dolor. Integer volutpat metus ac metus viverra, hendrerit ullamcorper dui fermentum. Suspendisse potenti.</p>
        </div>

        <div class="right">
          <div class="container">

          </div>
        </div>
      </div> */}

      {/* <div class="depos">
        <h2>Depoimentos</h2>

        <div class="depos-container">
          <div class="depo">
            <div class="header">
              <div class="image-container">
                <img />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <h4>*Comentário disponível nas avaliações do Google</h4>
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
                <img />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <h4>*Comentário disponível nas avaliações do Google</h4>
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
                <img />
              </div>
              <div class="description">
                <h3>Jessica Silva</h3>
                <h4>*Comentário disponível nas avaliações do Google</h4>
              </div>
            </div>

            <div class="body">
              <Quotes/>
              <p>Posso dizer que seu profissionalismo comigo durante as sessões foi uma das melhores coisas que já aconteceram na minha vida...</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="faq">
        <h1>Dúvidas frequentes</h1>

        <div class="wrapper" onClick$={handleFirst}>
          <div class="question">
            {
              statusFirst.value && <span><ChevronDown /></span>
            }
            {
              !statusFirst.value && <span><ChevronRight /></span>
            }
            <span>O que esperar da 1ª sessão de terapia?</span>
          </div>

          {
            statusFirst.value && <span id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</span>
          }
        </div>

        <div class="wrapper" onClick$={handleSecond}>
          <div class="question">
            {
              statusSecond.value && <span><ChevronDown /></span>
            }
            {
              !statusSecond.value && <span><ChevronRight /></span>
            }
            <span>Quanto tempo dura uma sessão?</span>
          </div>

          {
            statusSecond.value && <span id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</span>
          }
        </div>

        <div class="wrapper" onClick$={handleThird}>
          <div class="question">
            {
              statusThird.value && <span><ChevronDown /></span>
            }
            {
              !statusThird.value && <span><ChevronRight /></span>
            }
            <span>Qual é o valor do tratamento?</span>
          </div>

          {
            statusThird.value && <span id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</span>
          }
        </div>

        <div class="wrapper" onClick$={handleFourth}>
          <div class="question">
            {
              statusFourth.value && <span><ChevronDown /></span>
            }
            {
              !statusFourth.value && <span><ChevronRight /></span>
            }
            <span>Preciso estar no Rio de Janeiro?</span>
          </div>

          {
            statusFourth.value && <span id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</span>
          }
        </div>

        <div class="wrapper" onClick$={handleFifth}>
          <div class="question">
            {
              statusFifth.value && <span><ChevronDown /></span>
            }
            {
              !statusFifth.value && <span><ChevronRight /></span>
            }
            <span>Você aceita plano de saúde?</span>
          </div>

          {
            statusFifth.value && <span id="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet tellus id auctor elementum. Phasellus ut tellus erat. Suspendisse tristique massa lectus, pulvinar mattis sapien venenatis nec.</span>
          }
        </div>

        <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Entrar em contato</a>
      </div> */}
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
