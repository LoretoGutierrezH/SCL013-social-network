import { newPostForm, editModal } from './views/categoryView.js';
export const db = firebase.firestore();
export const auth = firebase.auth();


// HELPER - Muestra/oculta opciones del menú según usuario conectado/desconectado
export const showOrHideOptions = () => {
  const signBtn = document.querySelector('.sign-btn');
  const burgerMenu = document.querySelector('.burguer');
  auth.onAuthStateChanged(user => {
    if (user !== null) {
      signBtn.classList.add('hidden-component');
      burgerMenu.classList.remove('hidden-component');
      console.log(`ID de suario actual: ${auth.currentUser.uid}`);
    } else {
      signBtn.classList.remove('hidden-component');
      burgerMenu.classList.add('hidden-component');
    }
  });
}

// POSTS DEL HOME
export const homePostsFn = (view) => {
  const publicationContainer = document.querySelector('#publication');
  db.collection('posts').get().then((docs => {
    publicationContainer.innerHTML = "";
    docs.forEach(doc => {
      publicationContainer.innerHTML += view(doc);
    });
    setPostsFunctions(); // fns de botones Me gusta, Comentar y Compartir
  }));
}
        


// POSTS SEGÚN CAGETORÍA SELECCIONADA 
export const postsByCategoryFn = (view, category) => {
    const publicationContainer = document.querySelector('#publication');
    const mainForm = document.querySelector('#main-form');
    const editContainer = document.querySelector('#edit-post'); 
    
    publicationContainer.innerHTML = "";
    mainForm.innerHTML = newPostForm(category);
    editContainer.innerHTML = editModal(category);
    const formEdit = document.querySelector('#edit-form');

    setEditPost(formEdit, category);



    db.collection('posts').where('category', '==', `${category}`).onSnapshot(querySnapshots => {
      let publicationForm = document.querySelector('#new-post-form');
      //Configurando la funcionalidad del formulario de nueva publicación
      setPublicationForm(publicationForm, category);

      let postsChanges = querySnapshots.docChanges();
      console.log(postsChanges);
      //Evaluación de tipo de cambio (post agregado o eliminado)
      postsChanges.forEach(change => {
        console.log(change);
        if (change.type === "added") {
          publicationContainer.insertAdjacentHTML('beforeend', view(change.doc));
           
        } else if (change.type === "removed") {
          let postId = change.doc.id;
          let post = document.querySelector(`[data-postid="${postId}"]`);
          publicationContainer.removeChild(post);
          console.log("Post eliminado");
        }
      })
      setPostsFunctions();
    });
}


// AGREGA FUNCIONALIDAD A BOTONES DE POSTS INDEPENDIENTE DE LA VISTA 
const setPostsFunctions = () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const triggerCommentFormBtns = document.querySelectorAll('.trigger-comment-form-btn');
  const paws = document.querySelectorAll('.user-post-actions');
  const commentForms = document.querySelectorAll('.post-comment-form');

  // Le da función al botón "Comentar" para mostrar/ocultar el formulario
  triggerCommentFormBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      let postID = event.target.parentElement.parentElement.getAttribute('data-postid');

      commentForms.forEach(form => {
        if (form.getAttribute('data-postid') === postID) {
          form.classList.toggle('hidden-component');
          console.log(`Activaste el formulario de comentario del post ${postID}`);
        }

      });

    });
  })


  // Relaciona cada "Me gusta" al post correspondiente y actualiza "likes"
  likeBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      let postID = event.target.parentElement.parentElement.getAttribute('data-postid');
      console.log(`Le diste me gusta al post ${postID} (solo se agrega el userName si no se había dado "like" antes - SI HAY ERROR ES PORQUE NO HAY USUARIO CONECTADO!)`);
      // obteniendo el id del usuario conectado
      db.collection('user').doc(`${auth.currentUser.uid}`).get().then(user => {
        // agregando likes
        db.collection('posts').doc(`${postID}`).update({
          likes: firebase.firestore.FieldValue.arrayUnion(`${user.data().userName}`),
        })
      });


    });
  });


  // Patita con opciones de editar y borrar publicación
  paws.forEach(paw => {
    paw.addEventListener('change', (event) => {
      event.preventDefault();
      if (event.target.value === "Borrar") {
        let postID = event.target.parentElement.parentElement.getAttribute('data-postid');
        db.collection('posts').doc(`${postID}`).delete();
        console.log("Borraste " + postID);
      } else if (event.target.value === "Editar") {
        let postID = event.target.parentElement.parentElement.getAttribute('data-postid');
        let editContainer = document.querySelector('#edit-modal-container');
        editContainer.classList.remove('hidden-component');
        updatePost(postID);
        console.log("Lo podrías EDITAR aunque no fuera tuyo");
      }

    })
  })

}


// Agregando funcionalidad al formulario de nueva publicación
const setPublicationForm = (publicationForm, category) => {
  //console.log(publicationForm['post-title']);
  //console.log(publicationForm);
  publicationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Evento de formulario funcionando ok");
    let postTitle = publicationForm['form-post-title'].value;
    let postContent = publicationForm['form-post-content'].value;
    newPost(postTitle, postContent, category)
    
  });
}
const setEditPost = (form, category) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let postTitle = form['title-post-edit'].value;
    let postContent = form['content-post-edit'].value; 
   // db.collection('posts').doc(`${postID}`).delete();
    
  }
  
  )
}
const updatePost = (postId) => {

  db.collection('posts').doc(`${postID}`).update({
    title: `${postTitle}`,
    content: `${postContent}`
  });
}

//Crear nueva publicación
const newPost = (postTitle, postContent, category) => {
  db.collection('user').doc(`${auth.currentUser.uid}`).onSnapshot(user => {
    db.collection('posts').add({
      uid: auth.currentUser.uid,
      author: `${user.data().userName}`,
      category: `${category}`,
      title: `${postTitle}`,
      content: `${postContent}`
    }).then(() => {
      console.log(`Publicación ${postTitle} creada por ${user.data().userName}`);
    });
  });
}
