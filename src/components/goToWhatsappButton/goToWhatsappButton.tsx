import { component$ } from '@builder.io/qwik';

export default component$((props: any) => {

    const QwikOutlineButtonStyles = {
        "font-size": `${props.fontSize}rem`,
        "font-weight": "600",
        "border": "2px solid white",
        "border-radius": ".5rem",
        "padding": "1vh 1rem",
        "width": "fit-content"
    };

    const QwikButtonStyles = {
        "font-size": `${props.fontSize}rem`,
        "font-weight": "600",
        "border-radius": ".5rem",
        "padding": "1vh 1rem",
        "width": "fit-content",
        "background": "#0a3541",
        "box-shadow": "4px 4px 4px rgba(0, 0, 0, 0.3)"
    };

    return (
        <>
            <a style={props.outline ? QwikOutlineButtonStyles : QwikButtonStyles } href="https://api.whatsapp.com/send?phone=5521983578629&text=Olá,%20estou%20precisando%20de%20ajuda%20psicológica" target="_blank" rel="noreferrer">{props.text}</a>
        </>
    );
});