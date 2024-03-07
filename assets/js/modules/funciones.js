//elementos html
const selectedAnimal = document.querySelector("#animal");
const selectedEdad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");

//capturar elementos desde formulario
function capturarDatosFormulario() {
  let animal = selectedAnimal.value;
  let edad = selectedEdad.value;
  let comentario = comentarios.value;
  return [animal, edad, comentario];
}

export {capturarDatosFormulario };
export {preview, selectedAnimal, selectedEdad, comentarios };
