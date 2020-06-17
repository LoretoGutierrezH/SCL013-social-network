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


// POSTS SEGÚN CAGETORÍA SELECCIONADA 
export const postsByCategoryFn = (view, category) => {
    const publicationContainer = document.querySelector('#publication');
    const mainForm = document.querySelector('#main-form');
    const editContainer = document.querySelector('#edit-post'); 
    publicationContainer.innerHTML = "";
    mainForm.innerHTML = newPostForm(category);
    editContainer.innerHTML = editModal(category);
    const postForm = document.querySelector('#new-post-form');
    
    
    //1. Crear nueva publicación por categoría
    postForm.addEventListener('submit', (event) => {
      const postTitle = postForm['form-post-title'].value;
      const postContent = postForm['form-post-content'].value;
      newPost(postTitle, postContent, category);
    })

    //2. Leer publicaciones por categoría
    db.collection(`${category}`).onSnapshot(docs => {
      publicationContainer.innerHTML = "";
      docs.forEach(doc => {
        // patita solo se muestra para post del usuario conectado (las reglas también están configuradas, aunque se muestre la patita, los usuarios solo pueden borrar o editar sus publicaciones)
        publicationContainer.innerHTML += view(doc);
        if (auth.currentUser && auth.currentUser.uid === doc.data().uid) {
          const paws = document.querySelectorAll('.pawEdit');
          paws.forEach(paw => {
            /* if ( paw.getAttribute('data-postid') === doc.data().uid ) {
              paw.classList.remove('hidden-component');
            } else {
              console.log(paw.getAttribute('data-postid'));
            } */
            // POR EL MOMENTO LE PONE PATITA A TODO, PERO LO VOY A ARREGLAR! //
            paw.classList.remove('hidden-component');
          })
        } 
      });
      
      //3. Editar publicación por su id
      let editOption = document.querySelectorAll('.editOption');
      editOption.forEach(btn => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          const editModal = document.querySelector('#edit-modal-container');
          const editForm = document.querySelector("#edit-form");
          editModal.classList.remove("hidden-component"); 
          let postId = event.target.parentElement.parentElement.parentElement.getAttribute('data-postid');
          console.log(postId);
          
          editForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let postTitle = editForm['title-post-edit'].value;
            let postContent = editForm['content-post-edit'].value;
            updatePost(postId, category, postTitle, postContent);
          })
        })
      })

      //4. Borrar publicación por su id
      let eraseBtn;
      eraseBtn = document.querySelectorAll('.eraseOption');
      eraseBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          let postId = event.target.parentElement.parentElement.parentElement.getAttribute('data-postid');
          console.log(postId);
          deletePost(postId, category);
        })
      });
    });

}

// Función crear nuevo post
const newPost = (postTitle, postContent, category) => {
  if (auth.currentUser) {
     db.collection(`${category}`).add({
       uid: `${auth.currentUser.uid}`,
       author: `${auth.currentUser.displayName}`,
       category: `${category}`,
       title: `${postTitle}`,
       content: `${postContent}`,
       likes: [],
       comments: {},
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     }).then(() => {
       console.log(`Publicación ${postTitle} creada por ${auth.currentUser.displayName}`);
     }).catch(error => {
       console.log(error);
     })
  } /* else {
    alert("Solo los usuarios registrados pueden publicar :)");
  } */
   
}

// Función borrar post
const deletePost = (postId, category) => {
  db.collection(`${category}`).doc(`${postId}`).delete().then(() => {
    console.log(`El post ${postId} fue eliminado de la base de datos`);
  }).catch(error => alert(`${error.message} - TRADUCCIÓN: no tení permisos oe!`));
}

// Función editar post
const updatePost = (postId, category, postTitle, postContent) => {
  db.collection(`${category}`).doc(`${postId}`).update({
    title: `${postTitle}`,
    content:`${postContent}`
  });
}



/*//filtro de categorias
export const categoryFilter = (category) => {
  const categoryForm = [];
  for (let i = 0; i < category.length; i += 1) {
    categoryForm.push(category[i]);
  }
  return categoryForm.filter(post => category.includes(tips));
};

const selectorCategoryE = document.querySelector("");
selectorCategory.addEventListener("change", () => {
    let categoryPubli = selectorCategory.value;
    if (categoryPubli === `${category}`) {
      postsByCategoryFn(category);
    } else {
        let result = categoryFilter(category);
        postsByCategoryFn(result);
    }
});*/
