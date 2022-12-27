import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Whatsapp from '../components/whatsapp/whatsapp';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
          <Whatsapp />
        </section>
      </main>
      <Footer />
    </>
  );
});
