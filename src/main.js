// Este es el punto de entrada de tu aplicacion
import { db, auth } from './lib/index.js';

const root = document.querySelector('.root');

// Crear estructura de la página
const mainStructure = () => {
  root.innerHTML = `
    <div class="modal hidden-component">
         <span id="close-modal">&times</span>
        <div class="modal-container">
          <ul class="modal-header">
            <li id="sign-in-tab" class="active-tab">Entrar</li>
            <li id="sign-up-tab">Registrarse</li>
          </ul>
          <div class="modal-content">
            <form action="" id="sign-in-form">
              <label for="email">Correo</label>
              <br>
              <input name="email" type="email">
              <br>
              <label for="password">Contraseña</label>
              <br>
              <input name="password" type="password">
              <br>
              <a href="#" id="password-request">¿Olvidaste tu contraseña?</a>
              <button id="sign-in-btn">Iniciar</button>
              <br>
              <p id="sign-in-error" class="error-message">*Nombre o contraseña no válidos</p>
            </form>
            
            <form action="" id="sign-up-form" class="hidden-component">
              <label for="user-name">Nombre de usuario</label>
              <input name="user-name" type="text">
              <br>
              <label for="email">Correo</label>
              <input name="email" type="email">
              <br>
              <label for="password">Contraseña</label>
              <input name="password" type="password">
              <br>
              <button id="sign-up-btn">Registrarse</button>
              <p id="sign-up-error" class="error-message">*La contraseña debe tener 6 caracteres como mínimo</p>
            </form>
          </div>
        </div>
      </div>
    <header id="header-orden" class="top">
      <div class="logo" id="logo-container">
      <img src="/images/logoPawLovers.png" alt="" class="logo">
      </div>
      <nav class="main-nav">
        <ul>
          <li class="sign-btn"><i class="fas fa-user"></i></li>
          <li></li>
          <li class="category">
          <a href="#" class="categorysBtn"><i class="fas fa-caret-down"></i></a>
          <div class="category-content">
              <a href="#" class="celeste" id="tips">Tips</a>
              <a href="#" class="verde" id="cuarentena">Dias en 40tena</a>
              <a href="#" class="marron" id="cuidados">Cuidados</a>
              <a href="#" class="celeste" id="memes">Memes</a>
              <a href="#" class="verde" id="adopcion">Adopcion</a>
              <a href="#" class="marron" id="servicios">Servicios</a>
              <a href="#" class="celeste" id="fotosConcursos">Fotos Concursos</a>
              <a href="#" class="verde" id="masPl">Mas sobre PL</a>
          </div>
      </li>
          <!--<span><input class="search-bar" type="text" placeholder="Buscar..."></span>-->
        </ul>
      </nav>
      
    </header>
    <nav class="secondary-navbar">
      <ul>
        <li>Tips</li>
        <li>Cuidados</li>
        <li>Paseos</li>
      </ul>
    </nav>
      <aside class="
      " id="photo-carousel">
      <section id="slider">
      <input type="radio" name="slider" id="s1">
      <input type="radio" name="slider" id="s2">
      <input type="radio" name="slider" id="s3" checked>
      <input type="radio" name="slider" id="s4">
      <input type="radio" name="slider" id="s5">
      <label for="s1" id="slide1">
          <img src="img1.jpg" height="100%" width="100%">
      </label>
      <label for="s2" id="slide2">
                <img src="img2.jpg" height="100%" width="100%">
      </label>
      <label for="s3" id="slide3">
                <img src="img3.jpg" height="100%" width="100%">
      </label>
      <label for="s4" id="slide4">
                <img src="img4.jpg" height="100%" width="100%">
      </label>
      <label for="s5" id="slide5">
                <img src="img5.jpg" height="100%" width="100%">
      </label>
      </aside>

      <main class="middle-center" id=" publication">
        <p>holiwi</p>
      </main>
      <aside class="middle-right" id="categories">
        <p>trululu</p>
      </aside>


   <footer class="bottom">
      <p>FOOTER</p><span><img src="" alt=""></span>
    </footer> </div>
  
  `
}
window.onload = mainStructure();


/* MODAL DE INGRESO */
// Pestañas
const toggleModalForm = () => {
  const signInTab = document.querySelector('#sign-in-tab');
  const signUpTab = document.querySelector('#sign-up-tab');
  const signInForm = document.querySelector('#sign-in-form');
  const signUpForm = document.querySelector('#sign-up-form');
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
  const modal = document.querySelector('.modal');
  modal.classList.remove('hidden-component');
  const closeModal = document.querySelector('#close-modal');
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden-component');
  });
  toggleModalForm();
};
// Agregar a opción "Ingresar" event listener de apertura de modal
const signBtn = document.querySelector('.sign-btn');
if (signBtn != null) {
  signBtn.addEventListener('click', () => {
    openSignModal();
  });
}


// Leer publicaciones
db.collection('posts').onSnapshot((snapshot) => {
  snapshot.docs.forEach((doc) => {
    const docData = doc.data();
    console.log(docData);
  });
});


// Crear publicaciones
/* db.collection('posts').add({
  title: "Quiero un perro",
  content: "Hace mucho que no tengo un perrito, ¿qué raza me recomiendan?",
  category: "bla",
  author: "uid.user.name",
  likes: {
    username:
  }
})  */

// Eliminar publicaciones

// Asociar publicaciones a usuarios

// Autenticación de usuarios
console.log(auth);

// Registro

// Inicio de sesión
