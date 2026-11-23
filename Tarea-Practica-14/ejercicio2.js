const agenda = [
  { nombre: "Ana", telefono: "7123-4567", correo: "ana@mail.com" },
  { nombre: "Luis", telefono: "7234-5678", correo: "luis@mail.com" },
  { nombre: "Marta", telefono: "7345-6789", correo: "marta@mail.com" },
  { nombre: "Carlos", telefono: "7456-7890", correo: "carlos@mail.com" },
];

function mostrarContactos(agenda) {
  for (const contacto of agenda) {
    console.log(`Nombre: ${contacto.nombre} - Tel: ${contacto.telefono}`);
  }
}

function buscarPorNombre(agenda, nombre) {
  for (const contacto of agenda) {
    if (contacto.nombre.toLowerCase() === nombre.toLowerCase()) {
      return contacto.correo;
    }
  }
  return "Contacto no encontrado";
}

mostrarContactos(agenda);
console.log(buscarPorNombre(agenda, "Marta"));
console.log(buscarPorNombre(agenda, "Pedro"));
