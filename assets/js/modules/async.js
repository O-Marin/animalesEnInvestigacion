/**Este modulo esta creado con el fin de crear las funciones asyncronas que se utilizaran en el archivo js principal
 * el archivo principal tambien tendra una funcion async pero esta solo ejecutara las funciones planteadas en este archivo.
 */
//imports
import { Leon, Serpiente, Oso, Aguila, Lobo } from "./animal.js";
import {
  capturarDatosFormulario,
  validarDatosFormulario,
} from "./funciones.js";

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

async function createAnimalObject() {
  let response = await fetch(json);
  let data = await response.json();

  let datosFormulario = validarDatosFormulario(); //capturarDatosFormulario();

  if (datosFormulario) {
    for (let animal of data.animales) {
      if (animal.name === datosFormulario[0] && datosFormulario[0] === "Leon") {
        animalesArray.push(
          new Leon(
            datosFormulario[0],
            datosFormulario[1],
            datosFormulario[2],
            animal.imagen,
            animal.sonido
          )
        );
        agregarAnimal(animal.imagen, animal.name);
        return animalesArray;
      } else if (
        animal.name === datosFormulario[0] &&
        datosFormulario[0] === "Lobo"
      ) {
        animalesArray.push(
          new Lobo(
            datosFormulario[0],
            datosFormulario[1],
            datosFormulario[2],
            animal.imagen,
            animal.sonido
          )
        );
        agregarAnimal(animal.imagen, animal.name);
        return animalesArray;
      } else if (
        animal.name === datosFormulario[0] &&
        datosFormulario[0] === "Oso"
      ) {
        animalesArray.push(
          new Oso(
            datosFormulario[0],
            datosFormulario[1],
            datosFormulario[2],
            animal.imagen,
            animal.sonido
          )
        );
        agregarAnimal(animal.imagen, animal.name);
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
        agregarAnimal(animal.imagen, animal.name);
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
        agregarAnimal(animal.imagen, animal.name);
        return animalesArray;
      }
    }
  }
}

function agregarAnimal(img, type) {
  let xbutton = `<button class="${type}"><img src="./assets/imgs/volume.png"></button>`;
  let xelement = `<img src='${img}' alt='hola que hace' class='card-img-top' style='max-width:100%; height:300px' >`;

  let animales = document.querySelector("#Animales");
  animales.innerHTML += `<div class="card" style="width: 18rem;">
  ${xelement}
  <div class="card-body p-0">
  ${xbutton}
  </div>
  </div>
  `;
}

async function playAudio() {
  let response = await fetch(json);
  let data = await response.json();

  modal();
  document.querySelectorAll("#Animales button").forEach((boton, index) => {
    boton.addEventListener("click", () => {
      new Audio(animalesArray[index].sonido).play();
    });
  });
}

async function modal() {
  let response = await fetch(json);
  let data = await response.json();

  /** Aca debe ir un for each, no se puede agregar event listener a un node list
  document.querySelectorAll("#Animales .card-img-top").addEventListener('click',()=>{
    document.querySelector('body')
  })
   */
}

export {
  fetchPreviewImage,
  createAnimalObject,
  animalesArray,
  agregarAnimal,
  playAudio,
};
