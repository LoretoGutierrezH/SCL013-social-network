import { home } from './lib/views/home.js';
import { categoryView } from './lib/views/categoryView.js';
import { aboutUs } from './lib/views/aboutUs.js';
import { showOrHideOptions, postsByCategoryFn } from './lib/functions.js';
import {
  signUpFunction, signInFunction, exitFunction, singInGoogle,
} from './lib/authentication.js';
import { slider } from './lib/views/slider.js';
import { modalListeners } from './lib/views/modal.js';
import { photoContest } from './lib/views/photo.js';


const root = document.querySelector('#root');

const init = () => {
  root.innerHTML = home();
  signUpFunction();
  signInFunction();
  exitFunction();
  singInGoogle();
  photoContest();
  modalListeners();
  slider();
  showOrHideOptions();
  const mainForm = document.querySelector('#main-form');
  mainForm.innerHTML = '';
  document.querySelector('#publication').innerHTML = aboutUs();

  window.location.hash = '#/mas-sobre-PL';
  console.log('Página completamente cargada');
  window.addEventListener('hashchange', () => {
    console.log(`Hash cambió a ${window.location.hash}`);
    const hash = window.location.hash;
    let category;
    const categoryHeading = document.querySelector('#category-heading');
    switch (hash) {
      case '#/home':
        document.querySelector('#root').innerHTML = home();
        signUpFunction();
        signInFunction();
        exitFunction();
        singInGoogle();
        photoContest();
        modalListeners();
        slider();
        showOrHideOptions();
        mainForm.innerHTML = '';
        categoryHeading.innerHTML = '';
        document.querySelector('#publication').innerHTML = aboutUs();
        mainForm.innerHTML = '';
        break;

      case '#/mas-sobre-PL':
        document.querySelector('#publication').innerHTML = aboutUs();
        categoryHeading.innerHTML = '';
        mainForm.innerHTML = '';
        break;

      case '#/tips':
        category = 'Tips';
        categoryHeading.innerHTML = `${category}`;
        postsByCategoryFn(categoryView, category);
        break;

      case '#/cuarentena':
        category = 'Cuarentena';
        postsByCategoryFn(categoryView, category);
        categoryHeading.innerHTML = `${category}`;
        break;

      case '#/cuidados':
        category = 'Cuidados';
        postsByCategoryFn(categoryView, category);
        categoryHeading.innerHTML = `${category}`;
        break;

      case '#/memes':
        category = 'Memes';
        postsByCategoryFn(categoryView, category);
        categoryHeading.innerHTML = `${category}`;

        break;

      case '#/adopcion':
        category = 'Adopcion';
        postsByCategoryFn(categoryView, category);
        categoryHeading.innerHTML = `${category}`;
        break;

      case '#/Servicios':
        category = 'Servicios';
        postsByCategoryFn(categoryView, category);
        categoryHeading.innerHTML = `${category}`;
        break;

      case '#/fotos-concurso':
        document.querySelector('#publication').innerHTML = photoContest();
        categoryHeading.innerHTML = '';
        mainForm.innerHTML = '';
        break;
      default:
        document.querySelector('#root').innerHTML = home();
        signUpFunction();
        signInFunction();
        exitFunction();
        singInGoogle();
        modalListeners();
        photoContest();
        slider();
        showOrHideOptions();
        postsByCategoryFn(categoryView, category);
        console.log('se ejecutó todo');
    }
  });
};

window.onload = init();
console.log(window.location.hash);
