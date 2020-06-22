let category;
export const categoryView = (doc, formattedDate, auth) => {
  category = doc.data().category;
  const docData = doc.data();
  let liked;
  if (auth.currentUser !== null) {
    liked = doc.data().likes.includes(`${auth.currentUser.displayName}`);
  } else {
    liked = false;
  }

  let likeString;
  if (liked === true) {
    likeString = 'Ya no me gusta';
  } else {
    likeString = 'Me gusta';
  }
  const postsView = `
<section data-postid="${doc.id}" id="home-post-container">
  <div class="home-post">
  <div class="partDad">
  <div class="partOne">
    <div class="post">
      <h3 class="home-post-title">Título: ${docData.title}</h3>
      <h4 class="home-post-category">Categoría: ${docData.category} </h4>
      <h5 class="home-post-author">Autor: ${docData.author}</h5>
      <!--<img id="imagenPublicacion" src='${docData.foto}'>-->
      <h5 class="home-post-likes">Me gusta: ${docData.likes}</h5>
      <h5 class="home-post-timestamp">Publicado: ${formattedDate}</h5>
      <p class="home-post-content">Contenido: ${docData.content}</p>
    </div>  
  </div> 
  <div class="partTwo" data-author="${docData.uid}">
    <ul class="pawEdit hidden-component" data-postid="${doc.id}">
      <div class="pawBtn user-post-actions"><img url="./images/iconos/Paw.png"></div>
        <div class="paw-content">
          <li class="editOption"><a id="edit">Editar</a></li>
          <li class="eraseOption"><a id="erase">Borrar</a></li>
      </div>
    </ul>
    </div>
  </div> 
  </div>  
    <div class="post-actions">
    <div class="grupLike">
    <button class="like-btn"></button>
    <p class="counter-text">${docData.likes.length}</p></div>
      <button class="trigger-comment-form-btn">Comentar</button>
      <button class="share-comment-btn">Compartir</button>
    </div>
    <div data-formid="${doc.id}" class="post-comment-form hidden-component">
      <form action="submit" class="comment-form">
        <textarea class="comment-content" type="text" placeholder="Escribe tu comentario aquí (PRÓXIMAMENTE :D)"></textarea><br>
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
  <div id="edit-modal-container" class="modale hidden-component">
          <span class="closeEdit">&times</span>
    <div class="modalEdit-container">
      <div class="modalEdit-content">
        <form action="" id="edit-form">
        <p class="editp">Editar publicacion<p>
        <input id="title-post-edit" placeholder="Coloca un titulo">
        <input id="content-post-edit" placeholder="Deja un comentario">
        <button id="accept">Aceptar</button>
      </form>
  </div>`;
  return editView;
};
