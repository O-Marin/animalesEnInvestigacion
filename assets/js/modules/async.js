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
    if (animal.name === datosFormulario[0]) {
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
    } else if (animal.name === datosFormulario[0]) {
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
    } else if (animal.name === datosFormulario[0]) {
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
    } else if (animal.name === datosFormulario[0]) {
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
    } else if (animal.name === datosFormulario[0]) {
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

function agregarAnimal(img) {
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

export {fetchPreviewImage, createAnimalObject, animalesArray, agregarAnimal};
