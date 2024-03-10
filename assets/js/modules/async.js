/**Este modulo esta creado con el fin de crear las funciones asyncronas que se utilizaran en el archivo js principal
 * el archivo principal tambien tendra una funcion async pero esta solo ejecutara las funciones planteadas en este archivo.
 */
//imports
import { Leon, Serpiente, Oso, Aguila, Lobo } from "./animal.js";
import { capturarDatosFormulario } from "./funciones.js";

let animalesArray = [];
const selectedAnimal = document.querySelector("#animal");
const preview = document.querySelector("#preview");
const img = document.createElement("img");
const json = "../../../animales.json";

//Funcion que contiene la logica para colocar la imagen de preview en el Html dependiendo del animal seleccionado.
async function fetchPreviewImage() {
  let response = await fetch(json);
  let data = await response.json();

  /**Creo que puedo usar esta misma logica para crear los objetos */
  data.animales.forEach((animal) => {
    if (selectedAnimal.value === animal.name) {
      img.setAttribute("src", animal.imagen);
      preview.appendChild(img);
    } else if (selectedAnimal.value === "Seleccione un animal") {
      img.setAttribute("src", "./assets/imgs/lion.svg");
      preview.appendChild(img);
    }
  });
}

//Funcion que rellena un array con los nuevos objectos creados para posterior uso.
async function createAnimalObject() {
  let response = await fetch(json);
  let data = await response.json();

  // datos capturados del formulario
  let datosFormulario = capturarDatosFormulario();

  for (let animal of data.animales) {
    //nombre, edad, comentarios, img, sonido

    if (animal.name === datosFormulario[0] && datosFormulario[0] === "Leon") {
      console.log(datosFormulario);
      animalesArray.push(
        new Leon(
          datosFormulario[0],
          datosFormulario[1],
          datosFormulario[2],
          animal.imagen,
          animal.sonido
        )
      );
      agregarAnimal(animal.imagen);
      return animalesArray;
    } else if (
      animal.name === datosFormulario[0] &&
      datosFormulario[0] === "Lobo"
    ) {
      console.log("estoy aca");
      animalesArray.push(
        new Lobo(
          datosFormulario[0],
          datosFormulario[1],
          datosFormulario[2],
          animal.imagen,
          animal.sonido
        )
      );
      agregarAnimal(animal.imagen);
      return animalesArray;
    } else if (
      animal.name === datosFormulario[0] &&
      datosFormulario[0] === "Oso"
    ) {
      //si entra aca pero es el animal el que esta equivocado,  tengo que asegurarme de que el animal sea el correcto,

      animalesArray.push(
        new Oso(
          datosFormulario[0],
          datosFormulario[1],
          datosFormulario[2],
          animal.imagen,
          animal.sonido
        )
      );
      agregarAnimal(animal.imagen);
      return animalesArray;
    } else if (
      animal.name === datosFormulario[0] &&
      datosFormulario[0] === "Serpiente"
    ) {
      animalesArray.push(
        new Serpiente(
          datosFormulario[0],
          datosFormulario[1],
          datosFormulario[2],
          animal.imagen,
          animal.sonido
        )
      );
      agregarAnimal(animal.imagen);
      return animalesArray;
    } else if (
      animal.name === datosFormulario[0] &&
      datosFormulario[0] === "Aguila"
    ) {
      animalesArray.push(
        new Aguila(
          datosFormulario[0],
          datosFormulario[1],
          datosFormulario[2],
          animal.imagen,
          animal.sonido
        )
      );
      agregarAnimal(animal.imagen);
      return animalesArray;
    }
  }
}

function agregarAnimal(img, type) {
  //usar type como clase del boton para tener un identificador y poder tener un punto de referencia para agregar el sonido.
  let xbutton = `<button class="${type}"><img src="./assets/imgs/volume.png"></button>`;
  let xelement = `<img src='${img}' alt='hola que hace' class='card-img-top' style='max-width:100%; height:300px' >`;

  let animales = document.querySelector("#Animales");
  animales.innerHTML += `<div class="card" style="width: 18rem;">
  ${xelement}
  <div class="card-body p-0">
  <button><img src="./assets/imgs/volume.png"></button>
  </div>
  </div>
  `;
}

/** necesito esta funcion que haga el sonido
 * esta testeada y funciona, se debe implementar en este proyecto
 */
async function playAudio() {
  let response = await fetch(json);
  let data = await response.json();
  /** en esta funcion no se preview, el array que quiero recorrer creo que es el de los elementos button de las cards */
  console.log(document.querySelectorAll("#Animales button"));

  //comparar la imagen de la tarjeta con el array de animales para saber que sonido elegir.
  document.querySelectorAll("#Animales button").forEach((boton, index) => {
    console.log(boton);
    boton.addEventListener("click", () => {
      new Audio(animalesArray[index].sonido).play();
    });
  });
}

export {
  fetchPreviewImage,
  createAnimalObject,
  animalesArray,
  agregarAnimal,
  playAudio,
};
