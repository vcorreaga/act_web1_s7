const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@cesde.net", activo: true },
  { id: 2, nombre: "Carlos", email: "carlos@cesde.net", activo: false },
  { id: 3, nombre: "Lucía", email: "lucia@cesde.net", activo: true },
  { id: 4, nombre: "Pedro", email: "pedro@cesde.net", activo: true }
];

const usuarioPorEmail = usuarios.find(user => user.email === "carlos@example.com");
const posicionPorId = usuarios.findIndex(user => user.id === 3);
const hayInactivos = usuarios.some(user => !user.activo);
const todosConEmailValido = usuarios.every(user => user.email.includes("@"));

console.log("Usuario por email:", usuarioPorEmail);
console.log("Posición por ID:", posicionPorId);
console.log("¿Hay inactivos?:", hayInactivos);
console.log("¿Todos tienen email válido?:", todosConEmailValido);
