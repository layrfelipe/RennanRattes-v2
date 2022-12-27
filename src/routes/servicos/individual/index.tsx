import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../../styles/individual.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div class="container">
      <div class="above-the-fold-content">
        <div class="content">
          <h1>Terapia individual</h1>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Terapia individual',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
