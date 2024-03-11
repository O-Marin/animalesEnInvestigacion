import { fetchPreviewImage } from "./async.js";

//elementos html
const selectedAnimal = document.querySelector("#animal");
const selectedEdad = document.querySelector("#edad");
const comentarios = document.querySelector("#comentarios");
const preview = document.querySelector("#preview");
const nombreForm = document.querySelector("#nombreForm");
const edadForm = document.querySelector("#edadForm");
const comentarioForm = document.querySelector("#comentarioForm");
const img = document.createElement("img");

//capturar elementos desde formulario
function capturarDatosFormulario() {
  let animal = selectedAnimal.value;
  let edad = selectedEdad.value;
  let comentario = comentarios.value;

  return [animal, edad, comentario];
}

function validarDatosFormulario() {
  let datos = capturarDatosFormulario();
  let errorNombre = document.querySelector("#errorNombre");
  let errorEdad = document.querySelector("#errorEdad");
  let errorComentario = document.querySelector("#errorComentario");

  if (datos[0] === "Seleccione un animal") {
    errorNombre.innerHTML = "Rellenar todos los campos";
  } else {
    errorNombre.innerHTML = "";
  }
  if (datos[1] === "Seleccione un rango de años") {
    errorEdad.innerHTML = "Rellenar todos los campos";
  } else {
    errorEdad.innerHTML = "";
  }
  if (datos[2] === "") {
    errorComentario.innerHTML = "Rellenar todos los campos";
  } else {
    errorComentario.innerHTML = "";
  }
  if (
    datos[0] !== "Seleccione un animal" &&
    datos[1] !== "Seleccione un rango de años" &&
    datos[2] !== ""
  ) {
    errorNombre = "";
    errorEdad = "";
    errorComentario = "";
    return capturarDatosFormulario();
  } else {
    return (datos = []);
  }
}
async function resetFormulario() {
  selectedAnimal.selectedIndex = 0;
  selectedEdad.selectedIndex = 0;
  comentarios.value = "";
  await fetchPreviewImage();
}

export { capturarDatosFormulario };
export {
  preview,
  selectedAnimal,
  selectedEdad,
  comentarios,
  resetFormulario,
  validarDatosFormulario,
};
