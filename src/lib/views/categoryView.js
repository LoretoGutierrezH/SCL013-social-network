import { db } from '../functions.js';
export const categoryView = (doc) => {
  let docData = doc.data();
  const postsView = `
    <section data-postid="${doc.id}" id="home-post-container">
    <div class="home-post">
      <h3 class="home-post-title">Título: ${docData.title}</h3>
      <h4 class="home-post-category">Categoría: ${docData.category} </h4>
      <h5 class="home-post-author">Autor: ${docData.author}</h5>
      <h5 class="home-post-likes">Me gusta: ${docData.likes}</h5>
      <p class="home-post-content">Contenido: ${docData.content}</p>

    </div>
    <div class="post-actions">
      <button class="like-btn">Me gusta</button>
      <button class="trigger-comment-form-btn">Comentar</button>
      <button class="share-comment-btn">Compartir</button>
    </div>
    <div data-postid="${doc.id}" class="post-comment-form hidden-component">
      <form form action="submit" class="comment-form">
        <textarea class="comment-content" type="text" placeholder="Escribe tu comentario aquí"></textarea><br>
        <button class="publish-comment-btn">Publicar</button>
      </form>
    </div>
  </section>
  `;
  return postsView;
}

