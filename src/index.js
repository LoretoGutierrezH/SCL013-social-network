// aqui exportaras las funciones que necesites
export const db = firebase.firestore();
export const auth = firebase.auth();

// Posts del home y sus respectivas funciones
export const homePostsFn = (homePost) => {
  const publicationContainer = document.querySelector('#publication');
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

// Muestra u oculta opciones del menú según si el usuario está conectado o no
export const showOrHideOptions = () => {
  const signBtn = document.querySelector('.sign-btn');
  const burgerMenu = document.querySelector('.burguer');
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      signBtn.classList.add('hidden-component');
      burgerMenu.classList.remove('hidden-component');
      console.log(auth.currentUser.uid);
    } else {
      signBtn.classList.remove('hidden-component');
      burgerMenu.classList.add('hidden-component');
    }
  });
}

/*FUNCIÓN FILTRADO POR CATEGORÍA*/

export const categoryFilterFn = (category) => {
  db.collection('posts').where('category', '==', `${category}`).get().then((snapshots) => {
    snapshots.forEach(doc => {
      //console.log(doc.data());
      categoryFilterFn(category);
    });
  });
};