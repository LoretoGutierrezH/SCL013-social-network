// Este es el punto de entrada de tu aplicacion
import { home } from './lib/views/home.js';
import { userprofile } from './lib/views/userProfile.js';
import { manageRoutesAndViews } from './lib/router.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
import { modalListeners } from './lib/views/modal.js';
import { auth, db } from './lib/index.js';
import { homePost } from './lib/views/homePost.js';

const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  window.location.hash = '#/home';
  window.addEventListener('hashchange', () => {
    manageRoutesAndViews(window.location.hash); // ej: '#/publication'
  });
};

window.onload = init();
//1. Event listeners y funciones del modal de la página de inicio
const signUpForm = document.querySelector('#sign-up-form');
const signInForm = document.querySelector('#sign-in-form');
const exit = document.querySelector('.exit');
const signInTab = document.querySelector('#sign-in-tab');
const signUpTab = document.querySelector('#sign-up-tab');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close-modal');
const signBtn = document.querySelector('.sign-btn');
// Dando funcionalidad de autenticación a formulario de registros, inicio de sesión e ícono de cierre de sesión
signUpFunction(signUpForm);
signInFunction(signInForm);
exitFunction(exit);
// Ejecutando función para agregar listeners al modal
modalListeners(signInForm, signInTab, signUpTab, modal, closeModal, signBtn, signUpForm);

// *EN PROCESO - NO BORRAR :D* - Recorriendo cada post y pasándole su información a la función homePost para que se genere la vista de cada uno
const publicationContainer = document.querySelector('#publication');
db.collection('posts').onSnapshot(docs => {
    publicationContainer.innerHTML = "";
    docs.forEach(doc => {
      publicationContainer.innerHTML += homePost(doc);
      console.log(doc);
      // 2. HAY QUE CAMBIAR ESTO PARA QUE CADA FORMULARIO ESTÉ CONECTADO CON SU POST Y BOTÓN! Event listeners de la sección de publicaciones de la página de inicio
      const likeBtn = document.querySelector('.like-btn');
      const triggerCommentFormBtn = document.querySelectorAll('.trigger-comment-form-btn');
      const publishCommentBtn = document.querySelector('.publish-comment-btn');
      const commentContent = document.querySelector('.comment-content');
      const commentForm = document.querySelector('.comment-form');

      // activando formulario de comentarios
      triggerCommentFormBtn.forEach(btn => {

        btn.addEventListener('click', () => {
          commentForm.classList.toggle('hidden-component');
          console.log("aloha");
        });
      });

      // dando funcionalidad a botón "Me gusta"
      likeBtn.addEventListener('click', () => {
        const post = document.querySelector('.home-post');
        let postID = post.getAttribute('data-postid')
        console.log(postID);
        console.log(auth.currentUser.uid);
        // obteniendo el id del usuario conectado
        db.collection('user').doc(`${auth.currentUser.uid}`).get().then(user => {
          // agregando likes
          db.collection('posts').doc(`${postID}`).update({
            likes: firebase.firestore.FieldValue.arrayUnion(`${user.data().userName}`),
          })
        });
       
        
      })


    //cierre de onSnapshot
    });
  })






// Se muestran u ocultan los íconos/opciones de inicio de sesión y la hamburguesa de perfil/mensajes/exit dependiendo de si el usuario está conectado o no. La clase inicial de la hamburguesa es 'hidden-component' para que esté oculta
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

// PUBLICACIONES

// Leer publicaciones (aquí podemos hacer una lectura por category)
/* db.collection('posts').onSnapshot((snapshot) => {
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    console.log(docData);
  });
}); */

// Crear publicaciones
/* db.collection('posts').add({
  title: "Quiero un perro",
  content: "Hace mucho que no tengo un perrito, ¿qué raza me recomiendan?",
  category: "bla",
  author: "uid.user.name",
  likes: {
    username:
  }
})  */

// Eliminar publicaciones

