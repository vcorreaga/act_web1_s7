const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros.pop();

numeros.unshift(0);
numeros.shift();

numeros.splice(2, 0, 99); 
const nuevoArray = numeros.slice(1, 4);

console.log("Array final:", numeros);
console.log("Slice (porción):", nuevoArray);
