import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import styles from '../../styles/blog.scss?inline';

import BlogPost from '~/components/blogPost/blogPost'

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <div class="above-the-fold-container">
        <div class="content">
          <h1>Blog</h1>
          <h2>Explore conteúdos sobre psicologia, ansiedade, depressão, relacionamentos, estresse, TDAH e muito mais.</h2>
        </div>
      </div>

      <div class="posts-container">
          <BlogPost path="/blog/post1" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
          <BlogPost path="/blog/post2" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
          <BlogPost path="/blog/post3" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
          <BlogPost path="/blog/post4" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
          <BlogPost path="/blog/post5" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
          <BlogPost path="/blog/post6" title="Título bem interessante para um blog post pika das galáticas" topic="Tópico X" date="29/01/2023"/>
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
