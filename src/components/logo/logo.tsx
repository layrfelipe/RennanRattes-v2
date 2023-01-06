import { component$ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

import { Logo } from '../icons/logo';

export default component$((props: any) => {
  const loc = useLocation();
  const nav = useNavigate();

    const QwikLogoStyles = {
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "max-width": `${props.size}rem`,
        "max-height": `${props.size}rem`
    };

    return (
        <>
            <div style={QwikLogoStyles} onClick$={() => {
                if(loc.pathname == "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }
                else {
                    nav.path = "/"
                }
            }}>
                <Logo />
            </div>
        </>
    );
});