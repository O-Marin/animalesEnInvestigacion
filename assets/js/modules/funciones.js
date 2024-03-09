import { fetchPreviewImage } from "./async.js";

//elementos html
const selectedAnimal = document.querySelector("#animal");
const selectedEdad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const img = document.createElement("img");



//capturar elementos desde formulario
function capturarDatosFormulario() {
  let animal = selectedAnimal.value;
  let edad = selectedEdad.value;
  let comentario = comentarios.value;
  return [animal, edad, comentario];
}

async function resetFormulario(){

  selectedAnimal.selectedIndex = 0;
  selectedEdad.selectedIndex = 0;
  comentarios.value = '';
  await fetchPreviewImage();
  
}
export {capturarDatosFormulario };
export {preview, selectedAnimal, selectedEdad, comentarios, resetFormulario};
