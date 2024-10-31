self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("Push recibido:", data);
  self.registration.showNotification(data.title, {
    body: data.message,
  });
});

//? Codigo de ejemplo
// self.addEventListener("push", (event) => {
//   const data = event.data.json();
//   console.log("Push recibido:", data);
//   self.registration.showNotification(data.title, {
//     body: data.message,
//     icon: "/path/to/icon.png", // Opcional: agrega un ícono si quieres
//   });
// });
