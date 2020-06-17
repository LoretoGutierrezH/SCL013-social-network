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
              <button class="btngoogle">Acceder con google</button>
              <p id="sign-in-error" class="error-message"></p>
              <p id="sign-in-success" class="success-message"></p>

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
              <button class="btngoogle">Acceder con google</button>
              <p id="sign-up-error" class="error-message"></p>
              <p id="sign-up-success" class="success-message"></p>
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
      <a class="categorysBtn"><i class="fas fa-caret-down"></i></a>
      <div class="category-content">
          <a href="#/mas-sobre-PL" class="blue" id="masPl">Mas sobre PL</a>
          <a href="#/tips" data-category="tips" class="green" id="tips">Tips</a>
          <a href="#/cuarentena" class="brown" id="cuarentena">Mas sobre 40tena</a>
          <a href="#/cuidados" class="blue" id="cuidados">Cuidados</a>
          <a href="#/memes" class="green" id="memes">Memes</a>
          <a href="#/adopcion" class="brown" id="adopcion">Adopcion</a>
          <a href="#/servicios" class="blue" id="servicios">Servicios</a>
          <a href="#/fotos-concurso" class="green" id="fotosConcursos">Fotos Concursos</a>
      </div>
  </li>
      <li class="burguer hidden-component">
      <a class="burguerBtn"><i class="fas fa-ellipsis-v"></i></i></a>
      <div class="burguer-content">
          <a href="#/userprofile" class="profile" id="profile"><i class="fas fa-user-edit"></i></a>
          <a href="#" class="direct" id="direct"><i class="fas fa-envelope"></i></a>
          <a href="#" class="exit" id="exit"><i class="fas fa-sign-out-alt"></i></a>
      </div>
  </li>
  </div>
    </header>

    <aside class="middle-left" id="photo-carousel">
    <div class="carousel">
     
    </div>
    </aside>
    <main class="middle-center" id="publication-area">
      <div id="main-form">

      </div>
      <div id="edit-post">

      </div>
      <div id="publication">
        
      </div>
    </main>

    <aside class="middle-right mobile-hidden-component" id="categories">
      <p>Categorías(desktop)</p>
    </aside>

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


/* 

   <div class="slick-list" id="slick-list">
      <button class="slick-arrow slick-prev" id="button-prev">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </button>
        <div class="slick-track" id="track">
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Ganador de la Semana</small></h4>
              <picture>
                <img src="./images/Mascotas/1.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/2.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/3.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/4.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/5.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/6.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/7.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/8.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/9.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
              <picture>
                <img src="./images/Mascotas/10.jpg" alt="imagen">
              </picture>
            </a>
          </div>       
        </div>
      </div>
      <button class="slick-arrow slick-next" id="button-next">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>  
      </button>  
      </div>  */