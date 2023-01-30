import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

import styles from './blogPost.scss?inline';

export default component$((props: any) => {
    useStylesScoped$(styles);

    const nav = useNavigate();

    return(
        <div class="post" onClick$={() => { nav.path = props.path}}>
            <div class="image-wrapper" />

            <div class="text">
              <div class="top">
                <h3>{props.topic}</h3>
                <h2>{props.title}</h2>
              </div>

              <div class="bottom">
                <h4>{props.date}</h4>
              </div>
            </div>
          </div>
    );
});