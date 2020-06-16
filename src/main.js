import { home } from './lib/views/home.js';
import { initialPosts } from './lib/views/initialPosts.js';
import { categoryView } from './lib/views/categoryView.js';
import { aboutUs } from './lib/views/aboutUs.js';
import { homePostsFn, showOrHideOptions, postsByCategoryFn } from './lib/functions.js';
import { signUpFunction, signInFunction, exitFunction } from './lib/authentication.js';
/*import { slider } from './lib/views/slider.js';*/
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
  //slider();
  //modalEdit();
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
         // slider();
         // modalEdit();
          break;

        case '#/mas-sobre-PL':
          document.querySelector('#publication').innerHTML = aboutUs();
          break;
        
        case '#/Tips':
          category = "tips";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Cuarentena':
          category = "cuarentena";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Cuidados':
          category = "cuidados";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Memes':
          category = "memes";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Adopcion':
          category = "adopcion";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Servicios':
          category = "servicios";
          postsByCategoryFn(categoryView, category);
          break;

        case '#/Fotos-concurso':
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
         // slider();
         // modalEdit();
      }
     
  });
};

window.onload = init();


