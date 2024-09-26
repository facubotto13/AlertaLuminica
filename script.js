

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Usuario y contraseña de admin
    const adminEmail = "admin@ejemplo.com";
    const adminPassword = "admin123";

    // Validación de credenciales
    if ((email === "usuario@ejemplo.com" && password === "123456") ||
        (email === adminEmail && password === adminPassword)) {
        alert("Inicio de sesión exitoso");
        window.location.href = "reportes.html";
    } else {
        alert("Credenciales incorrectas");
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    showLogin(); 
}

// script.js

const reportForm = document.getElementById('reportForm');
const successMessage = document.getElementById('successMessage');
const incidentForm = document.getElementById('incidentForm');

incidentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulación del envío del formulario
    reportForm.style.display = 'none';
    successMessage.style.display = 'block';
});

function goBack() {
    successMessage.style.display = 'none';
    reportForm.style.display = 'block';
}

function resetForm() {
    incidentForm.reset();
}


// Función que se ejecuta cuando el formulario es enviado
document.getElementById('incidentForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Evita que el formulario se envíe y recargue la página

    // Ocultar el formulario de reporte
    document.getElementById('reportForm').style.display = 'none';

    // Mostrar el mensaje de éxito
    document.getElementById('successMessage').style.display = 'flex';
});

// Función para volver al formulario
function goBack() {
    // Ocultar el mensaje de éxito
    document.getElementById('successMessage').style.display = 'none';

    // Mostrar el formulario de nuevo
    document.getElementById('reportForm').style.display = 'block';

    // Resetea el formulario
    document.getElementById('incidentForm').reset();
}


