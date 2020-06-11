# Creando una Red Social

## Índice

* [1. PawLovers](#1-PawLovers)
* [2. Planificación del proyecto y diseño](#2-Planificación-del-proyecto-y-diseño)
* [3. Historia de usuario](#3-Historia-de-usuario)
* [4. Test Unitario](#4-Test-Unitario)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. PawLovers

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Planificación del proyecto y diseño

### Trello
(Img)
### Diagrama de flujo
(Img)
### Prototipo de Alta fidelidad

<img src="https://github.com/LiRizo/SCL013-social-network/blob/master/src/images/MaterialReadme/prototipoDeAltaFidelidad.JPG" width= 747px height= 745px>

### Busqueda de diseño
- Paleta de colores
En la búsqueda de la paleta de colores, se quería demostrar jovialidad y una sensación de naturaleza, para eso buscamos colores que a simple vista te trasladan al mundo animal.
y se consiguió una paleta que iba de la mano con lo que se estaba buscando.
[Paleta de Referencia](https://paletasdecolores.com/paleta-de-colores-252/)
hasta llegar a esto
<img src="https://github.com/LiRizo/SCL013-social-network/blob/master/src/images/MaterialReadme/paletaDeColor.png" width= 592px height= 453px>

- Tipografía 
La tipografía debía ser sutil y delicada así que se eligió la font manjari  que curiosamente su nombre significa "albahaca sagrada" o "flor".
- Logo
En la búsqueda del logo pasamos por varias referencias inspiradoras, que podrán ver en el link a continuación.
[Referencias para el logo](https://www.pinterest.cl/lirizoc/idea-pawlovers/)

Luego se prosiguió rápidamente a la creación del mismo,
se probaron varias ideas una al lado de la otra en el prototipo de alta fidelidad. 
<img src="https://github.com/LiRizo/SCL013-social-network/blob/master/src/images/MaterialReadme/PruebasLogo.JPG" width= 870px height= 590px>
Dando como resultado final:
<img src="https://github.com/LiRizo/SCL013-social-network/blob/master/src/images/logoPawLovers.png" width= 800px height= 300px>

Y se eligió una tipografía que fuera divertida, un poco desordenada, Puedes apreciar un pequeño fragmento comentado del diseñador principal de la Font Neucha "traducido del idioma ruso significa "no saber cómo crear fuentes correctamente". Jovanny Lemonad Era lo que se estaba buscando en ella, una fuente libre y con un toque orgánico que traslada a lo natural.

[Google Font Neucha](https://fonts.google.com/specimen/Neucha)

### d.Experiencia de usuario UX.

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco), de la
[Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de
acceso y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

## 3. Historia de usuario

### Historia de usuario 1: Ingreso al sitio web (mobile)

Yo, como invitado, puedo hacer clic en “Ingresar” para ver el modal con el formulario de inicio de sesión/registro para poder realizar comentarios, publicaciones, dar likes y editar mis publicaciones y la información de mi cuenta.

* [ ] [HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] [CSS `flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### Historia 2 Inicio de sesión y registro a través de modal (mobile)

- Usuario: invitado
- Necesita: acceder a los formularios de inicio de sesión y registro
- Para: crear publicaciones, hacer comentarios, dar like y editar mis publicaciones y la información de mi cuenta
- Criterios de aceptación: modal con dos formularios (inicio de sesión y registro), cada uno en una pestaña. Se activa al hacer clic en “Ingresar”. Una vez logueado, “Ingresa” se transforma en el ícono de perfil de usuario y se activan las opciones de publicar, comentar, likes y la patita para editar
- Definición de Terminado:


* [ ] Crear modal básico con pestaña de formulario de inicio de sesión y registro (html, css y js)
* [ ] Crear enlace para abrir modal desde el header de la página de inicio 
* [ ] Crear funcionalidad de autenticación de usuario y asociar inicio de sesión y registro con las pestañas correspondientes del modal. 
* [ ] Crear opción de cierre de sesión provisoria (solo para probar la funcionalidad, después la cambiamos para ver cómo se ve mejor) 
* [ ] Dar el estilo definitivo al modal (colores de pestañas, botones, hovers, animaciones, etc.) 

### Historia 3 Acceso a categorías de publicaciones (mobile)

- Usuario: quiero tener la vida más fácil
- Necesita: tener un menú de categorías.
- Para: moverse libremente dentro de la app web.
- Criterios de aceptación: Agregar menú superior con información sobre las páginas para navegar. (Móvil, web a un lado derecho)
- Definición de Terminado:


* [ ] Agregar las categorías al header (solo para el móvil)
* [ ] Asignar color
* [ ] Ordenar los iconos en el header
* [ ] Hacer la animación del search
* [ ] Hacer las redirecciones

### Historia 4 Carrusel concurso fotográfico


* [ ] [Firestore](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules](https://firebase.google.com/docs/rules)
* [ ] [Uso de onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen)
| [onAuthStateChanged](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

### Historia 5: Plantilla del Home

- Usuario: que entra a ver los nuevos posts
- Necesita: tener una visión de las últimas actualizaciones.
- Para: 
- Criterios de aceptación: 
- Definición de Terminado: tener una plantilla de home, que contenga me gusta, comentarios, repostearlo.
- Crear plantilla de home con botones de me gusta, comentarios y compartir (sin formulario)
- Darle estilo con CSS según la maqueta de Figma


* [ ] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Mocking](https://jestjs.io/docs/es-ES/manual-mocks)

### Historia 6: Plantilla de Categorías

- Usuario: que entra a buscar algo en especifico
- Necesita: 
- Para: que al buscar sobre 1 categoría en especifica me salga todo relacionado con ella
- Criterios de aceptación: 
- Definición de Terminado: tener una plantilla de categorías. que contenga una pestaña para hacer tu post referente a la categoría, y poder ver y comentar, repostear el de otros

* [ ] Colaboración en Github
* [ ] Organización en Github

### Historia 7: Plantilla de Información (más sobre PL)

Usuario: que entra a buscar de qué trata la red social 
Necesita: que esté todo en un solo lugar
Para: 
Criterios de aceptación: 
Definición de Terminado: tener una plantilla de información. donde puedas saber más sobre los creadores y el fin de la red social.

* [ ] Modularización
* [ ] Nomenclatura / Semántica
* [ ] Linting

***

## 4. Test Unitario

* Este proyecto se debe trabajar en equipos de tres.

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS :smiley:. Para este proyecto **no está permitido** utilizar
  _frameworks_ o librerías de CSS y JS.

* La división y organización del trabajo debe permitir, sin excepciones, que
  **cada integrante** del equipo practique el aprendizaje de todo lo involucrado
  en **cada historia**. _No se dividan el trabajo como en una fábrica._
  - ¿Hasta acá has avanzado en tus proyectos con cierta fluidez y sin mayores
    problemas? Sé generosa con tus compañeras, permíteles aprender y practicar
    sin restricciones, aunque tome un poco más de tiempo. Aproveha de
    _coachearlas_, de hacer _pair programming_, una de las mejores maneras de
    aprender es explicando verbalmente.

  - ¿Se te está haciendo difícil y te cuesta un poco más avanzar? No te quedes
    con las partes "fáciles" del proyecto, conversa, negocia, exige tu oportunidad
    para practicar y aprender lo que se te hace más difícil.

* Solamente pueden trabajar en una única historia por vez, no pueden avanzar a
  la siguiente sin haber completado la anterior. La historia se completa cuando
  se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición
  de Terminado.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluye un _boilerplate_, así es que tendrás que definir la
estructura de carpetas y escribir tus propias Pruebas Unitarias (_tests_). Para
hacerlo, puedes guiarte de los proyectos anteriores.

### 5.2 Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.3 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en estas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver el muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 8. Pistas, tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve cómo adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
