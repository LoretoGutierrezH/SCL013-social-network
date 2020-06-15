export const userprofile = () => {
    const viewUserProfile = `
    <main class= "userprofile" id="profile">
<section id="user-post-container">
    <div class="user-post">
      <h4 class="user-post-title">Título</h4>
      <h5 class="user-post-category">Categoría</h5>
      <p class="user-post-content">Contenido</p>
    </div>
    <div class="user-post-actions">
      <button class="user-edit-btn">editar</button>
      <button class="user-erase-form-btn">borrar</button>
    </div>
    <div class="user-post-actions">
      <button class="user-like-btn">Me gusta</button>
      <button class="user-trigger-comment-form-btn">Comentar</button>
      <button class="user-share-comment-btn">Compartir</button>
    </div>
    <div class="user-post-comment-form">
      <form form action="submit" class="hidden-component comment-form">
        <textarea class="comment-content" type="text" placeholder="Escribe tu comentario aquí"></textarea><br>
        <button class="publish-comment-btn">Publicar</button>
      </form>
    </div>
  </section>
  </main>
  `;
  return viewUserProfile;
}
