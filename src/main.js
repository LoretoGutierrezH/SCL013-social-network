// Este es el punto de entrada de tu aplicacion
import { db } from './lib/index.js';


const root = document.querySelector('.root');

//Crear estructura de la página

const mainStructure = function() {
  root.innerHTML = `
    <header class="top">
      <div id="logo-container">
        <!-- <img src="" alt="" class="logo"> -->
        <p>LOGO</p>
      </div>
      <nav class="main-nav">
        <ul>
          <li>Ingresar</li>
          <li></li>
          <span><input class="search-bar" type="text" placeholder="Buscar..."></span>
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


//Leer publicaciones
db.collection('posts').onSnapshot(snapshot => {
  snapshot.docs.forEach(doc =>{
    let document = doc;
    let docData = doc.data();
    console.log(docData); 
  });
})



//Crear publicaciones
/* db.collection('posts').add({
  title: "Quiero un perro",
  content: "Hace mucho que no tengo un perrito, ¿qué raza me recomiendan?"
})  */

//Eliminar publicaciones

//Asociar publicaciones a usuarios
