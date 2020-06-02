 // Este es el punto de entrada de tu aplicacion
import { db, auth } from './lib/index.js';
import { home } from './lib/views/home.js';

const root = document.querySelector('#root');
root.innerHTML = home();









/* MODAL DE INGRESO */
// Pestañas
const toggleModalForm = () => {
  const signInTab = document.querySelector('#sign-in-tab');
  const signUpTab = document.querySelector('#sign-up-tab');
  const signInForm = document.querySelector('#sign-in-form');
  const signUpForm = document.querySelector('#sign-up-form');
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
if (signBtn != null) {
  signBtn.addEventListener('click', () => {
    openSignModal();
  });
}


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

// USUARIOS
// Registro
const signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = signUpForm['user-name'].value;
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  auth.createUserWithEmailAndPassword(email, password).then(credential => {
    return db.collection('user').doc(credential.user.uid).set({
      userName,
    });
  }).then(() => {
    console.log('Usuario creado y autenticado');
  });

});

// Inicio de sesión

// Cerrar sesión
