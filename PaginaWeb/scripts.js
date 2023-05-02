//Efecto para el título
const titulo = document.querySelector('h1');
titulo.style.opacity = 0;

window.addEventListener('load', () => {
  setTimeout(() => {
    titulo.style.opacity = 1;
    titulo.classList.add('aparecer');
  }, 1000);
});

//Modal suscripción
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('modal').style.display = 'block';
  }, 2000);
  document.getElementsByClassName('close-btn')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email-input').value;
  document.getElementById('modal').style.display = 'none';
});

//Validación de formulario
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Validación de los campos
  if (nombre.value === "") {
    alert("Por favor, introduce tu nombre");
    nombre.focus();
    return false;
  }

  if (email.value === "") {
    alert("Por favor, introduce tu email");
    email.focus();
    return false;
  }

  if (telefono.value === "") {
    alert("Por favor, introduce tu teléfono");
    telefono.focus();
    return false;
  }

  // Si todos los campos son válidos, muestra la ventana emergente
  alert("¡Gracias por contactarnos! Hemos recibido tus datos y pronto recibirás una notificación en tu correo electrónico.");

  // Limpia los campos del formulario
  form.reset();
});
const form = document.getElementById("formulario");
const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Validación de los campos
  if (nombre.value === "") {
    alert("Por favor, introduce tu nombre");
    nombre.focus();
    return false;
  }

  if (email.value === "") {
    alert("Por favor, introduce tu email");
    email.focus();
    return false;
  }

  if (telefono.value === "") {
    alert("Por favor, introduce tu teléfono");
    telefono.focus();
    return false;
  }

  if (mensaje.value === "") {
    alert("Por favor, escribe tu mensaje");
    mensaje.focus();
    return false;
  }

  // Si todos los campos son válidos, muestra el modal
  modal.style.display = "block";

  // Limpia los campos del formulario
  form.reset();
});

// Cuando el usuario hace clic en la X, se cierra el modal
span.onclick = () => {
  modal.style.display = "none";
}

// Si el usuario hace clic fuera del modal, también se cierra
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

