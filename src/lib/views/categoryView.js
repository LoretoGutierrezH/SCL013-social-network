export const categoryView = (doc) => {
  const docData = doc.data();
  const postsView = `
<section data-postid="${doc.id}" id="home-post-container">
  <div class="home-post">
  <div class="partDad">
    <div class="partOne">
    <div class="post">
      <h3 class="home-post-title">Título: ${docData.title}</h3>
      <h4 class="home-post-category">Categoría: ${docData.category} </h4>
      <h5 class="home-post-author">Autor: ${docData.author}</h5>
      <h5 class="home-post-likes">Me gusta: ${docData.likes}</h5>
      <h5 class="home-post-timestamp">Publicado: ${docData.timestamp.toDate()}</h5>
      <p class="home-post-content">Contenido: ${docData.content}</p>
    </div>  
  </div>  
  <div class="partTwo">
    <ul class="pawEdit hidden-component" data-postid="${doc.id}">
      <div class="pawBtn user-post-actions"><img src="./images/iconos/Paw.png"></div>
        <div class="paw-content">
          <li class="editOption"><a id="edit">Editar</a></li>
          <li class="eraseOption"><a id="erase">Borrar</a></li>
      </div>
    </ul>
    </div>
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
};

export const newPostForm = (category) => {
  const formView = `
    <section id="new-post-container" data-category="${category}">
    <div class="new-post">
      <form id="new-post-form">
        <input id="form-post-title" type="text" placeholder="Título"><br>
        <textarea id="form-post-content" type="text" placeholder="Escribe tu publicación aquí"></textarea><br>
        <button class="new-post-btn" id="new-post-btn">Publicar</button>
      </form>
      </div>
    </section>
  `;
  return formView;
};

export const editModal = () => {
  const editView = `
  <div id="edit-modal-container" class="modal edit-component">
          <span id="closeEdit">&times</span>
    <div class="modalEdit-container">
      <div class="modalEdit-content">
        <form action="" id="edit-form">
        <input id="title-post-edit" placeholder="hola soy un titulo">
        <input id="content-post-edit" placeholder=" hola soy un comentario">
        <button id="">Aceptar</button>
      </form>
  </div>`;
  return editView;
};
