import { auth, db } from './functions.js';

// Registro
export const signUpFunction = () => {
  const signUpForm = document.querySelector('#sign-up-form');
  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = signUpForm['user-name'].value;
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    auth.createUserWithEmailAndPassword(email, password).then(userData => {
            userData.user.updateProfile({
              displayName: userName,
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
export const signInFunction = () => {
  const signInForm = document.querySelector('#sign-in-form');
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
//Acceder con google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return  firebase.auth().signInWithPopup(provider)

    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};


// Cerrar sesión
export const exitFunction = () => {
const exit = document.querySelector('.exit');
exit.addEventListener('click', (event) => {
    auth.signOut();
    console.log('Sali, me fui');
});
};