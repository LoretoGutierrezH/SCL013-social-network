import { home } from './lib/views/home.js';
import { initialPosts } from './lib/views/initialPosts.js';
import { categoryView } from './lib/views/categoryView.js';
import { aboutUs } from './lib/views/aboutUs.js';
import { homePostsFn, showOrHideOptions, postsByCategoryFn } from './lib/functions.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
import { modalListeners } from './lib/views/modal.js';
import { userprofile } from './lib/views/userProfile.js';


const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  homePostsFn(initialPosts);
  signUpFunction();
  signInFunction();
  exitFunction();
  modalListeners();
  showOrHideOptions();
  window.location.hash = '#/home';
  console.log("Página completamente cargada");
  window.addEventListener('hashchange', () => {
      console.log("Hash cambió a " + location.hash);
      let hash = window.location.hash;
      let category;
      switch(hash) {
        case '#/home':
          document.querySelector('#root').innerHTML = home();
          signUpFunction();
          signInFunction();
          exitFunction();
          modalListeners();
          homePostsFn(initialPosts);
          showOrHideOptions();
          break;

        case '#/mas-sobre-PL':
          document.querySelector('#publication').innerHTML = aboutUs();
          break;
        
        case '#/tips':
          category = "tips";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/cuarentena':
          category = "cuarentena";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/cuidados':
          category = "cuidados";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/memes':
          category = "memes";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/adopcion':
          category = "adopcion";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/servicios':
          category = "servicios";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/fotos-concurso':
          document.querySelector('#publication').innerHTML = photo();
          break;
        
        default:
          document.querySelector('#root').innerHTML = home();
          signUpFunction();
          signInFunction();
          exitFunction();
          modalListeners();
          homePostsFn(initialPosts);
          showOrHideOptions();
      }
     
  });
};

window.onload = init();





/* ESTO NO ES NECESARIO SI SE OCUPA EL ROUTER! :D
const tips = document.querySelector('#tips');
tips.addEventListener('click', (event) => {
  const tipsCategory = event.target.getAttribute('data-category'); //tips
  postsByCategoryFn(categoryView, tipsCategory);
}); */
