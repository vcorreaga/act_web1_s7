const persona = {
  nombre: 'Lorean',
  edad: 35,
  direccion: {
    ciudad: 'Monteria',
    pais: 'Colombia'
  },
  contacto: {
    email: 'Lorean@cesde.com',
    telefono: '3234567890'
  }
};

const { nombre, edad } = persona;
const { nombre: nombrePersona, edad: edadPersona } = persona;
const { genero = 'Femenino' } = persona;
const {
  direccion: { ciudad, pais },
  contacto: { email, telefono }
} = persona;

const { nombre: n, ...resto } = persona;

console.log(nombre, edad);
console.log(nombrePersona, edadPersona);
console.log(genero);
console.log(ciudad, pais);
console.log(email, telefono);
console.log(resto);
