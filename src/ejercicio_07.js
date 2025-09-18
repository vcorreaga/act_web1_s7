
const numeros = [7, 2, 9, 1, 5];
const numerosAsc = [...numeros].sort((a, b) => a - b);
const numerosDesc = [...numeros].sort((a, b) => b - a);


const nombres = ['Carlos', 'Ana', 'Lucía', 'Miguel'];
const nombresOrdenados = [...nombres].sort();


const personas = [
  { nombre: 'Carlos', edad: 30 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Lucía', edad: 35 }
];
const personasOrdenadasPorEdad = [...personas].sort((a, b) => a.edad - b.edad);


const numerosReverso = [...numeros].reverse();

console.log("Ascendente:", numerosAsc);
console.log("Descendente:", numerosDesc);
console.log("Nombres ordenados:", nombresOrdenados);
console.log("Personas por edad:", personasOrdenadasPorEdad);
console.log("Números invertidos:", numerosReverso);
