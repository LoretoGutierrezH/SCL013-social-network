import { newPostForm, editModal } from './views/categoryView.js';
import { uploadImagePost } from './authentication.js';

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

// HELPER - Muestra/oculta opciones del menú según usuario conectado/desconectado
export const showOrHideOptions = () => {
  const signBtn = document.querySelector('.sign-btn');
  const burgerMenu = document.querySelector('.burguer');
  auth.onAuthStateChanged((user) => {
    if (user !== null) {
      signBtn.classList.add('hidden-component');
      burgerMenu.classList.remove('hidden-component');
      //console.log(`ID de suario actual: ${auth.currentUser.uid}`);
    } else {
      signBtn.classList.remove('hidden-component');
      burgerMenu.classList.add('hidden-component');
    }
  });
};
/* const showOrHideSpinner = () => {
  const loadingContainer = document.querySelector('#loading-container');
  loadingContainer.classList.toggle('hidden-component');
}; */
// FUNCIONES DEL CRUD
// Función crear nuevo post
const newPost = (postTitle, postContent, category, url) => {
  if (auth.currentUser) {
    db.collection(`${category}`).add({
      uid: `${auth.currentUser.uid}`,
      author: `${auth.currentUser.displayName}`,
      category: `${category}`,
      title: `${postTitle}`,
      content: `${postContent}`,
      likes: [],
      comments: {},
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      foto: url,
    }).then((docRef) => {
      console.log(`Publicación ${postTitle} creada por ${auth.currentUser.displayName}`,docRef.id);
    }).catch((error) => {
      console.log(error);
    });
  }
  /* else {
     alert("Solo los usuarios registrados pueden publicar :)");
   } */
};

// Función borrar post
const deletePost = (postId, category) => {
  db.collection(`${category}`).doc(`${postId}`).delete().then(() => {
    console.log(`El post ${postId} fue eliminado de la base de datos`);
  })
    .catch(error => alert(`${error.message} - TRADUCCIÓN: no tení permisos oe!`));
};

// Función editar post
const updatePost = (postId, category, postTitle, postContent) => {
  db.collection(`${category}`).doc(`${postId}`).update({
    title: `${postTitle}`,
    content: `${postContent}`,
  });
};

// POSTS SEGÚN CAGETORÍA SELECCIONADA
export const postsByCategoryFn = (view, category) => {
  const publicationContainer = document.querySelector('#publication');
  const mainForm = document.querySelector('#main-form');
  const editContainer = document.querySelector('#edit-post');
  publicationContainer.innerHTML = '';
  mainForm.innerHTML = newPostForm(category);
  editContainer.innerHTML = editModal(category);
  const postForm = document.querySelector('#new-post-form');
  /*document.getElementById("form-post-content").value = ""; limpiar div de publicacion*/


  // 1. Crear nueva publicación por categoría
  postForm.addEventListener('submit', () => {
    const postTitle = postForm['form-post-title'].value;
    const postContent = postForm['form-post-content'].value;
    newPost(postTitle, postContent, category);




  });

const botonPublicar = document.getElementById('#new-post-btn');
  botonPublicar.addEventListener('click', () => {
    const info = document.getElementById('inputImg').files;
    if (info.lenght > 0) {
      const urlImg = uploadImagePost(info[0], 'imgPublicacion');
      urlImg.then((url) => {
        newPost(url);
      });
    } else {
      newPost(null);
    }
  });

  // 2. Leer publicaciones por categoría
  db.collection(`${category}`).onSnapshot((docs) => {
    publicationContainer.innerHTML = '';
    docs.forEach((doc) => {
      /* patita solo se muestra para post del usuario conectado */
      publicationContainer.innerHTML += view(doc);
      if (auth.currentUser && auth.currentUser.uid === doc.data().uid) {
        const paws = document.querySelectorAll('.pawEdit');
        paws.forEach((paw) => {
        /* if ( paw.getAttribute('data-postid') === doc.data().uid ) {
              paw.classList.remove('hidden-component');
            } else {
              console.log(paw.getAttribute('data-postid'));
            } */
          // POR EL MOMENTO LE PONE PATITA A TODO, PERO LO VOY A ARREGLAR! //
          paw.classList.remove('hidden-component');
        });
      }
    });

    // spinner (hay que moverlo a otro lado)
    const loadingContainer = document.getElementById('loading-container');
    const showSpinner = () => {
      loadingContainer.classList.remove('hidden-component');
    };

    const hideSpinner = () => {
      loadingContainer.classList.add('hidden-component');
    };

    if (publicationContainer.innerHTML !== '') {
      hideSpinner();
      console.log("aloha");
    } else {
      showSpinner();
    }
    // 3. Editar publicación por su id
    const editOption = document.querySelectorAll('.editOption');
    editOption.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const editModalContainer = document.querySelector('#edit-modal-container');
        const editForm = document.querySelector('#edit-form');
        editModalContainer.classList.remove('hidden-component');
        const postId = event.target.parentElement.parentElement.parentElement.getAttribute('data-postid');
        console.log(postId);
        editForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const postTitle = editForm['title-post-edit'].value;
          const postContent = editForm['content-post-edit'].value;
          updatePost(postId, category, postTitle, postContent);
        });
      });
    });
    // 4. Borrar publicación por su id
    const eraseBtn = document.querySelectorAll('.eraseOption');
    eraseBtn.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const postId = event.target.parentElement.parentElement.parentElement.getAttribute('data-postid');
        console.log(postId);
        deletePost(postId, category);
      });
    });
  });
};
/* Como subir fotos

const evento = document.querySelector('#inputImg');
evento.addEventListener('change', () => {
  const contenedorImagen = document.getElementById('fotoPublicacion');
  const inputImg = document.getElementById('inputImg');

  const reader = new FileReader();
  reader.onload = (e) => {
    contenedorImagen.setAttribute('src', e.target.result);
  };
  reader.readAsDataURL(inputImg.files[0]);
});*/


