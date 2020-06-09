import { db } from '../index.js';
export const tipsPost = (doc) => {
  let docData = doc.data();
  const tipsView = `
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
  return tipsView;
}

export const tipsPostsFn = (tipsPost, ) => {
  const publicationContainer = document.querySelector('#tips');
  db.collection('posts').onSnapshot(docs => {
    publicationContainer.innerHTML = "";
    docs.forEach(doc => {
        publicationContainer.innerHTML += homePost(doc);
        const likeBtn = document.querySelectorAll('.like-btn');
        const triggerCommentFormBtn = document.querySelectorAll('.trigger-comment-form-btn');
        const commentForm = document.querySelectorAll('.post-comment-form');

      // Le da función al botón "Comentar" para mostrar/ocultar el formulario
      triggerCommentFormBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
          let postID = event.target.parentElement.parentElement.getAttribute('data-postid');

          commentForm.forEach(form => {
            if (form.getAttribute('data-postid') === postID) {
              form.classList.toggle('hidden-component');
              console.log(`Activaste el formulario de comentario del post ${postID}`);
            }

          });

        });
      })


      // Relaciona cada "Me gusta" al post correspondiente y actualiza "likes"
      likeBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
          let postID = event.target.parentElement.parentElement.getAttribute('data-postid')
          console.log(`Le diste me gusta al post ${postID} (solo se agrega el userName si no se había dado "like" antes - SI HAY ERROR ES PORQUE NO HAY USUARIO CONECTADO!)`);
          // obteniendo el id del usuario conectado
          db.collection('user').doc(`${auth.currentUser.uid}`).get().then(user => {
            // agregando likes
            db.collection('posts').doc(`${postID}`).update({
              likes: firebase.firestore.FieldValue.arrayUnion(`${user.data().userName}`),
            })
          });


        });
      })
    });
  })
}