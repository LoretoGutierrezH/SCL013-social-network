// Este es el punto de entrada de tu aplicacion
import { home } from './lib/views/home.js';
import { manageRoutesAndViews } from './lib/router.js';
import { signUpFunction } from './lib/authentication/authentication.js';

const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  window.location.hash = '#/home';
  window.addEventListener('hashchange', () => {
    manageRoutesAndViews(window.location.hash); // ej: '#/publication'
  });
};

<<<<<<< HEAD
window.onload= root.innerHTML = home();
=======
window.onload = init();
const signUpForm = document.querySelector('#sign-up-form');
signUpFunction(signUpForm);
>>>>>>> upstream/master

// Agregando event listeners del modal
const toggleModalForm = () => {
  const signInTab = document.querySelector('#sign-in-tab');
  const signUpTab = document.querySelector('#sign-up-tab');
  const signInForm = document.querySelector('#sign-in-form');
  signInTab.addEventListener('click', () => {
    signInForm.classList.remove('hidden-component');
    signUpForm.classList.add('hidden-component');
    signUpTab.classList.add('inactive-tab');
    signUpTab.classList.remove('active-tab');
    signInTab.classList.add('active-tab');
  });
  signUpTab.addEventListener('click', () => {
    signUpForm.classList.remove('hidden-component');
    signInForm.classList.add('hidden-component');
    signInTab.classList.remove('active-tab');
    signInTab.classList.add('inactive-tab');
    signUpTab.classList.add('active-tab');
  });
};
// Abrir y cerrar modal
const openSignModal = () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('hidden-component');
  const closeModal = document.querySelector('#close-modal');
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden-component');
  });
  toggleModalForm();
};
// Agregar a opción "Ingresar" event listener de apertura de modal
const signBtn = document.querySelector('.sign-btn');

signBtn.addEventListener('click', () => {
  openSignModal();
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



// Inicio de sesión

// Cerrar sesión
