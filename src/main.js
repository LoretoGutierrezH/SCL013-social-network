// Este es el punto de entrada de tu aplicacion
import { db } from './lib/index.js';

const root = document.querySelector('.root');

//Crear estructura de la página
const mainStructure = function() {
  root.innerHTML = `
    <div>Hola</div>
  
  `
}

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