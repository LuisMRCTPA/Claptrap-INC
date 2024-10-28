async function registerUser(event) {
    event.preventDefault();
  
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    if (!username || !password) {
        alert('Por favor, ingrese un usuario y contraseña válidos');
        return;
    }
  
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            alert(data.message);  // Mostrar mensaje de éxito
            
            // Verificar si hay redirección
            if (data.redirect) {
                window.location.href = data.redirect;  // Redirigir a admin.html
            } else {
                document.getElementById('register-form').reset();
                window.location.href = 'login.html';  // Redirigir a la página de inicio de sesión
            }
        } else {
            alert(data.message);  // Mostrar el mensaje de error
        }
    } catch (error) {
        console.error("Error al registrar usuario", error);
        alert('Hubo un problema con el registro, inténtelo de nuevo más tarde');
    }
  }
  
// Agregar los event listeners en los formularios
document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
      registerForm.addEventListener('submit', registerUser);
  }
});

document.getElementById('hamburger-btn').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active'); // Activa o desactiva la clase "active" para mostrar/ocultar el menú
});

