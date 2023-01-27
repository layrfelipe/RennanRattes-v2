
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './depo.scss?inline';
import { Quotes } from '~/components/icons/quotes';

export default component$((props: any) => {
  useStylesScoped$(styles);

  return (
    <div class="depo">
        <div class="header">
            <div class="image-container">
                <img src={props.photo} alt="Foto de um paciente que deixou avaliação no Google" />
            </div>

            <div class="description">
                <h3>{props.author}</h3>
                <p>*Comentário disponível nas avaliações do Google</p>
            </div>
        </div>

        <div class="body">
            <Quotes/>
            <p>{props.text}</p>
        </div>
    </div>
    
  );
});
