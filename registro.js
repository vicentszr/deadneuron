const formulario = document.getElementById('registro');

function ponerError(input, mensaje) {
  const span = input.parentElement.querySelector('.error');
  span.textContent = mensaje;
}

function limpiarError(input) {
  const span = input.parentElement.querySelector('.error');
  span.textContent = '';
}

function validar() {
  let ok = true;
  formulario.querySelectorAll('input').forEach(limpiarError);
  const nombre = document.getElementById('nombre');
  if (nombre.value.trim().length < 3) {
    ponerError(nombre, 'El nombre debe tener al menos 3 caracteres');
    ok = false;
  }
  const email = document.getElementById('email');
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    ponerError(email, 'Escribe un correo válido, por ejemplo nombre@dominio.com');
    ok = false;
  }
  const email2 = document.getElementById('email2');
  if (email2.value.trim() !== email.value.trim()) {
    ponerError(email2, 'Los correos no coinciden');
    ok = false;
  }
  const password = document.getElementById('password');
  if (password.value.length < 8 || !/[A-Za-z]/.test(password.value) || !/\d/.test(password.value)) {
    ponerError(password, 'Mínimo 8 caracteres, con al menos una letra y un número');
    ok = false;
  } 
  const password2 = document.getElementById('password2');
  if (password2.value !== password.value) {
    ponerError(password2, 'Las contraseñas no coinciden');
    ok = false;
  }
  return ok;
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const resultado = document.getElementById('resultado');
  resultado.textContent = '';
  if (validar()) {
    resultado.textContent = 'Datos correctos. Cuenta lista para crear.';
  }
});
formulario.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', () => {
    limpiarError(input);
  });
});