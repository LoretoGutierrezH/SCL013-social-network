import { db } from '../index.js';
export const homePost = (doc) => {
  let docData = doc.data();
  const homePostView = `
    <section id="home-post-container">
    <div data-postid="${doc.id}" class="home-post">
      <h3 class="home-post-title">Título: ${docData.title}</h3>
      <h4 class="home-post-category">Categoría: ${docData.category} </h4>
      <h5 class="home-post-author">Autor: ${docData.author}</h5>
      <h5 class="home-post-likes">Me gusta: ${docData.likes}</5>
      <p class="home-post-content">Contenido: ${docData.content}</p>

    </div>
    <div class="post-actions">
      <button class="like-btn">Me gusta</button>
      <button class="trigger-comment-form-btn">Comentar</button>
      <button class="share-comment-btn">Compartir</button>
    </div>
    <div data-formid="${doc.id}" class="post-comment-form">
      <form form action="submit" class="hidden-component comment-form">
        <textarea class="comment-content" type="text" placeholder="Escribe tu comentario aquí"></textarea><br>
        <button class="publish-comment-btn">Publicar</button>
      </form>
    </div>
  </section>
  `;
  return homePostView;
}