
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './benefit.scss?inline';

import { Check } from '~/components/icons/check';

export default component$((props: any) => {
  useStylesScoped$(styles);

  return (
    <div class="benefit">
        <Check />
        <p>{props.text}</p>
    </div>
  );
});
