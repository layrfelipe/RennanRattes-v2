import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './service.scss?inline';

import { Link } from '@builder.io/qwik-city';

export default component$((props: any) => {
  useStylesScoped$(styles);

  const QwikLinkStyles = {
    'text-decoration': 'none',
    'color': 'white',
    'font-weight': '600',
    'font-size': '1.25rem',
    'background': '#0a3541',
    'padding': '1.5vh 5vh',
    'border-radius': '.5rem',
    'margin-top': '5vh',
    "box-shadow": "4px 4px 4px rgba(0, 0, 0, 0.3)"
  };

  return (
    <div class="service">
        {
            !props.inverted &&
            <div class="image-container-left">
                <img src={props.image} alt=""/>
            </div>
        }

        <div class="content-wrapper">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>

            <div class="problems">
                {
                    props.issues.map((issue: string) => {
                        return(
                            <div class="problem">
                                <div class="icon-square-container"></div>
                                <h4 key={issue}>{issue}</h4>
                            </div>
                        );
                    })
                }
            </div>

            <Link href={props.title == "Terapia individual" ? "/servicos/individual" : props.title == "Terapia para casal" ? "/servicos/casal" : "/servicos/hipnose"} style={QwikLinkStyles}>Saiba mais</Link>

        </div>

        {
            props.inverted &&
            <div class="image-container-right">
                <img src={props.image} alt=""/>
            </div>
        }
    </div>
  );
});
