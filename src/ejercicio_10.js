const vehiculo = {
  marca: 'Renault',
  modelo: 'Kardian',
  año: 2025,
  electrico: false
};

const claves = Object.keys(vehiculo);
const valores = Object.values(vehiculo);
const entradas = Object.entries(vehiculo);

claves.forEach(clave => {
  console.log(clave);
});

valores.forEach(valor => {
  console.log(valor);
});

entradas.forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
