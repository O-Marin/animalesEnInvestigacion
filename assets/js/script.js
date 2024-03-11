import { selectedAnimal, resetFormulario } from "./modules/funciones.js";
import {
  fetchPreviewImage,
  createAnimalObject,
  playAudio,
} from "./modules/async.js";
let registrar = document.querySelector("#btnRegistrar");

(async function contextoAsincronico() {
  async function previewImage() {
    await fetchPreviewImage();
  }
  window.addEventListener("load", previewImage);
  selectedAnimal.addEventListener("change", previewImage);

  registrar.addEventListener("click", async () => {
    console.log(await createAnimalObject());
    resetFormulario();
    playAudio();
  });
})();
