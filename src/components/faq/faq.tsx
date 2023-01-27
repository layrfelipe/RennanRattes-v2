import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik';

import styles from './faq.scss?inline';

import { ChevronDown } from '~/components/icons/chevronDown';
import { ChevronRight } from '~/components/icons/chevronRight';

export default component$((props: any) => {
    useStylesScoped$(styles);

    const status = useSignal(false);

    return(
        <div class="wrapper" onClick$={() => status.value = !status.value}>
            <div class="question">
                {
                    status.value && <span><ChevronDown /></span>
                }
                {
                    !status.value && <span><ChevronRight /></span>
                }
                <h3 class="text">{props.question}</h3>
            </div>

            {
                status.value && <p id="answer">{props.answer}</p>
            }
        </div>
    );
});