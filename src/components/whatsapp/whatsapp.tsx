import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './whatsapp.scss?inline';

import { WhatsAppLogo } from '../icons/whatsapp';

export default component$(() => {
  useStylesScoped$(styles);

  return (
      <a class="container" href="https://api.whatsapp.com/send?phone=5521983578629&text=Quero%20marcar%20uma%20consulta." target="_blank" rel="noreferrer">
        <WhatsAppLogo height={48} width={48}/>
      </a>
  )
});