import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useNavigate } from '@builder.io/qwik-city';

import styles from '../../styles/blog.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const nav = useNavigate();
  
  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="content">
          <h1>Blog</h1>
          <h2>Explore conteúdos sobre psicologia, ansiedade, depressão, relacionamentos, estresse, TDAH e muito mais.</h2>
        </div>
      </div>

      <div class="posts-container">
        <div class="first-row">
          <div class="featured" onClick$={() => { nav.path = "/blog/destaque"}}>
            <div class="top">
              <h3>Tópico</h3>
              <h2>Título bem interessante para um blog post pika das galáticas</h2>
            </div>

            <div class="bottom">
              <h4>01/12/2022</h4>
              <span>EM DESTAQUE</span>
            </div>
          </div>

          <div class="second-post" onClick$={() => { nav.path = "/blog/destaque"}}>
            <div class="image-wrapper" />

            <div class="text">
              <div class="top">
                <h3>Tópico</h3>
                <h2>Título bem interessante para um blog post pika das galáticas</h2>
              </div>

              <div class="bottom">
                <h4>01/12/2022</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="blog-grid">
          
          <div class="post" onClick$={() => { nav.path = "/blog/destaque"}}>
            <div class="image-wrapper">
              
            </div>

            <div class="text">
              <div class="top">
                <h3>Tópico</h3>
                <h2>Título bem interessante para um blog post pika das galáticas</h2>
              </div>

              <div class="bottom">
                <h4>01/12/2022</h4>
              </div>
            </div>
          </div>

        
          <div class="post" onClick$={() => { nav.path = "/blog/destaque"}}>
            <div class="image-wrapper">
              
            </div>

            <div class="text">
              <div class="top">
                <h3>Tópico</h3>
                <h2>Título bem interessante para um blog post pika das galáticas</h2>
              </div>

              <div class="bottom">
                <h4>01/12/2022</h4>
              </div>
            </div>
          </div>

        
          <div class="post" onClick$={() => { nav.path = "/blog/destaque"}}>
            <div class="image-wrapper">
              
            </div>

            <div class="text">
              <div class="top">
                <h3>Tópico</h3>
                <h2>Título bem interessante para um blog post pika das galáticas</h2>
              </div>

              <div class="bottom">
                <h4>01/12/2022</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
