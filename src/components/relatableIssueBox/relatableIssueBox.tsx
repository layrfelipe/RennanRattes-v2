
import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './relatableIssueBox.scss?inline';

import { Focus } from '~/components/icons/focus';
import { Eat } from '~/components/icons/eat';
import { Brain } from '~/components/icons/brain';
import { Guitar } from '~/components/icons/guitar';
import { Sad } from '~/components/icons/sad';
import { Sleep } from '~/components/icons/sleep';

export default component$((props: any) => {
  useStylesScoped$(styles);

  return (
    <div class="issue">
        { props.icon == "focus" && <Focus /> }
        { props.icon == "eat" && <Eat /> }
        { props.icon == "brain" && <Brain /> }
        { props.icon == "guitar" && <Guitar /> }
        { props.icon == "sad" && <Sad /> }
        { props.icon == "sleep" && <Sleep /> }

        <h4>{props.text}</h4>
    </div>
  );
});
