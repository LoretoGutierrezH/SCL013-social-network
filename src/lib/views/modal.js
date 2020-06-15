import {loginGoogle} from '../authentication.js';
export const modalListeners = () => {
  // Agregando event listeners del modal
  const signUpForm = document.querySelector('#sign-up-form');
  const signInForm = document.querySelector('#sign-in-form');
  const exit = document.querySelector('.exit');
  const signInTab = document.querySelector('#sign-in-tab');
  const signUpTab = document.querySelector('#sign-up-tab');
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('#close-modal');
  const signBtn = document.querySelector('.sign-btn');
  const btnGoogle = document.getElementById('#sign-in-google');

  
  const toggleModalForm = () => {
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
    // signInForm, signInTab, signUpTab, modal, closeModal, signBtn
    modal.classList.remove('hidden-component');
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden-component');
    });
    toggleModalForm();
  };
  // Agregar a opción "Ingresar" event listener de apertura de modal
  signBtn.addEventListener('click', () => {
    openSignModal();
  });

  //Opcion de login con google

  btnGoogle.addEventListener('click', () => {
    console.log(btnGoogle);
    loginGoogle();
  });

};
  
 
  
