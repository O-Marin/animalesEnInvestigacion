class Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._comentarios = comentarios;
    this._img = img;
    this._sonido = sonido;
  }
  get nombre() {
    return this._nombre;
  }

  get edad() {
    return this._edad;
  }

  get img() {
    return this._img;
  }

  set comentarios(comentario) {
    this._comentarios = comentario;
  }

  get sonido() {
    return this._sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    super(nombre, edad, comentarios, img, sonido);
  }

  rugir() {
    return "Rawr";
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    super(nombre, edad, comentarios, img, sonido);
  }

  aullar() {
    return this.sonido;
  }
}

class Oso extends Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    super(nombre, edad, comentarios, img, sonido);
  }

  Grunir() {
    return "GRRR!";
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    super(nombre, edad, comentarios, img, sonido);
  }

  sisear() {
    return "SSSSSS!";
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, comentarios, img, sonido) {
    super(nombre, edad, comentarios, img, sonido);
  }

  chillar() {
    return this.sonido;
  }
}

export { Leon, Serpiente, Oso, Aguila, Lobo };
  /** 
function playAudio(sonido) {
  audio.play();
}
document.getElementById("myButton").addEventListener("click", ()=>{

  playAudio();
  console.log(audio.duration);   
});
*/
