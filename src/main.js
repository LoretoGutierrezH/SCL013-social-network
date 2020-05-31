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
      <aside class="middle-left" id="photo-carousel">
        <p>holi</p>
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
