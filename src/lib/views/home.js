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
    <div class="space1"></div>
    <div class="one">
      <div class="logo" id="logo-container">
      <a href="#/home" class=""><img src="/images/iconos/logoPawLovers.png" alt="" class="logo"></a>
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
  <div class="space2"></div>
    </header>

    <aside class="middle-left" id="photo-carousel">
   <div class="carousel">
    <h2 class="slider-message"> Ganador de la Semana</h2>
    <div class="slick-list" id="slick-list">
      <button class="slick-arrow slick-prev" id="button-prev">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" class="svg-inline--fa fa-angle-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
      </button>
        <div class="slick-track" id="track">
        <div class="slick">
          <div>
            <a class="slider-message" href="/">
              <h4 class="slider-message"><small class="slider-message">Share Your Massage</small></h4>
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
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>  
      </button>  
      </div>  
  </div>
    </aside>
    <main class="middle-center" id="publication-area">
      <div class="category-title"> 
        <h1 id="category-heading"></h1>
      </div>
      <div id="main-form">

      </div>
      
      <div id="edit-post">
        
      </div>
      <div id="spinner">
        <div id="loading-container">
         <div id="loading"></div>
        </div>
      </div>
      
      <div id="publication">
        
      </div>
    </main>

    <aside class="middle-right mobile-hidden-component" id="categories">
      <p>Categorías(desktop)</p>
      
    </aside>
    h2

    <footer class="bottom">
      <p>FOOTER</p><span><img src="" alt=""></span>
    </footer> </div>
    `;
  return viewHome;
};
