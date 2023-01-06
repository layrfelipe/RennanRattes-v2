import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.scss?inline';

import { Phone } from '../icons/phone';
import { Email } from '../icons/email';
import { Loc } from '../icons/loc';

import { Logo } from '../icons/logo';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="footer">
        <div class="footer-main-content">
            <div class="left">
                <div class="logo-wrapper">
                    <div class="logo"><Logo /></div>
                </div>

                <div class="content">
                    <h3>Rennan Rattes | Psicólogo - CRP: 05/54980</h3>
                    <h4 id="impact-phrase">Frasezinha de efeito</h4>
                    <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Marcar consulta</a>
                </div>
            </div>

            <div class="right">
                <p id="sub-header">Entre em contato</p>
                <div class="channel"><Phone /><p>(21) 98357-8629</p></div>
                <div class="channel"><Email /><p>rennanrattespsi@gmail.com</p></div>
                <div class="channel"><Loc /><p>Estrada Padre Roser, 42 - Sala 1005 - Vila da Penha - Rio de Janeiro</p></div>
            </div>
        </div>

        <div class="bottom-bar-on-footer">
            <p>© 2023 | Todos os direitos reservados</p>
            <p>Site desenvolvido por <a href="https://br.linkedin.com/in/layr-felipe" target="_blank" rel="noreferrer">Layr Felipe</a></p>
        </div>
      
    </footer>
  );
});
