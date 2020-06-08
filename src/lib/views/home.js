export const home = () => {
  const viewHome = `
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
              <a href="#/" id="password-request">¿Olvidaste tu contraseña?</a>
              <button id="sign-in-btn">Iniciar</button>
              <br>
              <p id="sign-in-error" class="error-message">*Nombre o contraseña no válidos</p>
            </form>
            
            <form action="" id="sign-up-form" class="hidden-component">
              <label for="user-name">Nombre de usuario</label>
              <input id="user-name" type="text">
              <br>
              <label for="email">Correo</label>
              <input id="email" type="email">
              <br>
              <label for="password">Contraseña</label>
              <input id="password" type="password">
              <br>
              <button id="sign-up-btn">Registrarse</button>
              <p id="sign-up-error" class="error-message">*La contraseña debe tener 6 caracteres como mínimo</p>
            </form>
          </div>
        </div>
      </div>
    <header id="header-orden" class="top">
    <div class="one">
      <div class="logo" id="logo-container">
      <img src="/images/logoPawLovers.png" alt="" class="logo">
      </div>
      <nav class="main-nav">
        <ul>
          <li class="sign-btn"><i class="fas fa-user"></i></li>
          </ul>
      </nav>
      </div>
          
          <div class="two">
<div id="search-wrapper">
  <input type="text" id="search" placeholder="buscar..." />
  <div id="close-icon"></div>
</div>
          <!--<input type="text" id="formulario" class="search-bar" placeholder="Buscar">
          <i class="fas fa-search" type="button" id="lupa"></i>-->
      <li class="category">
      <a href="#" class="categorysBtn"><i class="fas fa-caret-down"></i></a>
      <div class="category-content">
          <a href="#/mas-sobre-PL" class="blue" id="masPl">Mas sobre PL</a>
          <a href="#/tips" class="green" id="tips">Tips</a>
          <a href="#/cuarentena" class="brown" id="cuarentena">Mas sobre 40tena</a>
          <a href="#/cuidados" class="blue" id="cuidados">Cuidados</a>
          <a href="#/memes" class="green" id="memes">Memes</a>
          <a href="#/adopcion" class="brown" id="adopcion">Adopcion</a>
          <a href="#/servicios" class="blue" id="servicios">Servicios</a>
          <a href="#/Fotos-Concursos" class="green" id="fotosConcursos">Fotos Concursos</a>
      </div>
  </li>
      <li class="burguer hidden-component">
      <a href="#" class="burguerBtn"><i class="fas fa-ellipsis-v"></i></i></a>
      <div class="burguer-content">
          <a href="#" class="profile" id="profile"><i class="fas fa-user-edit"></i></a>
          <a href="#" class="direct" id="direct"><i class="fas fa-envelope"></i></a>
          <a href="#" class="exit" id="exit"><i class="fas fa-sign-out-alt"></i></a>
      </div>
  </li>
  </div>
    </header>
    <aside class="middle-left" id="photo-carousel">
      <p>Carrusel/Slider de concurso</p>
    </aside>
    <main class="middle-center" id="publication">
      
    </main>
   


    <footer class="bottom">

      <p>FOOTER</p><span><img src="" alt=""></span>
    </footer> </div>
    `;
  return viewHome;
}

// para versión de escritorio, después lo hacemos calzar
/*  < aside class = "middle-right hidden-component"
 id = "categories" >
   <
   p > Categorías(desktop) < /p> <
   /aside> */
