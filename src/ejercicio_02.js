const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 8 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónicos", stock: 20 },
  { id: 3, nombre: "Silla ejecutiva", precio: 350, categoria: "Muebles", stock: 5 },
  { id: 4, nombre: "Libro", precio: 15, categoria: "Papelería", stock: 30 },
  { id: 5, nombre: "Celular", precio: 800, categoria: "Electrónicos", stock: 10 }
];

const electronicos = inventario.filter(p => p.categoria === "Electrónicos");
const bajoStock = inventario.filter(p => p.stock < 10);
const precioAlto = inventario.filter(p => p.precio > 500);

console.log("Electrónicos:");
console.log(electronicos);

console.log("\nProductos con stock menor a 10:");
console.log(bajoStock);

console.log("\nProductos con precio mayor a $500:");
console.log(precioAlto);
