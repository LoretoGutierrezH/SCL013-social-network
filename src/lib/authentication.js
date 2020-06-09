import { auth, db } from './index.js';

// USUARIOS
// Registro
export const signUpFunction = (signUpForm) => {
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
      signUpForm.reset();
      //Seleccionando el modal completo a través del formulario de registro para ocultarlo
      const modal = signUpForm.parentElement.parentElement.parentElement;
      modal.classList.add('hidden-component');
    });

  });
};

// Inicio de sesión
export const signInFunction = (signInForm) => {
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = signInForm.email.value;
    const password = signInForm.password.value;

  auth.signInWithEmailAndPassword(email, password).then(() => {
    console.log('Usuario ingresado');
    signInForm.reset();
    //Seleccionando el modal completo a través del formulario de registro para ocultarlo
    const modal = signInForm.parentElement.parentElement.parentElement;
    modal.classList.add('hidden-component');
  });
  });
};



// Cerrar sesión
export const exitFunction = (exit) =>{
exit.addEventListener('click', (event) => {
    auth.signOut();
    console.log('Sali, me fui');
});
};