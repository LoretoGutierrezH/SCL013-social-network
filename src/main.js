// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */
const root = document.querySelector('.root');

const mainStructure = function() {
  root.innerHTML = `
    <div>Hola</div>
  
  `
}
/* 
db.collection('posts').get().then(snapshot => {
  console.log(snapshot);
  snapshot.docs.forEach(doc =>{
    let document = doc;
    let docData = doc.data();
    console.log(docData);
    console.log(docData.title);
    console.log(docData.content); 
    root.innerHTML += `
      <h3 class="title">${docData.title}</h3>
      <p class="content">${docData.content}</p>
    `
  });
})


db.collection('posts').add({
  title: "Quiero un perro",
  content: "Hace mucho que no tengo un perrito, ¿qué raza me recomiendan?"
}) */