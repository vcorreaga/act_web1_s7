const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

const [primero, segundo, tercero] = lenguajes;
const [inicio, , , , fin] = lenguajes;
const [prim, ...resto] = lenguajes;

let a = 'uno';
let b = 'dos';
[a, b] = [b, a];

console.log(primero, segundo, tercero);
console.log(inicio, fin);
console.log(prim, resto);
console.log(a, b);
