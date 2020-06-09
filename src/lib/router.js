import { home } from './views/home.js';
import { aboutUs } from './views/aboutUs.js';

/* Lee el hash de la url (location.hash) y si coincide con una de las opciones, muestra la vista correspondiente, todo en un solo paso */
export const manageRoutesAndViews = (hash) => {
  let currentURL;
  if (hash === '#/home') {
    document.querySelector('#root').innerHTML = home();
  } else if (hash === '#/mas-sobre-PL') {
    document.querySelector('#publication').innerHTML = aboutUs();
    currentURL = window.location.href;
    //history.pushState(`${currentURL}`, null, "");
  } 
};

// Recibe el hash y evalúa nuevamente la coincidencia del hash y mostrar la página correspondiente
/* const showPage = (hash) => {
  if (hash === '#/mas-sobre-PL') {
    document.querySelector('#publication').innerHTML = posts();
  }
}; */
