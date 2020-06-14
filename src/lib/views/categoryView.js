import { db } from '../functions.js';
export const categoryView = (doc) => {
  let docData = doc.data();
  const postsView = `
<section data-postid="${doc.id}" id="home-post-container">
  <div>
    <select class="user-post-actions">
      <option>Patita</option>
      <option>Editar</option>
      <option>Borrar</option>
    </select>
  </div>
  <div class="home-post">
    <div class="post">
      <h3 class="home-post-title">Título: ${docData.title}</h3>
      <h4 class="home-post-category">Categoría: ${docData.category} </h4>
      <h5 class="home-post-author">Autor: ${docData.author}</h5>
      <h5 class="home-post-likes">Me gusta: ${docData.likes}</h5>
      <p class="home-post-content">Contenido: ${docData.content}</p>
    </div>  
  </div>    
    <div class="post-actions">
      <button class="like-btn">Me gusta</button>
      <button class="trigger-comment-form-btn">Comentar</button>
      <button class="share-comment-btn">Compartir</button>
    </div>
    <div data-postid="${doc.id}" class="post-comment-form hidden-component">
      <form action="submit" class="comment-form">
        <textarea class="comment-content" type="text" placeholder="Escribe tu comentario aquí"></textarea><br>
        <button class="publish-comment-btn">Publicar</button>
      </form>
    </div>
  </section>
  `;
  return postsView;
}

export const newPostForm = (category) => {

  const formView = `
    <section id="new-post-container" data-category="${category}">
      <form id="new-post-form">
        <input id="form-post-title" type="text" placeholder="Título"><br>
        <textarea id="form-post-content" type="text" placeholder="Escribe tu publicación aquí"></textarea><br>
        <button id="new-post-btn">Publicar</button>
      </form>
    </section>
  `;
  return formView;
}



export const editModal = (category) => {

const editView= `
<div id="edit-modal-container" class="modal hidden-component">
         <span id="close-modal">&times</span>
  <div class="modal-container">
    <div class="modal-content">
      <form action="" id="edit-form">
      <input id="title-post-edit" placeholder="hola soy un titulo">
      <input id="content-post-edit" placeholder=" hola soy un comentario">
      <button id="">Aceptar</button>
    </form>
</div>`;
return editView;
}



