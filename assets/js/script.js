//Imports
//import { Leon, Serpiente, Oso, Aguila, Lobo } from "./modules/animal.js";
import { selectedAnimal, resetFormulario } from "./modules/funciones.js";
import {
  fetchPreviewImage,
  createAnimalObject,
  playAudio,
} from "./modules/async.js";
//variable del boton de registro de formulario para agregar el evento click
let registrar = document.querySelector("#btnRegistrar");

(async function contextoAsincronico() {
  //funcion que llama a la promesa que contiene la logica del image preview
  async function previewImage() {
    await fetchPreviewImage();
  }

  //eventos imagen preview durante la carga de la pagina y cuando se cambia la opcion de la seleccion.
  window.addEventListener("load", previewImage);
  selectedAnimal.addEventListener("change", previewImage);

  //evento captura informacion formulario
  registrar.addEventListener("click", async () => {
    console.log(await createAnimalObject());
    resetFormulario();

    //console.log(document.querySelectorAll('#Animales button'));
    playAudio();
  });
})();
