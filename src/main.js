import { home } from './lib/views/home.js';
import { initialPosts } from './lib/views/initialPosts.js';
import { categoryView } from './lib/views/categoryView.js';
import { homePostsFn, showOrHideOptions, postsByCategoryFn } from './lib/functions.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
import { modalListeners } from './lib/views/modal.js';
import { userprofile } from './lib/views/userProfile.js';
import { manageRoutesAndViews } from './lib/router.js';


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
homePostsFn(initialPosts); //agrega funciones a botones de posts del home (homePostFn recorre la base de datos y le pasa cada post a la vista homePost para que vaya agregando lost datos en su lugar correspondiente)
showOrHideOptions(); //muestra/oculta opciones según usuario conectado/desconectado

const tips = document.querySelector('#tips');
tips.addEventListener('click', (event) => {
  const tipsCategory = event.target.getAttribute('data-category'); //tips
  postsByCategoryFn(categoryView, tipsCategory);
});
