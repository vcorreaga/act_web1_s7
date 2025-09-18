const ventas = [
  { producto: "Tablet", cantidad: 4, precio: 300, fecha: "2024-09-01" },
  { producto: "Auriculares", cantidad: 10, precio: 50, fecha: "2024-09-02" },
  { producto: "Smartwatch", cantidad: 3, precio: 200, fecha: "2024-09-03" },
  { producto: "Teclado", cantidad: 7, precio: 80, fecha: "2024-09-04" },
  { producto: "Auriculares", cantidad: 5, precio: 50, fecha: "2024-09-05" }
];

const totalIngresos = ventas.reduce((acc, venta) => acc + venta.precio * venta.cantidad, 0);

const cantidades = {};
ventas.forEach(v => {
  cantidades[v.producto] = (cantidades[v.producto] || 0) + v.cantidad;
});
const productoMasVendido = Object.entries(cantidades).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

const promedioVenta = totalIngresos / ventas.length;

console.log("Total ingresos:", totalIngresos);
console.log("Producto más vendido:", productoMasVendido);
console.log("Promedio por transacción:", promedioVenta.toFixed(2));

