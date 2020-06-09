import { home } from './lib/views/home.js';
import { homePost } from './lib/views/homePost.js';
import { homePostsFn, showOrHideOptions } from './lib/index.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
import { modalListeners } from './lib/views/modal.js';
import { userprofile } from './lib/views/userProfile.js';
import { manageRoutesAndViews } from './lib/router.js';
import { auth, db } from './lib/index.js';


const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  window.location.hash = '#/home';
  window.addEventListener('hashchange', () => {
    manageRoutesAndViews(window.location.hash); // ej: '#/publication'
  });
};

window.onload = init();
signUpFunction();
signInFunction();
exitFunction();
modalListeners();  //agrega listeners a modal
homePostsFn(homePost); //agrega funciones a botones de posts del home (homePostFn recorre la base de datos y le pasa cada post a la vista homePost para que vaya agregando lost datos en su lugar correspondiente)
showOrHideOptions(); //muestra/oculta opciones según usuario conectado/desconectado




