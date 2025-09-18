const estudiantes = [
  { nombre: "Maria", edad: 20, notas: [80, 75, 90] },
  { nombre: "Pedro", edad: 22, notas: [60, 65, 70] },
  { nombre: "Mariana", edad: 19, notas: [95, 85, 100] },
  { nombre: "Gabriela", edad: 21, notas: [50, 55, 60] }
];

const nombres = estudiantes.map(e => e.nombre);

const promedios = estudiantes.map(e => {
  const suma = e.notas.reduce((acc, nota) => acc + nota, 0);
  return suma / e.notas.length;
});

const estado = estudiantes.map(e => {
  const promedio = e.notas.reduce((acc, nota) => acc + nota, 0) / e.notas.length;
  return { ...e, promedio, estado: promedio >= 70 ? "Aprobado" : "Reprobado" };
});

console.log("Nombres:");
console.log(nombres);

console.log("\nPromedios:");
console.log(promedios);

console.log("\nEstudiantes con estado:");
console.log(estado);
