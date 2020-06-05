// Este es el punto de entrada de tu aplicacion
import { home } from './lib/views/home.js';
import { manageRoutesAndViews } from './lib/router.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
import { modalListeners } from './lib/views/modal.js';

const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  window.location.hash = '#/home';
  window.addEventListener('hashchange', () => {
    manageRoutesAndViews(window.location.hash); // ej: '#/publication'
  });
};

window.onload = init();
const signUpForm = document.querySelector('#sign-up-form');
const signInForm = document.querySelector('#sign-in-form');
const exit = document.querySelector('.exit');
const signInTab = document.querySelector('#sign-in-tab');
const signUpTab = document.querySelector('#sign-up-tab');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close-modal');
const signBtn = document.querySelector('.sign-btn');
signUpFunction(signUpForm);
signInFunction(signInForm);
exitFunction(exit);
modalListeners(signInForm, signInTab, signUpTab, modal, closeModal, signBtn, signUpForm);




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

