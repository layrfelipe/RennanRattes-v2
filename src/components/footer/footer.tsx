import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.scss?inline';

import { Phone } from '../icons/phone';
import { Email } from '../icons/email';
import { Loc } from '../icons/loc';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="footer">
        <div class="footer-main-content">
            <div class="left">
                <div class="logo-wrapper">
                    <div class="logo">LOGO</div>
                </div>

                <div class="content">
                    <span>Rennan Rattes | Psicólogo - CRP: 05/54980</span>
                    <span id="impact-phrase">Frasezinha de efeito</span>
                    <a href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">Marcar consulta</a>
                </div>
            </div>

            <div class="right">
                <span id="sub-header">Entre em contato</span>
                <div class="channel"><Phone /><span>(21) 98357-8629</span></div>
                <div class="channel"><Email /><span>rennanrattespsi@gmail.com</span></div>
                <div class="channel"><Loc /><span>Estrada Padre Roser, 42 - Sala 1005 - Vila da Penha - Rio de Janeiro</span></div>
            </div>
        </div>

        <div class="bottom-bar-on-footer">
            <p>© 2023 | Todos os direitos reservados</p>
            <p>Site desenvolvido por <a href="https://br.linkedin.com/in/layr-felipe" target="_blank" rel="noreferrer">Layr Felipe</a></p>
        </div>
      
    </footer>
  );
});
