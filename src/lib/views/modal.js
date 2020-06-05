export const modalListeners = (...modalElements) => {
  // Agregando event listeners del modal
  // signInForm, signInTab, signUpTab, modal, closeModal, signBtn, signUpForm
  const signInForm = modalElements[0];
  const signInTab = modalElements[1];
  const signUpTab = modalElements[2];
  const modal = modalElements[3];
  const closeModal = modalElements[4];
  const signBtn = modalElements[5];
  const signUpForm = modalElements[6];
  
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
  
};
