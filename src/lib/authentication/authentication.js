// USUARIOS
// Registro

import { auth, db } from '../index.js';
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
    });

  });
};
