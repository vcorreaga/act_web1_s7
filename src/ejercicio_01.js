const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 8 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónicos", stock: 20 },
  { id: 3, nombre: "Silla ejecutiva", precio: 350, categoria: "Muebles", stock: 5 },
  { id: 4, nombre: "Libro", precio: 15, categoria: "Papelería", stock: 30 },
  { id: 5, nombre: "Celular", precio: 800, categoria: "Electrónicos", stock: 10 }
];

console.log("Inventario completo:");
inventario.forEach(producto => {
  console.log(`- ${producto.nombre} (${producto.categoria}) - $${producto.precio} - Stock: ${producto.stock}`);
});

const totalProductos = inventario.reduce((acum, prod) => acum + prod.stock, 0);
console.log(`\n Total de productos en inventario: ${totalProductos}`);

const valorTotal = inventario.reduce((acum, prod) => acum + (prod.precio * prod.stock), 0);
console.log(`Valor total del inventario: $${valorTotal}`);
